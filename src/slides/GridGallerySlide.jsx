import React from 'react';
import useCountUp from '../hooks/useCountUp';
import DeckCTA from '../components/DeckCTA';

const StatRow = ({ stat }) => {
  const count = useCountUp(stat.value, 1500);
  return (
    <div className="flex items-end gap-3 mb-4 border-b border-white/10 pb-2">
      <div className="text-4xl md:text-5xl font-bold text-gold tabular-nums tracking-tighter flex items-baseline">
        <span>{stat.prefix}</span>
        <span>{count}</span>
        <span>{stat.suffix}</span>
      </div>
      <div className="text-sm text-textSecondary uppercase tracking-widest mb-1">
        {stat.label}
      </div>
    </div>
  );
};

export default function GridGallerySlide({ headline, backgroundImage, images, stats, tiles, cta, subDeckCta }) {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-center items-center p-8 lg:p-12">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src={backgroundImage} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/90 backdrop-blur-md" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row h-full gap-6 lg:gap-12 pt-4 pb-20">
        {/* Left Column */}
        <div className="w-full md:w-5/12 flex flex-col justify-center pb-4">
          <h2 className="text-[clamp(40px,4vw,64px)] font-light leading-[1.1] mb-6 text-white">
            {headline}
          </h2>
          
          {stats && (
            <div className="mb-6">
              {stats.map((stat, i) => <StatRow key={i} stat={stat} />)}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            {cta && (
              <DeckCTA label={cta.label} action={cta.action} variant={cta.primary ? 'solid' : 'outline'} />
            )}
            {subDeckCta && (
              <DeckCTA 
                label={subDeckCta.label} 
                action={subDeckCta.action} 
                subDeckId={subDeckCta.subDeckId}
                variant="ghost" 
              />
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-7/12 flex flex-col justify-center pb-4">
          {images && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden bg-cardBg border border-white/5">
                  <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery item" />
                </div>
              ))}
            </div>
          )}
          
          {tiles && (
            <div className="flex flex-col gap-4">
              {tiles.map((tile, i) => (
                <div key={i} className="p-6 bg-cardBg/60 border border-white/10 text-xl font-light text-white/90 flex items-center justify-center text-center hover:border-gold/30 transition-colors">
                  {tile}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
