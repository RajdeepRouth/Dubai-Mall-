import React from 'react';
import DeckButton from '../components/DeckButton';

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
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 flex flex-col items-center text-center hover:border-[#C9A96E]/50 transition-colors group">
              <div style={{ fontSize:9, color:'#C9A96E', letterSpacing:'0.3em', textTransform:'uppercase', marginBottom:8 }}>
                {block.eyebrow}
              </div>
              <h3 style={{ fontSize:20, color:'#fff', fontWeight:300, marginBottom:10, letterSpacing:'0.05em' }}>
                {block.title}
              </h3>
              <p style={{ fontSize:12, color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginBottom:20 }}>
                {block.description}
              </p>
              <DeckButton label={block.label} action={block.action} variant="solid" size="sm" />
            </div>
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
