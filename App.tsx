import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import SolutionsPage from './pages/Solutions';
import ShortsPage from './pages/Shorts';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import { AppMode } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('video');

  useEffect(() => {
    const savedMode = localStorage.getItem('portfolioMode');
    if (savedMode === 'dev' || savedMode === 'video') {
      setMode(savedMode);
    }
  }, []);

  const handleModeChange = (newMode: AppMode) => {
    setMode(newMode);
    localStorage.setItem('portfolioMode', newMode);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout mode={mode}><Home mode={mode} setMode={handleModeChange} /></Layout>} />
        <Route path="/about" element={<Layout mode={mode}><AboutPage mode={mode} /></Layout>} />
        <Route path="/services" element={<Layout mode={mode}><ServicesPage mode={mode} /></Layout>} />
        <Route path="/solutions" element={<Layout mode={mode}><SolutionsPage mode={mode} /></Layout>} />
        <Route path="/shorts" element={<Layout mode={mode}><ShortsPage /></Layout>} />
        <Route path="/projects" element={<Layout mode={mode}><ProjectsPage mode={mode} /></Layout>} />
        <Route path="/contact" element={<Layout mode={mode}><ContactPage mode={mode} /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;