import React from 'react';
import { WORKFLOW_PROCESS } from '../constants';
import { Search, BarChart2, Settings, PenTool, LineChart, Film, Scissors, MonitorPlay, Zap } from 'lucide-react';
import { AppMode } from '../types';

interface ProcessProps {
  mode: AppMode;
}

const SEOProcess: React.FC<ProcessProps> = ({ mode }) => {
  const data = WORKFLOW_PROCESS[mode];
  const isVideo = mode === 'video';

  const icons = isVideo 
    ? [Film, Scissors, MonitorPlay, Zap, MonitorPlay] 
    : [Search, Settings, PenTool, BarChart2, LineChart];

  const accentColor = isVideo ? 'text-red-600' : 'text-blue-500';
  const timelineColor = isVideo ? 'bg-red-600' : 'bg-blue-500';
  const gradientLine = isVideo 
    ? 'from-red-600/0 via-red-600/50 to-red-600/0' 
    : 'from-blue-500/0 via-blue-500/50 to-blue-500/0';
  
  const glowShadow = isVideo 
    ? 'shadow-[0_0_20px_rgba(220,38,38,0.4)]' 
    : 'shadow-[0_0_20px_rgba(59,130,246,0.4)]';

  return (
    <section className="py-32 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h3 className={`${accentColor} font-bold tracking-[0.2em] mb-4 uppercase text-sm`}>{isVideo ? 'WORKFLOW' : 'METHODOLOGY'}</h3>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            {data.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {data.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b ${gradientLine}`}></div>

          <div className="space-y-16 md:space-y-28">
            {data.steps.map((step, index) => {
              const Icon = icons[index % icons.length];
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative group`}>
                  
                  {/* Timeline Dot */}
                  <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-darker border border-white/10 rounded-full items-center justify-center z-10 transition-all duration-500 group-hover:scale-110 ${glowShadow}`}>
                    <div className={`w-3 h-3 rounded-full ${timelineColor}`}></div>
                  </div>

                  {/* Content Left (for Even) or Right (for Odd) - Desktop */}
                  <div className={`w-full md:w-1/2 px-6 md:pr-24 ${isEven ? 'md:text-right' : 'md:order-2 md:pl-24'}`}>
                    <div className="flex flex-col md:block items-center md:items-end">
                      <div className={`w-16 h-16 rounded-2xl ${isVideo ? 'bg-red-600/10 text-red-500' : 'bg-blue-500/10 text-blue-500'} flex items-center justify-center mb-6 md:hidden border border-white/5`}>
                         <Icon size={32} />
                      </div>
                      <span className={`${accentColor} font-black text-7xl opacity-10 mb-4 block`}>0{step.step}</span>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      {/* Tools Tags */}
                      {step.tools && step.tools.length > 0 && (
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end justify-center' : 'justify-center md:justify-start'}`}>
                          {step.tools.map(tool => (
                            <span key={tool} className="text-[10px] uppercase font-bold tracking-wider text-slate-500 border border-white/10 px-3 py-1.5 rounded-full bg-white/5">
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty side for alignment */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;