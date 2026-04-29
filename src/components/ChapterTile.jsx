import React, { useState } from 'react';

export default function ChapterTile({ slide, index, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer h-[150px] md:h-[200px]"
      style={{
        border: hovered ? '1px solid rgba(201,169,110,0.8)' : '1px solid rgba(255,255,255,0.06)',
        transition: 'border-color 300ms ease',
      }}
    >
      {/* BACKGROUND IMAGE DIV */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${slide.aiImage}')`,
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 700ms ease',
        }}
      />

      {/* GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
        }}
      />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 right-0 p-[16px] pointer-events-none">
        {/* ROW 1: Chapter number */}
        <div 
          className="text-[#C9A96E] text-[9px] tracking-[0.35em] font-normal"
        >
          0{index + 1}
        </div>
        
        {/* ROW 2: Title */}
        <div 
          className="text-white text-[15px] font-normal tracking-[0.05em] mt-[4px]"
        >
          {slide.title}
        </div>
        
        {/* ROW 3: Description */}
        <div 
          className="text-white/60 text-[10px] leading-relaxed mt-[8px]"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(4px)',
            transition: 'all 300ms ease',
          }}
        >
          {slide.description}
        </div>
      </div>

      {/* ARROW */}
      <div 
        className="absolute bottom-[16px] right-[16px] text-[#C9A96E] text-[18px] pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'all 300ms ease',
        }}
      >
        ›
      </div>
    </div>
  );
}
