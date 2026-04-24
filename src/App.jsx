import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  { id: 'retail', title: 'Fashion Avenue', component: RetailLuxury },
  { id: 'dining', title: 'Gastronomy', component: DiningLifestyle },
  { id: 'attractions', title: 'Attractions', component: Attractions },
  { id: 'events', title: 'Events & Stages', component: EventsActivations },
  { id: 'business', title: 'Partner With Us', component: BusinessOpportunities }
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const CurrentSlide = slides[activeSlide].component;

  return (
    <div className="deck-container">
      <Sidebar slides={slides} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      
      <main className="main-content" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ width: '100%', height: '100%', overflowY: 'auto' }}
            className="slide-wrapper"
          >
            <CurrentSlide isActive={true} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
