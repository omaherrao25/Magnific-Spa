import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Grip, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pages', href: '#pages' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      setScrollY(window.scrollY);
      document.body.classList.add('body-scroll-locked');
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.classList.remove('body-scroll-locked');
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.classList.remove('body-scroll-locked');
      document.body.style.top = '';
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    closeMenu();
    // Small delay to let menu close animation start
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }, [closeMenu]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-500 text-[#1A1A1A] ${
          scrolled
            ? 'bg-[#FFFFF0]/80 backdrop-blur-md shadow-md py-3 md:py-4 rounded-b-2xl md:rounded-b-3xl mx-2 sm:mx-6'
            : 'bg-[#FFFFF0] py-4 md:py-6'
        }`}
      >
        <div className="w-full px-4 sm:px-6 flex items-center justify-between">

          {/* Mobile: Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-[60] w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-[#4A6E53]/10 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-[2px] bg-[#1A1A1A] origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[2px] bg-[#1A1A1A]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-[2px] bg-[#1A1A1A] origin-center"
            />
          </button>

          {/* Desktop: Left Links */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-10">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base xl:text-lg font-medium ${i === 0 ? 'text-[#4A6E53]' : 'text-spa-beige'} hover:text-[#4A6E53] transition-colors flex items-center gap-2`}
              >
                {i === 0 && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L14.3 8.5H20.5L15.5 12.5L17.5 18L12 14.5L6.5 18L8.5 12.5L3.5 8.5H9.7L12 3Z" />
                  </svg>
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Center: Overlapping Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[15%] sm:top-[20%] lg:top-[25%] z-10 flex flex-col items-center justify-center pointer-events-none">
            <div
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[130px] lg:h-[130px] bg-white rounded-full border border-spa-gold/30 flex items-center justify-center shadow-lg pointer-events-auto cursor-pointer overflow-hidden transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src="/Magnific Spa logo.jpg" alt="Magnific Spa Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            <a
              href="#contact"
              className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-base font-semibold bg-black text-white hover:bg-gray-800 active:scale-95 transition-all shadow-md"
            >
              <span className="hidden sm:inline">Book an Appointment</span>
              <span className="sm:hidden">Book Now</span>
            </a>
          </div>

        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[55] lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#1A1A1A]/95 backdrop-blur-xl"
              onClick={closeMenu}
            />

            {/* Menu Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
              {/* Nav Links */}
              <nav className="flex flex-col items-center gap-6 sm:gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                    className="text-3xl sm:text-4xl text-white/90 hover:text-white tracking-wider transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Decorative divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mt-10 mb-8"
              />

              {/* CTA in Menu */}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="px-10 py-4 rounded-full text-sm font-bold bg-white text-[#1A1A1A] hover:bg-white/90 active:scale-95 transition-all shadow-lg tracking-wider"
              >
                Book an Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
