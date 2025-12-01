import React, { useRef, useState } from 'react';
import { SHORT_FORM_VIDEOS } from '../constants';
import { Play, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import { ShortFormVideo } from '../types';

// Extract Google Drive video ID
const getDriveId = (url: string) => {
  if (!url) return null;
  const match = url.match(/\/d\/(.+?)(\/|$)|id=(.+?)&|id=(.+?)$/);
  return match ? (match[1] || match[3] || match[4]) : null;
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
        max-w-[200px] md:max-w-[220px] lg:max-w-[240px]  /* FIXED PILL SIZE */
        w-full aspect-[9/16] mx-auto 
        relative rounded-[1.3rem]
        overflow-hidden group border transition-all duration-300 bg-[#0a0a0a]
        ${hasAnyVideo ? 'cursor-pointer' : 'cursor-default'}
        animate-scale-in
        border-white/10 hover:border-white/20 
        hover:shadow-xl hover:scale-[1.01]
        hover:z-40
      `}
      onMouseEnter={() => {
        if (videoRef.current && nativeVideoUrl && !isPlaying) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => { });
          setIsMuted(true);
          setIsPlaying(true);
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          setIsPlaying(false);
        }
      }}
      onClick={() => {
        if (isDriveVideo) {
          setShowDrivePlayer(true);
          setIsLoading(true);
        } else if (videoRef.current) {
          videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
          setIsPlaying(!videoRef.current.paused);
        }
      }}
    >
      <img
        src={video.image}
        alt={video.title}
        className={`w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 ${isPlaying || showDrivePlayer ? 'opacity-0' : 'opacity-100'}`}
        loading="lazy"
        decoding="async"
      />

      {nativeVideoUrl && (
        <video
          ref={videoRef}
          src={nativeVideoUrl}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
      )}

      {isDriveVideo && showDrivePlayer && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <iframe
            src={drivePreviewUrl || ''}
            className="w-full max-w-[900px] h-[85vh] rounded-xl overflow-hidden"
            allow="autoplay; encrypted-media"
            onLoad={() => setIsLoading(false)}
          />
          <button
            className="absolute top-4 right-4 px-4 py-2 bg-red-600 rounded-full text-white"
            onClick={() => setShowDrivePlayer(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-20" />

      {!isPlaying && !showDrivePlayer && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
            <Play fill="white" size={22} />
          </div>
        </div>
      )}

      {/* Info */}
      <div className="absolute bottom-0 left-0 w-full p-3 z-30 pointer-events-none">
        <span className="text-[9px] font-bold uppercase tracking-widest text-red-500">{video.category}</span>
        <h3 className="text-sm font-bold text-white">{video.title}</h3>
      </div>
    </div>
  );
};

const ShortFormShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="shorts" className="bg-[#050505] py-20 border-b border-white/10">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h3 className="text-red-600 font-bold uppercase text-xs tracking-wider mb-2">VIRAL CONTENT</h3>
            <h2 className="text-4xl font-heading font-black text-white">Short Form Mastery</h2>
          </div>

          <div className="hidden md:flex gap-3">
            <button onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10">
              <ChevronLeft />
            </button>
            <button onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
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
