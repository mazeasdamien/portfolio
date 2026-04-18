import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CVSection } from '../components/sections/CVSection';
import SEO from '../components/ui/SEO';
import ExperimentsSection from '../components/sections/ExperimentsSection';
import { GraduationCap } from 'lucide-react';
import { EducationSection } from '../components/sections/EducationSection';
import { ContactModal } from '../components/ui/ContactModal';
import { useState } from 'react';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const seoData = {
    title: "Damien Mazeas, PhD",
    description: t('home.bio.description'),
    path: '/'
  };

  return (
    <motion.main
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      key="home"
      className={`max-w-7xl mx-auto px-6 flex flex-col pt-8 pb-4 justify-start`}
    >
      <SEO
        title={seoData.title}
        description={seoData.description}
        path={seoData.path}
      />

      {/* Hero Section */}
      <section className="pt-4 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-br from-white via-neutral-100 to-neutral-200 shadow-xl shadow-neutral-300/40">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <img src="/images/profil.jpg" alt="Damien Mazeas" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Identity */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">

              {/* Name + PhD */}
              <h1 className="flex flex-col md:flex-row items-center md:items-baseline gap-1 md:gap-4 leading-none">
                <span className="text-4xl md:text-6xl font-black tracking-tighter text-neutral-900">
                  Damien Mazeas
                </span>
                <span className="text-lg md:text-2xl font-light tracking-widest text-neutral-400">
                  PhD
                </span>
              </h1>

              {/* Research interest chips */}
              <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
                {['Virtual Worlds', 'Human-in-the-Loop', 'AI & Robotics', 'XR'].map(tag => (
                  <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-500 tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Socials */}
              <div className="flex items-center gap-2.5 mt-1">
                <a href="https://www.linkedin.com/in/mazeas/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200/80 shadow-sm transition-all duration-300 hover:border-[#0077b5]/40 group" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-current text-neutral-400 group-hover:text-[#0077b5] transition-colors duration-300">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/mazeasdamien" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200/80 shadow-sm transition-all duration-300 hover:border-neutral-800/30 group" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-current text-neutral-400 group-hover:text-[#181717] transition-colors duration-300">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://scholar.google.com/citations?hl=en&user=SydtND4AAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200/80 shadow-sm transition-all duration-300 hover:border-[#4285F4]/30 group" aria-label="Google Scholar">
                  <GraduationCap className="w-[17px] h-[17px] text-neutral-400 group-hover:text-[#4285F4] transition-colors duration-300" strokeWidth={2} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Main Content: CV & Education side-by-side */}
      <div className="relative z-20 mt-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left: Professional Experience */}
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-800 flex-shrink-0">
                Professional Experience
              </h2>
              <span className="h-px flex-grow bg-neutral-200"></span>
            </div>
            <CVSection />
          </div>

          {/* Right: Education */}
          <div className="flex flex-col lg:w-[340px] xl:w-[380px] shrink-0">
            <EducationSection />
          </div>

        </div>
      </div>

      <div className="relative z-20 mt-8">
        <ExperimentsSection />
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </motion.main>
  );
};

export default Home;
