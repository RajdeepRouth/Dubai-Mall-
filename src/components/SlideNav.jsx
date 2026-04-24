import React from 'react';

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

export default function SlideNav({ currentIndex, totalSlides, onNext, onPrev, onOpenMenu }) {
  return (
    <>
      <div className="fixed top-6 right-8 z-30 pointer-events-auto">
        <button 
          onClick={onOpenMenu}
          className="text-textPrimary hover:text-gold transition-colors p-2 cursor-pointer"
        >
          <MenuIcon />
        </button>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-30 pointer-events-none pb-8 px-8">
        <div className="flex justify-between items-center w-full">
          <button 
            onClick={onPrev} 
            disabled={currentIndex === 0}
            className={`pointer-events-auto p-2 transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-gold text-textPrimary cursor-pointer'}`}
          >
            <ChevronLeft />
          </button>

          <div className="pointer-events-auto text-textPrimary font-sans text-sm tracking-widest opacity-80">
            {currentIndex + 1} / {totalSlides}
          </div>

          <button 
            onClick={onNext} 
            disabled={currentIndex === totalSlides - 1}
            className={`pointer-events-auto p-2 transition-all ${currentIndex === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-gold text-textPrimary cursor-pointer'}`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
