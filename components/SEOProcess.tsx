import React from 'react';
import { SEO_STEPS } from '../constants';
import { Search, BarChart2, Settings, PenTool, LineChart } from 'lucide-react';

const SEOProcess: React.FC = () => {
  const icons = [Search, Settings, PenTool, BarChart2, LineChart];

  return (
    <section className="py-24 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-primary font-medium tracking-widest mb-2">METHODOLOGY</h3>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            My <span className="text-primary">SEO Optimization</span> Process
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A data-driven approach to climbing search rankings. I don't guess; I analyze, implement, and optimize based on proven strategies.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20"></div>

          <div className="space-y-12 md:space-y-24">
            {SEO_STEPS.map((step, index) => {
              const Icon = icons[index % icons.length];
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative`}>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-dark border-4 border-card rounded-full items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>

                  {/* Content Left (for Even) or Right (for Odd) - Desktop */}
                  <div className={`w-full md:w-1/2 px-6 md:pr-16 ${isEven ? 'md:text-right' : 'md:order-2 md:pl-16'}`}>
                    <div className="flex flex-col md:block items-center md:items-end">
                      <div className={`w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 md:hidden`}>
                         <Icon size={32} />
                      </div>
                      <span className="text-primary font-bold text-6xl opacity-20 mb-2 block">0{step.step}</span>
                      <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      {/* Tools Tags */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end justify-center' : 'justify-center md:justify-start'}`}>
                        {step.tools.map(tool => (
                          <span key={tool} className="text-xs font-mono text-slate-500 border border-white/10 px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
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
