import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Play } from 'lucide-react';
import { AppMode } from '../types';

interface ProjectsPageProps {
  mode: AppMode;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ mode }) => {
  const [filter, setFilter] = useState('All');
  const projects = PROJECTS[mode];
  const isVideo = mode === 'video';

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const accentText = isVideo ? 'text-cine-red' : 'text-blue-500';
  const badgeBg = isVideo ? 'bg-cine-red' : 'bg-blue-600';

  return (
    <div className="pt-32 pb-24 bg-darker min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h3 className={`${accentText} font-bold tracking-[0.2em] mb-4 uppercase text-xs md:text-sm`}>PORTFOLIO</h3>
           <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">Featured Projects</h2>
           
           <div className="flex flex-wrap justify-center gap-3">
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                   filter === cat 
                     ? `${badgeBg} border-transparent text-white shadow-lg` 
                     : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project) => (
             <div key={project.id} className="group">
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl hover:-translate-y-2">
                   <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                   
                   {/* Overlay Content */}
                   <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-transparent to-transparent">
                      <div className="flex justify-between items-end">
                         <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-2 ${badgeBg}`}>
                               {project.category}
                            </span>
                         </div>
                         <a href={project.link} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                            {isVideo ? <Play size={20} fill="black" /> : <ArrowUpRight size={20} />}
                         </a>
                      </div>
                   </div>
                </div>

                <div className="px-2">
                   <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                   <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                   <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                         <span key={t} className="text-[10px] font-medium px-2 py-1 bg-white/5 rounded text-slate-400 border border-white/5">#{t}</span>
                      ))}
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;