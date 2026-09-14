import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf, Globe, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'FR' | 'EN'>('FR');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'products', label: 'Nos Produits' },
    { id: 'sustainability', label: 'Durabilité' },
    { id: 'news', label: 'Actualités' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-[#EAE5DF]'
            : 'bg-transparent py-6'
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 group cursor-pointer text-left"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-[#FAF8F5] border border-[#EAE5DF]/40 transition-transform group-hover:scale-105 flex-shrink-0">
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Moses Commodities"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="w-full h-full bg-[#00A14C] flex items-center justify-center text-[#F5F2EB]">
                <Leaf className="w-5 h-5 text-[#C99A49]" />
              </div>
            )}
          </div>
          <div>
            <span className="block text-lg font-serif font-semibold tracking-wider text-[#5C3E35] uppercase leading-none">
              Moses
            </span>
            <span className="block text-xs font-sans tracking-widest text-[#8E4D31] font-medium uppercase mt-0.5">
              Commodities
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-sans font-medium tracking-wide transition-colors relative py-1 cursor-pointer ${
                  isActive ? 'text-[#00A14C]' : 'text-[#5C544C] hover:text-[#00A14C]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8E4D31] rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-1.5 text-xs font-sans font-medium text-[#5C544C] hover:text-[#00A14C] transition-colors py-1 px-2 rounded-md hover:bg-[#F2ECE4] cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#8E4D31]" />
              <span>{lang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-24 bg-[#FAF8F5] border border-[#EAE5DF] rounded-lg shadow-lg py-1.5 z-20"
                  >
                    <button
                      onClick={() => { setLang('FR'); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-1.5 text-xs font-sans font-medium transition-colors cursor-pointer ${
                        lang === 'FR' ? 'text-[#00A14C] bg-[#F2ECE4]' : 'text-[#5C544C] hover:bg-[#F2ECE4]'
                      }`}
                    >
                      Français (FR)
                    </button>
                    <button
                      onClick={() => { setLang('EN'); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-1.5 text-xs font-sans font-medium transition-colors cursor-pointer ${
                        lang === 'EN' ? 'text-[#00A14C] bg-[#F2ECE4]' : 'text-[#5C544C] hover:bg-[#F2ECE4]'
                      }`}
                    >
                      English (EN)
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Premium CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2.5 rounded-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] cursor-pointer"
          >
            Devenir Partenaire
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Quick language toggle */}
          <button
            onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}
            className="text-xs font-sans font-medium text-[#5C544C] px-2 py-1 rounded bg-[#F2ECE4] flex items-center space-x-1"
          >
            <Globe className="w-3 h-3 text-[#8E4D31]" />
            <span>{lang}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#00A14C] hover:bg-[#F2ECE4] rounded-lg transition-colors cursor-pointer"
            aria-label="Menu principal"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Drawer - Moved outside <header> for proper rendering on mobile */}
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#1C1814] z-[90] lg:hidden"
          />
          
          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white opacity-100 shadow-2xl z-[100] p-8 flex flex-col justify-between lg:hidden border-l border-[#EAE5DF]"
          >
            <div>
              <div className="flex items-center justify-between pb-8 border-b border-[#EAE5DF]">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#00A14C] flex items-center justify-center text-[#F5F2EB]">
                    <Leaf className="w-4.5 h-4.5 text-[#C99A49]" />
                  </div>
                  <div>
                    <span className="block text-base font-serif font-bold tracking-wider text-[#5C3E35] uppercase leading-none">
                      Moses
                    </span>
                    <span className="block text-[10px] font-sans tracking-widest text-[#8E4D31] font-bold uppercase mt-0.5">
                      Commodities
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-[#F2ECE4] rounded-lg text-[#5C544C]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-5 mt-10">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left text-lg font-serif tracking-wide py-1.5 border-b border-dashed border-[#FAF8F5] transition-colors ${
                        isActive
                          ? 'text-[#8E4D31] font-semibold border-[#EAE5DF]'
                          : 'text-[#5C544C] hover:text-[#00A14C]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center px-6 py-3.5 rounded-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-sm font-sans font-bold tracking-wider uppercase transition-colors shadow-md"
              >
                Devenir Partenaire
              </button>
              <div className="text-center text-xs text-[#8C8275] font-sans font-medium">
                Coopérative M-Commodities • San-Pedro, CI
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
