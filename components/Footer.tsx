import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker py-8 md:py-12 lg:py-16 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl md:text-2xl font-heading font-bold text-white tracking-tighter block mb-1 md:mb-2 hover:opacity-80 transition-opacity">
            RUDRA
          </a>
          <p className="text-slate-500 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Rudra Saxena. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-1 md:gap-2 text-slate-500 text-xs md:text-sm whitespace-nowrap">
          Made with <Heart size={12} className="text-red-500 fill-red-500 mx-1 md:mx-0.5" /> using React & Tailwind
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a href="#" className="p-2 md:p-0 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors min-h-[44px] min-w-[44px] md:min-h-auto md:min-w-auto flex items-center justify-center" aria-label="GitHub"><Github size={18} /></a>
          <a href="#" className="p-2 md:p-0 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors min-h-[44px] min-w-[44px] md:min-h-auto md:min-w-auto flex items-center justify-center" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#" className="p-2 md:p-0 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors min-h-[44px] min-w-[44px] md:min-h-auto md:min-w-auto flex items-center justify-center" aria-label="Twitter"><Twitter size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;