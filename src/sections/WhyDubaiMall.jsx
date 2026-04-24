import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Area', value: '12M', suffix: 'sq ft' },
  { label: 'Annual Footfall', value: '100M+', suffix: 'visitors' },
  { label: 'Retail Outlets', value: '1,200+', suffix: 'stores' },
  { label: 'F&B Outlets', value: '200+', suffix: 'restaurants' }
];

const WhyDubaiMall = () => {
  return (
    <div className="section-container" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px' }}
        >
          <h2 className="uppercase-tracking text-gold" style={{ marginBottom: '1rem' }}>Global Phenomenon</h2>
          <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2', marginBottom: '2rem' }}>
            Not just a mall. <br/>A global destination.
          </h3>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Located at the heart of Downtown Dubai, next to the iconic Burj Khalifa, The Dubai Mall is the ultimate canvas for global brands. With unparalleled reach, affluent demographics, and record-breaking footfall, it offers unmatched visibility and ROI for retailers and sponsors.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}
            >
              <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', color: '#fff', lineHeight: '1' }}>{stat.value}</div>
              <div style={{ fontSize: '1rem', fontWeight: '500', marginTop: '0.5rem', color: 'var(--accent-gold)' }}>{stat.label}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>{stat.suffix}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyDubaiMall;
