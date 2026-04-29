import React from 'react';
import ChapterTile from '../components/ChapterTile';
import { slidesConfig } from '../data/slides.config';

export default function HubScreen({ onSelect }) {
  return (
    <div className="fixed inset-0 overflow-y-auto bg-black font-['Helvetica_Neue',Arial,sans-serif]">
      {/* BACKGROUND */}
      <div 
        className="fixed inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] z-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://image.pollinations.ai/prompt/Dubai%20Mall%20atrium%20birds%20eye%20view%20luxury%20marble%20golden%20light%20crowded%20cinematic?width=1920&height=1080&nologo=true')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px) brightness(0.4)',
        }}
      />
      <div className="fixed inset-0 z-0 bg-black/60 pointer-events-none" />

      {/* TOP BAR */}
      <div 
        className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center px-[48px] py-[24px]"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)' }}
      >
        <div className="text-white text-[13px] font-light tracking-[0.4em] uppercase">
          THE DUBAI MALL
        </div>
        <div className="text-white/50 text-[11px] italic tracking-[0.25em]">
          Select Your Chapter
        </div>
        <div className="text-white/30 text-[10px] uppercase tracking-[0.1em]">
          A property of Emaar Malls
        </div>
      </div>

      {/* CHAPTER GRID */}
      <div className="relative z-10 pt-[100px] px-[48px] pb-[120px] max-w-[1100px] mx-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {slidesConfig.map((slide, i) => (
            <ChapterTile 
              key={slide.id} 
              slide={slide} 
              index={i} 
              onSelect={() => onSelect(i)} 
            />
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-20 px-[48px] py-[24px] text-center"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}
      >
        <button 
          onClick={() => onSelect(0)}
          className="bg-transparent border-none text-white/40 text-[10px] tracking-[0.35em] uppercase cursor-pointer border-b border-white/15 pb-1 transition-all duration-300 hover:text-white hover:border-[#C9A96E]"
        >
          Begin from the Opening ›
        </button>
      </div>
    </div>
  );
}
