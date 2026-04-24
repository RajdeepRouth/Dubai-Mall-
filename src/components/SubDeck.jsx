import React, { useState, useEffect, useRef } from 'react';
import { subDecksConfig } from '../data/slides.config';
import DeckCTA from './DeckCTA';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

export default function SubDeck({ subDeckId, onClose }) {
  const [subIndex, setSubIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const touchStartX = useRef(null);

  const deckData = subDecksConfig[subDeckId];
  if (!deckData) return null;

  const slides = deckData.slides;
  const totalSlides = slides.length;
  const currentSlide = slides[subIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.stopPropagation();
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowRight' && subIndex < totalSlides - 1) {
        setDirection('next');
        setSubIndex(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && subIndex > 0) {
        setDirection('prev');
        setSubIndex(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [subIndex, totalSlides, onClose]);

  const handleTouchStart = (e) => {
    e.stopPropagation();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    if (touchStartX.current === null) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0 && subIndex < totalSlides - 1) {
        setDirection('next');
        setSubIndex(prev => prev + 1);
      } else if (deltaX < 0 && subIndex > 0) {
        setDirection('prev');
        setSubIndex(prev => prev - 1);
      }
    }
    touchStartX.current = null;
  };

  const animClass = direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left';

  return (
    <div 
      className="fixed inset-0 z-50 bg-dark text-white flex flex-col overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute top-0 left-0 w-full p-6 lg:p-8 flex justify-between items-center z-20 pointer-events-none">
        <div className="text-gold font-serif text-xl md:text-2xl tracking-wide pointer-events-auto">{deckData.title}</div>
        <button onClick={onClose} className="pointer-events-auto p-2 hover:text-gold transition-colors flex items-center gap-3 border border-white/20 rounded-full px-6 py-2 text-sm uppercase tracking-widest bg-dark/50 backdrop-blur-sm cursor-pointer">
          <span>Return to Deck</span>
          <CloseIcon />
        </button>
      </div>

      <div key={subIndex} className={`flex-1 relative overflow-hidden ${animClass}`}>
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img src={currentSlide.backgroundImage} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/85 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-center p-8 pt-16">
          <h2 className="text-[clamp(40px,4vw,64px)] font-light leading-[1.1] mb-6 max-w-4xl">
            {currentSlide.headline}
          </h2>
          <p className="text-textSecondary text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
            {currentSlide.body}
          </p>

          {currentSlide.highlights && (
            <ul className="space-y-3 max-w-2xl mb-8">
              {currentSlide.highlights.map((item, i) => (
                <li key={i} className="flex items-start text-lg">
                  <span className="text-gold mr-4 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {currentSlide.services && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-8">
              {currentSlide.services.map((svc, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6">
                  <h4 className="text-gold font-medium mb-2">{svc.name}</h4>
                  <p className="text-textSecondary text-sm">{svc.detail}</p>
                </div>
              ))}
            </div>
          )}

          {currentSlide.steps && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-8">
              {currentSlide.steps.map((step, i) => (
                <div key={i} className="border-l-2 border-gold pl-6 py-2">
                  <div className="text-gold font-bold mb-2 text-xl">{step.number}</div>
                  <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                  <p className="text-textSecondary text-sm">{step.detail}</p>
                </div>
              ))}
            </div>
          )}

          {currentSlide.cta && (
            <div className="mt-4">
              <div className="mb-6">
                <DeckCTA 
                  label={currentSlide.cta.label} 
                  action={currentSlide.cta.action} 
                  variant="solid" 
                />
              </div>
              {currentSlide.contact && (
                <div className="text-textSecondary text-sm flex gap-4 font-mono">
                  <span>{currentSlide.contact.email}</span>
                  <span>|</span>
                  <span>{currentSlide.contact.phone}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-8 pb-8 flex justify-between items-center z-20 pointer-events-none">
        <button 
          onClick={(e) => { e.stopPropagation(); setDirection('prev'); setSubIndex(prev => Math.max(0, prev - 1)); }} 
          disabled={subIndex === 0}
          className={`pointer-events-auto p-2 transition-all ${subIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-gold text-textPrimary cursor-pointer'}`}
        >
          <ChevronLeft />
        </button>

        <div className="pointer-events-auto text-textPrimary font-sans text-sm tracking-widest opacity-80">
          {subIndex + 1} / {totalSlides}
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); setDirection('next'); setSubIndex(prev => Math.min(totalSlides - 1, prev + 1)); }} 
          disabled={subIndex === totalSlides - 1}
          className={`pointer-events-auto p-2 transition-all ${subIndex === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-gold text-textPrimary cursor-pointer'}`}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
