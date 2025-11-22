import React from 'react';
import { TranslationData } from '../types';
import { motion } from 'framer-motion';

interface ProcessProps {
  t: TranslationData;
}

export const Process: React.FC<ProcessProps> = ({ t }) => {
  const headerWords = t.processHeader.split(' ');

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
             <span className="text-cyan-500">{headerWords[0]}</span> {headerWords.slice(1).join(' ')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 bg-slate-950 rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-colors group"
            >
              {/* Removed the large background number div as requested */}
              
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                {index + 1}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};