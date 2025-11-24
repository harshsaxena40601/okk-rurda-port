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
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import RequireAuth from './components/RequireAuth';
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
      <Routes>
        {/* Public Routes wrapped in Layout */}
        <Route path="/" element={<Layout mode={mode}><Home mode={mode} setMode={handleModeChange} /></Layout>} />
        <Route path="/about" element={<Layout mode={mode}><AboutPage mode={mode} /></Layout>} />
        <Route path="/services" element={<Layout mode={mode}><ServicesPage mode={mode} /></Layout>} />
        <Route path="/solutions" element={<Layout mode={mode}><SolutionsPage mode={mode} /></Layout>} />
        <Route path="/shorts" element={<Layout mode={mode}><ShortsPage /></Layout>} />
        <Route path="/projects" element={<Layout mode={mode}><ProjectsPage mode={mode} /></Layout>} />
        <Route path="/contact" element={<Layout mode={mode}><ContactPage mode={mode} /></Layout>} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <RequireAuth>
            <AdminDashboard />
          </RequireAuth>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
