import React from 'react';
import { SHOPIFY_PROJECTS } from '../constants';
import { ShoppingBag, TrendingUp, CheckCircle } from 'lucide-react';

const ShopifyShowcase: React.FC = () => {
  return (
    <section id="shopify" className="py-24 bg-gradient-to-b from-darker to-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/5 skew-x-12 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <ShoppingBag size={12} />
            Shopify Partner
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Shopify Solutions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Scaling e-commerce brands through custom theme development, headless architectures, and conversion-focused optimization.
          </p>
        </div>

        <div className="space-y-20">
          {SHOPIFY_PROJECTS.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-30"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                     <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl text-center hover:border-green-500/30 transition-colors">
                      <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">{result.value}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">{result.metric}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="flex items-center gap-2 text-white font-medium group/btn hover:text-green-400 transition-colors">
                    View Project Details
                    <TrendingUp size={18} className="group-hover/btn:translate-x-1 transition-transform" />
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
