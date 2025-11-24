import React from 'react';
import Hero from '../components/Hero';
import TechTicker from '../components/TechTicker';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import { AppMode } from '../types';

interface HomeProps {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
}

const Home: React.FC<HomeProps> = ({ mode, setMode }) => {
  return (
    <>
      <Hero mode={mode} setMode={setMode} />
      <TechTicker mode={mode} />
      <Projects mode={mode} />
      <Testimonials mode={mode} />
    </>
  );
};

export default Home;