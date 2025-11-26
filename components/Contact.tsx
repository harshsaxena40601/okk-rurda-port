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
    <section id="contact" className="py-8 sm:py-12 md:py-24 lg:py-36 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-6 relative z-10">
        {/* Header - Mobile Optimized */}
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2 sm:px-0">
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight">
            Let's Create <br className="hidden xs:block" />
            <span className={isVideo ? 'text-cine-red' : 'text-blue-500'}>Something Iconic.</span>
          </h2>
          <p className="text-text-muted text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Available for freelance projects and collaborations.
          </p>
        </div>

        {/* Form Card - Mobile Optimized */}
        <div className="max-w-2xl mx-auto bg-[#111] p-4 xs:p-5 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] border border-white/5 shadow-2xl relative animate-scale-in group hover:border-white/10 transition-all">
          {/* Top Border Accent */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${isVideo ? 'from-cine-red to-orange-500' : 'from-blue-600 to-cyan-500'} group-hover:shadow-lg ${isVideo ? 'group-hover:shadow-red-500/50' : 'group-hover:shadow-blue-500/50'}`}></div>

          <form className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Name & Email Row - Mobile Single Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-3.5 sm:gap-4 md:gap-6">
              {/* Name Input - Mobile Optimized */}
              <div className="relative group animate-slide-in-left" style={{ animationDelay: '100ms' }}>
                <User size={18} className="absolute left-3 xs:left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-white group-focus-within:scale-110 transition-all flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg xs:rounded-lg sm:rounded-xl py-2.5 xs:py-3 sm:py-3.5 md:py-4 pl-10 xs:pl-11 sm:pl-12 text-white text-sm xs:text-base focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all placeholder:text-slate-600 min-h-[44px]"
                  required
                />
              </div>

              {/* Email Input - Mobile Optimized */}
              <div className="relative group animate-slide-in-right" style={{ animationDelay: '100ms' }}>
                <Mail size={18} className="absolute left-3 xs:left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-white group-focus-within:scale-110 transition-all flex-shrink-0" />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg xs:rounded-lg sm:rounded-xl py-2.5 xs:py-3 sm:py-3.5 md:py-4 pl-10 xs:pl-11 sm:pl-12 text-white text-sm xs:text-base focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all placeholder:text-slate-600 min-h-[44px]"
                  required
                />
              </div>
            </div>

            {/* Message Textarea - Mobile Optimized */}
            <div className="relative group animate-slide-in-down" style={{ animationDelay: '200ms' }}>
              <MessageSquare size={18} className="absolute left-3 xs:left-3.5 sm:left-4 top-3 xs:top-3.5 sm:top-4 text-slate-500 group-focus-within:text-white group-focus-within:scale-110 transition-all flex-shrink-0 pointer-events-none" />
              <textarea 
                rows={4} 
                placeholder="Tell me about your project..." 
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg xs:rounded-lg sm:rounded-xl py-2.5 xs:py-3 sm:py-3.5 md:py-4 pl-10 xs:pl-11 sm:pl-12 text-white text-sm xs:text-base focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all resize-none placeholder:text-slate-600 min-h-[120px] sm:min-h-[140px]"
                required
              />
            </div>

            {/* Submit Button - Mobile Full Width */}
            <button 
              className={`w-full py-3 xs:py-3.5 sm:py-4 md:py-5 rounded-lg xs:rounded-lg sm:rounded-xl text-white font-bold text-sm xs:text-base sm:text-base md:text-lg tracking-wide shadow-xl transform transition-all hover:-translate-y-1 hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 xs:gap-3 ${btnGradient} cta-full animate-fade-in-up group hover:scale-105 min-h-[48px]`} 
              style={{ animationDelay: '300ms' }}
              type="submit"
            >
              <span className="hidden xs:inline">Send Message</span>
              <span className="xs:hidden">Send</span>
              <Send size={18} className="xs:size-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
          </form>

          {/* Response Time Info - Mobile Optimized */}
          <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 flex items-center justify-center gap-2 text-slate-400 text-[11px] xs:text-xs sm:text-sm">
            <Clock size={14} className="flex-shrink-0" />
            <span>Typical response time: Within 2 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;