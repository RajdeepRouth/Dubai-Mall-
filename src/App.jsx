import React, { useState, useEffect, useRef } from 'react';
import SlideNav from './components/SlideNav';
import ChapterPanel from './components/ChapterPanel';
import SlideRenderer from './components/SlideRenderer';
import SubDeck from './components/SubDeck';
import { slidesConfig } from './data/slides.config';

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isChapterPanelOpen, setIsChapterPanelOpen] = useState(false);
  const [activeSubDeckId, setActiveSubDeckId] = useState(null);
  const [direction, setDirection] = useState('next');
  
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeSubDeckId) setActiveSubDeckId(null);
        else if (isChapterPanelOpen) setIsChapterPanelOpen(false);
        return;
      }

      if (isChapterPanelOpen || activeSubDeckId) return;

      if (e.key === 'ArrowRight') goToNext();
      else if (e.key === 'ArrowLeft') goToPrev();
    };

    const handleOpenSubDeck = (e) => {
      setActiveSubDeckId(e.detail);
    };

    const handleDeckNavigate = (e) => {
      if (e.detail === 'next') goToNext();
      if (e.detail === 'prev') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-subdeck', handleOpenSubDeck);
    window.addEventListener('deck-navigate', handleDeckNavigate);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-subdeck', handleOpenSubDeck);
      window.removeEventListener('deck-navigate', handleDeckNavigate);
    };
  }, [currentSlideIndex, isChapterPanelOpen, activeSubDeckId]);

  const goToNext = () => {
    if (currentSlideIndex < slidesConfig.length - 1) {
      setDirection('next');
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentSlideIndex > 0) {
      setDirection('prev');
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;

    if (Math.abs(deltaX) > 50 && !isChapterPanelOpen && !activeSubDeckId) {
      if (deltaX > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  const jumpToSlide = (index) => {
    setDirection(index > currentSlideIndex ? 'next' : 'prev');
    setCurrentSlideIndex(index);
    setIsChapterPanelOpen(false);
  };

  return (
    <main 
      className="w-full h-screen bg-dark relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <SlideRenderer 
        slide={slidesConfig[currentSlideIndex]} 
        direction={direction}
        key={currentSlideIndex} 
      />

      <SlideNav 
        currentIndex={currentSlideIndex} 
        totalSlides={slidesConfig.length}
        onNext={goToNext}
        onPrev={goToPrev}
        onOpenMenu={() => setIsChapterPanelOpen(true)}
      />

      {isChapterPanelOpen && (
        <ChapterPanel 
          slides={slidesConfig}
          currentIndex={currentSlideIndex}
          onClose={() => setIsChapterPanelOpen(false)}
          onSelect={jumpToSlide}
        />
      )}

      {activeSubDeckId && (
        <SubDeck 
          subDeckId={activeSubDeckId}
          onClose={() => setActiveSubDeckId(null)}
        />
      )}
    </main>
  );
}

export default App;
