import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Us', href: '#why-us' },
    { name: 'Retail & Luxury', href: '#retail' },
    { name: 'Dining', href: '#dining' },
    { name: 'Attractions', href: '#attractions' },
    { name: 'Events', href: '#events' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        padding: scrolled ? '1rem 5%' : '2rem 5%',
        backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: '600', cursor: 'pointer' }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        THE DUBAI MALL
      </div>
      
      <nav style={{ display: 'none' }} className="desktop-nav">
        {/* We can hide this on mobile, but for now we'll display it inline */}
      </nav>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <nav style={{ display: 'flex', gap: '2rem' }} className="nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{ 
                color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem', 
                textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a href="#business" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem' }}>
          Partner With Us
        </a>
      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
};

export default Navigation;
