import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { AppMode } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  mode: AppMode;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ mode }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'dev'>('video');
  const services = SERVICES[activeTab];
  
  const isVideo = activeTab === 'video';
  const accentText = isVideo ? 'text-cine-red' : 'text-blue-500';
  const accentBg = isVideo ? 'bg-cine-red' : 'bg-blue-600';

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            Expert <span className={activeTab === 'video' ? 'text-cine-red' : 'text-blue-500'}>Services</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Specialized solutions tailored to your unique needs. Choose a category below.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 p-1 rounded-full flex gap-1">
            <button 
              onClick={() => setActiveTab('video')}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'video' ? 'bg-cine-red text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Video Editing
            </button>
            <button 
              onClick={() => setActiveTab('dev')}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'dev' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Development
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
               <div className={`absolute top-0 left-0 w-full h-1 ${accentBg} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
               
               <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${isVideo ? 'group-hover:bg-cine-red/10 group-hover:text-cine-red' : 'group-hover:bg-blue-600/10 group-hover:text-blue-500'} transition-colors`}>
                 <service.icon size={28} />
               </div>

               <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                 {service.description}
               </p>

               <button className={`flex items-center gap-2 text-sm font-bold ${accentText} group/btn`}>
                 Start Project <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
               </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;