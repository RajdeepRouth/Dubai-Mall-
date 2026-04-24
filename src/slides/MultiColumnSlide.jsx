import React from 'react';
import { icons } from '../utils/icons.jsx';
import DeckCTA from '../components/DeckCTA';

export default function MultiColumnSlide({ headline, backgroundImage, columns, cta }) {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-center items-center p-8 lg:p-12 pb-24">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src={backgroundImage} alt="Retail" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/90 backdrop-blur-[8px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col h-full justify-center">
        <div className="mb-8 mt-6 pb-12 text-center max-w-4xl mx-auto">
          <h2 className="text-[clamp(44px,4.5vw,72px)] font-light leading-[1.1] text-white">
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6">
          {columns.map((col, idx) => (
            <div key={idx} className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md p-6 lg:p-8 border-t border-white/20 flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="text-gold mb-6 opacity-90">{icons[col.icon]}</div>
              <h3 className="text-3xl font-light text-white mb-6 tracking-wide">{col.title}</h3>
              <ul className="space-y-4 mb-auto">
                {col.points.map((point, i) => (
                  <li key={i} className="flex items-start text-white/70 text-sm md:text-base leading-relaxed">
                    <span className="text-gold mr-4 mt-1">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {cta && (
          <div className="text-center pb-8">
            <DeckCTA label={cta.label} action={cta.action} variant="outline" size="lg" />
          </div>
        )}
      </div>
    </div>
  );
}
