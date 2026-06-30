import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { IMAGES } from '../constants/images';
import { useScrollReveal } from '../hooks/useAnimations';

const wellnessServices = [
  {
    title: 'REIKI THERAPY',
    desc: 'Balance your energy fields and promote deep relaxation through gentle, healing touch.',
    image: IMAGES.wellnessReiki,
    shape: '60% 40% 30% 70% / 60% 30% 70% 40%',
  },
  {
    title: 'BODY MASSAGE',
    desc: 'Relieve muscle tension and restore overall well-being with our customized full-body massage techniques.',
    image: IMAGES.wellnessBody,
    shape: '60% 40% 30% 70% / 60% 30% 70% 40%',
  },
  {
    title: 'CRANIOSACRAL THERAPY',
    desc: 'A gentle, non-invasive therapy that relieves compression in the bones of the head, neck, and back.',
    image: IMAGES.wellnessCranio,
    shape: '60% 40% 30% 70% / 60% 30% 70% 40%',
  },
  {
    title: 'MYOFASCIAL MASSAGE',
    desc: 'Target deep connective tissues to alleviate chronic pain, improve flexibility, and restore mobility.',
    image: IMAGES.wellnessMyo,
    shape: '60% 40% 30% 70% / 60% 30% 70% 40%',
  },
];

export default function CompleteWellness() {
  const headerRef = useScrollReveal({ y: 30, duration: 0.8 });

  return (
    <section id="complete-wellness" className="py-24 px-6 bg-[#FFFFF0] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20">
          <p className="text-sm font-semibold tracking-wide text-[#2E4534]/80 mb-2">
            Affordable Spa Service
          </p>
          <h2 className="text-5xl md:text-[80px] text-[#4A6E53] mb-6 tracking-wide leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            COMPLETE WELLNESS
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#1A1A1A]/70 leading-relaxed font-medium">
            Experience profound relaxation and holistic healing. Our expert therapists are dedicated to rejuvenating your mind, body, and spirit with tailored treatments.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          {wellnessServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-center text-center group"
            >
              {/* Image Blob Container */}
              <div className="relative w-full pt-[100%] mb-8">
                <div 
                  className="absolute inset-0 overflow-hidden shadow-sm transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ borderRadius: service.shape, WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Arrow Button Overlay */}
                <div className="absolute bottom-4 right-4 md:-bottom-2 md:-right-2 z-10 w-14 h-14 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out group/btn">
                  <button className="relative z-10 w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg text-[#4A6E53] hover:bg-[#FFFFF0] transition-colors">
                    <ArrowUp size={20} strokeWidth={2.5} className="rotate-45" />
                  </button>
                  
                  {/* Splash accents around arrow */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-white rounded-full opacity-0 scale-0 group-hover/btn:opacity-100 group-hover/btn:scale-100 transition-all duration-300 delay-75" />
                  <div className="absolute -top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 scale-0 group-hover/btn:opacity-100 group-hover/btn:scale-100 transition-all duration-300 delay-100" />
                  <div className="absolute top-1/2 -left-4 w-2.5 h-2.5 bg-white rounded-full opacity-0 scale-0 group-hover/btn:opacity-100 group-hover/btn:scale-100 transition-all duration-300 delay-150" />
                  <div className="absolute bottom-0 -left-2 w-1.5 h-1.5 bg-white rounded-full opacity-0 scale-0 group-hover/btn:opacity-100 group-hover/btn:scale-100 transition-all duration-300 delay-200" />
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-3xl lg:text-4xl text-[#2E4534] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {service.title}
              </h3>
              <p className="text-sm text-[#1A1A1A]/70 leading-relaxed max-w-[250px]">
                {service.desc}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
