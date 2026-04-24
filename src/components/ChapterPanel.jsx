import React from 'react';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

export default function ChapterPanel({ slides, currentIndex, onClose, onSelect }) {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col p-8 md:p-16 text-textPrimary overflow-y-auto animate-fade-in">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-sm font-sans tracking-[0.2em] text-gold uppercase">Table of Contents</h2>
        </div>
        <button onClick={onClose} className="p-2 hover:text-gold transition-colors">
          <CloseIcon />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
        {slides.map((slide, i) => {
          const isActive = i === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => onSelect(i)}
              className={`text-left p-6 rounded-lg transition-all border ${
                isActive 
                  ? 'border-gold bg-white/5' 
                  : 'border-white/10 hover:border-white/30 hover:bg-white/5'
              }`}
            >
              <div className="text-xs text-textSecondary tracking-widest mb-2 font-sans">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="text-xl font-light">
                {slide.title}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
