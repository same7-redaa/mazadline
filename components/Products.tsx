import React from 'react';
import { PRODUCTS } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { Product } from '../types';
import { ArrowLeft } from 'lucide-react';

const ProductCard = ({ product }: { product: Product }) => {
  const handleClick = () => {
    window.location.href = `/product/${product.id}`;
  };

  return (
    <div 
      className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
    >
      {/* Single Image */}
      <div className="relative h-64 bg-gray-50 overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {product.description}
        </p>
        
        {/* Button */}
        <button
          onClick={handleClick}
          className="mt-auto inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-2.5 font-bold hover:bg-orange-600 transition-all group/btn w-full justify-center"
        >
          عرض التفاصيل
          <ArrowLeft size={18} className="group-hover/btn:-translate-x-1 transition-transform" />
        </button>
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

      </div>
    </section>
  );
};

export default Products;