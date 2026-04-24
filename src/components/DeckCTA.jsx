import React, { useState } from 'react';
import { handleAction } from '../utils/handleAction';

export default function DeckCTA({
  label,
  action,
  subDeckId,
  variant = 'outline',  // 'outline' | 'solid' | 'ghost'
  size = 'md',
  className = '',
}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Brief visual feedback before action fires
    setClicked(true);
    setTimeout(() => setClicked(false), 600);

    handleAction(action, { subDeckId });
  };

  const base = `
    group inline-flex items-center justify-center
    font-sans font-semibold tracking-widest uppercase
    transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) cursor-pointer pointer-events-auto
    select-none relative overflow-hidden z-30
    hover:-translate-y-1 hover:scale-[1.02]
    ${clicked ? 'scale-95 translate-y-0 shadow-none duration-150' : 'scale-100'}
  `;

  const sizes = {
    sm: 'px-6 py-3 text-xs',
    md: 'px-8 py-4 text-xs',
    lg: 'px-10 py-5 text-sm',
  };

  const variants = {
    solid:   'bg-gold text-dark hover:bg-white hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)] active:bg-gold',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-dark hover:shadow-[0_15px_35px_rgba(201,168,106,0.4)]',
    ghost:   'bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-gold/50 hover:text-gold hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]',
  };

  return (
    <button
      onClick={handleClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{label}</span>
      {/* Premium sweeping sheen effect on hover */}
      <div className="absolute top-0 -left-[100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" style={{ transform: 'skewX(-20deg)' }} />
    </button>
  );
}
