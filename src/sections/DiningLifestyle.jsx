import React from 'react';
import { motion } from 'framer-motion';

const DiningLifestyle = () => {
  return (
    <div className="section-container" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="uppercase-tracking text-gold" style={{ marginBottom: '1rem' }}
        >
          Gastronomy & Lifestyle
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '800px', lineHeight: '1.2' }}
        >
          A Global Culinary Journey.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '1.5rem', lineHeight: '1.6' }}
        >
          From Michelin-starred masterpieces overlooking the Dubai Fountain to trendy cafes and dynamic food halls, our F&B portfolio caters to every palate and occasion.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        style={{ position: 'relative', height: '60vh', minHeight: '400px', borderRadius: '4px', overflow: 'hidden' }}
      >
        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80" alt="Luxury Dining" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 100%)', display: 'flex', alignItems: 'center', padding: '10%' }}>
          <div style={{ maxWidth: '400px' }}>
            <h4 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Fountain Views</h4>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', lineHeight: '1.6' }}>Prime restaurant plots available with unobstructed views of the Dubai Fountain, guaranteeing high table turnover and premium pricing.</p>
            <a href="#business" className="btn-outline">View F&B Leasing</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DiningLifestyle;
