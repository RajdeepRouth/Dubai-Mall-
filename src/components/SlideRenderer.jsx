import React from 'react';
import CinematicHeroSlide from '../slides/CinematicHeroSlide';
import CanvasStatsSlide from '../slides/CanvasStatsSlide';
import InteractiveRetailSlide from '../slides/InteractiveRetailSlide';
import EditorialLuxurySlide from '../slides/EditorialLuxurySlide';
import GridGallerySlide from '../slides/GridGallerySlide';
import SpecsCardSlide from '../slides/SpecsCardSlide';
import ActionClosingSlide from '../slides/ActionClosingSlide';
import BrandPlacementSlide from '../slides/BrandPlacementSlide';
import MultiColumnSlide from '../slides/MultiColumnSlide';
import SplitStatsSlide from '../slides/SplitStatsSlide';

const componentMap = {
  CinematicHeroSlide,
  CanvasStatsSlide,
  InteractiveRetailSlide,
  EditorialLuxurySlide,
  GridGallerySlide,
  SpecsCardSlide,
  ActionClosingSlide,
  BrandPlacementSlide,
  MultiColumnSlide,
  SplitStatsSlide,
};

export default function SlideRenderer({ slide, direction }) {
  const Component = componentMap[slide.type];
  if (!Component) return (
    <div className="w-full h-full flex items-center justify-center text-textSecondary">
      Unknown slide type: {slide.type}
    </div>
  );
  
  const animClass = direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left';
  
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${animClass}`}>
      {/* GLOBAL SLIDE BACKGROUND */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${slide.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.65)',
        }} />
      </div>

      {/* SLIDE CONTENT */}
      <div className="relative z-10 w-full h-full">
        <Component {...slide} />
      </div>
    </div>
  );
}
