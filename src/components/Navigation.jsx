import React from 'react';

const Navigation = ({ total, current, onChange }) => {
  return (
    <div style={{
      position: 'fixed', right: '2rem', top: '50%', transform: 'translateY(-50%)',
      zIndex: 100, display: 'flex', flexDirection: 'column', gap: '1rem'
    }}>
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx} onClick={() => onChange(idx)}
          style={{
            width: '12px', height: '12px', borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            backgroundColor: current === idx ? '#ffffff' : 'transparent',
            cursor: 'pointer', padding: 0, transition: 'all 0.3s ease', outline: 'none'
          }}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  );
};

export default Navigation;
