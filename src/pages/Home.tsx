import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CVSection } from '../components/sections/CVSection';
import { SkillsCloud } from '../components/sections/SkillsCloud';
import SEO from '../components/ui/SEO';
import ExperimentsSection from '../components/sections/ExperimentsSection';
import { Mail, GraduationCap, Zap, Award, Box, ArrowRight, ExternalLink, Github, Youtube } from 'lucide-react';
import { EducationSection } from '../components/sections/EducationSection';
import { ContactModal } from '../components/ui/ContactModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

      {/* Centered Hero Section with Profile Photo on the Left */}
      <section className="pt-4 pb-4">
        <div className="max-w-6xl mx-auto px-4">
          {/* Particle Effect Container */}
          <div className="relative rounded-3xl p-8">

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

              {/* LinkedIn Profile Section - Modernized */}
              <div className="flex-shrink-0 relative z-10 flex flex-col items-center">
                <div className="relative group">

                  {/* Profile Image Container */}
                  <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-br from-white via-neutral-100 to-neutral-200 shadow-2xl shadow-neutral-300/50">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white relative z-10">
                      <img
                        src="/images/profil.jpg"
                        alt="Damien Mazeas"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Identity Block: Centered Content restored */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="relative group/name">
                  <h1 className="relative flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-6 leading-none select-none cursor-default">
                    {/* Main Name with Metallic Deep Gradient & Minimal Premium Hover */}
                    <span className="relative z-10 text-4xl md:text-7xl font-black tracking-tighter text-neutral-900 block drop-shadow-sm filter transition-all duration-300">
                      Damien Mazeas
                    </span>

                    {/* Separator & Title */}
                    <div className="flex items-center gap-6 md:mb-5">
                      <div className="hidden md:block w-px h-10 bg-neutral-300/50 transition-colors duration-500 group-hover/name:bg-neutral-400/50"></div>
                      <span className="relative z-10 text-2xl md:text-4xl font-light tracking-[0.2em] text-neutral-500 transition-colors duration-500 group-hover/name:text-neutral-600">
                        PhD
                      </span>
                    </div>
                  </h1>
                </div>

                {/* Researcher Title */}
                <div className="text-xs md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-neutral-500 px-4 py-2 border-y border-neutral-200 transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
                  R&D Research Scientist
                </div>

                {/* Tagline / Value Proposition */}
                <p className="max-w-2xl text-sm md:text-base text-neutral-600 font-medium leading-relaxed">
                  Bridging Embodied Artificial Intelligence and Human-in-the-Loop Digital Twins.
                </p>

                {/* Actions Row: Socials & Experiments */}
                <div className="mt-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  {/* Social Links Row */}
                  <div className="flex items-center gap-3">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/mazeas/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#0077b5]/30 group" aria-label="Connect on LinkedIn">
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] fill-current text-neutral-500 group-hover:text-[#0077b5] transition-colors duration-300"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/mazeasdamien" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-neutral-800/30 group" aria-label="Connect on GitHub">
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] fill-current text-neutral-500 group-hover:text-[#181717] transition-colors duration-300"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>

                    {/* YouTube */}
                    <a href="https://www.youtube.com/@mazeas" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#ff0000]/30 group" aria-label="Subscribe on YouTube">
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] fill-current text-neutral-500 group-hover:text-[#ff0000] transition-colors duration-300"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    </a>

                    {/* Scholar */}
                    <a href="https://scholar.google.com/citations?hl=en&user=SydtND4AAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#4285F4]/30 group" aria-label="View Google Scholar">
                      <GraduationCap className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-neutral-500 group-hover:text-[#4285F4] transition-colors duration-300" strokeWidth={2} />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise - Full Width */}
      <div className="relative z-20 mt-12">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-800 flex-shrink-0">
            Core Expertise
          </h2>
          <span className="h-px flex-grow bg-neutral-200"></span>
        </div>
        <SkillsCloud />
      </div>

      {/* Main Content: CV & Education (Single Column) */}
      <div className="relative z-20 flex flex-col gap-12 mt-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-800 flex-shrink-0">
              Professional Experience
            </h2>
            <span className="h-px flex-grow bg-neutral-200"></span>
          </div>
          <CVSection />
        </div>

        <div className="flex flex-col">
          <EducationSection />
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
