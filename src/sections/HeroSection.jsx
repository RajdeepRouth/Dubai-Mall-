import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="full-height" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <video 
          autoPlay muted loop playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-shopping-mall-interior-with-escalators-and-shops-4294-large.mp4" type="video/mp4" />
        </video>
        <div className="gradient-overlay-full" />
      </div>
      
      <div 
        className="section-container"
        style={{ zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="uppercase-tracking text-gold" style={{ marginBottom: '1.5rem' }}
        >
          The Epicenter of Global Retail
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
          style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: '1.1', marginBottom: '2rem', maxWidth: '1200px' }}
        >
          The Dubai Mall
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
          style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '3rem' }}
        >
          Where the world comes to shop, dine, and experience the extraordinary. Position your brand at the most prestigious address on Earth.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
