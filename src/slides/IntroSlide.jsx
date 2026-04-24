import React from 'react';
import { motion } from 'framer-motion';

const IntroSlide = ({ isActive }) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <video 
        autoPlay muted loop playsInline className="bg-image"
        style={{ objectFit: 'cover' }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-shopping-mall-interior-with-escalators-and-shops-4294-large.mp4" type="video/mp4" />
      </video>
      <div className="bg-overlay" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%)' }} />
      
      <div className="slide-content" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }} animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 style={{ fontSize: '1rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Welcome to the Future of Retail
          </h2>
          <h1 style={{ fontSize: '5.5rem', lineHeight: '1.1', marginBottom: '2rem', maxWidth: '1000px', fontWeight: '400' }}>
            The Zenith<br/><span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Destined for Greatness</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: '1.6' }}>
            An unprecedented architectural marvel, combining luxury retail, world-class dining, and immersive entertainment.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ backgroundColor: 'var(--accent-gold)', color: '#000' }}>Discover The Vision</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSlide;
