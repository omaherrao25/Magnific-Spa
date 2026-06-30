import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';

export default function BookingCTA() {
  const ctaRef = useScrollReveal({ y: 40, duration: 0.8 });

  return (
    <section className="py-24 px-6 relative overflow-hidden text-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          ref={ctaRef}
          className="relative w-full aspect-[21/9] min-h-[400px] rounded-[60px] overflow-hidden flex items-center justify-end p-8 md:p-16 shadow-lg"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/cta_banner_bg.png" 
              alt="Spa relaxation" 
              className="w-full h-full object-cover object-left"
            />
          </div>

          {/* CTA Content with localized blur background */}
          <div className="relative z-20 p-8 md:p-12 max-w-lg mr-0 md:mr-8">
            {/* The blur background fitted strictly behind the text */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/80 via-white/50 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_left,black_60%,transparent)] rounded-3xl -z-10" />
            
            <h2 className="text-4xl md:text-[50px] text-[#4A6E53] mb-4 uppercase tracking-wider leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready for pure relaxation?
            </h2>
            <p className="text-[#1A1A1A]/90 font-medium mb-8 leading-relaxed">
              Book your appointment today and step into a world of tranquility. Our expert therapists are waiting to rejuvenate your mind, body, and soul.
            </p>
            <button className="px-10 py-3.5 bg-black text-white rounded-full text-sm font-bold tracking-wide hover:bg-gray-800 transition-colors shadow-md">
              Book Appointment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
