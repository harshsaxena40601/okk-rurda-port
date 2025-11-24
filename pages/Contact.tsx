import React from 'react';
import { AppMode } from '../types';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

interface ContactPageProps {
  mode: AppMode;
}

const ContactPage: React.FC<ContactPageProps> = ({ mode }) => {
  const isVideo = mode === 'video';
  const accentBg = isVideo ? 'bg-cine-red' : 'bg-blue-600';
  
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
           {/* Info Side */}
           <div>
              <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 leading-tight">
                 Let's Create <br /> Something <span className={isVideo ? 'text-cine-red' : 'text-blue-500'}>Iconic.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
                 Ready to elevate your brand? Fill out the form or reach out directly. I usually respond within 2 hours.
              </p>

              <div className="space-y-8 mb-16">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                       <Mail size={20} />
                    </div>
                    <div>
                       <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email</div>
                       <div className="text-white text-lg">hello@rudrasaxena.com</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                       <Phone size={20} />
                    </div>
                    <div>
                       <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">WhatsApp</div>
                       <div className="text-white text-lg">+91 98765 43210</div>
                    </div>
                 </div>
              </div>

              <div>
                 <div className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-4">Socials</div>
                 <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Instagram size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Youtube size={18} /></a>
                 </div>
              </div>
           </div>

           {/* Form Side */}
           <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                       <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                       <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                       <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="john@example.com" />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Type</label>
                       <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none">
                          <option>Video Editing</option>
                          <option>Web Development</option>
                          <option>Shopify Store</option>
                          <option>Other</option>
                       </select>
                    </div>
                    <div>
                       <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Budget</label>
                       <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none">
                          <option>$500 - $1k</option>
                          <option>$1k - $5k</option>
                          <option>$5k+</option>
                       </select>
                    </div>
                 </div>

                 <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="Tell me about your project details..."></textarea>
                 </div>

                 <button className={`w-full py-4 rounded-xl text-white font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 ${accentBg}`}>
                    Send Message <Send size={18} />
                 </button>
              </form>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;