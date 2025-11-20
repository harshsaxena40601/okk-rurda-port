import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-darker relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h3 className="text-primary font-medium tracking-widest mb-2">PORTFOLIO</h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Featured Projects
            </h2>
            <p className="text-slate-400 mt-4 max-w-lg">
               A selection of projects that showcase my skills in web development and design.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-4 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/10 bg-card text-white hover:bg-primary hover:border-primary transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/10 bg-card text-white hover:bg-primary hover:border-primary transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="min-w-[85vw] md:min-w-[450px] snap-center bg-card rounded-3xl overflow-hidden border border-white/5 group hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 right-4 z-20">
                   <span className="bg-dark/80 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                      {project.category}
                   </span>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-2 flex-1">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                   {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                        {t}
                      </span>
                   ))}
                </div>

                {/* Link */}
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-white font-medium group/link"
                >
                  View Case Study 
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform text-primary" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center mt-[-1rem]">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <ArrowRight size={14} className="animate-pulse" /> Swipe to view more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;