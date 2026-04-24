import React from 'react';
import DeckCTA from '../components/DeckCTA';

export default function EditorialLuxurySlide({ headline, backgroundImage, brands, quote, cta }) {
  return (
    <div className="w-full h-full relative overflow-hidden flex bg-dark">
      <div className="w-full lg:w-5/12 h-full p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10 relative bg-dark">
        <h2 className="text-[clamp(40px,4.5vw,72px)] font-light leading-[1.1] mb-8 text-white max-w-xl">
          {headline}
        </h2>
        
        <div className="mb-8">
          <p className="text-textSecondary uppercase tracking-widest text-xs font-semibold mb-4">Featured Brands</p>
          <div className="flex flex-wrap gap-4">
            {brands.map((brand, i) => (
              <a 
                key={i} 
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/20 text-white/90 text-sm tracking-wider uppercase hover:bg-white hover:text-dark transition-colors cursor-pointer pointer-events-auto relative z-30"
              >
                {brand.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mb-8 border-l-2 border-gold pl-6 max-w-md">
          <p className="text-xl md:text-2xl italic text-white/90 mb-4 leading-relaxed font-serif">
            "{quote.text}"
          </p>
          <p className="text-sm text-gold font-semibold uppercase tracking-widest mb-1">
            — {quote.author}
          </p>
          <p className="text-xs text-textSecondary uppercase tracking-wider">{quote.company}</p>
        </div>

        {cta && (
          <div>
            <DeckCTA label={cta.label} action={cta.action} variant="outline" />
          </div>
        )}
      </div>
      
      <div className="hidden lg:block w-7/12 h-full absolute right-0 top-0 z-0 overflow-hidden">
        <img src={backgroundImage} alt="Luxury Retail" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
      </div>
    </div>
  );
}
