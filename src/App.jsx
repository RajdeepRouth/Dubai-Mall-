import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import IntroVideoScreen from './screens/IntroVideoScreen';
import HubScreen from './screens/HubScreen';
import DeckShell from './screens/DeckShell';
import LoginScreen from './screens/LoginScreen';
import PathSelector from './screens/PathSelector';

export default function App() {
  const [stage, setStage] = useState('splash'); // 'splash' | 'intro' | 'hub' | 'path' | 'deck' | 'login'
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeSubDeckId, setActiveSubDeckId] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  const goToStage = (next, slideIndex = 0) => {
    setTransitioning(true);
    setTimeout(() => {
      setStage(next);
      if (next === 'deck') setCurrentSlideIndex(slideIndex);
      setTimeout(() => setTransitioning(false), 100);
    }, 700);
  };

  useEffect(() => {
    const handleLogin = () => goToStage('login', currentSlideIndex);
    window.addEventListener('deck:login', handleLogin);
    return () => window.removeEventListener('deck:login', handleLogin);
  }, [currentSlideIndex]);

  return (
    <div className="w-full h-screen bg-[#0A0A0A] overflow-hidden relative">
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#000',
        opacity: transitioning ? 1 : 0,
        pointerEvents: transitioning ? 'all' : 'none',
        transition: 'opacity 700ms ease',
      }} />

      {stage === 'splash' && (
        <SplashScreen onEnter={() => goToStage('intro')} />
      )}
      
      {stage === 'intro' && (
        <IntroVideoScreen onComplete={() => goToStage('hub')} />
      )}
      
      {stage === 'hub' && (
        <HubScreen 
          onSelect={(i) => goToStage('deck', i)} 
          onBegin={() => goToStage('path')} 
        />
      )}
      
      {stage === 'path' && (
        <PathSelector 
          onSelectPath={(i) => goToStage('deck', i)}
          onExploreAll={() => goToStage('deck', 0)}
          onBack={() => goToStage('hub')}
        />
      )}
      
      {stage === 'deck' && (
        <DeckShell
          currentSlideIndex={currentSlideIndex}
          setCurrentSlideIndex={setCurrentSlideIndex}
          activeSubDeckId={activeSubDeckId}
          setActiveSubDeckId={setActiveSubDeckId}
          onBackToHub={() => goToStage('hub')}
        />
      )}

      {stage === 'login' && (
        <LoginScreen onBack={() => goToStage('deck', currentSlideIndex)} />
      )}
    </div>
  );
}
