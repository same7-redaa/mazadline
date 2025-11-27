import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Award } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white pt-20 lg:pt-0">
      
      {/* Background Grid Pattern (Subtle Industrial Feel) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col lg:flex-row items-center">
        
        {/* Text Content Area (Right Side) */}
        <div className="w-full lg:w-1/2 py-12 lg:py-24 space-y-8 lg:pl-12">
          <RevealOnScroll animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 border-r-4 border-brand-orange pr-4">
              <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">الحلول الصناعية المتقدمة</span>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-brand-dark leading-[1.1]">
              عالم جديد من <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-orange to-orange-600">
                العزل المتكامل
              </span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll animation="fade-up" delay={200}>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg border-l-2 border-gray-100 pl-4">
              مزاد لاين تقدم أحدث تقنيات العزل الحراري والصوتي وأنظمة التكييف (HVAC) وفق أعلى المعايير العالمية لضمان كفاءة مشاريعكم.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="#products" 
                className="group bg-brand-dark text-white px-6 sm:px-8 py-3 sm:py-4 border border-brand-dark font-bold text-base sm:text-lg flex items-center justify-center gap-3 hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-xl"
              >
                تصفح المنتجات
                <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-brand-orange" />
              </a>
              <a 
                href="#contact" 
                className="group bg-transparent text-brand-dark border border-gray-300 px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center justify-center"
              >
                طلب عرض سعر
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* Image Area (Left Side) - Geometric Split */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-full absolute top-0 left-0 lg:relative order-first lg:order-last hidden lg:block">
           <RevealOnScroll animation="slide-in-left" duration={1000} className="h-full w-full relative">
              {/* The Geometric Shape Container */}
              <div 
                className="absolute inset-0 bg-brand-orange w-full h-full z-10 transform translate-x-4 translate-y-4"
                style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
              ></div>
              <div 
                className="w-full h-full relative z-20 overflow-hidden bg-gray-900"
                style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop" 
                  alt="Industrial Insulation" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-transparent mix-blend-multiply"></div>
              </div>
           </RevealOnScroll>
        </div>
        
        {/* Mobile Image Fallback */}
        <div className="w-full h-64 lg:hidden relative mt-8 overflow-hidden rounded-lg">
           <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" 
              alt="Industrial Insulation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
        </div>

      </div>

      {/* Bottom Info Bar */}
      <div className="bg-white border-t border-gray-100 py-4 lg:py-6 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <RevealOnScroll animation="fade-up" delay={400} className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 lg:gap-4 sm:border-l border-gray-100 sm:pl-4 justify-center">
              <div className="p-2 sm:p-3 bg-orange-50 text-brand-orange rounded-lg flex-shrink-0">
                <Award size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="text-center sm:text-right min-w-0">
                <p className="font-bold text-brand-dark text-xs sm:text-sm lg:text-base">جودة مضمونة</p>
                <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">خامات مطابقة للمواصفات</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-up" delay={500} className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 lg:gap-4 sm:border-l border-gray-100 sm:pl-4 justify-center">
              <div className="p-2 sm:p-3 bg-orange-50 text-brand-orange rounded-lg flex-shrink-0">
                <Truck size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="text-center sm:text-right min-w-0">
                <p className="font-bold text-brand-dark text-xs sm:text-sm lg:text-base">شحن سريع</p>
                <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">أسطول نقل يغطي المملكة</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-up" delay={600} className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 lg:gap-4 justify-center">
              <div className="p-2 sm:p-3 bg-orange-50 text-brand-orange rounded-lg flex-shrink-0">
                <ShieldCheck size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="text-center sm:text-right min-w-0">
                <p className="font-bold text-brand-dark text-xs sm:text-sm lg:text-base">وكلاء معتمدون</p>
                <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">لأكبر العلامات التجارية</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;