import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [visitCount, setVisitCount] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await fetch("https://visitorcounter.damien-mazeas.workers.dev");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        if (data.unique_visits) {
          setVisitCount(data.unique_visits.toLocaleString());
        }
      } catch (error) {
        console.error("Counter failed:", error);
        setVisitCount("many");
      }
    };

    fetchVisits();
  }, []);

  return (
    <footer className="w-full py-8 mt-12 border-t border-neutral-200 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-2">
        <a href="mailto:damien.mazeas@dmzs-lab.com" className="text-xs font-bold text-neutral-600 hover:text-violet-600 transition-colors tracking-widest mb-2">
          damien.mazeas@dmzs-lab.com
        </a>
        <p className="text-xs text-neutral-600 font-medium text-center">
          ©Damien Mazeas - 2026
        </p>
        <p className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold text-center">
          {t('footer.uniqueVisitors')}: <span className="text-neutral-800">{visitCount || '...'}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
