import React from 'react';
import { motion } from 'framer-motion';

const Attractions = () => {

  return (
    <div className="section-container" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
      <div style={{ position: 'relative', height: '80vh' }}>
        <iframe 
          src="https://www.youtube.com/embed/5Peo-ivmupE?autoplay=1&mute=1&loop=1&playlist=5Peo-ivmupE&controls=0&showinfo=0&rel=0" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', border: 'none', pointerEvents: 'none' }} 
          allow="autoplay; encrypted-media" 
        ></iframe>
        <div className="gradient-overlay-full" style={{ background: 'rgba(0,0,0,0.6)' }} />
        
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', padding: '10%' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ maxWidth: '600px' }}
          >
            <h2 className="uppercase-tracking text-gold" style={{ marginBottom: '1rem' }}>World-Class Attractions</h2>
            <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2', marginBottom: '1.5rem' }}>
              The Dubai Aquarium & Underwater Zoo
            </h3>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Anchoring the mall's entertainment offering, the 10-million liter tank draws millions of visitors annually. It serves as a spectacular backdrop for brand activations and ambient media.
            </p>
            <a href="#business" className="btn-primary" style={{ backgroundColor: '#fff', color: '#000' }}>Sponsorship Opportunities</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
