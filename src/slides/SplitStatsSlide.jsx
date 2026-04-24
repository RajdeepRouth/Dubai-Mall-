import React from 'react';
import useCountUp from '../hooks/useCountUp';
import DeckCTA from '../components/DeckCTA';

const StatItem = ({ stat }) => {
  const count = useCountUp(stat.value, 1500);

  return (
    <div className="flex flex-col mb-4">
      <div className="text-[clamp(32px,3vw,56px)] font-bold text-gold leading-none tracking-tighter mb-3 flex items-baseline">
        <span>{stat.prefix}</span>
        <span>{count}</span>
        <span>{stat.suffix}</span>
      </div>
      <div className="text-xs text-white/70 uppercase tracking-widest font-medium">
        {stat.label}
      </div>
    </div>
  );
};

export default function SplitStatsSlide({ headline, body, backgroundImage, stats, cta }) {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col md:flex-row bg-dark">
      {/* Left Content (Stats) */}
      <div className="w-full md:w-5/12 lg:w-1/2 h-full flex flex-col justify-center p-6 md:p-10 lg:p-16 overflow-hidden z-20 relative">
        <h2 className="text-[clamp(40px,4vw,64px)] font-light leading-[1.1] mb-4 text-white">
          {headline}
        </h2>
        <p className="text-white/80 text-lg leading-relaxed max-w-xl mb-8">
          {body}
        </p>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 max-w-2xl">
          {stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} />
          ))}
        </div>

        {cta && (
          <div className="mt-6">
            <DeckCTA label={cta.label} action={cta.action} variant="solid" />
          </div>
        )}
      </div>

      {/* Right Visual */}
      <div className="absolute right-0 top-0 w-full md:w-7/12 lg:w-1/2 h-full z-10 opacity-30 md:opacity-100 overflow-hidden">
        <img 
          src={backgroundImage} 
          alt="The Dubai Mall Location" 
          className="w-full h-full object-cover"
        />
        {/* Soft elegant gradient overlay to bridge the gap */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
