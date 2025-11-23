import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { AppMode } from '../types';

interface NavbarProps {
  mode: AppMode;
}

const Navbar: React.FC<NavbarProps> = ({ mode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const links = NAV_LINKS[mode];
  const isVideo = mode === 'video';
  
  // Design System
  const linkHover = isVideo ? 'hover:text-red-500' : 'hover:text-blue-400';
  const btnColor = isVideo 
    ? 'bg-red-600 hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]' 
    : 'bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-darker/80 backdrop-blur-xl border-b border-white/[0.05] py-3 md:py-4 supports-[backdrop-filter]:bg-darker/60' : 'bg-transparent py-5 md:py-7'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-heading font-black text-white tracking-tighter group transition-opacity flex items-center gap-1">
          RUDRA<span className={isVideo ? 'text-red-600' : 'text-blue-500'}>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium text-slate-400 transition-colors uppercase tracking-widest text-[11px] ${linkHover}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            className={`text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all transform hover:-translate-y-0.5 ${btnColor}`}
          >
            {mode === 'dev' ? "Let's Talk" : "Start Project"}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white transition-colors hover:text-slate-300 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-darker/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 shadow-2xl animate-in fade-in duration-200">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-slate-300 text-2xl font-heading font-bold ${linkHover}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`text-center text-white px-8 py-4 rounded-full mt-4 font-bold uppercase tracking-wide text-sm ${btnColor}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {mode === 'dev' ? "Let's Talk" : "Start Project"}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;