import React from 'react';
import { ABOUT_DATA, TIMELINE_DATA } from '../constants';
import { AppMode } from '../types';
import { Film, Calendar, Users, Code, Award, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  mode: AppMode;
}

const AboutPage: React.FC<AboutPageProps> = ({ mode }) => {
  const content = ABOUT_DATA[mode];
  const isVideo = mode === 'video';
  const accentText = isVideo ? 'text-cine-red' : 'text-blue-500';
  const accentBg = isVideo ? 'bg-cine-red' : 'bg-blue-600';
  const gradientText = isVideo ? 'from-cine-red to-orange-500' : 'from-blue-500 to-cyan-400';

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-[#080808] overflow-hidden">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none ${isVideo ? 'bg-red-600' : 'bg-blue-600'}`}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            About <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientText}`}>Rudra Saxena</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Combining creative storytelling with technical precision.
          </p>
        </div>
      </section>

      {/* Main Profile Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Bio & Timeline */}
            <div className="space-y-12">
              <div>
                <h3 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${accentText}`}>THE STORY</h3>
                <div className="prose prose-invert prose-lg text-slate-400">
                  <p className="mb-4">{content.description1}</p>
                  <p>{content.description2}</p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className={`text-sm font-bold tracking-[0.2em] uppercase mb-8 ${accentText}`}>JOURNEY</h3>
                <div className="space-y-8 border-l border-white/10 ml-3 pl-8 relative">
                  {TIMELINE_DATA.map((item, index) => (
                    <div key={index} className="relative">
                      <div className={`absolute -left-[39px] w-5 h-5 rounded-full border-2 border-[#050505] ${accentBg}`}></div>
                      <span className={`block text-xs font-bold mb-1 ${accentText}`}>{item.year}</span>
                      <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Skills & Tools */}
            <div className="space-y-12">
               <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${isVideo ? 'from-red-500/10' : 'from-blue-500/10'} to-transparent rounded-full blur-2xl`}></div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    {isVideo ? <Film size={20} className={accentText} /> : <Code size={20} className={accentText} />}
                    {content.skillsTitle}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {content.skills.map((skill) => (
                      <span 
                        key={skill.name}
                        className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-slate-300 font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
               </div>

               {/* Key Stats */}
               <div className="grid grid-cols-2 gap-4">
                 {content.stats.map((stat, idx) => (
                   <div key={idx} className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl text-center hover:bg-white/5 transition-colors">
                     <div className={`text-3xl font-heading font-black mb-1 ${accentText}`}>{stat.value}</div>
                     <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">{stat.label}</div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;