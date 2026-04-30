import React, { useState } from 'react';
import DeckButton from '../components/DeckButton';

const ActionBlockCard = ({ block }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="backdrop-blur-md p-10 flex flex-col items-center text-center transition-all duration-300"
      style={{
        background: hovered ? 'rgba(201,169,110,0.08)' : 'rgba(255,255,255,0.03)',
        border: hovered ? '1px solid rgba(201,169,110,0.5)' : '1px solid rgba(255,255,255,0.1)',
        boxShadow: hovered ? '0 0 30px rgba(201,169,110,0.12)' : 'none'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontSize:9, color:'#C9A96E', letterSpacing:'0.3em', textTransform:'uppercase', marginBottom:8 }}>
        {block.eyebrow}
      </div>
      <h3 style={{ fontSize:20, color:'#fff', fontWeight:300, marginBottom:10, letterSpacing:'0.05em' }}>
        {block.title}
      </h3>
      <p style={{ fontSize:12, color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginBottom:10 }}>
        {block.description}
      </p>
      
      <div 
        style={{ 
          fontSize: 9, 
          color: '#C9A96E', 
          letterSpacing: '0.2em', 
          textTransform: 'uppercase',
          opacity: hovered ? 1 : 0,
          maxHeight: hovered ? '20px' : '0px',
          marginBottom: hovered ? 20 : 0,
          transition: 'all 300ms ease',
          overflow: 'hidden'
        }}
      >
        Response time: within 24 hours
      </div>

      <div className="mt-auto pointer-events-auto">
        <DeckButton 
          label={block.label} 
          action={block.action} 
          variant={hovered ? "solid" : "outline"} 
          size="sm" 
        />
      </div>
    </div>
  );
};

export default function ActionClosingSlide({ headline, hook, body, backgroundImage, actionBlocks }) {
  return (
    <div 
      className="w-full h-full relative overflow-y-auto flex flex-col p-8 lg:p-12"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center flex-grow pt-8 items-center text-center">
        {hook && <div className="text-[#C9A96E] text-[12px] italic tracking-[0.1em] mb-4">{hook}</div>}
        <h2 className="text-[clamp(48px,5vw,80px)] font-light leading-[1.1] mb-6 text-white text-center whitespace-pre-line">
          {headline}
        </h2>
        {body && <p className="text-white/60 text-[14px] leading-relaxed max-w-[600px] mb-12">{body}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
          {actionBlocks.map((block, i) => (
            <ActionBlockCard key={i} block={block} />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full text-center pb-[120px]">
        <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 border-t border-white/10 pt-6 w-full max-w-7xl mx-auto">
          <span className="font-serif text-xl tracking-widest text-white">THE DUBAI MALL</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="text-textSecondary text-xs uppercase tracking-widest">A property of Emaar Malls</span>
        </div>
      </div>
    </div>
  );
}
