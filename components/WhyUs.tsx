import React from 'react';
import { REASONS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white text-center relative overflow-hidden border-y-4 border-gray-900">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F47A20_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll animation="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-16">
            لماذا تختار <span className="text-brand-orange">MAZAD LINE</span> ؟
          </h2>
        </RevealOnScroll>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {REASONS.map((reason, index) => (
            <RevealOnScroll key={reason.id} delay={index * 100} animation="zoom-in">
              <div className="flex flex-col items-center group cursor-default">
                <div className="w-24 h-24 border-4 border-gray-700 flex items-center justify-center mb-6 group-hover:border-brand-orange group-hover:bg-brand-orange/10 transition-all duration-300 relative">
                  <reason.Icon size={40} className="text-gray-300 group-hover:text-brand-orange transition-colors" />
                  
                  {/* Small orange dot decoration */}
                  <span className="absolute top-0 right-0 w-3 h-3 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
                  {reason.title}
                </h3>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;