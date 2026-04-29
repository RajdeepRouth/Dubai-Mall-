import React, { useState } from 'react';
import DeckButton from '../components/DeckButton';

export default function InteractiveRetailSlide({ headline, hook, zones }) {
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);
  const activeZone = zones[activeZoneIndex];

  return (
    <div 
      className="w-full h-full relative overflow-y-auto flex flex-col justify-center items-center p-8 lg:p-12 hide-scrollbar"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-[60px] items-center">
        
        {/* LEFT COLUMN: Map Area */}
        <div className="flex-1 flex flex-col justify-center relative w-full">
          {hook && (
            <div className="text-[#C9A96E] text-[12px] italic tracking-[0.1em] mb-4">
              {hook}
            </div>
          )}
          <h2 className="text-[32px] md:text-[48px] font-extralight text-white leading-tight mb-6 whitespace-pre-line">
            {headline}
          </h2>
          {/* Note: The design had body text inside left column, though this slide uses zones */}

          <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm p-8 flex items-center justify-center overflow-hidden group">
            {/* SVG MAP */}
            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* FASHION AVENUE */}
              <g 
                onClick={() => setActiveZoneIndex(0)}
                className="cursor-pointer transition-all duration-300 pointer-events-auto hover:opacity-100"
                style={{ opacity: activeZoneIndex === 0 ? 1 : 0.4 }}
              >
                <path 
                  d="M 50 150 L 150 50 L 250 150 L 150 250 Z" 
                  fill={activeZoneIndex === 0 ? "rgba(201,169,110,0.3)" : "rgba(255,255,255,0.05)"}
                  stroke={activeZoneIndex === 0 ? "#C9A96E" : "rgba(255,255,255,0.2)"}
                  strokeWidth="2"
                  filter={activeZoneIndex === 0 ? "url(#glow)" : ""}
                  className="transition-all duration-300 hover:fill-[rgba(201,169,110,0.2)]"
                />
                <text x="150" y="155" textAnchor="middle" fill={activeZoneIndex === 0 ? "#FFF" : "rgba(255,255,255,0.5)"} fontSize="12" letterSpacing="2" className="pointer-events-none">FASHION</text>
              </g>

              {/* GRAND ATRIUM */}
              <g 
                onClick={() => setActiveZoneIndex(1)}
                className="cursor-pointer transition-all duration-300 pointer-events-auto hover:opacity-100"
                style={{ opacity: activeZoneIndex === 1 ? 1 : 0.4 }}
              >
                <path 
                  d="M 170 270 L 270 170 L 370 270 L 270 370 Z" 
                  fill={activeZoneIndex === 1 ? "rgba(201,169,110,0.3)" : "rgba(255,255,255,0.05)"}
                  stroke={activeZoneIndex === 1 ? "#C9A96E" : "rgba(255,255,255,0.2)"}
                  strokeWidth="2"
                  filter={activeZoneIndex === 1 ? "url(#glow)" : ""}
                  className="transition-all duration-300 hover:fill-[rgba(201,169,110,0.2)]"
                />
                <text x="270" y="275" textAnchor="middle" fill={activeZoneIndex === 1 ? "#FFF" : "rgba(255,255,255,0.5)"} fontSize="12" letterSpacing="1" className="pointer-events-none">DINING</text>
              </g>

              {/* THE SOUK */}
              <g 
                onClick={() => setActiveZoneIndex(2)}
                className="cursor-pointer transition-all duration-300 pointer-events-auto hover:opacity-100"
                style={{ opacity: activeZoneIndex === 2 ? 1 : 0.4 }}
              >
                <path 
                  d="M 50 270 L 130 190 L 210 270 L 130 350 Z" 
                  fill={activeZoneIndex === 2 ? "rgba(201,169,110,0.3)" : "rgba(255,255,255,0.05)"}
                  stroke={activeZoneIndex === 2 ? "#C9A96E" : "rgba(255,255,255,0.2)"}
                  strokeWidth="2"
                  filter={activeZoneIndex === 2 ? "url(#glow)" : ""}
                  className="transition-all duration-300 hover:fill-[rgba(201,169,110,0.2)]"
                />
                <text x="130" y="275" textAnchor="middle" fill={activeZoneIndex === 2 ? "#FFF" : "rgba(255,255,255,0.5)"} fontSize="10" letterSpacing="1" className="pointer-events-none">ADVENTURES</text>
              </g>
              
              {/* CONNECTING LINES */}
              <path d="M 150 250 L 170 270 M 130 190 L 150 150 M 210 270 L 270 270" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" className="pointer-events-none" />
            </svg>
            
            <div className="absolute top-4 left-4 text-[10px] text-white/30 tracking-[0.2em] uppercase pointer-events-none">Interactive Floor Plan</div>
          </div>
        </div>

        {/* RIGHT COLUMN: Zone Details */}
        <div className="flex-1 flex flex-col justify-center pl-[20px] md:pl-[60px] md:border-l border-white/10 mt-[40px] md:mt-0 h-full max-h-[500px]">
          <div 
            key={activeZone.id} 
            className="animate-fade-in-up"
            style={{ animationDuration: '400ms' }}
          >
            <div className="text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase mb-2">
              Selected Zone
            </div>
            <h3 className="text-[32px] font-light text-white mb-2">
              {activeZone.title}
            </h3>
            <div className="text-white/50 text-[14px] italic mb-10">
              {activeZone.subtitle}
            </div>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              {activeZone.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-[36px] font-extralight text-white leading-none mb-2">{stat.value}</div>
                  <div className="text-[#C9A96E] text-[9px] tracking-[0.2em] uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-4 mb-12">
              {activeZone.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-[6px] w-[4px] h-[4px] bg-[#C9A96E] rounded-full flex-shrink-0" />
                  <span className="text-white/70 text-[13px] tracking-[0.05em]">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pointer-events-auto relative z-20">
              <DeckButton label={activeZone.cta.label} action={activeZone.cta.action} variant="outline" />
            </div>
          </div>
        </div>

      </div>
      
      {/* Global Style for the animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up ease-out forwards;
        }
      `}} />
    </div>
  );
}
