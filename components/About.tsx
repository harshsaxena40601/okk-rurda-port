import React from 'react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-darker relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-primary font-medium tracking-widest mb-2">ABOUT ME</h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Full Stack Developer</span><br/> Available for Projects
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Hello! I'm Rudra, a full-stack developer with over 5 years of experience crafting modern web applications. I transform complex problems into elegant solutions with clean, efficient code. My journey in web development started with a fascination for creating interactive experiences.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Today, I specialize in building responsive, user-centered applications that deliver exceptional performance across all devices. Whether it's a custom Shopify store or a complex React dashboard, I deliver quality.
            </p>

            <div className="flex gap-8 mb-8">
              <div>
                <span className="block text-4xl font-bold text-white mb-1">50+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Projects Completed</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-1">5+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-1">15+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Technologies Learned</span>
              </div>
            </div>
            
            <a href="#projects" className="inline-block bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              View My Work
            </a>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-card p-8 rounded-2xl border border-white/5 h-full">
               <h4 className="text-2xl font-bold text-white mb-6">Tech Stack & Skills</h4>
               <div className="flex flex-wrap gap-3">
                 {SKILLS.map((skill) => (
                   <span 
                    key={skill.name}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                   >
                     {skill.name}
                   </span>
                 ))}
               </div>
               
               <div className="mt-10 p-6 bg-dark/50 rounded-xl border border-white/5">
                  <p className="text-slate-400 italic">
                    "Rudra is an exceptional developer who delivers not just code, but business solutions. His SEO expertise helped us double our organic traffic."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">JD</div>
                    <div>
                      <div className="text-white font-medium">John Doe</div>
                      <div className="text-xs text-slate-500">CEO, TechStart Inc.</div>
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

export default About;
