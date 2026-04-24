import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, X } from 'lucide-react';

const EventsActivations = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="section-container" style={{ backgroundColor: 'var(--bg-light)', position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <h2 className="uppercase-tracking text-gold" style={{ marginBottom: '1rem' }}>Events & Activations</h2>
          <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            The Global Stage.
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            From international fashion shows in the Star Atrium to massive product launches at the Ice Rink. Our event spaces offer unparalleled brand exposure with cutting-edge AV infrastructure and 360-degree visibility.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-gold)', borderRadius: '50%' }} />
              <span>Star Atrium (Cap: 10,000+)</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-gold)', borderRadius: '50%' }} />
              <span>Dubai Ice Rink Venue</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-gold)', borderRadius: '50%' }} />
              <span>Fashion Catwalk</span>
            </li>
          </ul>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#business" className="btn-primary">Book an Event Space</a>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="btn-outline" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}
            >
              <PlayCircle size={20} />
              Watch Event Sizzle Reel
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ position: 'relative', height: '600px', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', group: 'true' }}
          onClick={() => setIsVideoOpen(true)}
        >
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" alt="Live Event" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'background-color 0.3s ease' }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PlayCircle size={80} color="var(--accent-gold)" strokeWidth={1} style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.5))' }} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)', zIndex: 1000,
              display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}
          >
            <button 
              onClick={() => setIsVideoOpen(false)} 
              style={{ position: 'absolute', top: '2rem', right: '3rem', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 1001 }}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              style={{ width: '90%', maxWidth: '1200px', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
            >
              <iframe 
                src="https://www.youtube.com/embed/s9GNPwUeYUU?autoplay=1&mute=1&loop=1&playlist=s9GNPwUeYUU" 
                style={{ width: '100%', height: '100%', border: 'none' }} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        @media (max-width: 1024px) {
          .section-container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default EventsActivations;
