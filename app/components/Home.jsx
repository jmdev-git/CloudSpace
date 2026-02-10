import React from 'react';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import Contact from './Contact';

const HomeSection = () => {
  return (
    <div className="min-h-screen bg-[#1F2943] font-sans text-slate-200">
      <Hero />
      <About />
      <Features />
      <Contact />
    </div>
  );
};

export default HomeSection;
