import React from 'react';

export default function LoginScreen({ onBack }) {
  return (
    <div className="w-full h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-8 relative font-['Helvetica_Neue',Arial,sans-serif]">
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />
      </div>

      <button
        onClick={onBack}
        className="absolute top-8 left-8 z-20 text-[#C9A96E] hover:text-white transition-colors text-sm uppercase tracking-widest flex items-center gap-2"
      >
        <span>‹</span> Return
      </button>

      <div className="relative z-10 w-full max-w-md bg-black/50 backdrop-blur-md border border-white/10 p-10 flex flex-col items-center text-center">
        <div className="text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase mb-4">
          Client Portal
        </div>
        <h2 className="text-3xl font-light text-white mb-8">
          Sign In
        </h2>
        
        <input 
          type="email" 
          placeholder="EMAIL ADDRESS" 
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 mb-4 text-xs tracking-wider outline-none focus:border-[#C9A96E] transition-colors placeholder:text-white/30"
        />
        <input 
          type="password" 
          placeholder="PASSWORD" 
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 mb-8 text-xs tracking-wider outline-none focus:border-[#C9A96E] transition-colors placeholder:text-white/30"
        />
        
        <button 
          onClick={onBack}
          className="w-full bg-[#C9A96E] text-black py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
