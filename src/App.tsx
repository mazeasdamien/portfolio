import React, { useEffect, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { LanguageProvider } from './contexts/LanguageContext';
import { uiTranslations } from './utils/translations';
import MagneticConstellation from './components/ui/MagneticConstellation';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <MagneticConstellation />
      <div className="flex flex-col min-h-screen font-sans selection:bg-neutral-800 selection:text-neutral-100 relative bg-transparent text-neutral-800 transition-colors duration-300 overflow-x-hidden">
        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex-grow flex flex-col relative overflow-hidden">
            <div className="flex-grow">
              <Suspense fallback={null}>
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <LanguageProvider translations={uiTranslations}>
      <HelmetProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
