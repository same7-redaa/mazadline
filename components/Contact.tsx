import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info Card */}
          <RevealOnScroll animation="slide-in-left">
            <div className="bg-white p-10 shadow-2xl border-t-4 border-brand-orange h-full flex flex-col justify-center">
              <h4 className="text-brand-orange font-bold uppercase tracking-wider mb-2 text-sm">تواصل معنا</h4>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-8">
                جاهزون لخدمتك
              </h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-gray-900 text-lg mb-3">أرقام التواصل</h5>
                    <div className="space-y-2">
                      {CONTACT_INFO.phones.map((phone, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <p className="text-gray-600 font-medium ltr" style={{ direction: 'ltr', textAlign: 'right' }}>
                            {phone.number}
                          </p>
                          <a 
                            href={phone.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 transition-colors flex items-center gap-1"
                          >
                            واتساب
                          </a>
                          <a 
                            href={`tel:+2${phone.number}`}
                            className="bg-brand-orange hover:bg-orange-600 text-white text-xs px-3 py-1 transition-colors"
                          >
                            اتصال
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg mb-1">البريد الإلكتروني</h5>
                    <p className="text-gray-600 font-medium">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg mb-3">العناوين</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="font-bold text-brand-orange text-sm mb-1">المقر الإداري</p>
                        <p className="text-gray-600 font-medium leading-relaxed text-sm">
                          {CONTACT_INFO.mainOffice}
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-brand-orange text-sm mb-1">المخازن</p>
                        <p className="text-gray-600 font-medium leading-relaxed text-sm">
                          {CONTACT_INFO.warehouse}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href={CONTACT_INFO.phones[0].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-orange text-white py-4 font-bold text-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-3 shadow-xl"
              >
                <Send size={20} />
                أرسل رسالة واتساب مباشرة
              </a>
            </div>
          </RevealOnScroll>

          {/* Map Section */}
          <RevealOnScroll animation="zoom-in" delay={200} className="h-full">
            <div className="bg-gray-200 overflow-hidden shadow-2xl h-[500px] lg:h-full relative">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6329775376043!2d46.73010367595568!3d24.70529815152285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1715421234567!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
              ></iframe>
              
              <div className="absolute top-6 left-6 bg-white py-2 px-4 shadow-lg border-r-4 border-brand-orange">
                 <span className="font-bold text-gray-800 text-sm">موقعنا على الخريطة</span>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Contact;