import React, { useState } from 'react';
import DeckButton from '../components/DeckButton';

const BrandRow = ({ brand }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div 
      className="flex justify-between items-center py-[10px] md:py-3 cursor-pointer"
      style={{
        borderBottom: hovered ? '1px solid #C9A96E' : '1px solid rgba(255,255,255,0.1)',
        transition: 'border-color 300ms ease'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="tracking-[0.2em] uppercase transition-colors duration-300"
        style={{ color: hovered ? '#FFF' : 'rgba(255,255,255,0.6)', fontSize: '13px' }}
      >
        {brand.name}
      </div>
      <div 
        style={{
          color: '#C9A96E',
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(10px)',
          transition: 'all 300ms ease',
          pointerEvents: 'none'
        }}
      >
        Since {brand.since} · {brand.floors} floors · {brand.sqft} sq ft
      </div>
    </div>
  );
};

export default function EditorialLuxurySlide({ headline, hook, body, backgroundImage, brands, quote, cta }) {
  return (
    <div 
      className="w-full h-full relative overflow-y-auto flex bg-dark"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
      <div 
        className="w-full lg:w-5/12 h-full p-8 pt-16 md:p-12 lg:p-16 flex flex-col justify-center z-10 relative bg-black/40 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none lg:bg-gradient-to-r lg:from-black/80 lg:to-transparent overflow-y-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
        {hook && <div className="text-[#C9A96E] text-[12px] italic tracking-[0.1em] mb-2">{hook}</div>}
        <h2 className="text-[clamp(32px,4vw,56px)] font-light leading-[1.1] mb-4 text-white max-w-xl whitespace-pre-line">
          {headline}
        </h2>
        
        {body && <p className="text-white/60 text-[13px] leading-relaxed max-w-[400px] mb-4">{body}</p>}
        
        <div className="mb-6 w-full max-w-[400px] flex flex-col">
          {[
            { name: "Louis Vuitton", since: "2008", floors: 2, sqft: "8,200" },
            { name: "Chanel",        since: "2010", floors: 1, sqft: "4,500" },
            { name: "Hermès",        since: "2009", floors: 1, sqft: "3,800" },
            { name: "Rolex",         since: "2008", floors: 1, sqft: "2,100" },
            { name: "Gucci",         since: "2011", floors: 2, sqft: "6,400" },
          ].map((b, i) => (
            <BrandRow key={i} brand={b} />
          ))}
        </div>

        <div className="mb-4 max-w-md relative pl-2 mt-2">
          <p className="text-sm md:text-base italic text-white/80 mb-2 leading-relaxed font-serif relative z-10">
            "{quote.text}"
          </p>
          <p className="text-[9px] text-[#C9A96E]/60 uppercase tracking-widest font-semibold relative z-10">
            — {quote.author}, {quote.company}
          </p>
        </div>

        {cta && (
          <div className="relative z-10 mt-1 pb-4 lg:pb-0">
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
