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

  // 3. Engine de Video Scrubbing no Canvas da Hero
  const heroSection = document.querySelector('#inicio');
  const heroVideo = document.querySelector('.hero-media');
  const heroCanvas = document.querySelector('.hero-canvas');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const updateHeroVisibility = () => {
    if (!heroSection) return;
    const sectionTop = heroSection.getBoundingClientRect().top;
    const sectionHeight = heroSection.offsetHeight;
    const scrollRange = Math.max(1, sectionHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -sectionTop / scrollRange));
    const finished = progress >= 0.999;
    const passed = sectionTop + sectionHeight <= 0;

    document.body.classList.toggle('hero-passed', passed);
    document.body.classList.toggle('hero-finished', finished);
  };

  updateHeroVisibility();
  window.addEventListener('scroll', updateHeroVisibility, { passive: true });
  window.addEventListener('resize', updateHeroVisibility, { passive: true });

  if (heroVideo && heroCanvas && !reduceMotion.matches) {
    heroVideo.preload = 'auto';
    heroVideo.pause();

    const context = heroCanvas.getContext('2d', { alpha: false });
    let heroReady = false;
    let desiredTime = 0;
    let seeking = false;
    let rafId = 0;
    let curTime = -1;
    let lastTick = 0;
    let shownFrame = -1;
    const FPS = 24;

    const drawFrame = () => {
      if (!context || heroVideo.readyState < 2 || !heroVideo.videoWidth || !heroVideo.videoHeight) {
        return;
      }
      const dpr = window.devicePixelRatio || 1;
      const w = (heroCanvas.width = heroCanvas.clientWidth * dpr);
      const h = (heroCanvas.height = heroCanvas.clientHeight * dpr);
      const scale = Math.max(w / heroVideo.videoWidth, h / heroVideo.videoHeight);
      const dw = heroVideo.videoWidth * scale;
      const dh = heroVideo.videoHeight * scale;
      const dx = (w - dw) / 2;
      const dy = (h - dh) / 2;

      context.drawImage(heroVideo, dx, dy, dw, dh);
    };

    const smoothFrame = (now) => {
      if (heroReady && Number.isFinite(heroVideo.duration) && heroVideo.duration > 0) {
        const dt = Math.min(64, Math.max(1, now - (lastTick || now)));
        lastTick = now;

        if (curTime < 0) {
          curTime = desiredTime;
        } else {
          // Equacao diferencial de suavizacao exponencial (pursuit continuo)
          curTime += (desiredTime - curTime) * (1 - Math.exp(-dt / 120));
        }

        if (Math.abs(desiredTime - curTime) < 0.004) {
          curTime = desiredTime;
        }

        const targetFrame = Math.round(curTime * FPS);
        if (targetFrame !== shownFrame && !seeking) {
          shownFrame = targetFrame;
          seeking = true;
          heroVideo.currentTime = Math.min(heroVideo.duration - 0.05, targetFrame / FPS);
        }
      }
      rafId = requestAnimationFrame(smoothFrame);
    };

    const scrubHero = () => {
      updateHeroVisibility();
      if (!heroReady || !Number.isFinite(heroVideo.duration) || heroVideo.duration <= 0) return;
      const sectionTop = heroSection ? heroSection.getBoundingClientRect().top : 0;
      const sectionHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
      const scrollRange = Math.max(1, sectionHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -sectionTop / scrollRange));
      desiredTime = Math.min(heroVideo.duration - 0.05, progress * heroVideo.duration);
    };

    heroVideo.addEventListener('loadedmetadata', () => {
      heroReady = true;
      scrubHero();
    });

    heroVideo.addEventListener('loadeddata', () => {
      heroReady = true;
      drawFrame();
      scrubHero();
    });

    heroVideo.addEventListener('seeked', () => {
      seeking = false;
      drawFrame();
    });

    heroVideo.addEventListener('play', () => heroVideo.pause());

    heroVideo.load();

    if (heroVideo.readyState >= 2) {
      heroReady = true;
      drawFrame();
      scrubHero();
    }

    rafId = requestAnimationFrame(smoothFrame);
    window.addEventListener('scroll', scrubHero, { passive: true });
    window.addEventListener('resize', () => {
      scrubHero();
      drawFrame();
    }, { passive: true });
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
    let ready = false, seeking = false, target = 0, raf = 0;
    const progress = () => {
      const r = fig.getBoundingClientRect(), vh = window.innerHeight;
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
      if (Math.abs(v.currentTime - target) > 0.03) request();
    });
    v.addEventListener('loadedmetadata', () => { ready = true; tick(); });
    v.addEventListener('loadeddata', () => { ready = true; tick(); });
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request, { passive: true });
    v.load();
    if (v.readyState >= 1) { ready = true; tick(); }
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
