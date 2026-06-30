import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants/images';
import { useScrollReveal, useStaggerReveal } from '../hooks/useAnimations';

const treatments = [
  {
    id: 1,
    title: 'CUPPING TREAT',
    price: '$ 79.00',
    image: '/cupping_treatment.png',
  },
  {
    id: 2,
    title: 'STONE MASSAGE',
    price: '$ 150.00',
    image: '/stone_massage.png',
  },
  {
    id: 3,
    title: 'STRESS CONTROLED',
    price: '$ 50.00',
    image: '/stress_controlled.png',
  },
  {
    id: 4,
    title: 'IMMUNE BOOST',
    price: '$ 65.00',
    image: '/immune_boost.png',
  },
];

export default function Services() {
  const headerRef = useScrollReveal({ y: 30, duration: 0.8 });
  const cardsRef = useStaggerReveal({ y: 40, stagger: 0.15 });

  return (
    <section id="treatments" className="py-24 px-6 relative overflow-hidden text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 relative">
          <span className="text-sm font-semibold tracking-wide text-[#1A1A1A]/80 mb-2">
            Come & Explore
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-[75px] text-[#4A6E53] font-light mb-6 uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
            Massage & Treatments
          </h2>

          <div className="w-full relative flex items-center justify-center">
            <p className="text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed font-medium max-w-xl mx-auto">
              Immerse yourself in our exclusive collection of holistic therapies, designed to melt away stress and rejuvenate your body. Experience the ultimate harmony of relaxation and healing.
            </p>

            {/* Arrows for Desktop */}
            <div className="hidden md:flex items-center gap-4 absolute right-0 top-1/2 -translate-y-1/2">
              <button className="p-2 hover:bg-[#4A6E53]/10 rounded-full transition-colors group">
                <ArrowLeft strokeWidth={1} className="w-8 h-8 text-[#1A1A1A] group-hover:text-[#4A6E53]" />
              </button>
              <button className="p-2 hover:bg-[#4A6E53]/10 rounded-full transition-colors group">
                <ArrowRight strokeWidth={1} className="w-8 h-8 text-[#1A1A1A] group-hover:text-[#4A6E53]" />
              </button>
            </div>
          </div>

          {/* Arrows for Mobile */}
          <div className="flex md:hidden items-center gap-4 mt-6">
            <button className="p-2 hover:bg-[#4A6E53]/10 rounded-full transition-colors group">
              <ArrowLeft strokeWidth={1} className="w-6 h-6 text-[#1A1A1A] group-hover:text-[#4A6E53]" />
            </button>
            <button className="p-2 hover:bg-[#4A6E53]/10 rounded-full transition-colors group">
              <ArrowRight strokeWidth={1} className="w-6 h-6 text-[#1A1A1A] group-hover:text-[#4A6E53]" />
            </button>
          </div>
        </div>

        {/* Cards Grid / Flex */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {treatments.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center group cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-full aspect-square overflow-hidden mb-6 shadow-sm border border-[#1A1A1A]/5"
                style={{ borderRadius: '80px 16px 80px 16px' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="text-3xl text-[#1A1A1A] mb-3 tracking-wider group-hover:text-[#4A6E53] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                {item.title}
              </h3>

              <p className="text-sm font-semibold text-[#1A1A1A]/80 tracking-wide">
                {item.price}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
