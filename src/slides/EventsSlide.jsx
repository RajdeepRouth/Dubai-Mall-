import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle } from 'lucide-react';

const EventsSlide = ({ isActive }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80" alt="Events" className="bg-image" />
      <div className="bg-overlay" style={{ background: 'rgba(0, 0, 0, 0.7)' }} />
      
      <div className="slide-content" style={{ justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: 50 }} animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }} style={{ maxWidth: '600px', position: 'relative', zIndex: 10 }}
        >
          <h2 style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
            Brand Activations
          </h2>
          <h3 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            The Global Stage for Haute Couture
          </h3>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Our central atrium is designed to host world-class fashion shows, exclusive product launches, and high-impact brand takeovers that generate global media attention.
          </p>
          <button className="btn-outline" onClick={() => setIsModalOpen(true)} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <PlayCircle size={20} /> View Activation Capabilities
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)', zIndex: 100,
              display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem'
            }}
          >
            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              style={{ width: '100%', maxWidth: '800px', backgroundColor: '#111', padding: '3rem', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <h4 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Activation Capabilities</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(255, 255, 255, 0.8)', lineHeight: '2' }}>
                <li style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>• 360-degree LED mapping across the central dome</li>
                <li style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>• 10,000 capacity main atrium for grand shows</li>
                <li style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>• Dedicated VIP & Media lounges for exclusive access</li>
                <li style={{ paddingBottom: '0.5rem' }}>• Integrated broadcast and high-speed streaming infrastructure</li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsSlide;
