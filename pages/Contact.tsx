import React, { useState } from 'react';
import { AppMode } from '../types';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, Youtube, Plus, Minus, Clock, CheckCircle } from 'lucide-react';
import { FAQ_DATA, AVAILABILITY_STATUS } from '../constants';

interface ContactPageProps {
  mode: AppMode;
}

const ContactPage: React.FC<ContactPageProps> = ({ mode }) => {
  const isVideo = mode === 'video';
  const accentBg = isVideo ? 'bg-cine-red' : 'bg-blue-600';
  const accentText = isVideo ? 'text-cine-red' : 'text-blue-500';
  
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
           {/* Left: Info & FAQ */}
           <div className="space-y-16">
              <div>
                 <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 leading-tight">
                    Let's Create <br /> Something <span className={accentText}>Iconic.</span>
                 </h1>
                 <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                    Ready to elevate your brand? I'm currently available for select projects.
                 </p>
                 
                 {/* Availability Status */}
                 <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 text-xs font-bold uppercase tracking-wide">
                       {AVAILABILITY_STATUS.text}
                    </span>
                 </div>
              </div>

              <div className="space-y-8">
                 <h3 className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">Contact Info</h3>
                 <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                       <Mail size={20} />
                    </div>
                    <div>
                       <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email</div>
                       <div className="text-white text-lg font-medium">hello@rudrasaxena.com</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                       <Phone size={20} />
                    </div>
                    <div>
                       <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">WhatsApp</div>
                       <div className="text-white text-lg font-medium">+91 98765 43210</div>
                    </div>
                 </div>
              </div>

              {/* FAQs */}
              <div>
                 <h3 className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-6">FAQ</h3>
                 <div className="space-y-4">
                    {FAQ_DATA.map((faq, idx) => (
                       <div key={idx} className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden transition-all">
                          <button 
                             onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                             className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                          >
                             <span className="font-bold text-white">{faq.question}</span>
                             {openFaq === idx ? <Minus size={16} className={accentText} /> : <Plus size={16} className="text-slate-500" />}
                          </button>
                          <div className={`px-6 transition-all duration-300 overflow-hidden ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                             <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Right: Form */}
           <div className="lg:sticky lg:top-32">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                 <div className={`absolute top-0 right-0 w-64 h-64 ${isVideo ? 'bg-orange-600/10' : 'bg-blue-600/10'} rounded-full blur-[80px] -z-10`}></div>
                 
                 <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder-white/20" placeholder="John Doe" />
                       </div>
                       <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                          <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder-white/20" placeholder="john@example.com" />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none">
                             <option>Video Editing</option>
                             <option>Full Stack Dev</option>
                             <option>Shopify Store</option>
                             <option>Consultation</option>
                          </select>
                       </div>
                       <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Budget</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none">
                             <option>$500 - $1k</option>
                             <option>$1k - $3k</option>
                             <option>$3k - $5k</option>
                             <option>$5k+</option>
                          </select>
                       </div>
                    </div>

                    <div>
                       <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Details</label>
                       <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none placeholder-white/20" placeholder="Tell me about your goals, timeline, and vision..."></textarea>
                    </div>

                    <button className={`w-full py-5 rounded-xl text-white font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 ${accentBg}`}>
                       Send Proposal <Send size={18} />
                    </button>
                 </form>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
