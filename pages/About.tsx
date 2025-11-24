import React from 'react';
import About from '../components/About';
import { AppMode } from '../types';
import { TIMELINE_DATA } from '../constants';

interface AboutPageProps {
  mode: AppMode;
}

const AboutPage: React.FC<AboutPageProps> = ({ mode }) => {
  const isVideo = mode === 'video';
  const accentText = isVideo ? 'text-cine-red' : 'text-blue-500';
  const glowColor = isVideo ? 'bg-cine-red' : 'bg-blue-600';

  return (
    <div className="pt-10">
      <About mode={mode} />
      
      {/* Timeline Section */}
      <section className="py-24 bg-darker relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className={`${accentText} font-bold tracking-[0.2em] mb-4 uppercase text-xs md:text-sm`}>MY JOURNEY</h3>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white">Experience Timeline</h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${isVideo ? 'bg-red-900/30' : 'bg-blue-900/30'} md:-translate-x-1/2`}></div>

            <div className="space-y-12">
              {TIMELINE_DATA.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className={`flex flex-col md:flex-row items-start md:items-center relative ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-darker z-10 -translate-x-1.5 md:-translate-x-1/2 mt-1.5 md:mt-0 ${glowColor}`}></div>
                    
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                       <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 bg-white/5 text-white`}>{item.year}</span>
                       <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                       <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;