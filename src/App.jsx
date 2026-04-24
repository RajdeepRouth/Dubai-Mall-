import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import SlideWrapper from './components/SlideWrapper';

import IntroSlide from './slides/IntroSlide';
import PropertyStatsSlide from './slides/PropertyStatsSlide';
import ExperiencesSlide from './slides/ExperiencesSlide';
import EventsSlide from './slides/EventsSlide';
import CTASlide from './slides/CTASlide';

const slides = [
  { id: 'intro', component: IntroSlide },
  { id: 'stats', component: PropertyStatsSlide },
  { id: 'experiences', component: ExperiencesSlide },
  { id: 'events', component: EventsSlide },
  { id: 'cta', component: CTASlide },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback((event) => {
    if (isScrolling) return;
    if (event.deltaY > 0) {
      if (currentSlide < slides.length - 1) { setIsScrolling(true); setCurrentSlide(prev => prev + 1); }
    } else if (event.deltaY < 0) {
      if (currentSlide > 0) { setIsScrolling(true); setCurrentSlide(prev => prev - 1); }
    }
    setTimeout(() => setIsScrolling(false), 1000);
  }, [currentSlide, isScrolling]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'Space') {
        if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="deck-container">
      <Navigation total={slides.length} current={currentSlide} onChange={setCurrentSlide} />
      {slides.map((slide, index) => {
        const SlideComponent = slide.component;
        return (
          <SlideWrapper 
            key={slide.id} 
            isActive={index === currentSlide}
            direction={index > currentSlide ? 'down' : index < currentSlide ? 'up' : 'current'}
            zIndex={slides.length - index}
          >
            <SlideComponent isActive={index === currentSlide} />
          </SlideWrapper>
        );
      })}
    </div>
  );
}

export default App;
