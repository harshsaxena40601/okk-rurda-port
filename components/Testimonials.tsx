import React from 'react';
import { TESTIMONIALS, CASE_STUDIES } from '../constants';
import { Star, TrendingUp } from 'lucide-react';
import { AppMode } from '../types';

interface TestimonialsProps {
  mode: AppMode;
}

const Testimonials: React.FC<TestimonialsProps> = ({ mode }) => {
  const testimonials = TESTIMONIALS[mode];
  const caseStudies = CASE_STUDIES[mode];
  const isVideo = mode === 'video';
  const accentText = isVideo ? 'text-cine-red' : 'text-blue-500';

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface-highlight border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className={`${accentText} font-bold tracking-[0.2em] mb-2 md:mb-4 uppercase text-xs`}>TESTIMONIALS</h3>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white">Trusted by Creators & Brands</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24">
          {testimonials.map((t) => (
             <div key={t.id} className="bg-[#0f0f0f] border border-white/5 border-l-2 border-l-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl hover:border-white/10 transition-colors">
                <div className="flex gap-1 text-yellow-500 mb-4 md:mb-6">
                   {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed md:leading-relaxed mb-6 md:mb-8 italic">"{t.content}"</p>
                <div className="flex items-center gap-3 md:gap-4">
                   <img src={t.image} alt={t.name} loading="lazy" className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover grayscale" />
                   <div className="min-w-0">
                      <h4 className="text-white font-bold text-xs md:text-sm leading-tight truncate">{t.name}</h4>
                      <div className="text-[10px] md:text-xs text-text-muted truncate">{t.company}</div>
                   </div>
                </div>
             </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-[#111] to-[#0a0a0a] rounded-xl md:rounded-[2.5rem] border border-white/5 p-6 md:p-8 lg:p-16 relative overflow-hidden">
           <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-10 ${isVideo ? 'bg-cine-red' : 'bg-blue-600'}`}></div>
           
           <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24">
              <div className="md:w-1/3">
                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">Measurable Impact</h3>
                 <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                    My work doesn't just look good—it performs. We track engagement, retention, and conversion to ensure ROI.
                 </p>
                 <button className="text-white font-bold border-b border-white pb-1 hover:text-text-muted transition-colors text-sm md:text-base">
                    See Full Case Studies
                 </button>
              </div>

              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                 {caseStudies.map((study) => (
                    <div key={study.id} className="bg-white/5 rounded-lg md:rounded-2xl p-4 md:p-6 border border-white/5 hover:bg-white/10 transition-colors">
                       <div className="flex items-center justify-between mb-3 md:mb-4 gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted line-clamp-1">{study.client}</span>
                          <TrendingUp size={16} className={isVideo ? 'text-green-500' : 'text-blue-400'} />
                       </div>
                       <h4 className="text-lg md:text-xl font-bold text-white mb-1">{study.impact}</h4>
                       <p className="text-[10px] md:text-xs text-text-muted">{study.category} Improvement</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;