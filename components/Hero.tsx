import React, { useState, MouseEvent } from 'react';
import { ArrowRight, Code, Film, Star, CheckCircle, Award, Play } from 'lucide-react';
import { HERO_DATA } from '../constants';
import { AppMode } from '../types';

interface HeroProps {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
}

const Hero: React.FC<HeroProps> = ({ mode, setMode }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const isVideo = mode === 'video';

  const handleToggle = (newMode: AppMode) => {
    if (mode === newMode) return;
    setIsAnimating(true);
    setMode(newMode);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const content = HERO_DATA[mode];

  // Cinematic Theme Styles
  const primaryText = isVideo ? 'text-cine-red' : 'text-blue-500';
  const primaryBg = isVideo ? 'bg-cine-red' : 'bg-blue-600';
  const glowColor = isVideo ? 'shadow-cine-red/40' : 'shadow-blue-500/40';
  const gradientText = isVideo 
    ? 'from-cine-red via-orange-500 to-yellow-500' 
    : 'from-blue-500 via-blue-400 to-cyan-400';

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden min-h-screen flex items-center bg-[#050505]">
      {/* Cinematic Background Ambience - Low Saturation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 transition-colors duration-1000 ${isVideo ? 'bg-cine-red' : 'bg-blue-900'}`}></div>
         <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-5 transition-colors duration-1000 ${isVideo ? 'bg-orange-900' : 'bg-cyan-900'}`}></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Side */}
          <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            
            {/* Mode Switcher */}
            <div className="inline-flex items-center bg-surface-highlight border border-white/[0.08] rounded-full p-1.5 mb-8 shadow-inner relative overflow-hidden">
               <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full transition-all duration-500 ease-out shadow-lg ${mode === 'dev' ? 'left-1.5 bg-blue-600' : 'left-[calc(50%+3px)] bg-cine-red'}`}></div>
               <button onClick={() => handleToggle('dev')} className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-colors ${mode === 'dev' ? 'text-white' : 'text-text-muted hover:text-white'}`}>
                 <Code size={14} /> Dev
               </button>
               <button onClick={() => handleToggle('video')} className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-colors ${mode === 'video' ? 'text-white' : 'text-text-muted hover:text-white'}`}>
                 <Film size={14} /> Video
               </button>
            </div>

            {/* Typography */}
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <h2 className={`font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-4 flex items-center gap-2 ${primaryText} justify-center lg:justify-start`}>
                 <span className="w-8 h-[2px] bg-current"></span>
                 {content.greeting}
              </h2>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black text-white tracking-tighter leading-[0.95] mb-4">
                {content.titleLine1} <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientText} animate-text`}>
                  {content.titleLine2}
                </span>
              </h1>
              
              <h3 className="text-lg md:text-2xl text-text-muted font-light mb-8 max-w-xl mx-auto lg:mx-0">
                {content.subtitle} <span className="text-white font-medium border-b border-white/20 pb-0.5">{content.subtitleHighlight}</span>
              </h3>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#projects" 
                  className={`text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3 group ${primaryBg} ${glowColor}`}
                >
                  {content.primaryButtonText}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                {isVideo && (
                  <button className="px-8 py-3.5 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all flex items-center gap-3">
                    <Play size={16} fill="currentColor" /> Showreel
                  </button>
                )}
              </div>

              {/* Social Proof Bar */}
              <div className="mt-10 pt-8 border-t border-white/5 w-full flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
                 <div className="flex flex-col items-center lg:items-start">
                    <div className="flex items-center gap-1 text-yellow-500 mb-1">
                       <Star size={14} fill="currentColor" />
                       <Star size={14} fill="currentColor" />
                       <Star size={14} fill="currentColor" />
                       <Star size={14} fill="currentColor" />
                       <Star size={14} fill="currentColor" />
                    </div>
                    <span className="text-xs text-text-muted font-medium">100% Client Satisfaction</span>
                 </div>
                 
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">
                       <CheckCircle size={20} className={isVideo ? 'text-cine-red' : 'text-blue-500'} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-white font-bold text-lg leading-none">200+</span>
                       <span className="text-[10px] text-text-muted uppercase tracking-wider">Projects Done</span>
                    </div>
                 </div>

                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">
                       <Award size={20} className={isVideo ? 'text-cine-red' : 'text-blue-500'} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-white font-bold text-lg leading-none">5+</span>
                       <span className="text-[10px] text-text-muted uppercase tracking-wider">Years Exp.</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Visual Side with 3D Tilt */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative mt-12 lg:mt-0 z-10" style={{ perspective: '1000px' }}>
             <div 
                className="relative w-full max-w-[400px] lg:max-w-md aspect-[4/5] group transition-all duration-200 ease-out"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                   transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`
                }}
             >
                {/* Glow Behind */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${isVideo ? 'from-cine-red to-orange-600' : 'from-blue-600 to-cyan-500'} rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>
                
                {/* Main Card */}
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                   <img 
                      src={content.profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                   />
                   
                   {/* Vignette Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-80 pointer-events-none"></div>
                   
                   {/* Rec Overlay for Video */}
                   {isVideo && (
                     <div className="absolute top-6 left-6 right-6 flex justify-between items-center pointer-events-none">
                        <div className="flex items-center gap-2">
                           <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                           <span className="text-white font-mono text-xs font-bold tracking-widest">REC</span>
                        </div>
                        <div className="text-white/80 font-mono text-xs">4K • 60FPS</div>
                     </div>
                   )}

                   {/* Floating Stats Card */}
                   <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform transition-transform duration-300 group-hover:translate-z-10" style={{ transform: 'translateZ(20px)' }}>
                      <div className="flex items-center justify-between">
                         <div>
                            <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Current Status</p>
                            <div className="flex items-center gap-2">
                               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                               <span className="text-white font-bold text-sm">Accepting New Projects</span>
                            </div>
                         </div>
                         <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center ${primaryBg}`}>
                            {isVideo ? <Film size={18} className="text-white" /> : <Code size={18} className="text-white" />}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;