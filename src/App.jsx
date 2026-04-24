import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Sidebar from './components/Sidebar';
import HeroSection from './sections/HeroSection';
import WhyDubaiMall from './sections/WhyDubaiMall';
import RetailLuxury from './sections/RetailLuxury';
import DiningLifestyle from './sections/DiningLifestyle';
import Attractions from './sections/Attractions';
import EventsActivations from './sections/EventsActivations';
import BusinessOpportunities from './sections/BusinessOpportunities';

const slides = [
  { id: 'intro', title: 'The Epicenter', component: HeroSection },
  { id: 'scale', title: 'Global Scale', component: WhyDubaiMall },
  { id: 'retail', title: 'Retail & Luxury', component: RetailLuxury },
  { id: 'dining', title: 'Dining & Lifestyle', component: DiningLifestyle },
  { id: 'attractions', title: 'Entertainment', component: Attractions },
  { id: 'events', title: 'Events & Platform', component: EventsActivations },
  { id: 'business', title: 'Partner With Us', component: BusinessOpportunities }
];

function App() {
  const [activeId, setActiveId] = useState('intro');
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: scrollRef.current, threshold: 0.5 }
    );

    slides.forEach((slide) => {
      const el = document.getElementById(slide.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="deck-container">
      <Sidebar slides={slides} activeId={activeId} scrollRef={scrollRef} />
      
      <main className="main-content" ref={scrollRef} id="main-scroll-container">
        {/* Progress Indicator */}
        <motion.div
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, height: '4px',
            background: 'var(--accent-gold)', transformOrigin: '0%', scaleX, zIndex: 1000,
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
          }}
        />

        {slides.map((slide) => (
          <section id={slide.id} key={slide.id} className="slide-section">
            <slide.component />
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
