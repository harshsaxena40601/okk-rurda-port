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

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // Default to video based on prompt request to "Create a Video Editor Portfolio"
  // But check local storage first to persist choice
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
      <Layout mode={mode}>
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={handleModeChange} />} />
          <Route path="/about" element={<AboutPage mode={mode} />} />
          <Route path="/services" element={<ServicesPage mode={mode} />} />
          <Route path="/solutions" element={<SolutionsPage mode={mode} />} />
          <Route path="/shorts" element={<ShortsPage />} />
          <Route path="/projects" element={<ProjectsPage mode={mode} />} />
          <Route path="/contact" element={<ContactPage mode={mode} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;