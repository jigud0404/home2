import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, TranslationData } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationData;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navServices, href: "#services" },
    { name: t.navPhotos, href: "#studio" },
    { name: t.navContact, href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-500 rounded-br-xl rounded-tl-xl" />
          ASREC <span className="text-cyan-400">STUDIO</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-cyan-400 text-sm font-bold uppercase tracking-wider transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-6 w-px bg-gray-700 mx-2" />

          <div className="flex items-center gap-1 bg-slate-900/50 rounded-full p-1 border border-white/10">
            <button 
              onClick={() => setLang('ko')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'ko' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              KO
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold text-white hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
               <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <span className="text-gray-400 text-sm"><Globe size={16} className="inline mr-2"/>Language</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => { setLang('ko'); setMobileMenuOpen(false); }}
                    className={`text-sm font-bold ${lang === 'ko' ? 'text-cyan-400' : 'text-gray-500'}`}
                  >
                    KOR
                  </button>
                  <span className="text-gray-700">/</span>
                  <button 
                    onClick={() => { setLang('en'); setMobileMenuOpen(false); }}
                    className={`text-sm font-bold ${lang === 'en' ? 'text-cyan-400' : 'text-gray-500'}`}
                  >
                    ENG
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};