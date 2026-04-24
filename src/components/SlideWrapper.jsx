import React from 'react';
import { motion } from 'framer-motion';

const SlideWrapper = ({ children, isActive, direction, zIndex }) => {
  const variants = {
    active: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } },
    up: { y: '-100%', opacity: 0, scale: 0.95, transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } },
    down: { y: '100%', opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } }
  };

  return (
    <motion.div
      initial={false} animate={isActive ? 'active' : direction} variants={variants}
      style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        zIndex: isActive ? 50 : zIndex, pointerEvents: isActive ? 'auto' : 'none',
        overflow: 'hidden', backgroundColor: 'var(--bg-dark)'
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideWrapper;
