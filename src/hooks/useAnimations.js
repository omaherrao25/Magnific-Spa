import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

// Utility: check if device is mobile
function isMobile() {
  return typeof window !== 'undefined' && window.innerWidth < 768;
}

// Utility: check if user prefers reduced motion
function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Hook for GSAP scroll-triggered reveal animations
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion()) {
      gsap.set(el, { y: 0, opacity: 1 });
      return;
    }

    const {
      y: desktopY = 60,
      x: desktopX,
      opacity = 0,
      duration = 1,
      delay = 0,
      ease = 'power3.out',
      stagger = 0,
    } = options;

    // Reduce animation distances on mobile for smoother perf
    const mobile = isMobile();
    const y = desktopX ? 0 : (mobile ? Math.min(desktopY, 30) : desktopY);
    const x = desktopX ? (mobile ? Math.min(Math.abs(desktopX), 20) * Math.sign(desktopX) : desktopX) : undefined;

    const initialProps = { opacity };
    if (x !== undefined) initialProps.x = x;
    else initialProps.y = y;

    gsap.set(el, initialProps);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animateProps = {
            opacity: 1,
            duration: mobile ? duration * 0.8 : duration,
            delay,
            ease,
            stagger,
          };
          if (x !== undefined) animateProps.x = 0;
          else animateProps.y = 0;

          gsap.to(el, animateProps);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

// Hook for staggered children reveal
export function useStaggerReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.children;
    if (!children.length) return;

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion()) {
      gsap.set(children, { y: 0, opacity: 1 });
      return;
    }

    const {
      y: desktopY = 50,
      opacity = 0,
      duration = 0.8,
      stagger = 0.12,
      delay = 0,
      ease = 'power3.out',
    } = options;

    const mobile = isMobile();
    const y = mobile ? Math.min(desktopY, 25) : desktopY;

    gsap.set(children, { y, opacity });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(children, {
            y: 0,
            opacity: 1,
            duration: mobile ? duration * 0.7 : duration,
            stagger: mobile ? stagger * 0.8 : stagger,
            delay,
            ease,
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

// Hook for parallax scroll effect — disabled on mobile
export function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Disable parallax on mobile for performance
    if (isMobile() || prefersReducedMotion()) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrolled = rect.top;
      gsap.set(el, { y: scrolled * speed });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}

// Hook for animated counter
export function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Instant if reduced motion
          if (prefersReducedMotion()) {
            setCount(target);
            return;
          }

          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// Mouse glow cursor hook — skips event listeners on mobile
export function useMouseGlow() {
  const [position, setPosition] = useState({ x: -300, y: -300 });

  useEffect(() => {
    // Don't attach mousemove listeners on mobile
    if (isMobile()) return;

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}
