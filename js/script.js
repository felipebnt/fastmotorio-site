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

  // Helper compartilhado: carregamento progressivo com concorrencia controlada
  const createFrameLoader = ({ total, pathPrefix, onFrameReady, deferRemaining, maxConcurrency = 6 }) => {
    const loadedImages = new Array(total);
    const queued = new Set([0]);
    const queue = [];
    let active = 0;
    let remainingStarted = false;

    const loadIndex = (i) => {
      const img = new Image();
      loadedImages[i] = img;
      const num = String(i + 1).padStart(3, '0');
      const finish = () => {
        active = Math.max(0, active - 1);
        if (onFrameReady) onFrameReady(i, img);
        pumpQueue();
      };
      img.onload = finish;
      img.onerror = finish;
      img.src = `${pathPrefix}frame_${num}.webp`;
    };

    const pumpQueue = () => {
      while (active < maxConcurrency && queue.length > 0) {
        const idx = queue.shift();
        active++;
        loadIndex(idx);
      }
    };

    const startRemaining = () => {
      if (remainingStarted) return;
      remainingStarted = true;
      // Prioriza keyframes (passo 4) para scrubbing imediato, depois preenche intermediarios
      for (let i = 4; i < total; i += 4) {
        if (!queued.has(i)) {
          queued.add(i);
          queue.push(i);
        }
      }
      for (let i = 1; i < total; i++) {
        if (!queued.has(i)) {
          queued.add(i);
          queue.push(i);
        }
      }
      pumpQueue();
    };

    // Frame 0 entra primeiro com prioridade maxima
    active++;
    loadIndex(0);
    if (!deferRemaining) {
      setTimeout(startRemaining, 150);
    }

    return { loadedImages, startRemaining };
  };

  const findClosestFrame = (loadedImages, frameIndex, total) => {
    let img = loadedImages[frameIndex];
    if (img && img.complete && img.naturalWidth) {
      return { img, exact: true };
    }
    for (let offset = 1; offset < total; offset++) {
      const prev = frameIndex - offset;
      if (prev >= 0 && loadedImages[prev] && loadedImages[prev].complete && loadedImages[prev].naturalWidth) {
        return { img: loadedImages[prev], exact: false };
      }
      const next = frameIndex + offset;
      if (next < total && loadedImages[next] && loadedImages[next].complete && loadedImages[next].naturalWidth) {
        return { img: loadedImages[next], exact: false };
      }
    }
    return { img: null, exact: false };
  };

  if (hero && heroCanvas) {
    const context = heroCanvas.getContext('2d', { alpha: false, desynchronized: true });
    const TOTAL_FRAMES = 120;
    let cachedW = 0;
    let cachedH = 0;
    let currentDrawnIndex = -1;
    let currentExactDrawn = false;
    let currentP = 0;
    let targetFrame = 0;
    let currentFrame = 0;
    let loadedImages = [];

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

      const { img, exact } = findClosestFrame(loadedImages, frameIndex, TOTAL_FRAMES);
      if (!img) return;

      const nw = img.naturalWidth || 1920;
      const nh = img.naturalHeight || 1080;

      // Escala e enquadramento dinamico:
      // No desktop (>= 1024px), aplica multiplicador de 1.38 para cobrir o canvas excedente
      // e posiciona a moto a 68% da largura, convergindo suavemente para o centro no scroll.
      // No mobile (< 1024px), a moto permanece 100% centralizada.
      const isDesktop = window.innerWidth >= 1024;
      const scaleMultiplier = isDesktop ? 1.38 : 1.0;
      const scale = Math.max(cachedW / nw, cachedH / nh) * scaleMultiplier;
      const dw = nw * scale;
      const dh = nh * scale;

      const targetCenterX = isDesktop ? (cachedW * (0.68 - currentP * 0.14)) : (cachedW * 0.50);
      let dx = targetCenterX - (dw / 2);
      // Clamp estrito para NUNCA vazar fundo preto nem na esquerda (dx <= 0) nem na direita (dx + dw >= cachedW):
      dx = Math.min(0, Math.max(cachedW - dw, dx));
      const dy = (cachedH - dh) / 2;

      context.drawImage(img, dx, dy, dw, dh);
      currentDrawnIndex = frameIndex;
      currentExactDrawn = exact;
    };

    const loader = createFrameLoader({
      total: TOTAL_FRAMES,
      pathPrefix: 'images/hero-frames/',
      deferRemaining: true,
      onFrameReady: (idx) => {
        if (idx === 0) {
          loader.startRemaining();
          if (currentDrawnIndex === -1) {
            drawFrame(0);
          }
          return;
        }
        const activeIdx = Math.min(119, Math.max(0, Math.round(currentFrame)));
        if (idx === activeIdx && !currentExactDrawn) {
          drawFrame(activeIdx);
        }
      }
    });
    loadedImages = loader.loadedImages;
    // Garante inicio do carregamento progressivo mesmo se o frame 0 demorar
    setTimeout(() => loader.startRemaining(), 350);

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
      let rafId = 0;
      let lastTick = 0;
      let lastDrawnP = -1;

      const scheduleRender = () => {
        if (!rafId) {
          rafId = requestAnimationFrame(smoothFrame);
        }
      };

      const scrubHero = () => {
        const rect = hero.getBoundingClientRect();
        const maxScroll = Math.max(1, rect.height - window.innerHeight);
        currentP = Math.min(1, Math.max(0, -rect.top / maxScroll));

        updateHeroUI(currentP);

        targetFrame = Math.min(119, Math.max(0, Math.floor(currentP * 119)));
        scheduleRender();
      };

      const smoothFrame = (now) => {
        rafId = 0;
        const dt = Math.min(32, Math.max(1, now - (lastTick || now)));
        lastTick = now;

        // Suavizacao a 60 FPS com pausa automatica quando em repouso
        currentFrame += (targetFrame - currentFrame) * (1 - Math.exp(-dt / 60));
        if (Math.abs(targetFrame - currentFrame) < 0.04) {
          currentFrame = targetFrame;
        }

        const idx = Math.min(119, Math.max(0, Math.round(currentFrame)));
        if (idx !== currentDrawnIndex || Math.abs(currentP - lastDrawnP) > 0.005) {
          lastDrawnP = currentP;
          drawFrame(idx);
        }

        if (currentFrame !== targetFrame) {
          scheduleRender();
        } else {
          lastTick = 0;
        }
      };

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

  // 3.1 Video 2: Showcase de Motocicletas de Alta Performance (#equipe)
  (() => {
    const track = document.querySelector('.showcase-scroll-track');
    const container = track || document.querySelector('.team-showcase-wrapper, .standards-vehicle-showcase');
    const canvas = container && container.querySelector('.showcase-canvas');
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    const TOTAL_FRAMES = 120;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let currentDrawnIndex = -1;
    let currentExactDrawn = false;
    let cachedW = 0;
    let cachedH = 0;
    let currentFrame = 0;
    let targetFrame = 0;
    let loadedImages = [];

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);
      if (w > 0 && h > 0 && (cachedW !== w || cachedH !== h)) {
        canvas.width = w;
        canvas.height = h;
        cachedW = w;
        cachedH = h;
        currentDrawnIndex = -1;
      }
    };

    const drawFrame = (frameIndex) => {
      if (!ctx) return;
      if (cachedW === 0 || cachedH === 0) resizeCanvas();
      if (cachedW === 0 || cachedH === 0) return;

      const { img, exact } = findClosestFrame(loadedImages, frameIndex, TOTAL_FRAMES);
      if (!img) return;

      const nw = img.naturalWidth || 1920;
      const nh = img.naturalHeight || 1080;
      const isMobile = window.innerWidth <= 768;

      if (isMobile && (cachedW / cachedH) < (nw / nh)) {
        // Preenche fundo preto de estudio e aplica zoom 1.18 baseado na largura
        // preservando BMW, Kawasaki e Triumph centralizadas sem cortes laterais
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, cachedW, cachedH);
        const scale = (cachedW / nw) * 1.18;
        const dw = nw * scale;
        const dh = nh * scale;
        const dx = (cachedW - dw) / 2;
        const dy = (cachedH - dh) / 2;
        ctx.drawImage(img, dx, dy, dw, dh);
      } else {
        const scale = Math.max(cachedW / nw, cachedH / nh);
        const dw = nw * scale;
        const dh = nh * scale;
        const dx = (cachedW - dw) / 2;
        const dy = (cachedH - dh) / 2;
        ctx.drawImage(img, dx, dy, dw, dh);
      }

      currentDrawnIndex = frameIndex;
      currentExactDrawn = exact;
    };

    const loader = createFrameLoader({
      total: TOTAL_FRAMES,
      pathPrefix: 'images/showcase-frames/',
      deferRemaining: true,
      onFrameReady: (idx) => {
        if (idx === 0 && currentDrawnIndex === -1) {
          drawFrame(0);
          return;
        }
        const activeIdx = Math.min(119, Math.max(0, Math.round(currentFrame)));
        if (idx === activeIdx && !currentExactDrawn) {
          drawFrame(activeIdx);
        }
      }
    });
    loadedImages = loader.loadedImages;

    // Carrega os 119 frames restantes apenas quando o usuario se aproxima de #equipe
    if ('IntersectionObserver' in window) {
      const showcaseObserver = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            loader.startRemaining();
            showcaseObserver.disconnect();
          }
        },
        { rootMargin: '900px 0px' }
      );
      showcaseObserver.observe(container);
    } else {
      window.addEventListener('load', () => loader.startRemaining(), { once: true });
    }

    if (reduceMotion.matches) {
      resizeCanvas();
      drawFrame(0);
      window.addEventListener('resize', () => {
        resizeCanvas();
        drawFrame(0);
      }, { passive: true });
    } else {
      let rafId = 0;
      let lastTick = 0;

      const getProgress = () => {
        const el = track || container;
        const rect = el.getBoundingClientRect();
        const maxScroll = Math.max(1, rect.height - window.innerHeight);
        return Math.min(1, Math.max(0, -rect.top / maxScroll));
      };

      const scheduleRender = () => {
        if (!rafId) {
          rafId = requestAnimationFrame(smoothFrame);
        }
      };

      const scrubShowcase = () => {
        const p = getProgress();
        targetFrame = Math.min(119, Math.max(0, Math.floor(p * 119)));
        scheduleRender();
      };

      const smoothFrame = (now) => {
        rafId = 0;
        const dt = Math.min(32, Math.max(1, now - (lastTick || now)));
        lastTick = now;

        currentFrame += (targetFrame - currentFrame) * (1 - Math.exp(-dt / 60));
        if (Math.abs(targetFrame - currentFrame) < 0.04) {
          currentFrame = targetFrame;
        }

        const idx = Math.min(119, Math.max(0, Math.round(currentFrame)));
        if (idx !== currentDrawnIndex) {
          drawFrame(idx);
        }

        if (currentFrame !== targetFrame) {
          scheduleRender();
        } else {
          lastTick = 0;
        }
      };

      window.addEventListener('scroll', scrubShowcase, { passive: true });
      window.addEventListener('resize', () => {
        resizeCanvas();
        scrubShowcase();
        drawFrame(Math.min(119, Math.max(0, Math.round(currentFrame))));
      }, { passive: true });

      scrubShowcase();
      resizeCanvas();
      drawFrame(0);
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

  // 5. Banner LGPD de Consentimento de Cookies
  (() => {
    const banner = document.querySelector('.cookie-banner');
    const acceptBtn = document.querySelector('.cookie-accept-btn');
    const STORAGE_KEY = 'fastmoto_cookies_consent';

    if (!banner || !acceptBtn) return;

    try {
      if (localStorage.getItem(STORAGE_KEY) === 'accepted') {
        return;
      }
    } catch (e) {
      // Ignora erro de storage restrito
    }

    setTimeout(() => {
      banner.classList.add('is-visible');
      document.body.classList.add('has-cookie-banner');
    }, 800);

    acceptBtn.addEventListener('click', () => {
      banner.classList.remove('is-visible');
      document.body.classList.remove('has-cookie-banner');
      try {
        localStorage.setItem(STORAGE_KEY, 'accepted');
      } catch (e) {}
      setTimeout(() => {
        if (banner.parentNode) {
          banner.parentNode.removeChild(banner);
        }
      }, 450);
    });
  })();

  // 6. Botao Flutuante Exclusivo de WhatsApp (Controle de Scroll)
  (() => {
    const floatBtn = document.querySelector('.whatsapp-float-btn');
    const heroTrack = document.querySelector('.hero-scroll-track') || document.querySelector('#inicio');
    if (!floatBtn || !heroTrack) return;

    const checkHeroVisibility = () => {
      const rect = heroTrack.getBoundingClientRect();
      const passedHero = rect.bottom < window.innerHeight * 0.4 || window.scrollY > 480;
      floatBtn.classList.toggle('is-visible', passedHero);
    };

    window.addEventListener('scroll', checkHeroVisibility, { passive: true });
    window.addEventListener('resize', checkHeroVisibility, { passive: true });
    checkHeroVisibility();
  })();

  // 7. Spotlight Glow Dinamico nos Cards (Estudio Automotivo)
  (() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cards = document.querySelectorAll(
      '.service-card, .ecosystem-card, .plan-card, .standard-feature-card'
    );
    if (!cards.length) return;

    cards.forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
      }, { passive: true });
    });
  })();

  // 8. Lightbox de Zoom nas Fotos Reais da Oficina
  (() => {
    const photoCards = Array.from(document.querySelectorAll('.photo-card'));
    if (!photoCards.length) return;

    const items = photoCards
      .map((card) => {
        const img = card.querySelector('img');
        const overlay = card.querySelector('.photo-overlay');
        if (!img) return null;
        return {
          card,
          src: img.getAttribute('src') || '',
          alt: img.getAttribute('alt') || 'Foto da oficina Fast Moto Rio',
          caption: (overlay && overlay.textContent ? overlay.textContent.trim() : '') || img.getAttribute('alt') || '',
        };
      })
      .filter(Boolean);

    if (!items.length) return;

    const lightbox = document.createElement('div');
    lightbox.className = 'photo-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Visualização ampliada da foto');
    lightbox.innerHTML = `
      <button type="button" class="photo-lightbox-close" aria-label="Fechar foto ampliada">&times;</button>
      <button type="button" class="photo-lightbox-nav photo-lightbox-prev" aria-label="Foto anterior">&#8249;</button>
      <div class="photo-lightbox-stage">
        <img class="photo-lightbox-img" src="" alt="" />
        <p class="photo-lightbox-caption"></p>
        <span class="photo-lightbox-counter"></span>
      </div>
      <button type="button" class="photo-lightbox-nav photo-lightbox-next" aria-label="Próxima foto">&#8250;</button>
    `;
    document.body.appendChild(lightbox);

    const imgEl = lightbox.querySelector('.photo-lightbox-img');
    const captionEl = lightbox.querySelector('.photo-lightbox-caption');
    const counterEl = lightbox.querySelector('.photo-lightbox-counter');
    const closeBtn = lightbox.querySelector('.photo-lightbox-close');
    const prevBtn = lightbox.querySelector('.photo-lightbox-prev');
    const nextBtn = lightbox.querySelector('.photo-lightbox-next');

    let currentIndex = 0;

    const render = () => {
      const current = items[currentIndex];
      if (!current) return;
      imgEl.setAttribute('src', current.src);
      imgEl.setAttribute('alt', current.alt);
      captionEl.textContent = current.caption;
      counterEl.textContent = `${currentIndex + 1} / ${items.length}`;
    };

    const openAt = (idx) => {
      currentIndex = (idx + items.length) % items.length;
      render();
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };

    const close = () => {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    items.forEach((item, idx) => {
      item.card.setAttribute('tabindex', '0');
      item.card.setAttribute('role', 'button');
      item.card.setAttribute('aria-label', `Ampliar foto: ${item.caption}`);
      item.card.addEventListener('click', () => openAt(idx));
      item.card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openAt(idx);
        }
      });
    });

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openAt(currentIndex - 1);
    });
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openAt(currentIndex + 1);
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') openAt(currentIndex - 1);
      if (e.key === 'ArrowRight') openAt(currentIndex + 1);
    });
  })();

  // 9. Efeito Escalonado de Entrada nas Fotos da Oficina ao Rolar
  (() => {
    const cards = Array.from(document.querySelectorAll('.photo-card'));
    if (!cards.length) return;

    document.querySelectorAll('.garage-photos').forEach((group) => {
      const groupCards = Array.from(group.querySelectorAll('.photo-card'));
      groupCards.forEach((card, idx) => {
        card.style.setProperty('--photo-delay', `${(idx % 4) * 90}ms`);
      });
    });

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cards.forEach((card) => card.classList.add('is-photo-visible'));
      return;
    }

    const photoObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-photo-visible');
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    cards.forEach((card) => photoObserver.observe(card));
  })();
})();
