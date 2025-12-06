import React from 'react';
import RevealOnScroll from './RevealOnScroll';

// Using text placeholders styled to look like premium corporate logos
const BRANDS_LIST = [
  'Izocam', 'Kimmico', 'Glassrock', 'Rockal', 'K-flex', 'Technometal'
];

const Brands: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-100 border-y-2 border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <RevealOnScroll animation="fade-in">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-brand-dark font-bold text-xl sm:text-2xl mb-2">شركاء النجاح</h3>
            <p className="text-gray-500 text-xs sm:text-sm">
                نفخر بتوريد منتجات كبرى الشركات العالمية
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center items-center gap-3 sm:gap-4 lg:gap-6">
            {BRANDS_LIST.map((brand, index) => (
              <div 
                key={index} 
                className="bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-5 shadow-md border-b-4 border-gray-200 text-center
                           hover:shadow-lg hover:border-b-brand-orange transition-all duration-300 cursor-default group"
              >
                <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-gray-400 group-hover:text-brand-orange transition-colors tracking-wider block">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Brands;