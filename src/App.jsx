import React from 'react';
import StarfieldBackground from './components/StarfieldBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import  PerspectiveTunnelHero from './components/PerspectiveTunnelHero';

function App() {
  return (
    <div className="relative min-h-screen bg-[#03050a] text-slate-100">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarfieldBackground />
      </div>

      <div className="relative z-10 w-full min-h-[200vh]">
        <PerspectiveTunnelHero />
      </div>


      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
