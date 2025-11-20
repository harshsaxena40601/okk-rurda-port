import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-darker">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h3 className="text-primary font-medium tracking-widest mb-2">PORTFOLIO</h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Featured <span className="text-white relative inline-block">
                Projects
                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10"></span>
              </span>
            </h2>
          </div>
          <a href="#" className="hidden md:inline-block text-primary hover:text-white transition-colors font-medium">
            View All Projects &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden border border-white/5 bg-card">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/50 to-transparent opacity-90 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">{project.category}</span>
                  <div className="flex gap-2">
                     {project.tech.map(t => (
                        <span key={t} className="text-[10px] bg-white/10 text-white px-2 py-1 rounded backdrop-blur-sm">{t}</span>
                     ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium"
                >
                  View Case Study <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-block bg-white/5 text-white px-6 py-3 rounded-full font-medium">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
