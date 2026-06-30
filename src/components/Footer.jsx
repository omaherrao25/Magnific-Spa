import { ArrowUp } from 'lucide-react';

const SocialIcon = ({ type }) => {
  const paths = {
    instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
    facebook: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
    linkedin: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  };
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">{paths[type]}</svg>
  );
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white relative pt-20 pb-8 text-[#1A1A1A]">
      {/* Wavy Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px]">
          <path fill="white" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,117.3C672,117,768,171,864,186.7C960,203,1056,181,1152,149.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Column 1: Brand & App */}
          <div>
            {/* Original Logo */}
            <div className="mb-8 w-32 h-32 flex items-center justify-center">
              <img src="/Magnific Spa logo.jpg" alt="Magnific Spa" className="w-full h-full object-contain rounded-full" />
            </div>

            <p className="text-[13px] font-bold text-[#1A1A1A]/80 leading-relaxed mb-8 max-w-[280px]">
              Turpis in eu mi bibendum neque egestas nunc sed blandit libero volutpat sedcras ornare arcu dui vivamus arcu
            </p>


          </div>

          {/* Column 2: Contact */}
          <div className="pt-2">
            <h4 className="text-[36px] text-[#1A1A1A] mb-8 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact Us
            </h4>
            <div className="space-y-4 text-sm mb-12">
              <p className="font-semibold text-[#1A1A1A]/90 leading-relaxed"><span className="font-extrabold text-[#1A1A1A]">Address:</span> Rua Quatrocentos, quadra 05, n 37, Jardim Imperial, Cuiabá, Brazil 78975670</p>
              <p className="font-semibold text-[#1A1A1A]/90"><span className="font-extrabold text-[#1A1A1A]">Email:</span> info@examples.com</p>
              <p className="font-semibold text-[#1A1A1A]/90"><span className="font-extrabold text-[#1A1A1A]">Phone:</span> +000 123 456789</p>
            </div>

            <div className="flex items-center gap-4">
              {['linkedin', 'facebook', 'instagram'].map((type) => (
                <a key={type} href="#" className="w-9 h-9 rounded-full border-[1.5px] border-gray-400 flex items-center justify-center text-[#1A1A1A] hover:bg-[#4A6E53] hover:text-white hover:border-[#4A6E53] transition-all">
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="pt-2">
            <h4 className="text-[36px] text-[#1A1A1A] mb-6 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>
              Join Our Newsletter
            </h4>
            <div className="relative mb-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 rounded-full border border-gray-300 px-6 outline-none focus:border-[#4A6E53] bg-transparent font-bold placeholder-gray-500 text-sm"
              />
              <button className="absolute right-0 top-0 bottom-0 px-8 bg-black text-white rounded-full font-bold text-xs tracking-wide hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-[11px] font-extrabold text-[#1A1A1A]/80 mb-12 uppercase tracking-wide">
              We Won't Spam. We Hate It More Than You Do.
            </p>

            <h4 className="text-[30px] text-[#1A1A1A] mb-5 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>
              Accepted Payments:
            </h4>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-3 py-1 bg-gray-100 rounded text-[11px] font-bold text-gray-500 italic">Payoneer</div>
              <div className="px-3 py-1 bg-gray-100 rounded text-[11px] font-bold text-gray-500">amazon pay</div>
              <div className="px-3 py-1 bg-gray-100 rounded text-[11px] font-bold text-gray-500 italic text-purple-900">Skrill</div>
              <div className="px-3 py-1 bg-gray-100 rounded text-[11px] font-bold text-blue-900 tracking-wider">VISA</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-[#1A1A1A]">
          <p>
            All Right Reserved © {new Date().getFullYear()} WeDesignTech
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#4A6E53] transition-colors">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#4A6E53] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#829D85] text-white flex items-center justify-center hover:bg-[#4A6E53] transition-colors shadow-md z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
