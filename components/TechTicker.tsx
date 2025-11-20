import React from 'react';
import { TICKER_ITEMS } from '../constants';
import { Zap } from 'lucide-react';

const TechTicker: React.FC = () => {
  return (
    <div className="w-full bg-card py-6 border-y border-white/5 overflow-hidden relative">
      <div className="flex w-[200%] animate-marquee group hover:pause">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center gap-8 mx-8 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
             <Zap size={16} className="text-primary" />
             <span className="text-lg font-heading font-bold text-slate-200 uppercase tracking-widest">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTicker;
