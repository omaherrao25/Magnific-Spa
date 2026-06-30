import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CalendarCheck } from 'lucide-react';
import gsap from 'gsap';
import { IMAGES } from '../constants/images';
import { useMouseGlow } from '../hooks/useAnimations';

export default function Hero() {
  const leftLetterRef = useRef(null);
  const rightLetterRef = useRef(null);
  const ctaRef = useRef(null);
  const glowPos = useMouseGlow();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set([leftLetterRef.current, rightLetterRef.current, ctaRef.current], { opacity: 1, x: 0, y: 0 });
      return;
    }

    const mobile = window.innerWidth < 768;
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      leftLetterRef.current,
      { x: mobile ? 20 : 40, opacity: 0 },
      { x: mobile ? 0 : -10, opacity: 1, duration: mobile ? 1 : 1.5, ease: 'power4.out' },
      0
    )
    .fromTo(
      rightLetterRef.current,
      { x: mobile ? -20 : -40, opacity: 0 },
      { x: mobile ? 0 : 10, opacity: 1, duration: mobile ? 1 : 1.5, ease: 'power4.out' },
      0
    )
    .fromTo(
      ctaRef.current,
      { y: mobile ? 15 : 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.7'
    );
  }, []);

  return (
    <section id="home" className="relative h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] min-h-[550px] sm:min-h-[700px] flex items-center justify-center bg-[#FFFFF0] px-2 sm:px-4 pb-4">
      <div className="relative w-full h-[98%] rounded-t-2xl sm:rounded-t-3xl rounded-b-[40px] sm:rounded-b-[50px] md:rounded-b-[80px] lg:rounded-b-[100px] overflow-hidden flex items-center justify-center shadow-sm">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Cinematic nature atmosphere"
            className="w-full h-full object-cover opacity-80"
            style={{ filter: 'brightness(0.9) saturate(0.8)' }}
            loading="eager"
            fetchpriority="high"
          />
          {/* Light gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFF0]/30 via-transparent to-transparent" />
        </div>

        {/* Mouse Glow — desktop only */}
        {!isMobile && (
          <div
            className="glow-cursor hidden lg:block"
            style={{ left: glowPos.x, top: glowPos.y, background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)' }}
          />
        )}

        {/* Hero Content */}
        <div className="relative z-10 text-center w-full px-4 sm:px-6 flex flex-col justify-center h-full pb-16 sm:pb-20">
          
          {/* Main Heading (Split Animation) */}
          <h1 className="flex flex-col sm:flex-row justify-center items-center overflow-hidden mb-4 sm:mb-6 gap-1 sm:gap-6 md:gap-10 lg:gap-20">
            <span ref={leftLetterRef} className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl leading-none text-[#2E4534]" style={{ fontFamily: 'var(--font-heading)' }}>FABULOUS</span>
            <span ref={rightLetterRef} className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl leading-none text-[#2E4534]" style={{ fontFamily: 'var(--font-heading)' }}>MASSAGE</span>
          </h1>
        </div>

        {/* CTA Buttons placed at bottom */}
        <div ref={ctaRef} className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 z-30 w-full px-6 sm:w-auto sm:px-0" style={{ opacity: 0 }}>
          <a
            href="#contact"
            className="block sm:inline-block text-center w-full sm:w-auto px-10 py-3.5 sm:py-3 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 active:scale-95 transition-all shadow-lg"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
