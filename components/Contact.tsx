import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { AppMode } from '../types';

interface ContactProps {
  mode: AppMode;
}

const Contact: React.FC<ContactProps> = ({ mode }) => {
  const isVideo = mode === 'video';
  
  const accentText = isVideo ? 'text-red-600' : 'text-blue-500';
  const btnColor = isVideo 
    ? 'bg-red-600 hover:bg-red-700 shadow-red-600/20' 
    : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20';
  const focusBorder = isVideo 
    ? 'focus:border-red-600 focus:ring-1 focus:ring-red-600/50' 
    : 'focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50';
  const iconBg = isVideo ? 'group-hover:bg-red-600 group-hover:text-white' : 'group-hover:bg-blue-600 group-hover:text-white';

  return (
    <section id="contact" className="py-20 md:py-32 bg-darker">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          <div>
            <h3 className={`${accentText} font-bold tracking-[0.2em] mb-4 uppercase text-sm`}>CONTACT</h3>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6 md:mb-8">
              {isVideo ? 'Start A Project' : "Let's Build It"}
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-8 md:mb-12 max-w-md leading-relaxed">
              {isVideo 
                ? "Ready to transform your raw footage into a masterpiece? Let's create something cinematic." 
                : "Have a complex technical challenge? I'm ready to help you engineer the perfect solution."}
            </p>

            <div className="space-y-6 md:space-y-8">
              {[
                { icon: Mail, title: 'Email', value: 'rudra.saxena@example.com' },
                { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567' },
                { icon: MapPin, title: 'Location', value: 'Available Worldwide (Remote)' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 md:gap-6 group">
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-card rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-white/5 text-slate-400 transition-all duration-300 ${iconBg}`}>
                    <item.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm md:text-base">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-[2rem] border border-white/5 shadow-2xl">
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full bg-dark border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm md:text-base focus:outline-none transition-all ${focusBorder}`}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full bg-dark border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm md:text-base focus:outline-none transition-all ${focusBorder}`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className={`w-full bg-dark border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm md:text-base focus:outline-none transition-all ${focusBorder}`}
                  placeholder={isVideo ? "Video Project Inquiry" : "Project Inquiry"}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className={`w-full bg-dark border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm md:text-base focus:outline-none transition-all resize-none ${focusBorder}`}
                  placeholder={isVideo ? "Tell me about your vision..." : "Tell me about the problem..."}
                ></textarea>
              </div>

              <button type="submit" className={`w-full text-white py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg flex items-center justify-center gap-3 hover:-translate-y-1 ${btnColor}`}>
                Send Message
                <Send size={18} className="md:w-5 md:h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;