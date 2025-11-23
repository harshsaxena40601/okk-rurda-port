import React, { useRef, useState } from 'react';
import { SHORT_FORM_VIDEOS } from '../constants';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Maximize2, ExternalLink, Loader2 } from 'lucide-react';
import { ShortFormVideo } from '../types';

// Helper to extract Drive ID for Embed Player
const getDriveId = (url: string) => {
  if (!url) return null;
  if (url.includes('drive.google.com')) {
    const match = url.match(/\/d\/(.+?)\/|id=(.+?)&|id=(.+?)$/);
    return match ? (match[1] || match[2] || match[3]) : null;
  }
  return null;
};

const VideoCard: React.FC<{ video: ShortFormVideo }> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [showDrivePlayer, setShowDrivePlayer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const driveId = getDriveId(video.videoUrl);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (driveId) {
      setIsLoading(true);
      setShowDrivePlayer(true);
      return;
    }
    
    // Native Video Logic
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Auto-play preview for native videos only if not drive
    if (videoRef.current && !driveId && !isPlaying) {
      videoRef.current.muted = true;
      setIsMuted(true);
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && !driveId) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
    // We don't reset Drive player on mouse leave to allow watching
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      setIsMuted(newVol === 0);
      videoRef.current.muted = newVol === 0;
    }
  };

  return (
    <div 
      className={`min-w-[260px] md:min-w-[300px] aspect-[9/16] relative rounded-[2rem] overflow-hidden group border transition-all duration-500 snap-center bg-[#0a0a0a] cursor-pointer
        ${showDrivePlayer 
          ? 'border-red-500/50 shadow-[0_0_30px_rgba(220,38,38,0.15)] z-50 scale-100' 
          : 'border-white/[0.08] hover:border-red-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:scale-[1.02] hover:z-40'
        }
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handlePlayClick}
    >
      {/* Drive Embed Player */}
      {showDrivePlayer && driveId ? (
        <div className="absolute inset-0 z-50 bg-black">
           {isLoading && (
             <div className="absolute inset-0 flex items-center justify-center">
               <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
             </div>
           )}
           <iframe 
             src={`https://drive.google.com/file/d/${driveId}/preview`}
             className="w-full h-full border-0"
             allow="autoplay; encrypted-media"
             allowFullScreen
             onLoad={() => setIsLoading(false)}
           ></iframe>
           {/* Close Overlay Button */}
           <button 
             onClick={(e) => { e.stopPropagation(); setShowDrivePlayer(false); }}
             className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
           >
             <ExternalLink size={16} />
           </button>
        </div>
      ) : (
        /* Native / Preview Layer */
        <>
          <div className="w-full h-full relative">
            <img 
              src={video.image} 
              alt={video.title} 
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 absolute inset-0 z-10 ${isPlaying && !driveId ? 'opacity-0' : 'opacity-100'}`}
            />
            
            {/* Native Video Element (if available and not Drive) */}
            {!driveId && video.videoUrl && (
              <video
                ref={videoRef}
                src={video.videoUrl}
                className="w-full h-full object-cover absolute inset-0 z-0"
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
              />
            )}
          </div>
          
          {/* Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 z-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-60"></div>
          
          {/* Big Play Button (Center) */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 z-30 pointer-events-none ${(isPlaying || showDrivePlayer) ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
             <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover:bg-red-600 group-hover:border-red-500 group-hover:scale-110 transition-all duration-300">
                <Play fill="currentColor" className="ml-1 text-white" size={32} />
             </div>
          </div>

          {/* Controls for Native Video */}
          {!driveId && (
            <div className={`absolute top-4 right-4 z-40 transition-all duration-300 ${isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
               <div className="flex items-center gap-3 p-1.5 pl-4 pr-1.5 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 shadow-lg">
                   {/* Volume */}
                   <div className="flex items-center gap-2 group/vol">
                       <button onClick={toggleMute} className="text-white hover:text-red-400 transition-colors">
                          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                       </button>
                       <div className="w-0 overflow-hidden group-hover/vol:w-16 transition-all duration-300">
                          <input 
                            type="range" min="0" max="1" step="0.1" value={isMuted ? 0 : volume} 
                            onChange={handleVolumeChange}
                            className="w-16 h-1 accent-red-500 bg-white/30 rounded-lg cursor-pointer"
                          />
                       </div>
                   </div>
                   {/* Play/Pause Mini */}
                   <button 
                     onClick={(e) => { e.stopPropagation(); handlePlayClick(e); }}
                     className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                   >
                      {isPlaying ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
                   </button>
               </div>
            </div>
          )}

          {/* Info Section */}
          <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-30 pointer-events-none">
            <div className="flex items-center gap-2 mb-3">
               <span className="px-2.5 py-1 bg-red-600/90 text-white text-[9px] font-bold uppercase tracking-widest rounded-md backdrop-blur-md shadow-lg shadow-red-900/20">
                  {video.category}
               </span>
               {driveId && (
                 <span className="px-2 py-1 bg-white/10 text-slate-300 text-[9px] font-bold uppercase tracking-widest rounded-md backdrop-blur-md">
                   Click to Watch
                 </span>
               )}
            </div>
            <h3 className="text-xl font-heading font-black text-white mb-1 leading-tight drop-shadow-lg">{video.title}</h3>
            <div className="flex items-center gap-2">
               <span className="flex h-2 w-2 relative">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
               </span>
               <p className="text-xs text-slate-300 font-bold tracking-wide">{video.views}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ShortFormShowcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="shorts" className="py-24 md:py-36 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 relative">
          <div>
            <h2 className="text-[4rem] md:text-[10rem] font-heading font-black text-white/[0.03] absolute -top-10 md:-top-24 left-0 select-none pointer-events-none leading-none z-0">
              SHORTS
            </h2>
            <div className="relative z-10">
              <h3 className="text-red-500 font-bold tracking-[0.3em] mb-3 uppercase text-xs md:text-sm pl-1">Viral Content</h3>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter">
                Short Form <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Mastery</span>
              </h2>
              <p className="text-slate-400 mt-6 max-w-xl text-base md:text-lg leading-relaxed">
                Engineered for retention. I create vertical content that hooks viewers instantly and keeps them watching until the end.
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex gap-4 relative z-10 mt-6 md:mt-0">
             <button onClick={() => scroll('left')} className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 hover:bg-red-600 hover:border-red-500 hover:shadow-lg hover:shadow-red-600/30 transition-all text-white flex items-center justify-center group">
               <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
             </button>
             <button onClick={() => scroll('right')} className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 hover:bg-red-600 hover:border-red-500 hover:shadow-lg hover:shadow-red-600/30 transition-all text-white flex items-center justify-center group">
               <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-20 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pt-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SHORT_FORM_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex justify-center mt-[-20px] opacity-60">
           <div className="flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-widest">
              <ChevronLeft size={14} className="animate-pulse" /> Swipe <ChevronRight size={14} className="animate-pulse" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default ShortFormShowcase;