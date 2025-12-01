import React, { useRef, useState } from 'react';
import { SHORT_FORM_VIDEOS } from '../constants';
import { Play, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import { ShortFormVideo } from '../types';

// Helper to extract Drive ID
const getDriveId = (url: string) => {
  if (!url) return null;
  if (url.includes('drive.google.com')) {
    const match = url.match(/\/d\/(.+?)(\/|$)|id=(.+?)&|id=(.+?)$/);
    return match ? (match[1] || match[3] || match[4]) : null;
  }
  return null;
};

const VideoCard: React.FC<{ video: ShortFormVideo }> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [showDrivePlayer, setShowDrivePlayer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const driveId = getDriveId(video.videoUrl || '');
  const isDriveVideo = Boolean(driveId);
  const drivePreviewUrl = driveId ? `https://drive.google.com/file/d/${driveId}/preview` : null;
  const nativeVideoUrl = !isDriveVideo ? video.videoUrl : null;
  const hasAnyVideo = Boolean(nativeVideoUrl || drivePreviewUrl);

  return (
    <div
      className={`
        w-full 
        aspect-[9/16]       /* 🔥 Responsive height */
        relative rounded-[1.2rem] overflow-hidden border
        bg-[#0a0a0a] transition-all duration-300 group
        ${hasAnyVideo ? 'cursor-pointer' : 'cursor-default'}
        hover:border-white/20 hover:shadow-xl hover:scale-[1.01]
        md:min-w-[180px] lg:min-w-[220px] /* 🔥 Only set width on md+ */
      `}
      onMouseEnter={() => {
        if (videoRef.current && nativeVideoUrl && !isPlaying) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => { });
          setIsPlaying(true);
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current && nativeVideoUrl) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          setIsPlaying(false);
        }
      }}
      onClick={hasAnyVideo ? async () => {
        if (isDriveVideo) {
          setIsLoading(true);
          setShowDrivePlayer(true);
        } else if (videoRef.current) {
          if (videoRef.current.paused) {
            await videoRef.current.play().catch(() => { });
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      } : undefined}
    >
      {/* Thumbnail */}
      <img
        src={video.image}
        alt={video.title}
        loading="lazy"
        className={`w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0
          ${(nativeVideoUrl && isPlaying) || (isDriveVideo && showDrivePlayer) ? 'opacity-0' : 'opacity-100'}
        `}
      />

      {/* Native Video */}
      {nativeVideoUrl && (
        <video
          ref={videoRef}
          src={nativeVideoUrl}
          className="w-full h-full object-cover absolute inset-0"
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-95"></div>

      {/* Play Button */}
      {hasAnyVideo && (
        <div className={`absolute inset-0 flex items-center justify-center transition-all z-30 pointer-events-none
          ${(nativeVideoUrl && isPlaying) || (isDriveVideo && showDrivePlayer) ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}
        `}>
          <div className="w-14 h-14 bg-white/12 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
            <Play fill="white" size={22} />
          </div>
        </div>
      )}

      {/* Info */}
      <div className="absolute bottom-0 left-0 w-full p-4 z-30 pointer-events-none">
        <span className="text-[9px] font-bold uppercase tracking-widest text-red-500">{video.category}</span>
        <h3 className="text-sm font-bold text-white leading-tight">{video.title}</h3>
        <p className="text-[10px] text-slate-400">{video.views}</p>
      </div>
    </div>
  );
};

const ShortFormShowcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="shorts" className="bg-[#050505] border-b border-white/5">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h3 className="text-red-600 font-bold tracking-[0.2em] mb-2 uppercase text-xs md:text-sm">VIRAL CONTENT</h3>
            <h2 className="text-3xl md:text-5xl font-black text-white">Short Form Mastery</h2>
            <p className="text-slate-400 mt-3 text-sm md:text-base">Vertical content engineered for maximum retention.</p>
          </div>

          <div className="hidden md:flex gap-3">
            <button onClick={() => scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })} className="w-10 h-10 rounded-full border border-white/10 hover:bg-white/5 text-white">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })} className="w-10 h-10 rounded-full border border-white/10 hover:bg-white/5 text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SHORT_FORM_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortFormShowcase;
