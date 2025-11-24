import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { AppMode } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsPageProps {
  mode: AppMode;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ mode }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const allProjects = PROJECTS[mode];
  const isVideo = mode === 'video';
  const accentText = isVideo ? 'text-cine-red' : 'text-blue-500';

  // Extract categories dynamically
  const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))];

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            Featured {isVideo ? 'Work' : 'Projects'}
          </h1>
          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4">
             {categories.map(cat => (
                <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`text-sm font-bold uppercase tracking-wider pb-4 -mb-4 border-b-2 transition-colors ${
                      activeCategory === cat 
                        ? isVideo ? 'border-cine-red text-white' : 'border-blue-500 text-white' 
                        : 'border-transparent text-slate-500 hover:text-white'
                   }`}
                >
                   {cat}
                </button>
             ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                 <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-6 left-6">
                       <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                          {project.category}
                       </span>
                    </div>

                    <div className="absolute bottom-6 right-6">
                       <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowUpRight className="text-black" />
                       </div>
                    </div>
                 </div>

                 <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-slate-200 transition-colors">{project.title}</h3>
                 <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                       <span key={t} className={`text-xs font-medium ${accentText}`}>#{t}</span>
                    ))}
                 </div>
              </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;