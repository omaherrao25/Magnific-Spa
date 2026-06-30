import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Grip } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-500 text-[#1A1A1A] ${scrolled ? 'bg-[#FFFFF0]/80 backdrop-blur-md shadow-md py-4 rounded-b-3xl mx-2 sm:mx-6' : 'bg-[#FFFFF0] py-6'}`}
      >
        <div className="w-full px-6 flex flex-col md:flex-row items-center justify-between">

          {/* Left: Links */}
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
          <div className="absolute left-1/2 -translate-x-1/2 top-[30%] lg:top-[25%] z-10 flex flex-col items-center justify-center pointer-events-none">
            <div className="w-[130px] h-[130px] bg-white rounded-full border border-spa-gold/30 flex items-center justify-center shadow-lg pointer-events-auto cursor-pointer overflow-hidden" onClick={() => window.scrollTo(0, 0)}>
              <img src="/Magnific Spa logo.jpg" alt="Magnific Spa Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-5 ml-auto">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full text-base font-semibold bg-black text-white hover:bg-gray-800 transition-colors shadow-md"
            >
              Book an Appointment
            </a>
          </div>

        </div>
      </motion.nav>
    </>
  );
}
