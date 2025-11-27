import React from 'react';
import { SERVICES } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { ArrowLeft } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/80 skew-x-12 translate-x-1/2 pointer-events-none -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <RevealOnScroll animation="slide-in-right">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                أكثر من مجرد مورد ..
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
                نحن شريك <br /> <span className="text-brand-orange relative">
                  نجاحك
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll animation="slide-in-left" delay={100}>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed md:pl-10 border-r-4 border-brand-orange/30 pr-6">
              نسخر خبراتنا وإمكانياتنا لضمان سير عمل مشاريعك بسلاسة وكفاءة عالية. الجودة والسرعة هما معيارنا الدائم.
            </p>
          </RevealOnScroll>
        </div>

        {/* Services Grid - New Modern Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <RevealOnScroll 
              key={service.id} 
              delay={index * 100} 
              animation="fade-up"
              className="h-full"
            >
              <div 
                className="group relative bg-gradient-to-br from-brand-orange to-orange-600 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-700 h-full flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500"></div>

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-orange transition-all duration-300 transform group-hover:rotate-3 shadow-lg">
                      <service.Icon size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-6xl font-black text-white/20 group-hover:text-white/30 transition-colors select-none">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center text-white font-bold text-sm opacity-70 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  تفاصيل أكثر <ArrowLeft className="w-4 h-4 mr-2" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;