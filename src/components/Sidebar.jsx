import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ slides, activeSlide, setActiveSlide }) => {
  return (
    <div className="sidebar" style={{ 
      width: '300px', 
      height: '100vh', 
      backgroundColor: '#0a0a0a', 
      borderRight: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1.5rem',
      position: 'relative',
      zIndex: 100
    }}>
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#fff', letterSpacing: '0.05em' }}>THE DUBAI MALL</h1>
        <p style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>Digital Pitch Deck</p>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {slides.map((slide, index) => {
          const isActive = activeSlide === index;
          return (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(index)}
              style={{
                background: 'none', border: 'none', outline: 'none', cursor: 'pointer',
                textAlign: 'left', padding: '1rem', borderRadius: '8px',
                backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                color: isActive ? '#fff' : 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', gap: '1rem',
                transition: 'all 0.3s ease',
                position: 'relative', overflow: 'hidden'
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active-indicator"
                  style={{ position: 'absolute', left: 0, top: '25%', height: '50%', width: '3px', backgroundColor: 'var(--accent-gold)', borderRadius: '0 4px 4px 0' }}
                />
              )}
              <span style={{ fontSize: '0.8rem', opacity: 0.5, width: '20px' }}>{String(index + 1).padStart(2, '0')}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: isActive ? '600' : '400', letterSpacing: '0.05em' }}>
                {slide.title}
              </span>
            </button>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ fontSize: '0.7rem', color: '#555' }}>© {new Date().getFullYear()} Emaar Malls</p>
      </div>
    </div>
  );
};

export default Sidebar;
