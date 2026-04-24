import React from 'react';
import { motion } from 'framer-motion';

const CTASlide = ({ isActive }) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80" alt="Dubai Exterior" className="bg-image" />
      <div className="bg-overlay" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 100%)' }} />
      
      <div className="slide-content" style={{ justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.2 }} style={{ maxWidth: '700px', position: 'relative', zIndex: 10 }}
        >
          <h2 style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            The Opportunity
          </h2>
          <h3 style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '2rem' }}>Secure Your Legacy.</h3>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '3rem', lineHeight: '1.6' }}>
            Prime retail spaces are strictly by invitation. Connect with our leasing directors to explore partnership opportunities at the world's most prestigious address.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button className="btn-primary" style={{ backgroundColor: 'var(--accent-gold)', color: '#000' }}>Partner With Us</button>
            <button className="btn-outline">Download Prospectus</button>
          </div>
        </motion.div>
      </div>
      
      <div style={{ position: 'absolute', bottom: '2rem', left: '8rem', color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem', display: 'flex', gap: '2rem', zIndex: 10 }}>
        <span>© 2026 The Zenith Properties LLC</span>
        <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
        <span style={{ cursor: 'pointer' }}>Terms of Service</span>
      </div>
    </div>
  );
};

export default CTASlide;
