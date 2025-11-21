import React from 'react';
import { ABOUT_DATA } from '../constants';
import { AppMode } from '../types';

interface AboutProps {
  mode: AppMode;
}

const About: React.FC<AboutProps> = ({ mode }) => {
  const content = ABOUT_DATA[mode];
  const isVideo = mode === 'video';
  
  const accentColor = isVideo ? 'text-red-600' : 'text-blue-500';
  const gradient = isVideo ? 'from-red-500 to-orange-500' : 'from-blue-500 to-cyan-400';
  const buttonClass = isVideo 
    ? 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20' 
    : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20';
  
  const skillHover = isVideo
    ? 'hover:border-red-500 hover:text-red-400'
    : 'hover:border-blue-500 hover:text-blue-400';
    
  const quoteIconBg = isVideo ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500';

  return (
    <section id="about" className="py-32 bg-darker relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2">
            <h3 className={`${accentColor} font-bold tracking-[0.2em] mb-4 uppercase text-sm`}>ABOUT ME</h3>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              {content.heading} <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>{content.headingHighlight}</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {content.description1}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              {content.description2}
            </p>

            <div className="flex gap-10 mb-10 border-t border-white/5 pt-8">
              {content.stats.map((stat, idx) => (
                <div key={idx}>
                  <span className="block text-4xl md:text-5xl font-heading font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <a href="#projects" className={`inline-block text-white px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 ${buttonClass}`}>
              View My Work
            </a>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-card p-10 rounded-3xl border border-white/5 h-full relative overflow-hidden group">
               {/* Ambient Glow */}
               <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${isVideo ? 'from-red-600/10' : 'from-blue-600/10'} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

               <h4 className="text-2xl font-bold text-white mb-8 relative z-10">{content.skillsTitle}</h4>
               <div className="flex flex-wrap gap-3 relative z-10">
                 {content.skills.map((skill) => (
                   <span 
                    key={skill.name}
                    className={`px-5 py-2.5 rounded-full bg-white/5 border border-white/5 text-slate-300 text-sm font-medium transition-all cursor-default ${skillHover}`}
                   >
                     {skill.name}
                   </span>
                 ))}
               </div>
               
               <div className="mt-12 p-8 bg-black/40 rounded-2xl border border-white/5 relative z-10 backdrop-blur-sm">
                  <p className="text-slate-300 italic text-lg leading-relaxed">
                    "{content.quote}"
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${quoteIconBg}`}>
                      {content.quoteAuthor.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-bold">{content.quoteAuthor}</div>
                      <div className="text-sm text-slate-500">{content.quoteRole}</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;