import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold mb-2">
              Available for freelance projects
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight text-white">
              Hey! I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Rudra Saxena
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 font-light">
              Full Stack Developer & SEO Specialist
            </h2>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              Passionate about technology and software development. I transform complex problems into elegant solutions with clean, efficient code. Specializing in React, Shopify, and technical SEO.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 group">
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
             <div className="relative w-full max-w-md mx-auto aspect-square bg-gradient-to-tr from-primary/20 to-transparent rounded-full border border-white/10 flex items-center justify-center p-8 backdrop-blur-sm">
                <div className="absolute inset-0 border border-white/5 rounded-full scale-90 animate-pulse"></div>
                {/* Abstract representation of developer profile */}
                <img 
                  src="https://picsum.photos/600/600?grayscale" 
                  alt="Rudra Saxena" 
                  className="rounded-full object-cover w-full h-full shadow-2xl border-4 border-card grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
