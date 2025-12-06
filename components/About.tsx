import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <RevealOnScroll animation="slide-in-left" duration={700}>
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                 <img 
                  src="/about-image.jpg" 
                  alt="About Mazad Line" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <RevealOnScroll animation="zoom-in" delay={400} className="absolute -bottom-8 -left-8 z-10 hidden md:block">
                <div className="bg-white p-8 shadow-xl border-r-4 border-brand-orange">
                  <p className="text-4xl font-extrabold text-brand-orange mb-1">+15</p>
                  <p className="text-gray-600 font-medium">عاماً من الخبرة</p>
                </div>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>

          {/* Content Side */}
          <div>
            <RevealOnScroll animation="fade-up">
              <h4 className="text-brand-orange font-bold uppercase tracking-wider mb-2 text-sm">من نحن</h4>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-6">
                شريكك الاستراتيجي في <br/> أنظمة العزل والدكت
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 text-justify">
                تأسست شركة MAZAD LINE لتكون الرائدة في مجال توريد مواد العزل الحراري والصوتي ومستلزمات التكييف المركزي (HVAC). نسعى دائماً لتقديم حلول مبتكرة ومنتجات ذات جودة عالمية تلبي احتياجات المشاريع الإنشائية والصناعية في المملكة والمنطقة.
              </p>
            </RevealOnScroll>

            <div className="space-y-4">
              {[
                'وكلاء لأفضل الماركات العالمية.',
                'فريق هندسي متخصص للدعم الفني.',
                'تغطية لوجستية واسعة لجميع المناطق.'
              ].map((item, index) => (
                <RevealOnScroll key={index} animation="slide-in-right" delay={index * 100}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-orange w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-800 font-medium text-base sm:text-lg">{item}</span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll animation="fade-up" delay={400} className="mt-10">
              <a href="#contact" className="text-brand-orange font-bold hover:underline text-lg">
                تعرف على المزيد عنا &larr;
              </a>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;