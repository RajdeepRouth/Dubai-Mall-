import React, { useState, useEffect, useRef } from 'react';
import { slidesConfig } from '../data/slides.config';
import SlideRenderer from '../components/SlideRenderer';
import SideNav from '../components/SideNav';
import SubDeck from '../components/SubDeck';

export default function DeckShell({
  currentSlideIndex,
  setCurrentSlideIndex,
  activeSubDeckId,
  setActiveSubDeckId,
  onBackToHub
}) {
  const [mounted, setMounted] = useState(false);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    setTimeout(() => setMounted(true), 50);
  }, []);

  const totalSlides = slidesConfig.length;
  const currentSlide = slidesConfig[currentSlideIndex];

  const goNext = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev();
    };
    
    // Custom events
    const handleNavigate = (e) => {
      if (e.detail.direction === 'next') goNext();
      if (e.detail.direction === 'prev') goPrev();
    };
    const handleGoto = (e) => {
      const i = e.detail.index;
      if (i >= 0 && i < totalSlides) setCurrentSlideIndex(i);
    };
    const handleSubdeck = (e) => {
      setActiveSubDeckId(e.detail.id);
    };
    const handleHub = () => onBackToHub();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('deck:navigate', handleNavigate);
    window.addEventListener('deck:goto', handleGoto);
    window.addEventListener('deck:subdeck', handleSubdeck);
    window.addEventListener('deck:hub', handleHub);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('deck:navigate', handleNavigate);
      window.removeEventListener('deck:goto', handleGoto);
      window.removeEventListener('deck:subdeck', handleSubdeck);
      window.removeEventListener('deck:hub', handleHub);
    };
  }, [currentSlideIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;
    
    // threshold
    if (Math.abs(diffX) > 50 || Math.abs(diffY) > 50) {
      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) goNext();
        else goPrev();
      } else {
        if (diffY > 0) goNext();
        else goPrev();
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 overflow-hidden bg-black font-['Helvetica_Neue',Arial,sans-serif]"
      style={{
        opacity: mounted ? 1 : 0,
        transition: 'opacity 600ms ease'
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* BACK TO HUB */}
      <button 
        onClick={onBackToHub}
        className="fixed top-[24px] left-[24px] z-40 bg-black/40 border border-white/20 text-white/70 py-2 px-5 text-[10px] tracking-[0.3em] uppercase cursor-pointer backdrop-blur-sm transition-all duration-300 hover:border-[#C9A96E] hover:text-[#C9A96E]"
      >
        ‹ Chapters
      </button>

      {/* ACTIVE SLIDE RENDERER */}
      <SlideRenderer slide={currentSlide} direction="next" />

      {/* SIDE NAV */}
      <SideNav 
        currentSlideIndex={currentSlideIndex} 
        onNavigate={setCurrentSlideIndex} 
      />

      {/* BOTTOM NAV */}
      <div className="fixed bottom-[32px] left-0 right-0 z-30 flex justify-center items-center pointer-events-none">
        <div className="flex items-center gap-[24px]">
          <button 
            onClick={goPrev}
            className="pointer-events-auto text-[#C9A96E] text-[18px] bg-transparent border-none cursor-pointer transition-opacity"
            style={{ opacity: currentSlideIndex === 0 ? 0.2 : 1 }}
          >
            ‹
          </button>
          
          <div className="text-white/40 text-[10px] tracking-[0.2em]">
            0{currentSlideIndex + 1} / 0{totalSlides}
          </div>
          
          <button 
            onClick={goNext}
            className="pointer-events-auto text-[#C9A96E] text-[18px] bg-transparent border-none cursor-pointer transition-opacity"
            style={{ opacity: currentSlideIndex === totalSlides - 1 ? 0.2 : 1 }}
          >
            ›
          </button>
        </div>
      </div>

      {/* SUBDECK OVERLAY */}
      {activeSubDeckId && (
        <SubDeck 
          subDeckId={activeSubDeckId} 
          onClose={() => setActiveSubDeckId(null)} 
        />
      )}
    </div>
  );
}
