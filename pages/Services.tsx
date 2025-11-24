import React, { useState, useEffect } from 'react';
import { AppMode } from '../types';
import { Check, ArrowRight, Play, Code } from 'lucide-react';
import { getServices } from '../services/api';
import { ALL_SERVICES } from '../constants';

interface ServicesPageProps {
  mode: AppMode;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ mode }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'dev'>('video');
  const [services, setServices] = useState(ALL_SERVICES[activeTab]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      const data = await getServices(activeTab);
      setServices(data);
      setLoading(false);
    };
    loadServices();
  }, [activeTab]);

  const isVideo = activeTab === 'video';
  const accentText = isVideo ? 'text-cine-red' : 'text-blue-500';
  const accentBg = isVideo ? 'bg-cine-red' : 'bg-blue-600';
  const gradientBtn = isVideo 
    ? 'bg-gradient-to-r from-cine-red to-orange-600 shadow-cine-red/20' 
    : 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-blue-500/20';

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            Expert <span className={activeTab === 'video' ? 'text-cine-red' : 'text-blue-500'}>Services</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Comprehensive solutions tailored to your unique needs. Select a category below to explore how I can help you grow.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-20">
          <div className="bg-white/5 p-1.5 rounded-full flex gap-1 border border-white/5">
            <button 
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'video' ? 'bg-cine-red text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              <Play size={16} fill={activeTab === 'video' ? "currentColor" : "none"} /> Video Editing
            </button>
            <button 
              onClick={() => setActiveTab('dev')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'dev' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              <Code size={16} /> Development
            </button>
          </div>
        </div>

        {/* Services Grid */}
        {loading ? (
           <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
            {services.map((service: any) => (
              <div 
                key={service.id}
                className="group relative bg-[#131313] rounded-3xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${isVideo ? 'from-cine-red/50 to-orange-500/0' : 'from-blue-600/50 to-cyan-500/0'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative h-full bg-[#131313] rounded-[1.4rem] p-8 flex flex-col items-start z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${isVideo ? 'bg-white/5 text-white group-hover:bg-cine-red' : 'bg-white/5 text-white group-hover:bg-blue-600'}`}>
                     {/* Since we might not get actual Icon components from backend JSON, handle fallback or mapping if needed. For now assuming we use local constants fallback or map icons in a real app */}
                     {service.icon ? <service.icon size={28} strokeWidth={1.5} /> : <Check size={28} />}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  
                  <div className={`w-full h-1 rounded-full bg-white/5 overflow-hidden`}>
                    <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out ${accentBg}`}></div>
                  </div>
                  
                  {service.features && (
                    <div className="space-y-3 mt-6 mb-6 w-full">
                      {service.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                            <Check size={16} className={accentText} />
                            <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button className={`w-full py-4 rounded-xl text-white font-bold uppercase tracking-widest text-xs shadow-lg transform transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 mt-auto ${gradientBtn}`}>
                    Start Project <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Process Section */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-8 md:p-16 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">How I Work</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/5 -z-10"></div>
              
              {[
                 { step: "01", title: "Discovery", desc: "We discuss your goals and vision." },
                 { step: "02", title: "Strategy", desc: "I plan the execution roadmap." },
                 { step: "03", title: "Execution", desc: "Deep work with regular updates." },
                 { step: "04", title: "Delivery", desc: "Final polish and handoff." }
              ].map((item, idx) => (
                 <div key={idx} className="relative bg-[#0a0a0a] p-4">
                    <div className={`w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-2xl font-black text-white mx-auto mb-6 shadow-xl relative z-10`}>
                       {item.step}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
