import React from 'react';
import DeckButton from '../components/DeckButton';

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
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 lg:p-8 flex flex-col h-full hover:border-[#C9A96E]/30 transition-colors">
              <h3 className="text-2xl font-light text-[#C9A96E] mb-2">{venue.name}</h3>
              <p className="text-xs md:text-sm tracking-widest uppercase text-white/50 mb-2">{venue.specs}</p>
              <p style={{ fontSize:12, fontStyle:'italic', color:'rgba(255,255,255,0.5)', marginBottom:12, lineHeight:1.6 }}>
                {venue.tagline}
              </p>
              <div className="border-b border-white/10 mb-6 w-full" />
              
              <ul className="space-y-4 mb-auto">
                {venue.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-white/80 text-sm md:text-base">
                    <span className="text-[#C9A96E] mr-3 opacity-50">+</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
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
