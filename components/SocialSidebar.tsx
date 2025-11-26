import React from 'react';
import { HERO_DATA } from '../constants';
import { AppMode } from '../types';

interface SocialSidebarProps {
  mode: AppMode;
}

const SocialSidebar: React.FC<SocialSidebarProps> = ({ mode }) => {
  const socials = HERO_DATA[mode].socials;
  const isVideo = mode === 'video';

  // Colors based on mode
  const bgClass = isVideo ? 'bg-cine-red hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700';

  return (
    <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 md:gap-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${bgClass} text-white p-3 pr-4 pl-4 rounded-l-full shadow-lg transform translate-x-2 hover:translate-x-0 transition-transform duration-300 flex items-center justify-center min-h-[44px] min-w-[44px]`}
          aria-label={`Visit ${social.href}`}
        >
          <social.icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;