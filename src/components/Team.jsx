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
    <section id="team" className="py-24 px-6 relative overflow-hidden text-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto bg-white rounded-[60px] py-20 px-4 md:px-10 shadow-sm">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-20">
          <span className="text-sm font-semibold tracking-wide text-[#1A1A1A]/80 mb-3">
            Our Team
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-[75px] text-[#4A6E53] font-light mb-6 uppercase tracking-wider leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
            Meet Certified Therapist
          </h2>
          <p className="text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed font-medium max-w-xl mx-auto">
            Our internationally certified therapists bring years of expertise and a deep passion for holistic wellness. Dedicated to your complete relaxation, they craft personalized treatments to rejuvenate your mind, body, and spirit.
          </p>
        </div>

        {/* Team Members Flex/Grid */}
        <div ref={teamRef} className="flex flex-wrap justify-center gap-6 lg:gap-8 xl:gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col items-center group cursor-pointer w-[220px]"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image with blob shape */}
              <div 
                className="w-[200px] h-[200px] md:w-[220px] md:h-[220px] overflow-hidden mb-6 bg-gray-200 shadow-md transition-all duration-500 group-hover:shadow-xl"
                style={{ borderRadius: member.blob }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Name & Role */}
              <h3 className="text-[28px] text-[#4A6E53] tracking-widest text-center leading-none mb-2 transition-colors group-hover:text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-[#1A1A1A]/80 text-center tracking-wide">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
