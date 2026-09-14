import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Sustainability from './pages/Sustainability';
import News from './pages/News';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Listen to hash changes for true multi-page navigation behavior
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash; // e.g. "#/about"
      if (hash) {
        const pageId = hash.replace('#/', '');
        const validPages = ['home', 'about', 'products', 'sustainability', 'news', 'contact'];
        if (validPages.includes(pageId)) {
          setActivePage(pageId);
          window.scrollTo({ top: 0, behavior: 'instant' });
          return;
        }
      }
      // Default to home if hash is empty or invalid
      setActivePage('home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initialize
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    window.location.hash = `#/${pageId}`;
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'sustainability':
        return <Sustainability />;
      case 'news':
        return <News />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-white text-[#1C1814] font-sans selection:bg-[#00A14C] selection:text-[#FAF8F5] flex flex-col justify-between">
      <div>
        {/* Header / Navigation */}
        <Header activeSection={activePage} onNavigate={handleNavigate} />

        {/* Main Content Area with fluid Page-entering transitions */}
        <main className="min-h-[75vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer & Certifications Summary */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
