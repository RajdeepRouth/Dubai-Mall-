import React from 'react';
import { motion } from 'framer-motion';
import exclusiveImg from '../assets/images/exclusive_boutique.png';

const RetailLuxury = () => {
  return (
    <div className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}
      >
        <div style={{ maxWidth: '600px' }}>
          <h2 className="uppercase-tracking text-gold" style={{ marginBottom: '1rem' }}>Fashion Avenue</h2>
          <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}>The Pinnacle of Luxury.</h3>
        </div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', lineHeight: '1.6' }}>
          Home to over 200 luxury brands, Fashion Avenue offers VIP valets, personal shopping, and an exclusive clientele. Secure your flagship location among the world's elite fashion houses.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {[
          { title: "Exclusive Boutiques", img: exclusiveImg },
          { title: "Personalised Services", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80" },
          { title: "Curated Experiences", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80" }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            style={{ position: 'relative', height: '400px', overflow: 'hidden', borderRadius: '4px' }}
          >
            <img src={item.img} alt={item.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
              <h4 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
         <a href="#business" className="btn-outline">Inquire About Leasing</a>
      </div>
    </div>
  );
};

export default RetailLuxury;
