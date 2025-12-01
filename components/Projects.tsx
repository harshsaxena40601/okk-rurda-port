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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = isVideo ? 520 : 460;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const shuffle = (arr: any[]) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  useEffect(() => {
    let mounted = true;
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (!mounted) return;
        const list = data && (data.video || data.dev) ? (mode === 'video' ? (data.video || []) : (data.dev || [])) : (Array.isArray(data) ? data : []);
        if (list && list.length > 0) {
          setProjects(shuffle(list));
          return;
        }
        setProjects(shuffle(PROJECTS[mode] || []));
      })
      .catch(() => {
        if (!mounted) return;
        setProjects(shuffle(PROJECTS[mode] || []));
      });

    return () => { mounted = false; };
  }, [mode]);

  const reshuffle = () => setProjects(prev => shuffle(prev || []));

  return (
    <section id="projects" data-section className="bg-darker overflow-hidden border-t border-white/5">
      <div className="section-shell">
        {/* Header Section */}
        <div className="flex flex-col gap-3 mb-6 md:mb-10 lg:mb-12">
          <div>
            <h3 className={`${accentText} font-bold tracking-[0.2em] text-xs uppercase mb-1`}>PORTFOLIO</h3>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              Featured {isVideo ? 'Edits' : 'Work'}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-white/10 hover:bg-white/5 text-white flex items-center justify-center">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-white/10 hover:bg-white/5 text-white flex items-center justify-center">
              <ChevronRight size={18} />
            </button>
            <button onClick={reshuffle} className="hidden sm:inline-flex h-10 px-4 rounded-full border border-white/10 hover:bg-white/5 text-white text-xs font-bold">
              Shuffle
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory -mx-6 px-6 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, idx) => (
            mode === 'dev' ? (
              // 🔹 DEV MODE – UNTOUCHED
              <div key={project.id} className="min-w-[260px] md:min-w-[360px] lg:min-w-[380px] xl:min-w-[400px] snap-start shrink-0 animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="group bg-[#0F1115] border border-white/5 rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-slate-400 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              // 🔻 VIDEO MODE – ONLY THUMBNAIL SHRUNK
              <div key={project.id} className="min-w-[260px] md:min-w-[360px] lg:min-w-[400px] snap-start shrink-0 group cursor-pointer animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="relative max-w-[260px] mx-auto h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 rounded-xl overflow-hidden border border-white/5 bg-[#111] group-hover:border-red-500/50 transition-all shadow-lg group-hover:shadow-red-500/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-85 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all"></div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-600/80 backdrop-blur-md border-2 border-white flex items-center justify-center transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all shadow-xl">
                      <Play fill="white" size={18} />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex justify-between items-center">
                  <h3 className="text-sm md:text-lg font-bold text-white group-hover:text-red-400 transition-colors">{project.title}</h3>
                  <a href={project.link} className="text-gray-400 hover:text-red-500 transition-colors">
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
