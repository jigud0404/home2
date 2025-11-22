import React from 'react';
import { TranslationData } from '../types';
import { Mic2, Users, Sliders, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  t: TranslationData;
}

const ServiceCard: React.FC<{
  title: string;
  items: string[];
  icon: React.ReactNode;
  index: number;
}> = ({ title, items, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-cyan-950 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-900">
        <div className="text-cyan-400 group-hover:text-cyan-300">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start text-gray-400 text-sm leading-relaxed">
            <span className="mr-3 text-cyan-500 mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0 block" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Services: React.FC<ServicesProps> = ({ t }) => {
  const services = [
    {
      title: t.s1Title,
      items: t.s1List,
      icon: <Users size={32} />
    },
    {
      title: t.s2Title,
      items: t.s2List,
      icon: <Mic2 size={32} />
    },
    {
      title: t.s3Title,
      items: t.s3List,
      icon: <Sliders size={32} />
    },
    {
      title: t.s4Title,
      items: t.s4List,
      icon: <Languages size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
            <span className="text-cyan-500">{t.serviceHeader.split(' ')[0]}</span> {t.serviceHeader.split(' ').slice(1).join(' ')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};