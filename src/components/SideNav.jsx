import React, { useState } from 'react';
import { slidesConfig } from '../data/slides.config';

export default function SideNav({ currentSlideIndex, onNavigate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="fixed right-0 top-0 bottom-0 z-40 flex flex-col justify-center"
      style={{
        width: hovered ? 220 : 36,
        background: hovered ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.2)',
        backdropFilter: hovered ? 'blur(12px)' : 'blur(8px)',
        transition: 'all 300ms ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col gap-4 w-full px-[13px] overflow-hidden">
        {slidesConfig.map((slide, i) => {
          const isActive = i === currentSlideIndex;
          return (
            <div 
              key={i}
              onClick={() => {
                onNavigate(i);
                setTimeout(() => setHovered(false), 500);
              }}
              className="flex items-center cursor-pointer group h-5"
            >
              {/* DOT */}
              <div 
                className="flex-shrink-0"
                style={{
                  width: isActive ? 10 : 6,
                  height: isActive ? 10 : 6,
                  borderRadius: '50%',
                  background: isActive ? '#C9A96E' : 'rgba(255,255,255,0.3)',
                  transform: isActive ? 'scale(1.4)' : 'scale(1)',
                  transition: 'all 300ms ease',
                  marginLeft: isActive ? -2 : 0,
                }}
              />
              
              {/* TEXT (visible on hover) */}
              <div 
                className="ml-[20px] flex gap-[12px] whitespace-nowrap"
                style={{
                  opacity: hovered ? 1 : 0,
                  transition: 'opacity 200ms ease 100ms',
                }}
              >
                <span className="text-[#C9A96E] text-[10px] tracking-[0.2em]">0{i + 1}</span>
                <span className="text-white text-[11px] font-light tracking-[0.05em]">{slide.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
