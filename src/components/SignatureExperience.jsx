import { motion } from 'framer-motion';
import { Play, Clover } from 'lucide-react';
import { IMAGES } from '../constants/images';

export default function SignatureExperience() {
  const bulletPoints = [
    "Alleviate Muscle Tension",
    "Enhance Blood Circulation",
    "Relieve Chronic Stress",
    "Improve Sleep Quality",
    "Detoxify Body and Mind",
    "Boost Immune Function"
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 overflow-hidden text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 md:space-y-32">
        
        {/* First Row */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Left Image Side */}
          <div className="relative">
            {/* Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden z-10 aspect-[4/3] shadow-md border border-[#1A1A1A]/5">
              <img
                src={IMAGES.serviceRelaxation}
                alt="Leg massage"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div>
            <span className="text-sm font-semibold tracking-wide text-[#1A1A1A]/80 mb-2 block">
              Wellness Spa Retreats
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-[65px] text-[#4A6E53] font-light mb-4 sm:mb-6 uppercase tracking-wider leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
              The Ultimate Relaxation
            </h2>
            <p className="text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed font-medium mb-6 sm:mb-10 max-w-lg">
              Step into a sanctuary designed to release tension and restore your inner harmony. Our bespoke treatments blend ancient wisdom with modern wellness practices to create a deeply transformative experience tailored just for you.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 mb-6 sm:mb-10">
              {bulletPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Clover className="w-5 h-5 text-[#4A6E53] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#1A1A1A]/80">{point}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full sm:w-auto px-10 py-3.5 rounded-full text-sm font-bold bg-black text-white hover:bg-gray-800 active:scale-95 transition-all shadow-lg">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold tracking-wide text-[#1A1A1A]/80 mb-2 block">
              Best Of The World
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-[65px] text-[#4A6E53] font-light mb-4 sm:mb-6 uppercase tracking-wider leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
              Soothing Spa Treatments
            </h2>
            <p className="text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed font-medium mb-6 sm:mb-10 max-w-lg">
              Discover a curated selection of therapies that soothe the soul and revitalize the body. From soothing botanical oils to deep tissue mastery, our internationally certified therapists guide you toward total physical and mental renewal.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4 mb-8 sm:mb-12">
              <div>
                <p className="text-4xl sm:text-5xl md:text-6xl text-[#4A6E53]" style={{ fontFamily: 'var(--font-heading)' }}>4.4<span className="text-xl sm:text-3xl align-super">*</span></p>
                <p className="text-base sm:text-lg md:text-xl uppercase tracking-widest text-[#1A1A1A]/70 mt-1" style={{ fontFamily: 'var(--font-heading)'}}>1500 Ratings</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl md:text-6xl text-[#4A6E53]" style={{ fontFamily: 'var(--font-heading)' }}>25K</p>
                <p className="text-base sm:text-lg md:text-xl uppercase tracking-widest text-[#1A1A1A]/70 mt-1" style={{ fontFamily: 'var(--font-heading)'}}>Worldwide Customers</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center -space-x-3 mb-2">
                  <img src="https://i.pravatar.cc/150?img=1" alt="user" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#FFFFF0] object-cover" loading="lazy" />
                  <img src="https://i.pravatar.cc/150?img=2" alt="user" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#FFFFF0] object-cover" loading="lazy" />
                  <img src="https://i.pravatar.cc/150?img=3" alt="user" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#FFFFF0] object-cover" loading="lazy" />
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#FFFFF0] bg-[#829D85] text-white flex items-center justify-center text-xs font-bold z-10">
                    +30
                  </div>
                </div>
                <p className="text-base sm:text-lg md:text-xl uppercase tracking-widest text-[#1A1A1A]/70" style={{ fontFamily: 'var(--font-heading)'}}>Average Enquires Daily</p>
              </div>
            </div>
            
            {/* Watch Procedure */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button className="w-14 h-14 sm:w-16 sm:h-16 min-w-[48px] min-h-[48px] rounded-full bg-[#829D85] flex items-center justify-center text-white hover:bg-[#4A6E53] active:scale-95 transition-all shadow-lg flex-shrink-0">
                <Play fill="currentColor" size={22} className="ml-1" />
              </button>
              <div>
                <span className="text-xs font-bold tracking-wide text-[#1A1A1A]/80 block mb-1">Our Process</span>
                <p className="text-2xl sm:text-3xl text-[#4A6E53] uppercase tracking-wider leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                  Watch Our Procedure
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden z-10 aspect-[4/3] shadow-md border border-[#1A1A1A]/5">
              <img
                src={IMAGES.serviceDeepTissue}
                alt="Bamboo massage"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
