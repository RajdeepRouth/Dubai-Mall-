import React from 'react';
import useCountUp from '../hooks/useCountUp';
import DeckButton from '../components/DeckButton';

const StatRow = ({ stat }) => {
  const count = useCountUp(stat.value, 1500);
  return (
    <div className="flex items-end gap-3 mb-4 border-b border-white/10 pb-2">
      <div className="text-4xl md:text-5xl font-light text-[#C9A96E] tabular-nums tracking-tighter flex items-baseline">
        <span>{stat.prefix}</span>
        <span>{count}</span>
        <span>{stat.suffix}</span>
      </div>
      <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">
        {stat.label}
      </div>
    </div>
  );
};

export default function GridGallerySlide({ headline, hook, body, backgroundImage, images, stats, tiles, cta, subDeckCta }) {
  return (
    <div 
      className="w-full h-full relative overflow-y-auto flex flex-col justify-center items-center p-8 lg:p-12 hide-scrollbar"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row gap-6 lg:gap-12 pt-4 pb-20 my-auto">
        {/* Left Column */}
        <div className="w-full md:w-5/12 flex flex-col justify-center pb-4 mt-[60px] md:mt-0">
          {hook && <div className="text-[#C9A96E] text-[12px] italic tracking-[0.1em] mb-4">{hook}</div>}
          <h2 className="text-[clamp(40px,4vw,64px)] font-light leading-[1.1] mb-6 text-white whitespace-pre-line">
            {headline}
          </h2>
          {body && <p className="text-white/60 text-[14px] leading-relaxed max-w-[400px] mb-8">{body}</p>}
          
          {stats && (
            <div className="mb-6">
              {stats.map((stat, i) => <StatRow key={i} stat={stat} />)}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            {cta && (
              <DeckButton label={cta.label} action={cta.action} variant={cta.primary ? 'solid' : 'text'} />
            )}
            {subDeckCta && (
              <DeckButton 
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
                <div 
                  key={i} 
                  className="aspect-[4/3] overflow-hidden bg-cardBg border border-white/5 cursor-default group"
                >
                  <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery item" />
                </div>
              ))}
            </div>
          )}
          
          {tiles && (
            <div className="flex flex-col gap-4">
              {tiles.map((tile, i) => (
                <div key={i} className="p-6 bg-cardBg/60 border border-white/10 text-xl font-light text-white/90 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left hover:border-[#C9A96E]/30 transition-colors">
                  <span className="mb-4 sm:mb-0">{typeof tile === 'string' ? tile : tile.label}</span>
                  {typeof tile !== 'string' && tile.action && (
                    <DeckButton label="Explore" action={tile.action} subDeckId={tile.subDeckId} variant="outline" size="sm" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
