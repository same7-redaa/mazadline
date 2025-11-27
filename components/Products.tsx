import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { Product } from '../types';

const ProductCard = ({ product }: { product: Product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col h-full">
      {/* Image Carousel */}
      <div className="relative h-64 bg-gray-50">
        <img 
          src={product.images[currentImageIndex]} 
          alt={product.title} 
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        {/* Navigation Overlays */}
        {product.images.length > 1 && (
          <>
            {/* Left Button */}
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            
            {/* Right Button */}
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
              {product.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex 
                      ? 'bg-brand-orange w-4' 
                      : 'bg-white/70 hover:bg-white'
                  }`} 
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {product.description}
        </p>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <RevealOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">منتجاتنا المتميزة</h2>
          <p className="text-gray-600 text-base sm:text-lg">
            نقدم مجموعة واسعة من مواد العزل وملحقات الـ HVAC المصممة لتدوم طويلاً وترفع كفاءة المباني.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <RevealOnScroll key={product.id} delay={index * 100} animation="fade-up">
              <ProductCard product={product} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll animation="fade-up" delay={200} className="text-center mt-12">
            <a 
                href="/catalog"
                className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark px-10 py-3 font-bold hover:bg-brand-dark hover:text-white transition-all group"
            >
                عرض الكتالوج الكامل
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </a>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Products;