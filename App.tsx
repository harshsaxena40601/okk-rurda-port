import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-darker text-slate-300 selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TechTicker />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
