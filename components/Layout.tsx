import React from 'react';
import Navbar from './Navbar';
import SocialSidebar from './SocialSidebar';
import Footer from './Footer';
import AIChat from './AIChat';
import { AppMode } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  mode: AppMode;
}

const Layout: React.FC<LayoutProps> = ({ children, mode }) => {
  return (
    <>
      <Navbar mode={mode} />
      <SocialSidebar mode={mode} />
      <main className="min-h-screen pt-20">
        {children}
      </main>
      <Footer />
      <AIChat />
    </>
  );
};

export default Layout;