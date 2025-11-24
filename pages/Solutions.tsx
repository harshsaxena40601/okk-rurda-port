import React from 'react';
import { SPECIALIZED_SOLUTIONS } from '../constants';
import { AppMode } from '../types';
import { Check, ArrowRight, TrendingUp } from 'lucide-react';

interface SolutionsPageProps {
  mode: AppMode;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ mode }) => {
  const solutions = SPECIALIZED_SOLUTIONS[mode];
  const isVideo = mode === 'video';
  const accentText = isVideo ? 'text-cine-red' : 'text-blue-500';

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            {solutions.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl">
            {solutions.subtitle}
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-24">
          {solutions.projects.map((project, idx) => (
            <div key={project.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                 <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 group">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                 </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                 <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                 <p className="text-slate-400 text-lg leading-relaxed">{project.description}</p>
                 
                 <div className="bg-[#111] rounded-2xl p-6 border border-white/5">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Key Results</h4>
                    <div className="space-y-3">
                       {project.results.map((res, i) => (
                          <div key={i} className="flex items-center justify-between">
                             <span className="text-slate-400 text-sm">{res.metric}</span>
                             <span className={`text-xl font-bold ${accentText}`}>{res.value}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                       <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-slate-300">
                          {tech}
                       </span>
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

export default SolutionsPage;