import React, { useEffect, useRef, useState } from 'react';
import DeckButton from '../components/DeckButton';

export default function CanvasStatsSlide({ headline, body, stats, hook, cta }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState(0); // 0: init, 1: stats counting, 2: headline
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    // Play ambient whoosh sound on mount
    const audio = new Audio('https://actions.google.com/sounds/v1/science_fiction/sweep_and_whoosh.ogg');
    audio.volume = 0.2;
    audio.play().catch(() => {});

    // Phase timeline
    const t1 = setTimeout(() => setPhase(1), 300); // Start counting & particles
    const t2 = setTimeout(() => setPhase(2), 1200); // Headline appears
    return () => {
      [t1, t2].forEach(clearTimeout);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (phase !== 1) return;
    
    // Animate stats
    const duration = 1200;
    const steps = 60;
    let step = 0;
    
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCounts(stats.map(s => {
        const val = s.value * easeOut;
        return val % 1 === 0 || s.value > 100 ? Math.floor(val) : val.toFixed(1);
      }));
      
      if (step >= steps) {
        clearInterval(interval);
        setCounts(stats.map(s => s.value));
      }
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [phase, stats]);

  useEffect(() => {
    if (phase === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Particle system - Flowing gold particles
    const particles = [];
    const numParticles = 200;
    
    class Particle {
      constructor() {
        this.reset(true);
      }
      
      reset(initial = false) {
        // Either start randomly across the screen initially, or spawn from left
        this.x = initial ? Math.random() * canvas.width : -20;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 3 + 1.5; // Flow left to right
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.6 + 0.2;
        this.life = Math.random() * 100;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life += 0.05;
        
        // slight wave based on life
        this.y += Math.sin(this.life) * 0.6;
        
        // fade out if past phase 2 optionally, but we can keep them flowing
        if (this.x > canvas.width + 20) {
          this.reset();
        }
      }
      
      draw() {
        ctx.fillStyle = `rgba(201, 169, 110, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add subtle glow to larger particles
        if (this.size > 2) {
          ctx.fillStyle = `rgba(201, 169, 110, ${this.alpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [phase]);

  return (
    <div 
      className="w-full h-full relative overflow-y-auto flex flex-col bg-black text-white p-8 lg:p-12 hide-scrollbar"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />
      
      <div className="relative z-10 max-w-[1100px] w-full flex flex-col md:flex-row gap-[40px] md:gap-[80px] my-auto">
        
        {/* LEFT COLUMN: Headline & Body */}
        <div className="flex-1 flex flex-col justify-center">
          {hook && (
            <div 
              className="text-[#C9A96E] text-[12px] italic tracking-[0.1em] mb-4"
              style={{
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 600ms ease'
              }}
            >
              {hook}
            </div>
          )}
          
          <h2 
            className="text-[32px] md:text-[48px] font-extralight text-white leading-tight mb-6 whitespace-pre-line"
            style={{
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 600ms ease 200ms'
            }}
          >
            {headline}
          </h2>
          
          <p 
            className="text-white/60 text-[14px] leading-relaxed max-w-[400px]"
            style={{
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 600ms ease 400ms'
            }}
          >
            {body}
          </p>
          
            {cta && (
              <div 
                className="mt-10 relative z-20 pointer-events-auto"
                style={{
                  opacity: phase >= 2 ? 1 : 0,
                  transition: 'all 600ms ease 600ms'
                }}
              >
                <DeckButton label={cta.label} action={cta.action} variant="text" />
              </div>
            )}
        </div>
        
        {/* RIGHT COLUMN: Stats */}
        <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-12 content-center mt-[40px] md:mt-0">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-[48px] md:text-[64px] font-light text-white leading-none">
                {s.prefix}{counts[i]}{s.suffix}
              </div>
              <div className="text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
