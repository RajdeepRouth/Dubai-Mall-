import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onEnter }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 800);
    const t3 = setTimeout(() => setPhase(3), 1100);
    const t4 = setTimeout(() => setPhase(4), 1400);
    const t5 = setTimeout(() => setPhase(5), 2000);
    const t6 = setTimeout(() => setPhase(6), 2800);
    return () => [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden flex flex-col items-center justify-center font-['Helvetica_Neue',Arial,sans-serif]">
      {/* VIDEO BACKGROUND */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '110%',
            height: '110%',
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(6px) brightness(0.45)',
            pointerEvents: 'none',
          }}
        >
          <source src="/videos/splash.mp4" type="video/mp4" />
        </video>
      </div>

      {/* DARK OVERLAY on top of video */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.45)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* ELEMENT 1 — Thin gold horizontal line */}
        <div 
          className="h-px bg-[#C9A96E] mb-[28px]"
          style={{
            width: phase >= 1 ? 60 : 0,
            transition: 'width 600ms ease',
          }}
        />

        {/* ELEMENT 2 — "THE" */}
        <div 
          className="text-[clamp(11px,1vw,14px)] font-light tracking-[0.6em] text-white/70 uppercase"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 700ms ease',
          }}
        >
          THE
        </div>

        {/* ELEMENT 3 — "DUBAI" */}
        <div 
          className="text-[clamp(42px,6vw,80px)] font-extralight tracking-[0.35em] text-white uppercase"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 700ms ease',
          }}
        >
          DUBAI
        </div>

        {/* ELEMENT 4 — "MALL" */}
        <div 
          className="text-[clamp(42px,6vw,80px)] font-semibold tracking-[0.35em] text-white uppercase -mt-[12px]"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 700ms ease',
          }}
        >
          MALL
        </div>

        {/* ELEMENT 5 — Tagline */}
        <div 
          className="text-[clamp(11px,1vw,13px)] italic font-light tracking-[0.2em] text-white/50 mt-[24px]"
          style={{
            opacity: phase >= 5 ? 1 : 0,
            transform: phase >= 5 ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 700ms ease',
          }}
        >
          The World's Most Visited Destination
        </div>

        {/* ELEMENT 6 — ENTER button */}
        <button
          onClick={onEnter}
          className={`
            mt-[52px] bg-transparent border border-white/35 text-white 
            py-[14px] px-[52px] text-[10px] tracking-[0.55em] uppercase font-light
            cursor-pointer transition-all duration-500 ease-in-out
            hover:border-[#C9A96E] hover:text-[#C9A96E] hover:tracking-[0.65em]
            ${phase === 6 ? 'animate-[enterPulse_1.5s_ease_0.3s_1]' : ''}
          `}
          style={{
            opacity: phase >= 6 ? 1 : 0,
            pointerEvents: phase >= 6 ? 'all' : 'none',
          }}
        >
          ENTER
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes enterPulse {
          0%   { box-shadow: 0 0 0 0 rgba(201,169,110,0.4) }
          50%  { box-shadow: 0 0 0 12px rgba(201,169,110,0) }
          100% { box-shadow: 0 0 0 0 rgba(201,169,110,0) }
        }
      `}} />
    </div>
  );
}
