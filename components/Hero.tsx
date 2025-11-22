import React from 'react';
import { motion } from 'framer-motion';
import { TranslationData } from '../types';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  t: TranslationData;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for video - using a high quality studio/tech image with overlay */}
        <img 
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
          alt="Studio Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="inline-block mb-6 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-bold tracking-widest uppercase backdrop-blur-sm">
                GAME DUBBING & LOCALIZATION
            </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-tight">
            BREATHE LIFE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              INTO GAMES
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-light leading-relaxed">
            {t.heroSubtitle}
          </p>
          
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.heroDesc1}
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-white font-bold rounded-full text-lg overflow-hidden transition-all hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
          >
            <span>{t.heroContactBtn}</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};