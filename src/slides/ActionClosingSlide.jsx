import React from 'react';
import DeckCTA from '../components/DeckCTA';

export default function ActionClosingSlide({ headline, backgroundImage, actionBlocks }) {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-between p-8 lg:p-12 bg-dark">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src={backgroundImage} alt="Dubai Skyline" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center flex-grow pt-8">
        <h2 className="text-[clamp(48px,5vw,80px)] font-light leading-[1.1] mb-8 text-white text-center">
          {headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
          {actionBlocks.map((block, i) => (
            <div key={i} className="bg-cardBg/80 backdrop-blur-md border border-white/10 p-10 flex flex-col items-center text-center hover:border-gold/50 transition-colors group">
              <h3 className="text-xl text-white font-medium mb-8 uppercase tracking-widest group-hover:text-gold transition-colors">
                {block.title}
              </h3>
              <DeckCTA
                label={block.label}
                action={block.action}
                variant="solid"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full text-center pb-4 mt-auto">
        <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 border-t border-white/10 pt-6 w-full max-w-7xl mx-auto">
          <span className="font-serif text-xl tracking-widest text-white">THE DUBAI MALL</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="text-textSecondary text-xs uppercase tracking-widest">A property of Emaar Malls</span>
        </div>
      </div>
    </div>
  );
}
