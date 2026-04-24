import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Area', value: '12M+', suffix: 'sq ft' },
  { label: 'Annual Visitors', value: '80M+', suffix: 'projected' },
  { label: 'Luxury Brands', value: '350+', suffix: 'exclusive' },
  { label: 'Parking Spaces', value: '14K+', suffix: 'valet & self' }
];

const PropertyStatsSlide = ({ isActive }) => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--bg-dark)' }}>
      <div className="slide-content" style={{ justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }} animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
            Scale & Ambition
          </h2>
          <h3 style={{ fontSize: '3.5rem', marginBottom: '4rem', maxWidth: '800px', lineHeight: '1.2' }}>
            A destination built to redefine the global standard of retail real estate.
          </h3>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }} animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 + (idx * 0.1) }}
              style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1.5rem' }}
            >
              <div style={{ fontSize: '4rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: '1' }}>{stat.value}</div>
              <div style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.25rem' }}>{stat.label}</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.suffix}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyStatsSlide;
