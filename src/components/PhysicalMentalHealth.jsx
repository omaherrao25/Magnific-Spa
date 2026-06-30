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
    <section id="health" className="py-24 px-6 bg-[#FFFFF0] text-[#1A1A1A] relative overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* Left Column: Image Collage */}
        <div ref={imageRef} className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-[3/4] min-h-[450px]">
          {/* Main Left Image (Back Massage) */}
          <div
            className="absolute top-0 left-0 w-[55%] h-[75%] overflow-hidden shadow-xl z-20"
            style={{ borderRadius: '200px 20px 20px 20px', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
          >
            <img src={IMAGES.healthCollage1} alt="Back Massage" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Top Right Image (Spa Bowl) */}
          <div
            className="absolute top-0 right-0 w-[42%] h-[40%] overflow-hidden shadow-xl"
            style={{ borderRadius: '20px 100px 20px 20px', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
          >
            <img src={IMAGES.healthCollage2} alt="Spa Bowl" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Bottom Right Image (Jade Roller/Tools) */}
          <div
            className="absolute bottom-0 right-0 w-[65%] h-[55%] overflow-hidden shadow-xl z-10"
            style={{ borderRadius: '20px 20px 100px 20px', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
          >
            <img src={IMAGES.healthCollage3} alt="Spa Tools" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* Right Column: Content */}
        <div ref={contentRef} className="flex flex-col">
          <p className="text-sm font-semibold tracking-wide text-[#2E4534]/80 mb-3">
            Solution For Body Needs
          </p>

          <h2 className="text-5xl sm:text-6xl lg:text-[75px] text-[#4A6E53] mb-6 leading-[0.95] tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
            BUILDING PHYSICALLY & MENTAL HEALTH
          </h2>

          <p className="text-base text-[#1A1A1A]/70 leading-relaxed font-medium mb-12 max-w-lg">
            Experience complete physical and mental rejuvenation through our specialized holistic therapies. We blend ancient healing traditions with modern wellness practices to help you release stress, ease chronic pain, and restore your natural balance. Discover a sanctuary where your overall well-being is our utmost priority.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 mb-16">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-[#4A6E53]/40 flex items-center justify-center text-[#4A6E53] group-hover:bg-[#4A6E53] group-hover:text-white transition-colors duration-300">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-2xl text-[#1A1A1A] tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <a href="#contact" className="px-10 py-3.5 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-colors shadow-lg">
              Know More
            </a>

            <div className="flex items-center gap-4">
              <MessageCircle size={32} className="text-[#1A1A1A]" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#1A1A1A]/70 tracking-wide uppercase">
                  Chat Us Anytime
                </span>
                <span className="text-2xl text-[#1A1A1A] tracking-wider -mt-1" style={{ fontFamily: 'var(--font-heading)' }}>
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
