import React, { useState } from 'react';

// Simple SVG Icons
const RetailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const EventIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
    <line x1="12" y1="22" x2="12" y2="15.5"></line>
    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
    <line x1="12" y1="2" x2="12" y2="8.5"></line>
  </svg>
);

const BrandIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

const PathCard = ({ title, subtitle, stats, icon, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col relative w-full md:w-[28%] h-[280px]"
      style={{
        background: hovered ? 'rgba(201,169,110,0.08)' : 'rgba(255,255,255,0.03)',
        border: hovered ? '1px solid rgba(201,169,110,0.5)' : '1px solid rgba(255,255,255,0.08)',
        padding: '40px 32px',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 350ms ease'
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        {icon}
      </div>
      <div style={{ fontSize: '22px', fontWeight: 300, color: 'white', marginBottom: '8px' }}>
        {title}
      </div>
      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
        {subtitle}
      </div>
      <div className="mt-auto" style={{ fontSize: '10px', color: '#C9A96E', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        {stats}
      </div>
      <div
        className="absolute bottom-6 right-8 text-[#C9A96E] text-[20px]"
        style={{
          opacity: hovered ? 1 : 0,
          transition: 'opacity 300ms ease'
        }}
      >
        ›
      </div>
    </div>
  );
};

export default function PathSelector({ onSelectPath, onExploreAll, onBack }) {
  return (
    <div className="fixed inset-0 bg-[#0A0A0A] font-['Helvetica_Neue',Arial,sans-serif] flex flex-col items-center justify-center">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://image.pollinations.ai/prompt/Dubai%20Mall%20aerial%20city%20lights%20night%20dark%20cinematic?width=1920&height=1080&nologo=true')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />
      
      {/* BACK LINK */}
      <button 
        onClick={onBack}
        className="absolute top-8 left-12 bg-transparent border-none text-white/40 text-[12px] tracking-[0.2em] uppercase cursor-pointer transition-colors hover:text-white"
      >
        ‹ Back
      </button>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-16 px-4">
        <h1 
          className="text-white mb-4"
          style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 200, letterSpacing: '0.1em' }}
        >
          What brings you here?
        </h1>
        <p className="text-white/50 italic" style={{ fontSize: '16px' }}>
          Choose your path. We'll take you straight there.
        </p>
      </div>

      {/* CARDS CONTAINER */}
      <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-center w-full max-w-[1200px] px-8">
        <PathCard 
          icon={<RetailIcon />}
          title="I'm a retailer"
          subtitle="Looking for space to lease"
          stats="1,300 brands · 5.9M sq ft"
          onClick={() => onSelectPath(2)} // Slide 3
        />
        <PathCard 
          icon={<EventIcon />}
          title="I'm an event organiser"
          subtitle="Looking for a venue"
          stats="500+ events/yr · 10,000 capacity"
          onClick={() => onSelectPath(6)} // Slide 7
        />
        <PathCard 
          icon={<BrandIcon />}
          title="I'm a brand"
          subtitle="Looking for audience reach"
          stats="200M visitors · 1B+ impressions"
          onClick={() => onSelectPath(1)} // Slide 2
        />
      </div>

      {/* BOTTOM LINK */}
      <div className="absolute bottom-12 w-full text-center z-10">
        <button 
          onClick={onExploreAll}
          className="bg-transparent border-none text-white/40 text-[10px] tracking-[0.35em] uppercase cursor-pointer border-b border-white/15 pb-1 transition-all duration-300 hover:text-white hover:border-[#C9A96E]"
        >
          Or explore everything ›
        </button>
      </div>
    </div>
  );
}
