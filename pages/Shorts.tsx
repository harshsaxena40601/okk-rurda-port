import React, { useState } from 'react';
import { SHORT_FORM_VIDEOS } from '../constants';
import { Play } from 'lucide-react';

const ShortsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Travel', 'Commercial', 'Educational', 'Motion Graphics'];
  
  const filteredVideos = filter === 'All' 
    ? SHORT_FORM_VIDEOS 
    : SHORT_FORM_VIDEOS.filter(v => v.category === filter);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            Short Form <span className="text-cine-red">Mastery</span>
          </h1>
          <p className="text-slate-400 text-lg">
             Viral edits engineered for retention.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
             <button 
               key={cat}
               onClick={() => setFilter(cat)}
               className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                 filter === cat 
                   ? 'bg-cine-red border-cine-red text-white' 
                   : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
               }`}
             >
               {cat}
             </button>
          ))}
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {filteredVideos.map((video) => (
              <div key={video.id} className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-cine-red/50 transition-colors">
                 <img src={video.image} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                       <Play fill="currentColor" size={24} />
                    </div>
                 </div>

                 <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent pt-12">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cine-red bg-cine-red/10 px-2 py-0.5 rounded mb-2 inline-block">{video.category}</span>
                    <h3 className="text-lg font-bold text-white">{video.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{video.views}</p>
                 </div>
              </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default ShortsPage;