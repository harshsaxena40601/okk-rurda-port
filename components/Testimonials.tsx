import React from 'react';
import { TESTIMONIALS, CASE_STUDIES } from '../constants';
import { Quote, ArrowUpRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-darker">
      <div className="container mx-auto px-6">
        
        {/* Testimonials Header */}
        <div className="mb-16">
          <h3 className="text-primary font-medium tracking-widest mb-2">TESTIMONIALS</h3>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            What Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-card p-8 rounded-2xl border border-white/5 relative group hover:border-primary/30 transition-colors">
              <Quote size={40} className="text-primary/20 absolute top-8 right-8" />
              <p className="text-slate-300 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                  <div className="text-xs text-slate-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h3 className="text-primary font-medium tracking-widest mb-2">CASE STUDIES</h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Real Results
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-right hidden md:block">
            Deep dives into complex problems and how I solved them with code and strategy.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="bg-card border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all group">
              <div className="flex flex-col lg:flex-row">
                <div className="p-8 lg:p-12 lg:w-2/3 space-y-6">
                   <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {study.category}
                      </span>
                      <span className="text-slate-500 text-sm">Client: {study.client}</span>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                     {study.title}
                   </h3>

                   <div className="grid md:grid-cols-3 gap-8 pt-4">
                     <div>
                       <h4 className="text-white font-bold mb-2 border-l-2 border-red-500/50 pl-3">The Problem</h4>
                       <p className="text-slate-400 text-sm leading-relaxed">{study.problem}</p>
                     </div>
                     <div>
                       <h4 className="text-white font-bold mb-2 border-l-2 border-blue-500/50 pl-3">The Solution</h4>
                       <p className="text-slate-400 text-sm leading-relaxed">{study.solution}</p>
                     </div>
                     <div>
                       <h4 className="text-white font-bold mb-2 border-l-2 border-green-500/50 pl-3">The Impact</h4>
                       <p className="text-slate-400 text-sm leading-relaxed">{study.impact}</p>
                     </div>
                   </div>
                </div>

                <div className="lg:w-1/3 bg-white/5 p-8 lg:p-12 flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-l border-white/5">
                   <div className="text-5xl font-bold text-white mb-2">Result</div>
                   <div className="text-sm text-slate-400 uppercase tracking-widest mb-8">Key Outcome</div>
                   <a href="#" className="inline-flex items-center gap-2 text-primary font-bold border-b border-primary/30 pb-1 hover:text-white hover:border-white transition-all">
                     Read Full Case Study <ArrowUpRight size={16} />
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
