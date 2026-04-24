import React from 'react';
import CinematicHeroSlide from '../slides/CinematicHeroSlide';
import SplitStatsSlide from '../slides/SplitStatsSlide';
import MultiColumnSlide from '../slides/MultiColumnSlide';
import EditorialLuxurySlide from '../slides/EditorialLuxurySlide';
import GridGallerySlide from '../slides/GridGallerySlide';
import SpecsCardSlide from '../slides/SpecsCardSlide';
import ActionClosingSlide from '../slides/ActionClosingSlide';

const componentMap = {
  CinematicHeroSlide,
  SplitStatsSlide,
  MultiColumnSlide,
  EditorialLuxurySlide,
  GridGallerySlide,
  SpecsCardSlide,
  ActionClosingSlide,
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
    <div className={`absolute inset-0 w-full h-full ${animClass}`}>
      <Component {...slide} />
    </div>
  );
}
