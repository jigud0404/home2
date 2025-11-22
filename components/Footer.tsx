import React from 'react';
import { TranslationData } from '../types';

interface FooterProps {
  t: TranslationData;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="w-6 h-6 bg-cyan-600 rounded-br-lg rounded-tl-lg" />
             <span className="font-bold text-xl tracking-tight">ASREC STUDIO</span>
        </div>
        <p className="text-gray-600 text-sm">
          {t.footerRights}
        </p>
      </div>
    </footer>
  );
};