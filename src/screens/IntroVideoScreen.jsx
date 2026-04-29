import React, { useEffect, useState } from 'react';

export default function IntroVideoScreen({ onComplete }) {
  const [showCaption, setShowCaption] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-advance or complete when video ends (after 40s)
  useEffect(() => {
    const duration = 40000;
    const interval = 100;
    let elapsed = 0;
    
    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);
      if (elapsed >= duration) {
        clearInterval(timer);
        onComplete();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#000',
      overflow: 'hidden',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    }}>

      {/* ── VIDEO LAYER ── */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        minWidth: '100%',
        minHeight: '100%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }}>
        <iframe
          src="https://www.youtube.com/embed/z8ockpQebDA?autoplay=1&mute=1&controls=0&start=0&end=40&modestbranding=1&rel=0&playsinline=1&showinfo=0&disablekb=1&iv_load_policy=3&vq=hd1080"
          style={{ width: '100%', height: '100%', border: 'none', transform: 'scale(1.5)' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* ── BLACK OVERLAY TO HIDE YOUTUBE PLAY BUTTON DURING LOAD ── */}
      <div 
        style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          backgroundColor: '#000',
          opacity: progress > 2 ? 0 : 1,
          transition: 'opacity 1s ease'
        }} 
      />

      {/* ── CINEMATIC OVERLAYS ── */}
      {/* Top vignette */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '30%', zIndex: 4, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
      }} />
      {/* Bottom vignette */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '45%', zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
      }} />
      {/* Left + right vignettes for cinematic feel */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
      }} />

      {/* ── CINEMATIC LETTERBOX BARS ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 48, background: '#000', zIndex: 5, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 48, background: '#000', zIndex: 5, pointerEvents: 'none',
      }} />

      {/* ── UI LAYER ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>

        {/* Counter — top left */}
        <div style={{
          position: 'absolute', top: 60, left: 32,
          fontSize: 10, letterSpacing: '0.25em',
          color: 'rgba(255,255,255,0.35)',
        }}>
          01 / 01
        </div>

        {/* SKIP button — top right */}
        <button
          onClick={onComplete}
          style={{
            position: 'absolute', top: 56, right: 32,
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.7)',
            padding: '8px 20px',
            fontSize: 10, letterSpacing: '0.3em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            transition: 'all 300ms',
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            pointerEvents: 'auto'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#C9A96E';
            e.currentTarget.style.color = '#C9A96E';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
          }}
        >
          SKIP INTRO ›
        </button>

        {/* Caption — bottom left, above bars */}
        <div style={{
          position: 'absolute', bottom: 80, left: 48,
          opacity: showCaption ? 1 : 0,
          transform: showCaption ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 600ms ease',
        }}>
          <div style={{
            width: 24, height: 1,
            background: '#C9A96E',
            marginBottom: 12,
          }} />
          <div style={{
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            fontWeight: 200,
            letterSpacing: '0.1em',
            color: '#FFFFFF',
            lineHeight: 1.3,
          }}>
            The World's Most Visited Destination
          </div>
        </div>

        {/* Progress bar — sits above bottom letterbox */}
        <div style={{
          position: 'absolute', bottom: 48, left: 0, right: 0,
          height: 2,
          background: 'rgba(255,255,255,0.1)',
          zIndex: 10,
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: '#C9A96E',
            transition: 'width 300ms linear',
          }} />
        </div>
      </div>
    </div>
  );
}
