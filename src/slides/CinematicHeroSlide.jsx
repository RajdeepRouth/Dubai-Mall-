import React from 'react';
import DeckButton from '../components/DeckButton';

export default function CinematicHeroSlide({ hook, headline, subheadline, videoSrc, backgroundImage, images, cards = [], cta }) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      {/* Background Media (FIXED) */}
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
      ) : backgroundImage && !images ? (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
          <img src={backgroundImage} alt="Background" className="w-full h-full object-cover opacity-50 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" style={{ zIndex: 2 }} />
        </div>
      ) : images ? (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-[#1a1814]" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
        </div>
      ) : null}

      {/* Right side overlapping images (FIXED to screen) */}
      {images && images.length >= 2 && (
        <div className="hidden lg:block w-6/12 h-full absolute right-0 top-0 z-20 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center pt-10">
            <img src={images[0]} className="absolute w-[45%] aspect-[4/5] object-cover border border-white/10 shadow-2xl transform -rotate-6 -translate-x-12 opacity-80 hover:opacity-100 hover:rotate-0 hover:z-30 hover:scale-105 pointer-events-auto cursor-pointer transition-all duration-500" alt="Gallery 1" />
            <img src={images[1]} className="absolute w-[50%] aspect-[3/4] object-cover border border-white/10 shadow-2xl transform rotate-6 translate-x-16 translate-y-12 opacity-100 z-10 hover:opacity-100 hover:rotate-0 hover:z-30 hover:scale-105 pointer-events-auto cursor-pointer transition-all duration-500" alt="Gallery 2" />
          </div>
        </div>
      )}

      {/* Scrollable Foreground Content */}
      <div 
        className="absolute inset-0 z-10 overflow-y-auto flex flex-col p-4 md:p-8 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
        
        {/* Content Wrapper */}
        <div className={`relative w-full my-auto flex flex-col py-12 ${images ? 'items-start' : 'items-center'}`}>
          
          {/* Main Content */}
          <div className={`w-full flex flex-col whitespace-pre-line ${images ? 'lg:w-6/12 items-start text-left lg:pl-12' : 'max-w-5xl items-center text-center'}`}>
            {hook && <div className="text-[#C9A96E] text-[12px] italic tracking-[0.2em] uppercase mb-6">{hook}</div>}
            <h1 className={`text-[clamp(40px,5vw,84px)] font-light leading-[1.1] mb-6 text-white drop-shadow-xl tracking-wide ${images ? 'max-w-2xl' : ''}`}>
              {headline}
            </h1>
            {subheadline && (
              <p className="text-xl md:text-2xl text-white/80 mb-8 font-light max-w-2xl drop-shadow-md leading-relaxed">
                {subheadline}
              </p>
            )}
            
            {cta && (
              <div className="mt-2">
                <DeckButton 
                  label={cta.label} 
                  action={cta.action} 
                  variant={cards.length > 0 ? "ghost" : "outline"} 
                  size={cards.length > 0 ? "md" : "lg"} 
                />
              </div>
            )}
          </div>

          {/* Overlay Cards (For Slide 6) */}
          {cards.length > 0 && (
            <div className={`w-full z-20 pointer-events-none mt-16 ${images ? 'max-w-2xl mx-0 lg:pl-12' : 'max-w-7xl mx-auto px-4 md:px-16'}`}>
              <div className={`grid grid-cols-2 ${images ? 'md:grid-cols-2 gap-4' : 'md:grid-cols-4 gap-3'}`}>
                {cards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 text-left hover:border-[#C9A96E]/50 hover:bg-black/60 transition-all duration-500 pointer-events-auto group hover:-translate-y-2"
                  >
                    <h3 className="font-sans font-medium text-[#C9A96E] text-sm tracking-widest uppercase mb-3 group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className="font-sans font-light text-white/70 text-[13px] leading-relaxed mb-5">
                      {card.description}
                    </p>
                    <div className="w-full h-[1px] bg-white/10 mb-4 group-hover:bg-[#C9A96E]/40 transition-colors duration-500" />
                    <p className="font-sans font-medium text-white/90 text-[10px] tracking-widest uppercase">
                      {card.visitorCount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
