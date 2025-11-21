import React from 'react';
import { SPECIALIZED_SOLUTIONS } from '../constants';
import { ShoppingBag, TrendingUp, Film } from 'lucide-react';
import { AppMode } from '../types';

interface SpecializedProps {
  mode: AppMode;
}

const ShopifyShowcase: React.FC<SpecializedProps> = ({ mode }) => {
  const data = SPECIALIZED_SOLUTIONS[mode];
  const isVideo = mode === 'video';
  
  // Theme Configuration
  const badgeColor = isVideo 
    ? 'text-red-400 bg-red-900/20 border-red-500/20' 
    : 'text-blue-400 bg-blue-900/20 border-blue-500/20';
    
  const gradientText = isVideo 
    ? 'from-red-500 to-orange-500' 
    : 'from-blue-400 to-cyan-400';
    
  const metricColor = isVideo ? 'text-red-500' : 'text-blue-400';
  const hoverBtn = isVideo ? 'hover:text-red-400' : 'hover:text-blue-400';
  const bgGlow = isVideo ? 'bg-red-600/20' : 'bg-blue-600/20';
  const borderHover = isVideo ? 'hover:border-red-500/30' : 'hover:border-blue-500/30';

  return (
    <section id="shopify" className="py-32 bg-gradient-to-b from-darker to-card relative overflow-hidden">
      {/* Background Elements */}
      <div className={`absolute top-0 right-0 w-1/2 h-full skew-x-12 pointer-events-none opacity-5 ${isVideo ? 'bg-red-900' : 'bg-blue-900'}`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase mb-6 ${badgeColor}`}>
            {isVideo ? <Film size={14} /> : <ShoppingBag size={14} />}
            {isVideo ? 'Creative Solutions' : 'E-Commerce Experts'}
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientText}`}>{data.title}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            {data.subtitle}
          </p>
        </div>

        <div className="space-y-24">
          {data.projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group perspective-1000">
                <div className={`absolute inset-0 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-20 ${bgGlow}`}></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-2 group-hover:scale-[1.02]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full object-cover h-72 md:h-96 transition-all duration-700 grayscale group-hover:grayscale-0`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8">
                     <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full">
                            {tech}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">{project.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 md:gap-6">
                  {project.results.map((result, idx) => (
                    <div key={idx} className={`bg-[#080808] border border-white/5 p-6 rounded-2xl text-center transition-colors ${borderHover}`}>
                      <div className={`text-2xl md:text-4xl font-bold mb-2 ${metricColor}`}>{result.value}</div>
                      <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">{result.metric}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className={`flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group/btn transition-colors ${hoverBtn}`}>
                    View Details
                    <TrendingUp size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyShowcase;