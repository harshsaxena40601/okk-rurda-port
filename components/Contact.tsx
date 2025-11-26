import React from 'react';
import { Mail, Send, User, MessageSquare, Clock } from 'lucide-react';
import { AppMode } from '../types';

interface ContactProps {
  mode: AppMode;
}

const Contact: React.FC<ContactProps> = ({ mode }) => {
  const isVideo = mode === 'video';
  const btnGradient = isVideo 
    ? 'bg-gradient-to-r from-cine-red to-orange-600 hover:shadow-[0_0_30px_rgba(255,74,25,0.4)]' 
    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]';

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-36 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-4 md:mb-6 leading-tight">
            Let's Create <br />
            <span className={isVideo ? 'text-cine-red' : 'text-blue-500'}>Something Iconic.</span>
          </h2>
          <p className="text-text-muted text-base md:text-lg lg:text-xl">
             Available for freelance projects and collaborations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#111] p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-white/5 shadow-2xl relative animate-scale-in group hover:border-white/10 transition-all">
           <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${isVideo ? 'from-cine-red to-orange-500' : 'from-blue-600 to-cyan-500'} group-hover:shadow-lg group-hover:shadow-blue-500/50`}></div>
           
           <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                 <div className="relative group animate-slide-in-left" style={{ animationDelay: '100ms' }}>
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-white group-focus-within:scale-110 transition-all" />
                    <input type="text" placeholder="Name" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg md:rounded-xl py-3 md:py-4 pl-12 text-white text-base focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all min-h-[44px]" />
                 </div>
                 <div className="relative group animate-slide-in-right" style={{ animationDelay: '100ms' }}>
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-white group-focus-within:scale-110 transition-all" />
                    <input type="email" placeholder="Email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg md:rounded-xl py-3 md:py-4 pl-12 text-white text-base focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all min-h-[44px]" />
                 </div>
              </div>
              
              <div className="relative group animate-slide-in-down" style={{ animationDelay: '200ms' }}>
                 <MessageSquare size={18} className="absolute left-4 top-6 text-slate-500 group-focus-within:text-white group-focus-within:scale-110 transition-all" />
                 <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg md:rounded-xl py-3 md:py-4 pl-12 text-white text-base focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all resize-none"></textarea>
              </div>

              <button className={`w-full py-3 md:py-5 rounded-lg md:rounded-xl text-white font-bold text-base md:text-lg tracking-wide shadow-xl transform transition-all hover:-translate-y-1 hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 ${btnGradient} cta-full animate-fade-in-up group hover:scale-105 min-h-[48px]`} style={{ animationDelay: '300ms' }}>
                 <span>Send Message</span> <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </form>

           <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 text-text-muted text-xs md:text-sm">
              <Clock size={14} />
              <span>Typical response time: Within 2 hours</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;