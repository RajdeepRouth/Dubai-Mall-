import React, { useState } from 'react';
import DeckButton from '../components/DeckButton';

const VenueCard = ({ venue }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Extract capacity number from specs (e.g. "10,000 capacity" -> "10,000")
  const match = venue.specs.match(/([0-9,]+)\s+capacity/i);
  const capacityNum = match ? match[1] : "Custom";

  return (
    <div 
      className="bg-white/5 backdrop-blur-md border border-white/10 p-6 lg:p-8 flex flex-col cursor-pointer transition-all duration-500 overflow-hidden"
      style={{
        maxHeight: expanded ? '500px' : '260px',
        borderColor: expanded ? 'rgba(201,169,110,0.5)' : 'rgba(255,255,255,0.1)'
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <h3 className="text-2xl font-light text-[#C9A96E] mb-2">{venue.name}</h3>
      <p className="text-xs md:text-sm tracking-widest uppercase text-white/50 mb-2">{venue.specs}</p>
      
      <div 
        className="transition-all duration-300"
        style={{ 
          opacity: expanded ? 0 : 1, 
          maxHeight: expanded ? '0px' : '100px',
          overflow: 'hidden'
        }}
      >
        <p style={{ fontSize:12, fontStyle:'italic', color:'rgba(255,255,255,0.5)', marginBottom:12, lineHeight:1.6 }}>
          {venue.tagline}
        </p>
        <ul className="space-y-4 mb-4">
          {venue.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-white/80 text-sm md:text-base">
              <span className="text-[#C9A96E] mr-3 opacity-50">+</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div 
        className="transition-all duration-500 flex flex-col items-center w-full"
        style={{ 
          opacity: expanded ? 1 : 0,
          transform: expanded ? 'translateY(0)' : 'translateY(20px)',
          height: expanded ? '180px' : '0px',
          pointerEvents: expanded ? 'auto' : 'none'
        }}
      >
        <div className="w-full h-[120px] relative border border-white/20 mt-4 bg-black/20 flex items-center justify-center overflow-hidden">
          {/* Small dots pattern for people */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id={"dots-"+venue.name} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#C9A96E" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill={`url(#dots-${venue.name})`} />
          </svg>
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-white text-3xl font-light tracking-wider">{capacityNum}</div>
            <div className="text-[#C9A96E] text-[9px] uppercase tracking-[0.2em] mt-1">at full capacity</div>
          </div>
        </div>
        <div className="mt-auto text-[10px] text-white/40 tracking-[0.2em] uppercase">Collapse ▲</div>
      </div>
      
      {!expanded && (
        <div className="mt-auto pt-4 text-[10px] text-[#C9A96E]/60 tracking-[0.2em] uppercase text-center w-full">View Capacity ▼</div>
      )}
    </div>
  );
};

export default function SpecsCardSlide({ headline, hook, body, backgroundImage, venues, cta }) {
  return (
    <div 
      className="w-full h-full relative overflow-y-auto flex flex-col justify-center p-8 lg:p-12 hide-scrollbar"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
      <div 
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col h-full justify-start pt-20 pb-24 items-center overflow-y-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
        {hook && <div className="text-[#C9A96E] text-[12px] italic tracking-[0.1em] mb-4 text-center">{hook}</div>}
        <h2 className="text-[clamp(32px,4vw,56px)] font-light leading-[1.1] mb-4 text-white text-center whitespace-pre-line">
          {headline}
        </h2>
        {body && <p className="text-white/60 text-[14px] leading-relaxed max-w-[700px] mb-8 text-center">{body}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
          {venues.map((venue, i) => (
            <VenueCard key={i} venue={venue} />
          ))}
        </div>

        {cta && (
          <div className="text-center">
            <DeckButton label={cta.label} action={cta.action} variant="outline" />
          </div>
        )}
      </div>
    </div>
  );
}
