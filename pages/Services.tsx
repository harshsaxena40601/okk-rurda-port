import React, { useState } from 'react';
import { ALL_SERVICES } from '../constants';
import { AppMode } from '../types';
import { Check, ArrowRight, Play, Code } from 'lucide-react';

interface ServicesPageProps {
  mode: AppMode;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ mode }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'dev'>('video');
  const services = ALL_SERVICES[activeTab];
  
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service) => (
            <div key={service.id} className="group bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-10 hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden flex flex-col">
               {/* Top Accent */}
               <div className={`absolute top-0 left-0 w-full h-1 ${accentBg} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
               
               <div className="flex justify-between items-start mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${isVideo ? 'group-hover:bg-cine-red/10 group-hover:text-cine-red' : 'group-hover:bg-blue-600/10 group-hover:text-blue-500'} transition-colors`}>
                    <service.icon size={32} />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full bg-white/5 ${accentText}`}>
                     Available
                  </span>
               </div>

               <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
               <p className="text-slate-400 text-base leading-relaxed mb-8">
                 {service.description}
               </p>

               <div className="space-y-3 mb-10 flex-1">
                  {service.features.map((feature, idx) => (
                     <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                        <Check size={16} className={accentText} />
                        <span>{feature}</span>
                     </div>
                  ))}
               </div>

               <button className={`w-full py-4 rounded-xl text-white font-bold uppercase tracking-widest text-xs shadow-lg transform transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 ${gradientBtn}`}>
                 Start Project <ArrowRight size={16} />
               </button>
            </div>
          ))}
        </div>

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
