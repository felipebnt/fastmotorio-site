// Fast Moto Rio - Engine de Scroll e Interatividade
// Desenvolvido para navegacao fluida e scrubbing no canvas a 60 FPS

(function () {
  'use strict';

  // 1. Controle do Cabecalho e Menu Mobile
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const scrim = document.querySelector('.menu-scrim');

  const onScrollHeader = () => {
    if (header) {
      header.classList.toggle('is-scrolled', window.scrollY > 30);
    }
  };
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  const toggleMenu = (forceState) => {
    if (!nav || !menuToggle) return;
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    const nextState = typeof forceState === 'boolean' ? forceState : !isExpanded;
    menuToggle.setAttribute('aria-expanded', String(nextState));
    nav.classList.toggle('is-open', nextState);
    if (scrim) {
      scrim.classList.toggle('is-on', nextState);
    }
    document.body.classList.toggle('menu-open', nextState);
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => toggleMenu());
  }

  if (scrim) {
    scrim.addEventListener('click', () => toggleMenu(false));
  }

  if (nav) {
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  // 2. Animacoes de Entrada no Scroll (Reveal)
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // 3. Engine de Scroll Cinema com Sequencia de Imagens WebP (Hero)
  const hero = document.querySelector('#inicio');
  const heroCanvas = document.querySelector('.hero-canvas');
  const heroContent = document.querySelector('.hero-content');
  const heroScrim = document.querySelector('.hero-scrim');
  const heroIndex = document.querySelector('.hero-index');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const updateHeroUI = (p) => {
    if (heroContent) {
      if (p <= 0.4) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translate3d(0, 0, 0)';
        heroContent.style.pointerEvents = 'auto';
      } else {
        const fadeProgress = Math.min(1, Math.max(0, (p - 0.4) / 0.45));
        const opacity = Math.max(0, 1 - Math.pow(fadeProgress, 1.4));
        const translateY = -fadeProgress * 36;
        heroContent.style.opacity = opacity.toFixed(3);
        heroContent.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
        heroContent.style.pointerEvents = opacity < 0.05 ? 'none' : 'auto';
      }
    }
    if (heroScrim) {
      if (p <= 0.4) {
        heroScrim.style.opacity = '1';
      } else {
        const fadeProgress = Math.min(1, Math.max(0, (p - 0.4) / 0.45));
        const scrimOpacity = Math.max(0.35, 1 - fadeProgress * 0.65);
        heroScrim.style.opacity = scrimOpacity.toFixed(3);
      }
    }
    if (heroIndex) {
      heroIndex.style.opacity = p > 0.85 ? Math.max(0, 1 - (p - 0.85) / 0.1).toFixed(2) : '1';
    }
  };

  if (hero && heroCanvas) {
    const context = heroCanvas.getContext('2d', { alpha: false, desynchronized: true });
    const TOTAL_FRAMES = 120;
    const loadedImages = new Array(TOTAL_FRAMES);
    let cachedW = 0;
    let cachedH = 0;
    let currentDrawnIndex = -1;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(heroCanvas.clientWidth * dpr);
      const h = Math.round(heroCanvas.clientHeight * dpr);
      if (w !== cachedW || h !== cachedH) {
        cachedW = heroCanvas.width = w;
        cachedH = heroCanvas.height = h;
      }
    };

    const drawFrame = (frameIndex) => {
      if (!context) return;
      if (!cachedW || !cachedH) resizeCanvas();

      let img = loadedImages[frameIndex];
      // Fallback para o frame mais proximo ja carregado caso o frame exato ainda esteja baixando
      if (!img || !img.complete || !img.naturalWidth) {
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          const prev = frameIndex - offset;
          if (prev >= 0 && loadedImages[prev] && loadedImages[prev].complete && loadedImages[prev].naturalWidth) {
            img = loadedImages[prev];
            break;
          }
          const next = frameIndex + offset;
          if (next < TOTAL_FRAMES && loadedImages[next] && loadedImages[next].complete && loadedImages[next].naturalWidth) {
            img = loadedImages[next];
            break;
          }
        }
      }

      if (!img || !img.complete || !img.naturalWidth) return;

      const nw = img.naturalWidth || 1920;
      const nh = img.naturalHeight || 1080;
      const scale = Math.max(cachedW / nw, cachedH / nh);
      const dw = nw * scale;
      const dh = nh * scale;

      // Enquadramento Desktop vs Mobile:
      // No desktop (>= 1024px), desloca a moto 20% para a direita (X=70%),
      // liberando a metade esquerda para leitura da headline e CTAs.
      // No mobile (< 1024px), a moto permanece 100% centralizada.
      const isDesktop = window.innerWidth >= 1024;
      const dx = ((cachedW - dw) / 2) + (isDesktop ? (cachedW * 0.20) : 0);
      const dy = (cachedH - dh) / 2;

      context.drawImage(img, dx, dy, dw, dh);
      currentDrawnIndex = frameIndex;
    };

    // Pre-carregamento dos 120 frames WebP
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const num = String(i + 1).padStart(3, '0');
      img.src = `images/hero-frames/frame_${num}.webp`;
      loadedImages[i] = img;

      // Desenhar o frame 1 imediatamente assim que carregar para zero delay
      if (i === 0) {
        if (img.complete && img.naturalWidth > 0) {
          drawFrame(0);
        } else {
          img.onload = () => {
            if (currentDrawnIndex === -1) {
              drawFrame(0);
            }
          };
        }
      }
    }

    if (reduceMotion.matches) {
      // Em prefers-reduced-motion, NUNCA zerar ou colapsar a altura da secao
      updateHeroUI(0);
      resizeCanvas();
      drawFrame(0);
      window.addEventListener('resize', () => {
        resizeCanvas();
        drawFrame(0);
      }, { passive: true });
    } else {
      let targetFrame = 0;
      let currentFrame = 0;
      let rafId = 0;
      let lastTick = 0;

      const scrubHero = () => {
        const rect = hero.getBoundingClientRect();
        const maxScroll = Math.max(1, rect.height - window.innerHeight);
        const p = Math.min(1, Math.max(0, -rect.top / maxScroll));

        updateHeroUI(p);

        targetFrame = Math.min(119, Math.max(0, Math.floor(p * 119)));
      };

      const smoothFrame = (now) => {
        const dt = Math.min(32, Math.max(1, now - (lastTick || now)));
        lastTick = now;

        // Suavizacao a 60 FPS com acompanhamento continuo
        currentFrame += (targetFrame - currentFrame) * (1 - Math.exp(-dt / 60));
        if (Math.abs(targetFrame - currentFrame) < 0.04) {
          currentFrame = targetFrame;
        }

        const idx = Math.min(119, Math.max(0, Math.round(currentFrame)));
        if (idx !== currentDrawnIndex) {
          drawFrame(idx);
        }

        rafId = requestAnimationFrame(smoothFrame);
      };

      rafId = requestAnimationFrame(smoothFrame);
      window.addEventListener('scroll', scrubHero, { passive: true });
      window.addEventListener('resize', () => {
        resizeCanvas();
        scrubHero();
        drawFrame(Math.min(119, Math.max(0, Math.round(currentFrame))));
      }, { passive: true });

      // Chamada inicial
      scrubHero();
      resizeCanvas();
      drawFrame(0);
    }
  }

  // 3.1 Vídeo 2: Showcase de Motocicletas de Alta Performance (#equipe)
  (() => {
    const fig = document.querySelector('.team-showcase-wrapper, .standards-vehicle-showcase');
    const v = fig && fig.querySelector('video.showcase-video');
    if (!v) return;
    const end = () => Math.max(0, (v.duration || 0) - 0.05);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.addEventListener('loadedmetadata', () => { v.currentTime = end(); });
      return;
    }
    v.pause();
    let ready = false, seeking = false, targetTime = 0, curTime = 0, raf = 0;

    const getProgress = () => {
      const r = fig.getBoundingClientRect(), vh = window.innerHeight;
      return Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.6 + r.height * 0.4)));
    };

    const updateTarget = () => {
      if (!ready || !Number.isFinite(v.duration)) return;
      targetTime = getProgress() * end();
    };

    const loop = () => {
      if (ready && Number.isFinite(v.duration) && v.duration > 0) {
        // Lerp amortecido com fator 0.08 constante para avanco suave e amanteigado
        const diff = targetTime - curTime;
        if (Math.abs(diff) > 0.001) {
          curTime += diff * 0.08;
          if (!seeking && Math.abs(v.currentTime - curTime) > 0.015) {
            seeking = true;
            v.currentTime = Math.min(v.duration - 0.05, Math.max(0, curTime));
          }
        }
      }
      raf = requestAnimationFrame(loop);
    };

    v.addEventListener('seeked', () => {
      seeking = false;
    });

    v.addEventListener('loadedmetadata', () => {
      ready = true;
      updateTarget();
      curTime = targetTime;
    });
    v.addEventListener('loadeddata', () => {
      ready = true;
      updateTarget();
    });

    window.addEventListener('scroll', updateTarget, { passive: true });
    window.addEventListener('resize', updateTarget, { passive: true });

    v.load();
    if (v.readyState >= 1) {
      ready = true;
      updateTarget();
      curTime = targetTime;
    }

    raf = requestAnimationFrame(loop);
  })();

  // 3.2 Vídeo 3: Bastidores Técnicos e Equipe no Galpão (#galpao)
  (() => {
    const box = document.querySelector('.team-video-box');
    const v = box && box.querySelector('.team-scroll-video');
    const c = box && box.querySelector('.team-video-canvas');
    if (!box || !v || !c) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = c.getContext('2d', { alpha: false, desynchronized: true });
    let ready = false, seeking = false, target = 0, raf = 0;
    const end = () => Math.max(0, (v.duration || 0) - 0.05);

    const drawTeamFrame = () => {
      if (v.readyState < 2 || !v.videoWidth || !v.videoHeight) return;
      const dpr = window.devicePixelRatio || 1;
      const w = c.width = c.clientWidth * dpr;
      const h = c.height = c.clientHeight * dpr;
      const scale = Math.max(w / v.videoWidth, h / v.videoHeight);
      const dw = v.videoWidth * scale;
      const dh = v.videoHeight * scale;
      const dx = (w - dw) / 2;
      const dy = (h - dh) / 2;
      ctx.drawImage(v, dx, dy, dw, dh);
    };

    const progress = () => {
      const r = box.getBoundingClientRect(), vh = window.innerHeight;
      return Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.6 + r.height * 0.4)));
    };

    const tick = () => {
      raf = 0;
      if (!ready || !Number.isFinite(v.duration)) return;
      target = progress() * end();
      if (!seeking && Math.abs(v.currentTime - target) > 0.03) {
        seeking = true;
        v.currentTime = target;
      }
    };

    const request = () => { if (!raf) raf = requestAnimationFrame(tick); };

    v.addEventListener('seeked', () => {
      seeking = false;
      drawTeamFrame();
      if (Math.abs(v.currentTime - target) > 0.03) request();
    });

    v.addEventListener('loadedmetadata', () => { ready = true; tick(); });
    v.addEventListener('loadeddata', () => {
      ready = true;
      drawTeamFrame();
      tick();
    });

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', () => {
      drawTeamFrame();
      request();
    }, { passive: true });

    v.load();
    if (v.readyState >= 2) {
      ready = true;
      drawTeamFrame();
      tick();
    }
  })();

  // 4. Smooth Scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
