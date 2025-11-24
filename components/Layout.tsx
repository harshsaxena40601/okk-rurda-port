import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChat from './AIChat';
import SocialSidebar from './SocialSidebar';
import { AppMode } from '../types';

interface LayoutProps {
  mode: AppMode;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ mode, children }) => {
  return (
    <div className={`min-h-screen bg-darker text-slate-300 selection:text-white ${mode === 'dev' ? 'selection:bg-primary/30' : 'selection:bg-pink-500/30'}`}>
      <Navbar mode={mode} />
      <SocialSidebar mode={mode} />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Layout;