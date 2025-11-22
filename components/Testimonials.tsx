import React from 'react';
import { TESTIMONIALS, CASE_STUDIES } from '../constants';
import { Quote, ArrowUpRight } from 'lucide-react';
import { AppMode } from '../types';

interface TestimonialsProps {
  mode: AppMode;
}

const Testimonials: React.FC<TestimonialsProps> = ({ mode }) => {
  const testimonials = TESTIMONIALS[mode];
  const caseStudies = CASE_STUDIES[mode];
  const isVideo = mode === 'video';
  
  const accentText = isVideo ? 'text-red-600' : 'text-blue-500';
  const hoverBorder = isVideo ? 'hover:border-red-600/40' : 'hover:border-blue-500/40';
  const groupHoverText = isVideo ? 'group-hover:text-red-500' : 'group-hover:text-blue-400';
  const quoteColor = isVideo ? 'text-red-600/20' : 'text-blue-500/20';
  const categoryBadge = isVideo ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500';
  const linkStyle = isVideo ? 'text-red-400 border-red-500/30' : 'text-blue-400 border-blue-500/30';

  return (
    <section className="py-20 md:py-32 bg-dark">
      <div className="container mx-auto px-6">
        
        {/* Testimonials Header */}
        <div className="mb-12 md:mb-16">
          <h3 className={`${accentText} font-bold tracking-[0.2em] mb-4 uppercase text-sm`}>TESTIMONIALS</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            Client Feedback
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-40">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`bg-card p-8 md:p-10 rounded-2xl md:rounded-3xl border border-white/5 relative group transition-all duration-500 ${hoverBorder}`}>
              <Quote size={40} className={`${quoteColor} absolute top-6 right-6 md:top-8 md:right-8 transition-colors group-hover:opacity-100 opacity-50 md:w-[60px] md:h-[60px]`} />
              <p className="text-slate-300 mb-8 md:mb-10 leading-relaxed relative z-10 text-base md:text-lg italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white/10">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1 font-medium">
                    {testimonial.role && `${testimonial.role}, `}{testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-end gap-4 md:gap-6">
          <div>
            <h3 className={`${accentText} font-bold tracking-[0.2em] mb-4 uppercase text-sm`}>{isVideo ? 'REAL RESULTS' : 'CASE STUDIES'}</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
              {isVideo ? 'Measurable Impact' : 'Solving Problems'}
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-left md:text-right text-base md:text-lg">
            {isVideo 
              ? 'How professional editing directly drives retention and growth.' 
              : 'Analyzing complex challenges and engineering efficient solutions.'}
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-8 md:space-y-12">
          {caseStudies.map((study) => (
            <div key={study.id} className={`bg-card border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 group ${hoverBorder} hover:shadow-2xl hover:shadow-black/50`}>
              <div className="flex flex-col lg:flex-row">
                <div className="p-8 lg:p-14 lg:w-2/3 space-y-6 md:space-y-8">
                   <div className="flex items-center gap-4 mb-2">
                      <span className={`${categoryBadge} text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest`}>
                        {study.category}
                      </span>
                      <span className="text-slate-500 text-xs md:text-sm font-medium border-l border-white/10 pl-4">Client: {study.client}</span>
                   </div>
                   
                   <h3 className={`text-2xl md:text-4xl font-bold text-white transition-colors ${groupHoverText}`}>
                     {study.title}
                   </h3>

                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-6">
                     <div>
                       <h4 className="text-white text-xs md:text-sm font-bold mb-2 md:mb-3 uppercase tracking-wider opacity-50">Problem</h4>
                       <p className="text-slate-400 text-sm leading-relaxed">{study.problem}</p>
                     </div>
                     <div>
                       <h4 className="text-white text-xs md:text-sm font-bold mb-2 md:mb-3 uppercase tracking-wider opacity-50">Solution</h4>
                       <p className="text-slate-400 text-sm leading-relaxed">{study.solution}</p>
                     </div>
                     <div>
                       <h4 className={`text-xs md:text-sm font-bold mb-2 md:mb-3 uppercase tracking-wider ${isVideo ? 'text-green-500' : 'text-green-400'}`}>Outcome</h4>
                       <p className="text-white font-medium text-sm leading-relaxed">{study.impact}</p>
                     </div>
                   </div>
                </div>

                <div className="lg:w-1/3 bg-[#050505] p-8 lg:p-14 flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-l border-white/5 group-hover:bg-black transition-colors">
                   <div className="text-4xl md:text-6xl font-black text-white mb-2">ROI</div>
                   <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mb-6 md:mb-8 font-bold">Positive Impact</div>
                   <a href="#" className={`inline-flex items-center gap-2 font-bold border-b-2 pb-1 hover:text-white hover:border-white transition-all text-sm md:text-base ${linkStyle}`}>
                     Read Analysis <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;