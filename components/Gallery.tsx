import React, { useRef } from 'react';
import { TranslationData } from '../types';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  t: TranslationData;
}

// Using high quality studio placeholders
const IMAGES = [
  "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621616896527-178849777131?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?q=80&w=1600&auto=format&fit=crop"
];

export const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const headerWords = t.photoHeader.split(' ');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400; // Approximate scroll amount
      const newScrollLeft = direction === 'left' 
        ? current.scrollLeft - scrollAmount 
        : current.scrollLeft + scrollAmount;
      
      current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="studio" className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
            <span className="text-cyan-500">{headerWords[0]}</span> {headerWords.slice(1).join(' ')}
          </h2>
        </div>
        
        {/* Slider Container */}
        <div className="relative group">
            {/* Navigation Buttons */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 hover:bg-cyan-500 hover:border-cyan-500 transition-all opacity-0 group-hover:opacity-100"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 hover:bg-cyan-500 hover:border-cyan-500 transition-all opacity-0 group-hover:opacity-100"
              aria-label="Scroll Right"
            >
              <ChevronRight size={24} />
            </button>

            {/* Scrollable Area */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {IMAGES.map((img, index) => (
                    <motion.div 
                    key={index} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative min-w-[85vw] md:min-w-[600px] h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shrink-0 snap-center"
                    >
                        <img src={img} alt={`Studio ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};