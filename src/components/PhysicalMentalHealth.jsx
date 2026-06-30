import { motion } from 'framer-motion';
import { Leaf, Globe, Droplets, HeartPulse, MessageCircle } from 'lucide-react';
import { IMAGES } from '../constants/images';
import { useScrollReveal } from '../hooks/useAnimations';

const features = [
  { icon: Leaf, label: 'HELPS RELIEVE PAIN' },
  { icon: Globe, label: 'REDUCE BODY STRESS' },
  { icon: Droplets, label: 'EASE CHRONIC PAIN' },
  { icon: HeartPulse, label: 'BOOSTS YOUR MOOD' },
];

export default function PhysicalMentalHealth() {
  const contentRef = useScrollReveal({ y: 30, duration: 0.8 });
  const imageRef = useScrollReveal({ x: -40, duration: 1 });

  return (
    <section id="health" className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 bg-[#FFFFF0] text-[#1A1A1A] relative overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center relative z-10">

        {/* Left Column: Image Collage */}
        <div ref={imageRef} className="relative w-full aspect-[4/4] sm:aspect-square lg:aspect-[4/5] xl:aspect-[3/4] min-h-[350px] sm:min-h-[450px]">
          {/* Main Left Image (Back Massage) */}
          <div
            className="absolute top-0 left-0 w-[55%] h-[75%] overflow-hidden shadow-xl z-20"
            style={{ borderRadius: '100px 20px 20px 20px', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
          >
            <img
              src={IMAGES.healthCollage1}
              alt="Back Massage"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Top Right Image (Spa Bowl) */}
          <div
            className="absolute top-0 right-0 w-[42%] h-[40%] overflow-hidden shadow-xl"
            style={{ borderRadius: '20px 60px 20px 20px', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
          >
            <img
              src={IMAGES.healthCollage2}
              alt="Spa Bowl"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Bottom Right Image (Jade Roller/Tools) */}
          <div
            className="absolute bottom-0 right-0 w-[65%] h-[55%] overflow-hidden shadow-xl z-10"
            style={{ borderRadius: '20px 20px 60px 20px', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
          >
            <img
              src={IMAGES.healthCollage3}
              alt="Spa Tools"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div ref={contentRef} className="flex flex-col">
          <p className="text-sm font-semibold tracking-wide text-[#2E4534]/80 mb-3">
            Solution For Body Needs
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[75px] text-[#4A6E53] mb-4 sm:mb-6 leading-[0.95] tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
            BUILDING PHYSICALLY & MENTAL HEALTH
          </h2>

          <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-medium mb-8 sm:mb-12 max-w-lg">
            Experience complete physical and mental rejuvenation through our specialized holistic therapies. We blend ancient healing traditions with modern wellness practices to help you release stress, ease chronic pain, and restore your natural balance. Discover a sanctuary where your overall well-being is our utmost priority.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-10 gap-x-6 mb-10 sm:mb-16">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 min-w-[48px] rounded-full border border-[#4A6E53]/40 flex items-center justify-center text-[#4A6E53] group-hover:bg-[#4A6E53] group-hover:text-white transition-colors duration-300">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-xl sm:text-2xl text-[#1A1A1A] tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-10 py-3.5 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 active:scale-95 transition-all shadow-lg"
            >
              Know More
            </a>

            <div className="flex items-center gap-4">
              <MessageCircle size={28} className="text-[#1A1A1A] shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#1A1A1A]/70 tracking-wide uppercase">
                  Chat Us Anytime
                </span>
                <span className="text-xl sm:text-2xl text-[#1A1A1A] tracking-wider -mt-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  +00 123 456 789
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
