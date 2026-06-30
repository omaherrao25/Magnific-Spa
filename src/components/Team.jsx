import { motion } from 'framer-motion';
import { useScrollReveal, useStaggerReveal } from '../hooks/useAnimations';

const teamMembers = [
  {
    name: 'GIUSY LOREDANA',
    role: 'Junior Therapist',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    blob: '40% 60% 70% 30% / 40% 50% 60% 50%'
  },
  {
    name: 'CLOE FULVIA',
    role: 'Therapist',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    blob: '40% 60% 70% 30% / 40% 50% 60% 50%'
  },
  {
    name: 'LAURETTA PINA',
    role: 'Trainer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    blob: '40% 60% 70% 30% / 40% 50% 60% 50%'
  },
  {
    name: 'RENZA CONCETTA',
    role: 'Trainer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    blob: '40% 60% 70% 30% / 40% 50% 60% 50%'
  },
  {
    name: 'FABRIZIO GIOTTO',
    role: 'Senior Therapist',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    blob: '40% 60% 70% 30% / 40% 50% 60% 50%'
  }
];

export default function Team() {
  const headerRef = useScrollReveal({ y: 30, duration: 0.8 });
  const teamRef = useStaggerReveal({ y: 40, stagger: 0.15 });

  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden text-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto bg-white rounded-[30px] sm:rounded-[40px] md:rounded-[60px] py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-10 shadow-sm">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-sm font-semibold tracking-wide text-[#1A1A1A]/80 mb-3">
            Our Team
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[75px] text-[#4A6E53] font-light mb-4 sm:mb-6 uppercase tracking-wider leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
            Meet Certified Therapist
          </h2>
          <p className="text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed font-medium max-w-xl mx-auto px-2">
            Our internationally certified therapists bring years of expertise and a deep passion for holistic wellness. Dedicated to your complete relaxation, they craft personalized treatments to rejuvenate your mind, body, and spirit.
          </p>
        </div>

        {/* Team Members Grid */}
        <div ref={teamRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 justify-items-center">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              className={`flex flex-col items-center group cursor-pointer w-full max-w-[200px] sm:max-w-[220px] ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image with blob shape */}
              <div 
                className="w-full aspect-square max-w-[160px] sm:max-w-[200px] md:max-w-[220px] overflow-hidden mb-4 sm:mb-6 bg-gray-200 shadow-md transition-all duration-500 group-hover:shadow-xl"
                style={{ borderRadius: member.blob }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Name & Role */}
              <h3 className="text-xl sm:text-2xl md:text-[28px] text-[#4A6E53] tracking-widest text-center leading-none mb-1 sm:mb-2 transition-colors group-hover:text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#1A1A1A]/80 text-center tracking-wide">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
