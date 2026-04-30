import React, { useState } from 'react';
import DeckButton from '../components/DeckButton';
import useCountUp from '../hooks/useCountUp';

const zonesData = {
  fashion: {
    id: 'fashion',
    name: "Fashion Avenue",
    dailyVisitors: 45000,
    stats: [
      { value: "250+", label: "luxury brands" },
      { value: "#1", label: "dwell time" },
      { value: "VIP", label: "clientele" }
    ],
    cta: { 
      label: "Claim this location",
      action: "mailto:luxury@emaar.ae?subject=Fashion%20Avenue%20Placement%20Inquiry"
    }
  },
  atrium: {
    id: 'atrium',
    name: "Grand Atrium",
    dailyVisitors: 82000,
    stats: [
      { value: "600+", label: "brands nearby" },
      { value: "12M", label: "zone visits/yr" },
      { value: "Max", label: "visibility" }
    ],
    cta: {
      label: "Claim this location",
      action: "mailto:leasing@emaar.ae?subject=Grand%20Atrium%20Placement%20Inquiry"
    }
  },
  entertainment: {
    id: 'entertainment',
    name: "Entertainment Hub",
    dailyVisitors: 38000,
    stats: [
      { value: "1.5M", label: "aquarium visits" },
      { value: "700K", label: "KidZania visits" },
      { value: "High", label: "dwell time" }
    ],
    cta: {
      label: "Claim this location",
      action: "mailto:leasing@emaar.ae?subject=Entertainment%20Zone%20Placement%20Inquiry"
    }
  },
  fb: {
    id: 'fb',
    name: "F&B District",
    dailyVisitors: 55000,
    stats: [
      { value: "200+", label: "dining outlets" },
      { value: "22M", label: "F&B visits/yr" },
      { value: "3", label: "food halls" }
    ],
    cta: {
      label: "Claim this location",
      action: "mailto:fb_leasing@emaar.ae?subject=F%26B%20District%20Placement%20Inquiry"
    }
  },
  activation: {
    id: 'activation',
    name: "Activation Spaces",
    dailyVisitors: 200000,
    stats: [
      { value: "2wk+", label: "min term" },
      { value: "200M", label: "annual reach" },
      { value: "24hr", label: "setup time" }
    ],
    cta: {
      label: "Book this space",
      action: "mailto:leasing@emaar.ae?subject=Activation%20Space%20Booking"
    }
  }
};

const AnimatedStat = ({ value }) => {
  const count = useCountUp(value, 1500);
  return <>{Number(count).toLocaleString()}</>;
};

export default function BrandPlacementSlide({ headline, hook }) {
  const [activeZoneId, setActiveZoneId] = useState(null);
  
  const activeZone = activeZoneId ? zonesData[activeZoneId] : null;

  const getRectStyle = (zoneId) => {
    if (activeZoneId === zoneId) {
      return {
        fill: "rgba(201,169,110,0.25)",
        stroke: "#C9A96E",
        strokeWidth: 2,
        filter: "drop-shadow(0 0 8px rgba(201,169,110,0.4))",
        cursor: "pointer"
      };
    }
    return {
      fill: "rgba(255,255,255,0.03)",
      stroke: "rgba(255,255,255,0.1)",
      strokeWidth: 1,
      cursor: "pointer"
    };
  };

  const getTextProps = (zoneId) => ({
    fontSize: "10px",
    letterSpacing: "0.2em",
    fill: activeZoneId === zoneId ? "#FFFFFF" : "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    textAnchor: "middle",
    dominantBaseline: "middle",
    pointerEvents: "none",
    fontFamily: "sans-serif"
  });

  return (
    <div className="w-full h-full relative overflow-y-auto flex flex-col md:flex-row bg-[#0a0a0a] p-8 md:p-16 hide-scrollbar">
      <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
      
      {/* LEFT PANEL - FLOOR PLAN */}
      <div className="w-full md:w-[55%] h-full flex flex-col justify-center pr-0 md:pr-12 border-b md:border-b-0 md:border-r border-white/10 pb-12 md:pb-0 mb-12 md:mb-0 relative min-h-[500px]">
        <div className="absolute top-0 left-0 z-10 w-full">
          {hook && <div className="text-[#C9A96E] text-[10px] md:text-[12px] italic tracking-[0.2em] uppercase mb-4">{hook}</div>}
          <h2 className="text-[clamp(32px,4vw,56px)] font-light leading-[1.1] text-white whitespace-pre-line">
            {headline}
          </h2>
        </div>
        
        <div className="w-full max-w-lg mx-auto mt-24 flex-1 flex items-center">
          <svg viewBox="0 0 500 600" className="w-full h-auto drop-shadow-2xl">
            {/* Connecting corridor lines */}
            <line x1="240" y1="170" x2="260" y2="170" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="200" y1="370" x2="220" y2="370" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="150" y1="250" x2="150" y2="290" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="150" y1="450" x2="150" y2="490" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />

            {/* FLOOR LABELS */}
            <text x="20" y="80" fill="rgba(255,255,255,0.3)" fontSize="9" letterSpacing="3" fontFamily="sans-serif">GROUND FLOOR</text>
            <text x="20" y="280" fill="rgba(255,255,255,0.3)" fontSize="9" letterSpacing="3" fontFamily="sans-serif">LEVEL 1</text>
            <text x="20" y="480" fill="rgba(255,255,255,0.3)" fontSize="9" letterSpacing="3" fontFamily="sans-serif">LEVEL 2</text>

            {/* FLOOR 1 ZONES — Ground floor */}
            <g onClick={() => setActiveZoneId('fashion')} 
               onMouseEnter={(e) => e.currentTarget.firstChild.style.fill = 'rgba(201,169,110,0.15)'}
               onMouseLeave={(e) => activeZoneId !== 'fashion' && (e.currentTarget.firstChild.style.fill = 'rgba(255,255,255,0.03)')}
               className="transition-all duration-300">
              <rect x="60" y="90" width="180" height="160" {...getRectStyle('fashion')} className="transition-all duration-500" />
              <text x="150" y="170" {...getTextProps('fashion')}>Fashion Avenue</text>
            </g>
            
            <g onClick={() => setActiveZoneId('atrium')}
               onMouseEnter={(e) => e.currentTarget.firstChild.style.fill = 'rgba(201,169,110,0.15)'}
               onMouseLeave={(e) => activeZoneId !== 'atrium' && (e.currentTarget.firstChild.style.fill = 'rgba(255,255,255,0.03)')}
               className="transition-all duration-300">
              <rect x="260" y="90" width="200" height="160" {...getRectStyle('atrium')} className="transition-all duration-500" />
              <text x="360" y="170" {...getTextProps('atrium')}>Grand Atrium</text>
            </g>

            {/* FLOOR 2 ZONES — Level 1 */}
            <g onClick={() => setActiveZoneId('entertainment')}
               onMouseEnter={(e) => e.currentTarget.firstChild.style.fill = 'rgba(201,169,110,0.15)'}
               onMouseLeave={(e) => activeZoneId !== 'entertainment' && (e.currentTarget.firstChild.style.fill = 'rgba(255,255,255,0.03)')}
               className="transition-all duration-300">
              <rect x="60" y="290" width="140" height="160" {...getRectStyle('entertainment')} className="transition-all duration-500" />
              <text x="130" y="370" {...getTextProps('entertainment')}>Entertainment</text>
            </g>

            <g onClick={() => setActiveZoneId('fb')}
               onMouseEnter={(e) => e.currentTarget.firstChild.style.fill = 'rgba(201,169,110,0.15)'}
               onMouseLeave={(e) => activeZoneId !== 'fb' && (e.currentTarget.firstChild.style.fill = 'rgba(255,255,255,0.03)')}
               className="transition-all duration-300">
              <rect x="220" y="290" width="240" height="160" {...getRectStyle('fb')} className="transition-all duration-500" />
              <text x="340" y="370" {...getTextProps('fb')}>F&B District</text>
            </g>

            {/* FLOOR 3 ZONES — Level 2 */}
            <g onClick={() => setActiveZoneId('activation')}
               onMouseEnter={(e) => e.currentTarget.firstChild.style.fill = 'rgba(201,169,110,0.15)'}
               onMouseLeave={(e) => activeZoneId !== 'activation' && (e.currentTarget.firstChild.style.fill = 'rgba(255,255,255,0.03)')}
               className="transition-all duration-300">
              <rect x="60" y="490" width="380" height="80" {...getRectStyle('activation')} className="transition-all duration-500" />
              <text x="250" y="530" {...getTextProps('activation')}>Activation Spaces</text>
            </g>

            {/* ANIMATED PULSING DOTS on Active Zone */}
            {activeZoneId === 'fashion' && (
              <g fill="#C9A96E">
                <circle cx="60" cy="90" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" /></circle>
                <circle cx="240" cy="90" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" /></circle>
                <circle cx="60" cy="250" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite" /></circle>
                <circle cx="240" cy="250" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1.5s" repeatCount="indefinite" /></circle>
              </g>
            )}
            {activeZoneId === 'atrium' && (
              <g fill="#C9A96E">
                <circle cx="260" cy="90" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" /></circle>
                <circle cx="460" cy="90" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" /></circle>
                <circle cx="260" cy="250" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite" /></circle>
                <circle cx="460" cy="250" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1.5s" repeatCount="indefinite" /></circle>
              </g>
            )}
            {activeZoneId === 'entertainment' && (
              <g fill="#C9A96E">
                <circle cx="60" cy="290" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" /></circle>
                <circle cx="200" cy="290" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" /></circle>
                <circle cx="60" cy="450" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite" /></circle>
                <circle cx="200" cy="450" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1.5s" repeatCount="indefinite" /></circle>
              </g>
            )}
            {activeZoneId === 'fb' && (
              <g fill="#C9A96E">
                <circle cx="220" cy="290" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" /></circle>
                <circle cx="460" cy="290" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" /></circle>
                <circle cx="220" cy="450" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite" /></circle>
                <circle cx="460" cy="450" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1.5s" repeatCount="indefinite" /></circle>
              </g>
            )}
            {activeZoneId === 'activation' && (
              <g fill="#C9A96E">
                <circle cx="60" cy="490" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" /></circle>
                <circle cx="440" cy="490" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" /></circle>
                <circle cx="60" cy="570" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite" /></circle>
                <circle cx="440" cy="570" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1.5s" repeatCount="indefinite" /></circle>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* RIGHT PANEL - DETAILS */}
      <div className="w-full md:w-[45%] h-full flex flex-col justify-center pl-0 md:pl-12 min-h-[400px]">
        {!activeZone ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-white/30 italic font-light text-xl text-center">
              Select a zone to see the opportunity
            </p>
          </div>
        ) : (
          <div key={activeZone.id} className="animate-[fadeInUp_0.6s_ease-out_forwards]">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes pulseSlow {
                0% { opacity: 0.7; }
                50% { opacity: 1; text-shadow: 0 0 10px rgba(201,169,110,0.5); }
                100% { opacity: 0.7; }
              }
            `}} />
            
            <div className="mb-8">
              <div className="text-gold text-[9px] tracking-[0.4em] uppercase mb-2">YOUR BRAND</div>
              <h3 className="text-white text-4xl lg:text-5xl font-light">{activeZone.name}</h3>
            </div>
            
            <div className="w-12 h-px bg-[#C9A96E] my-8" />

            <div className="mb-10">
              <div className="text-[clamp(48px,6vw,80px)] font-light text-white leading-none tracking-tight mb-2">
                <AnimatedStat value={activeZone.dailyVisitors} />
              </div>
              <div className="text-gold text-[9px] tracking-[0.2em] uppercase">
                daily visitors pass this location
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-12">
              {activeZone.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-white text-2xl md:text-3xl font-light mb-1">{stat.value}</div>
                  <div className="text-gold text-[8px] uppercase tracking-widest opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm mb-10 max-w-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="font-serif text-xl md:text-2xl text-white mb-4 tracking-wider animate-[pulseSlow_3s_ease-in-out_infinite]">
                [YOUR BRAND NAME]
              </div>
              <div className="w-16 h-px bg-white/20 mb-4" />
              <div className="text-white/60 text-sm font-light mb-1">Prime Position</div>
              <div className="text-white/80 font-medium">{activeZone.name}</div>
              <div className="mt-4 text-[#C9A96E] text-[9px] uppercase tracking-widest">
                This space is available
              </div>
            </div>

            <DeckButton 
              label={activeZone.cta.label} 
              action={activeZone.cta.action} 
              variant="solid" 
            />
          </div>
        )}
      </div>
    </div>
  );
}
