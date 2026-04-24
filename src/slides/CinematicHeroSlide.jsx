import React from 'react';
import DeckCTA from '../components/DeckCTA';

export default function CinematicHeroSlide({ headline, subheadline, videoSrc, backgroundImage, cards = [], cta }) {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-center items-center text-center p-8 pb-24">
      {/* Background Media */}
      {videoSrc ? (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55 pointer-events-none" style={{ zIndex: 2 }} />
        </div>
      ) : backgroundImage ? (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img src={backgroundImage} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 pointer-events-none" style={{ zIndex: 2 }} />
        </div>
      ) : null}

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl flex flex-col items-center mt-[-5%]">
        <h1 className={`text-[clamp(48px,6vw,96px)] leading-[1.1] mb-6 text-white drop-shadow-lg ${headline.toLowerCase().includes('theme park') ? 'font-serif text-[clamp(40px,5.5vw,84px)]' : 'font-light'}`}>
          {headline}
        </h1>
        {subheadline && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light drop-shadow-md">
            {subheadline}
          </p>
        )}
        
        {cta && (
          <div className="mt-2">
            <DeckCTA label={cta.label} action={cta.action} variant="outline" />
          </div>
        )}
      </div>

      {/* Overlay Cards (For Slide 6) */}
      {cards.length > 0 && (
        <div className="absolute bottom-20 w-full px-8 md:px-16 z-20 pointer-events-none">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-black/60 backdrop-blur-md border border-white/10 p-5 text-left hover:border-gold/40 transition-colors duration-300 pointer-events-auto"
              >
                <h3 className="font-sans font-medium text-gold text-sm tracking-wider uppercase mb-2">
                  {card.title}
                </h3>
                <p className="font-sans font-light text-white/70 text-xs leading-relaxed mb-3">
                  {card.description}
                </p>
                <p className="font-sans font-semibold text-white text-xs tracking-widest uppercase">
                  {card.visitorCount}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
