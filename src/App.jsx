import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import WhyDubaiMall from './sections/WhyDubaiMall';
import RetailLuxury from './sections/RetailLuxury';
import DiningLifestyle from './sections/DiningLifestyle';
import Attractions from './sections/Attractions';
import EventsActivations from './sections/EventsActivations';
import BusinessOpportunities from './sections/BusinessOpportunities';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Navigation />
      
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="why-us"><WhyDubaiMall /></section>
        <section id="retail"><RetailLuxury /></section>
        <section id="dining"><DiningLifestyle /></section>
        <section id="attractions"><Attractions /></section>
        <section id="events"><EventsActivations /></section>
        <section id="business"><BusinessOpportunities /></section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
