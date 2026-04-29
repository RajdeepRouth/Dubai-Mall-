import React from 'react';
import DeckButton from '../components/DeckButton';

export default function EditorialLuxurySlide({ headline, hook, body, backgroundImage, brands, quote, cta }) {
  return (
    <div 
      className="w-full h-full relative overflow-y-auto flex bg-dark"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
      <div 
        className="w-full lg:w-5/12 h-full p-8 pt-20 md:p-12 lg:p-16 flex flex-col justify-start lg:justify-center z-10 relative bg-black/40 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none lg:bg-gradient-to-r lg:from-black/80 lg:to-transparent overflow-y-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
        {hook && <div className="text-[#C9A96E] text-[12px] italic tracking-[0.1em] mb-2">{hook}</div>}
        <h2 className="text-[clamp(32px,4vw,56px)] font-light leading-[1.1] mb-4 text-white max-w-xl whitespace-pre-line">
          {headline}
        </h2>
        
        {body && <p className="text-white/60 text-[13px] leading-relaxed max-w-[400px] mb-6">{body}</p>}
        
        <div className="mb-6 overflow-hidden relative w-full py-4 flex items-center">
          <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused] w-max items-center">
            {[...brands, ...brands, ...brands].map((brand, i) => {
              const name = typeof brand === 'string' ? brand : brand.name;
              return (
                <a 
                  key={i} 
                  href={`https://www.${name.toLowerCase().replace(/ /g, '')}.com`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white/60 text-[12px] tracking-[0.3em] uppercase mx-8 hover:text-[#C9A96E] transition-colors flex items-center"
                >
                  {name}
                </a>
              );
            })}
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
          `}} />
        </div>

        <div className="mb-6 max-w-md relative pl-2 mt-2">
          <p className="text-lg md:text-xl italic text-white/80 mb-3 leading-relaxed font-serif relative z-10">
            "{quote.text}"
          </p>
          <p className="text-[10px] text-[#C9A96E]/60 uppercase tracking-widest font-semibold relative z-10">
            — {quote.author}, {quote.company}
          </p>
        </div>

        {cta && (
          <div className="relative z-10 mt-2 pb-8 lg:pb-0">
            <DeckButton label={cta.label} action={cta.action} variant="outline" />
          </div>
        )}
      </div>
      
      {/* Right side overlapping images */}
      <div className="hidden lg:block w-7/12 h-full absolute right-0 top-0 z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <img src="/images/fashion_dress.png" className="absolute w-[45%] aspect-[2/3] object-cover border border-white/10 shadow-2xl transform -rotate-6 -translate-x-16 opacity-70 blur-[1px] hover:blur-none hover:opacity-100 hover:rotate-0 hover:z-20 hover:scale-105 pointer-events-auto cursor-pointer transition-all duration-500" alt="Fashion 1" />
          <img src="/images/fashion_watch.png" className="absolute w-[35%] aspect-[3/4] object-cover border border-white/10 shadow-2xl transform rotate-6 translate-x-8 -translate-y-24 opacity-80 hover:opacity-100 hover:rotate-0 hover:z-20 hover:scale-105 pointer-events-auto cursor-pointer transition-all duration-500" alt="Fashion 2" />
          <img src="/images/fashion_handbag.png" className="absolute w-[40%] aspect-[2/3] object-cover border border-white/10 shadow-2xl transform rotate-3 translate-x-24 translate-y-16 opacity-100 z-10 hover:opacity-100 hover:rotate-0 hover:z-20 hover:scale-105 pointer-events-auto cursor-pointer transition-all duration-500" alt="Fashion 3" />
        </div>
      </div>
    </div>
  );
}
