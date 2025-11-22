import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Language } from './types';
import { TEXT_CONTENT } from './constants';

const App: React.FC = () => {
  // Determine initial language based on browser
  const getInitialLang = (): Language => {
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === 'ko' ? 'ko' : 'en';
  };

  const [lang, setLang] = useState<Language>(getInitialLang);
  const t = TEXT_CONTENT[lang];

  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <Process t={t} />
        <Gallery t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
};

export default App;