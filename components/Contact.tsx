import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h3 className="text-primary font-medium tracking-widest mb-2">GET IN TOUCH</h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Let's Talk!
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Have a project in mind? I'd love to hear from you. Let's build something amazing together.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-primary shrink-0 border border-white/5">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email</h4>
                  <p className="text-slate-400">rudra.saxena@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-primary shrink-0 border border-white/5">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Phone</h4>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-primary shrink-0 border border-white/5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Location</h4>
                  <p className="text-slate-400">Available Worldwide (Remote)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 md:p-10 rounded-3xl border border-white/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
