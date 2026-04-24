import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  { id: 'shopping', title: 'High-Fashion Boutiques', desc: 'Curated flagship stores from the world’s most prestigious luxury houses.', img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1920&q=80' },
  { id: 'dining', title: 'Michelin-Star Dining', desc: 'An unparalleled gastronomic journey featuring globally renowned chefs.', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80' },
  { id: 'entertainment', title: 'Immersive Entertainment', desc: 'Cinematic attractions and architectural marvels that inspire awe.', img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1920&q=80' }
];

const ExperiencesSlide = ({ isActive }) => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#050505' }}>
      <div className="slide-content" style={{ justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
        >
          <div>
            <h2 style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              The Ecosystem
            </h2>
            <h3 style={{ fontSize: '3rem', lineHeight: '1.2' }}>Three Pillars of Prestige</h3>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', height: '60vh' }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id} initial={{ opacity: 0, y: 50 }} animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 + (idx * 0.2) }}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}
            >
              <img src={exp.img} alt={exp.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} />
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 100%)',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem'
              }}>
                <h4 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', fontWeight: '400' }}>{exp.title}</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: '1.5' }}>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesSlide;
