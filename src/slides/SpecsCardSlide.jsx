import React from 'react';
import DeckCTA from '../components/DeckCTA';

export default function SpecsCardSlide({ headline, backgroundImage, venues, cta }) {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-center p-8 lg:p-12">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src={backgroundImage} alt="Venues" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-md" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col h-full justify-center pt-8 pb-16">
        <h2 className="text-[clamp(40px,4vw,64px)] font-light leading-[1.1] mb-8 text-white text-center">
          {headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {venues.map((venue, i) => (
            <div key={i} className="bg-cardBg/90 border border-white/10 p-6 lg:p-8 flex flex-col h-full hover:border-gold/30 transition-colors">
              <h3 className="text-2xl font-serif text-gold mb-2">{venue.name}</h3>
              <p className="text-xs md:text-sm tracking-widest uppercase text-textSecondary mb-6 pb-4 border-b border-white/10">{venue.specs}</p>
              
              <ul className="space-y-4 mb-auto">
                {venue.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-white/80 text-sm md:text-base">
                    <span className="text-gold mr-3 opacity-50">+</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {cta && (
          <div className="text-center">
            <DeckCTA label={cta.label} action={cta.action} variant="outline" />
          </div>
        )}
      </div>
    </div>
  );
}
