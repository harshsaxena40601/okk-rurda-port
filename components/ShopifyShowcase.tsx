import React, { useEffect, useState } from 'react';
import { SPECIALIZED_SOLUTIONS } from '../constants';
import { ShoppingBag, Film } from 'lucide-react';
import { AppMode } from '../types';

interface SpecializedProps {
   mode: AppMode;
}

const ShopifyShowcase: React.FC<SpecializedProps> = ({ mode }) => {
   const data = SPECIALIZED_SOLUTIONS[mode];
   const [projects, setProjects] = useState(data.projects || []);

   // Shuffle projects once
   useEffect(() => {
      const shuffle = (arr: any[]) => {
         const a = [...arr];
         for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
         }
         return a;
      };
      setProjects(shuffle(data.projects || []));
   }, [mode]);

   const isVideo = mode === "video";
   const accentText = isVideo ? "text-cine-red" : "text-blue-500";
   const badgeBg = isVideo ? "bg-cine-red/10" : "bg-blue-500/10";

   return (
      <section id="shopify" data-section className="bg-[#050505] border-y border-white/5">
         <div className="section-shell">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-12 lg:items-end mb-12 md:mb-16">
               <div className="flex-1">
                  <div
                     className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest mb-3 md:mb-6 ${badgeBg} ${accentText}`}
                  >
                     {isVideo ? <Film size={12} /> : <ShoppingBag size={12} />}
                     <span>Specialized Solutions</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight">
                     {data.title}
                  </h2>
               </div>
               <div className="lg:w-1/3">
                  <p className="text-text-muted text-sm md:text-base lg:text-lg">{data.subtitle}</p>
               </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
               {projects.map((project, i) => (
                  <div
                     key={project.id}
                     className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl"
                  >
                     {/* 🔹 Optimized Thumbnail height */}
                     <div
                        className="
                  relative 
                  h-36 
                  sm:h-40 
                  md:h-44     /* previously 48/64 – reduced */
                  lg:h-52     /* visibly smaller now */
                  overflow-hidden
                "
                     >
                        <img
                           src={project.image}
                           alt={project.title}
                           loading="lazy"
                           decoding="async"
                           fetchpriority="low"
                           className="
                    w-full h-full object-cover 
                    grayscale group-hover:grayscale-0 
                    transition-transform duration-700 group-hover:scale-105 
                    opacity-70 group-hover:opacity-100
                  "
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-3 right-3">
                           <h3 className="text-base md:text-lg font-bold text-white leading-tight line-clamp-1">
                              {project.title}
                           </h3>
                           <div className="flex flex-wrap gap-1.5 mt-1">
                              {project.technologies.slice(0, 2).map((tech) => (
                                 <span
                                    key={tech}
                                    className="
                          text-[8px] md:text-[10px] 
                          bg-white/10 backdrop-blur-md 
                          px-2 py-0.5 rounded-md text-white font-medium
                        "
                                 >
                                    {tech}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Info Section */}
                     <div className="p-4 md:p-5 space-y-4">
                        <p className="text-text-muted text-xs md:text-sm leading-relaxed line-clamp-2">
                           {project.description}
                        </p>

                        <div className="space-y-2">
                           {project.results.map((res, idx) => (
                              <div
                                 key={idx}
                                 className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0"
                              >
                                 <span className="text-xs md:text-sm text-text-muted font-medium">{res.metric}</span>
                                 <span className={`text-base md:text-lg font-bold ${accentText}`}>{res.value}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ShopifyShowcase;
