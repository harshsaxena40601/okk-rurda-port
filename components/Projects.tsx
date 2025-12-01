import React, { useRef, useEffect, useState } from 'react';
import { PROJECTS } from '../constants';
import { Play, ArrowUpRight, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { AppMode } from '../types';

interface ProjectsProps {
  mode: AppMode;
}

const Projects: React.FC<ProjectsProps> = ({ mode }) => {
  const [projects, setProjects] = useState<any[]>(PROJECTS[mode] || []);
  const isVideo = mode === 'video';
  const accentText = isVideo ? 'text-cine-red' : 'text-blue-500';
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  const shuffle = (arr: any[]) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    let mounted = true;
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (!mounted) return;
        const list = mode === 'video' ? data?.video ?? [] : data?.dev ?? [];
        setProjects(list.length ? shuffle(list) : shuffle(PROJECTS[mode]));
      })
      .catch(() => setProjects(shuffle(PROJECTS[mode])));
    return () => { mounted = false; };
  }, [mode]);

  return (
    <section id="projects" className="bg-darker border-t border-white/5 py-20">
      <div className="section-shell">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-10">
          <h3 className={`${accentText} font-bold uppercase text-xs tracking-[0.2em]`}>PORTFOLIO</h3>
          <h2 className="text-2xl md:text-4xl font-heading font-black text-white leading-tight">
            Featured {isVideo ? 'Edits' : 'Work'}
          </h2>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-white/10 hover:bg-white/5 text-white">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-white/10 hover:bg-white/5 text-white">
              <ChevronRight size={18} />
            </button>
            <button onClick={() => setProjects(shuffle)} className="hidden sm:block px-4 h-10 rounded-full border border-white/10 hover:bg-white/5 text-white text-xs">
              Shuffle
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory -mx-6 px-6 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, idx) => (
            <div
              key={project.id}
              style={{ animationDelay: `${idx * 100}ms` }}
              className="snap-start shrink-0 animate-scale-in mx-auto"
            >
              {mode === 'dev' ? (
                // 🔹 DEV MODE CARD
                <div className="
                  max-w-[260px] sm:max-w-[290px] md:max-w-[320px] lg:max-w-[340px]
                  bg-[#0F1115] border border-white/5 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1
                ">
                  <div className="relative h-40 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-slate-400 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              ) : (
                // 🔥 VIDEO MODE CARD (shorter & tighter)
                <div className="
                  max-w-[240px] sm:max-w-[270px] md:max-w-[300px] lg:max-w-[320px]
                  group cursor-pointer rounded-xl border border-white/5 bg-[#111] overflow-hidden transition-all hover:border-red-500/40
                ">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600/80 flex items-center justify-center opacity-0 scale-75 group-hover:scale-100 group-hover:opacity-100 transition-all shadow-xl">
                        <Play fill="white" size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <a href={project.link} className="text-gray-400 hover:text-red-500 transition">
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
