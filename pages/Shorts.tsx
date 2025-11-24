import React, { useState } from 'react';
import { SHORT_FORM_VIDEOS } from '../constants';
import { Play, ExternalLink, Loader2 } from 'lucide-react';

const ShortsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const categories = ['All', 'Motion Graphics', 'Educational', 'Color Grading', 'Commercial'];
  
  const filteredVideos = filter === 'All' 
    ? SHORT_FORM_VIDEOS 
    : SHORT_FORM_VIDEOS.filter(v => v.category === filter);

  // Helper to extract Drive ID for Embed Player
  const getDriveId = (url: string) => {
    if (!url) return null;
    const match = url.match(/\/d\/(.+?)(\/|$)|id=(.+?)&|id=(.+?)$/);
    return match ? (match[1] || match[3] || match[4]) : null;
  };

  return (
    <div className="pt-32 pb-24 bg-darker min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h3 className="text-cine-red font-bold tracking-[0.2em] mb-4 uppercase text-xs md:text-sm">VIRAL CONTENT</h3>
           <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">Short Form Gallery</h2>
           
           {/* Filters */}
           <div className="flex flex-wrap justify-center gap-3">
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                   filter === cat 
                     ? 'bg-cine-red border-transparent text-white shadow-lg' 
                     : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredVideos.map((video) => {
             const driveId = getDriveId(video.videoUrl);
             const isPlaying = activeVideoId === video.id;

             return (
               <div key={video.id} className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-cine-red/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {isPlaying && driveId ? (
                    <iframe 
                      src={`https://drive.google.com/file/d/${driveId}/preview`}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img 
                        src={video.image} 
                        alt={video.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                      
                      <button 
                        onClick={() => setActiveVideoId(video.id)}
                        className="absolute inset-0 flex items-center justify-center group/btn"
                      >
                         <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover/btn:scale-110 transition-transform">
                            <Play fill="white" className="ml-1 text-white" size={32} />
                         </div>
                      </button>

                      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                         <span className="text-[10px] font-bold uppercase tracking-widest text-cine-red mb-1 block">{video.category}</span>
                         <h3 className="text-xl font-bold text-white">{video.title}</h3>
                         <p className="text-slate-400 text-xs mt-1">{video.views}</p>
                      </div>
                    </>
                  )}
               </div>
             );
           })}
        </div>
      </div>
    </div>
  );
};

export default ShortsPage;