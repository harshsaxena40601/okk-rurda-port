import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
         <div className="absolute top-[10%] right-[5%] w-96 h-96 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]"></div>
         <div className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]"></div>
         <div className="absolute bottom-[20%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
         <div className="absolute top-[20%] right-[20%] w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for projects
            </div>
            
            <div className="space-y-2">
              <h2 className="text-primary font-medium tracking-widest text-lg">HELLO! I'M</h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white tracking-tight leading-[0.9]">
                RUDRA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                  SAXENA
                </span>
              </h1>
            </div>

            <h3 className="text-2xl md:text-3xl text-slate-400 font-light">
              Full Stack Developer & <br className="hidden md:block" /> 
              <span className="text-white">Technical SEO Specialist</span>
            </h3>
            
            <p className="text-slate-400 text-lg max-w-xl leading-relaxed border-l-2 border-primary/30 pl-6">
              Passionate about technology and software development. I transform complex problems into elegant solutions with clean, efficient code. 
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-lg shadow-primary/25">
                Get In Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3">
                <a href="#" className="p-4 bg-card hover:bg-white/10 border border-white/5 rounded-full text-white transition-all hover:-translate-y-1">
                  <Github size={22} />
                </a>
                <a href="#" className="p-4 bg-card hover:bg-white/10 border border-white/5 rounded-full text-white transition-all hover:-translate-y-1">
                  <Linkedin size={22} />
                </a>
                <a href="#" className="p-4 bg-card hover:bg-white/10 border border-white/5 rounded-full text-white transition-all hover:-translate-y-1">
                  <Twitter size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
             {/* Profile Card / Illustration */}
             <div className="relative w-full max-w-lg aspect-[4/5] bg-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10"></div>
                <img 
                  src="https://picsum.photos/800/1000?random=10" 
                  alt="Rudra Saxena" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                
                {/* Floating Code Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-darker/90 backdrop-blur-md border border-white/10 p-4 rounded-xl z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                   <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <Terminal size={14} />
                      <span>developer.tsx</span>
                   </div>
                   <div className="text-xs font-mono text-slate-300 space-y-1">
                      <p><span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = <span className="text-purple-400">{`{`}</span></p>
                      <p className="pl-4">name: <span className="text-green-400">'Rudra'</span>,</p>
                      <p className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>],</p>
                      <p className="pl-4">hardWorker: <span className="text-blue-400">true</span></p>
                      <p><span className="text-purple-400">{`}`}</span>;</p>
                   </div>
                </div>
             </div>
             
             {/* Abstract shapes behind */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full blur-[60px] opacity-50"></div>
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent rounded-full blur-[60px] opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;