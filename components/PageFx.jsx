'use client';

import { useEffect } from 'react';

// Scroll reveals, stat count-ups, and reduced-motion handling for the hero video.
export default function PageFx() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          const el = e.target;
          const target = +el.dataset.count;
          if (reduced) { el.textContent = target; return; }
          const dur = 1100, t0 = performance.now();
          (function tick(t) {
            const p = Math.min((t - t0) / dur, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          })(t0);
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll('[data-count]').forEach((el) => cio.observe(el));

    if (reduced) {
      document.querySelectorAll('#heroVid, video[data-ambient]').forEach((v) => {
        v.removeAttribute('autoplay');
        v.pause();
      });
    }

    return () => { io.disconnect(); cio.disconnect(); };
  }, []);

  return null;
}
