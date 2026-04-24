import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BusinessOpportunities = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitted');
    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <div className="section-container" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80" alt="Dubai Downtown" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="gradient-overlay-full" style={{ background: 'rgba(5,5,5,0.85)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="uppercase-tracking text-gold" style={{ marginBottom: '1rem' }}>The Next Step</h2>
          <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', marginBottom: '1.5rem' }}>Secure Your Legacy.</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: '1.6' }}>
            Whether you are looking to lease a flagship retail space, sponsor a major attraction, or host a world-class event, our commercial team is ready to assist.
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>Interest Area</label>
            <select style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', outline: 'none', fontFamily: 'var(--font-sans)' }} required>
              <option value="retail">Retail Leasing</option>
              <option value="fb">F&B Leasing</option>
              <option value="sponsorship">Brand Sponsorship</option>
              <option value="events">Event Booking</option>
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>Company / Brand</label>
            <input type="text" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', outline: 'none', fontFamily: 'var(--font-sans)' }} required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>Work Email</label>
            <input type="email" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', outline: 'none', fontFamily: 'var(--font-sans)' }} required />
          </div>
          
          <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%', backgroundColor: 'var(--accent-gold)' }}>
            {formState === 'submitted' ? 'Request Sent' : 'Request Partnership Details'}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default BusinessOpportunities;
