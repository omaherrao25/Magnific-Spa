import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';

export default function BookingCTA() {
  const ctaRef = useScrollReveal({ y: 40, duration: 0.8 });

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden text-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          ref={ctaRef}
          className="relative w-full aspect-auto sm:aspect-[21/9] min-h-[450px] sm:min-h-[400px] rounded-[30px] sm:rounded-[40px] md:rounded-[60px] overflow-hidden flex items-center justify-center sm:justify-end p-6 sm:p-8 md:p-16 shadow-lg"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/cta_banner_bg.png" 
              alt="Spa relaxation" 
              className="w-full h-full object-cover object-center sm:object-left"
              loading="lazy"
            />
            {/* Dark overlay for mobile readability */}
            <div className="absolute inset-0 bg-black/20 sm:bg-transparent" />
          </div>

          {/* CTA Content with localized blur background */}
          <div className="relative z-20 p-6 sm:p-8 md:p-12 max-w-lg w-full sm:w-auto mr-0 sm:mr-4 md:mr-8">
            {/* The blur background fitted strictly behind the text */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-white/90 via-white/70 to-white/40 sm:from-white/80 sm:via-white/50 sm:to-transparent backdrop-blur-md sm:[mask-image:linear-gradient(to_left,black_60%,transparent)] rounded-2xl sm:rounded-3xl -z-10" />
            
            <h2 className="text-3xl sm:text-4xl md:text-[50px] text-[#4A6E53] mb-3 sm:mb-4 uppercase tracking-wider leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready for pure relaxation?
            </h2>
            <p className="text-sm sm:text-base text-[#1A1A1A]/90 font-medium mb-6 sm:mb-8 leading-relaxed">
              Book your appointment today and step into a world of tranquility. Our expert therapists are waiting to rejuvenate your mind, body, and soul.
            </p>
            <button className="w-full sm:w-auto px-10 py-3.5 bg-black text-white rounded-full text-sm font-bold tracking-wide hover:bg-gray-800 active:scale-95 transition-all shadow-md">
              Book Appointment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
