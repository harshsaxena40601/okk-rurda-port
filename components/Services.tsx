import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { AppMode } from '../types';

interface ServicesProps {
  mode: AppMode;
}

const Services: React.FC<ServicesProps> = ({ mode }) => {
  const allServices = SERVICES[mode];
  const isVideo = mode === 'video';
  const [filter, setFilter] = useState('All');

  // Simple category mapping based on service titles (Mock categories for display)
  const getCategory = (title: string) => {
    if (title.includes('YouTube') || title.includes('Web')) return 'Core';
    if (title.includes('Reels') || title.includes('App')) return 'Social/Mobile';
    if (title.includes('Cinematic') || title.includes('SEO')) return 'Strategy/High-End';
    return 'Creative';
  };

  const categories = ['All', 'Core', 'Social/Mobile', 'Strategy/High-End'];

  const filteredServices = filter === 'All' 
    ? allServices 
    : allServices.filter(s => getCategory(s.title) === filter);

  const accentText = isVideo ? 'text-cine-red' : 'text-blue-500';
  const accentBg = isVideo ? 'bg-cine-red' : 'bg-blue-600';

  return (
    <section id="services" className="py-16 md:py-24 lg:py-36 bg-surface relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h3 className={`${accentText} font-bold tracking-[0.2em] mb-3 md:mb-4 uppercase text-xs`}>WHAT I DO</h3>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-heading font-black text-white mb-4 md:mb-6 tracking-tight leading-tight">
            Premium {mode === 'dev' ? 'Development' : 'Editing'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Services.</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base lg:text-lg">
            Specialized solutions tailored to your unique needs. From concept to final delivery, I ensure quality at every step.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs lg:text-sm font-bold transition-all border ${
                filter === cat 
                  ? `${accentBg} border-transparent text-white shadow-lg` 
                  : 'bg-white/5 border-white/5 text-text-muted hover:text-white hover:bg-white/10 min-h-[40px]'
              } flex items-center justify-center`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredServices.map((service, idx) => (
            <div 
              key={service.id}
              className="group relative bg-[#131313] rounded-2xl md:rounded-3xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl card-mobile-spacing animate-scale-in hover:border-white/20"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${isVideo ? 'from-cine-red/50 to-orange-500/0' : 'from-blue-600/50 to-cyan-500/0'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative h-full bg-[#131313] rounded-[1.2rem] md:rounded-[1.4rem] p-5 md:p-6 lg:p-8 flex flex-col items-start z-10">
                <div className={`w-11 md:w-12 lg:w-14 h-11 md:h-12 lg:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 ${isVideo ? 'bg-white/5 text-white group-hover:bg-cine-red' : 'bg-white/5 text-white group-hover:bg-blue-600'}`}>
                   <service.icon size={20} strokeWidth={1.5} />
                </div>
                
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-white transition-colors leading-tight">{service.title}</h4>
                <p className="text-text-muted text-xs md:text-sm leading-relaxed md:leading-relaxed mb-4 md:mb-6 flex-1">
                  {service.description}
                </p>
                
                <div className={`w-full h-1 rounded-full bg-white/5 overflow-hidden`}>
                  <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out ${accentBg}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;