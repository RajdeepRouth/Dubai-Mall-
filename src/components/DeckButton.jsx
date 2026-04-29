import React, { useState } from 'react';
import { handleAction } from '../utils/handleAction';

export default function DeckButton({
  label,
  action,
  subDeckId,
  variant = 'outline', // 'outline' | 'solid' | 'ghost' | 'text'
  size = 'md',
  className = '',
}) {
  const [pressed, setPressed] = useState(false);

  const onClick = (e) => {
    e.stopPropagation();
    setPressed(true);
    setTimeout(() => setPressed(false), 400);
    handleAction(action, { subDeckId });
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '0.25em',
    cursor: 'pointer',
    transition: 'all 350ms ease',
    border: 'none',
    background: 'none',
    transform: pressed ? 'scale(0.97)' : 'scale(1)',
  };

  const sizes = {
    sm: { fontSize: 9,  padding: '10px 24px' },
    md: { fontSize: 10, padding: '13px 36px' },
    lg: { fontSize: 11, padding: '16px 48px' },
  };

  const variants = {
    solid: {
      background: '#C9A96E',
      color: '#0A0A0A',
      border: '1px solid #C9A96E',
    },
    outline: {
      background: 'transparent',
      color: '#C9A96E',
      border: '1px solid rgba(201,169,110,0.6)',
    },
    ghost: {
      background: 'rgba(255,255,255,0.05)',
      color: '#FFFFFF',
      border: '1px solid rgba(255,255,255,0.15)',
    },
    text: {
      background: 'transparent',
      color: '#C9A96E',
      border: 'none',
      borderBottom: '1px solid rgba(201,169,110,0.4)',
      borderRadius: 0,
      padding: '4px 0',
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...base,
        ...sizes[size],
        ...variants[variant],
      }}
      className={className}
      onMouseEnter={e => {
        if (variant === 'solid') {
          e.currentTarget.style.background = '#fff';
          e.currentTarget.style.color = '#0A0A0A';
        } else if (variant === 'outline') {
          e.currentTarget.style.background = '#C9A96E';
          e.currentTarget.style.color = '#0A0A0A';
        } else if (variant === 'ghost') {
          e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
        } else if (variant === 'text') {
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.borderBottomColor = '#fff';
        }
      }}
      onMouseLeave={e => {
        Object.assign(e.currentTarget.style, variants[variant]);
      }}
    >
      {label}
      <span style={{ fontSize: '1.1em', opacity: 0.7 }}>›</span>
    </button>
  );
}
