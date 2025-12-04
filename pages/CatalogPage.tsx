import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ChevronLeft, ChevronRight, Grid3x3, List } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Product } from '../types';

type ViewMode = 'grid' | 'list';

const ProductCard = ({ product, viewMode }: { product: Product; viewMode: ViewMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  if (viewMode === 'list') {
    return (
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative md:w-80 h-64 md:h-auto bg-gray-50 flex-shrink-0">
          <img 
            src={product.images[currentImageIndex]} 
            alt={product.title} 
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          
          {product.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>

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
          
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              {product.category}
            </span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
            {product.title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            {product.description}
          </p>
          <div className="flex gap-3 mt-auto">
            <a 
              href="/#contact" 
              className="bg-brand-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-orange transition-colors"
            >
              طلب عرض سعر
            </a>
            <button className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-semibold text-sm hover:border-brand-orange hover:text-brand-orange transition-colors">
              المزيد من التفاصيل
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image Carousel */}
      <div className="relative h-64 bg-gray-50">
        <img 
          src={product.images[currentImageIndex]} 
          alt={product.title} 
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

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
        
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            {product.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {product.description}
        </p>
        <a 
          href="/#contact" 
          className="bg-brand-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-orange transition-colors text-center"
        >
          طلب عرض سعر
        </a>
      </div>
    </div>
  );
};

const CatalogPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <RevealOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark mb-4">كتالوج المنتجات الكامل</h1>
            <p className="text-gray-600 text-base sm:text-lg">
              استعرض جميع منتجاتنا المتميزة من مواد العزل الحراري والصوتي ومستلزمات HVAC
            </p>
          </RevealOnScroll>

          {/* View Mode Toggle */}
          <RevealOnScroll animation="fade-up" delay={100}>
            <div className="bg-white shadow-lg border border-gray-100 p-6 mb-8 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                عرض <span className="font-bold text-brand-orange">{PRODUCTS.length}</span> منتج
              </div>
              
              <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-md transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-white text-brand-orange shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  title="عرض شبكي"
                >
                  <Grid3x3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 rounded-md transition-all ${
                    viewMode === 'list' 
                      ? 'bg-white text-brand-orange shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  title="عرض قائمة"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Products Grid/List */}
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'flex flex-col gap-6'
          }`}>
            {PRODUCTS.map((product, index) => (
              <RevealOnScroll key={product.id} delay={index * 50} animation="fade-up">
                <ProductCard product={product} viewMode={viewMode} />
              </RevealOnScroll>
            ))}
          </div>

          {/* CTA Section */}
          <RevealOnScroll animation="fade-up" className="mt-16">
            <div className="bg-gradient-to-l from-brand-orange to-orange-600 p-8 md:p-12 text-center text-white shadow-xl">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">لم تجد ما تبحث عنه؟</h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                فريقنا جاهز لمساعدتك في إيجاد المنتج المناسب لمشروعك
              </p>
              <a 
                href="/#contact" 
                className="inline-block bg-white text-brand-orange px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                تواصل معنا الآن
              </a>
            </div>
          </RevealOnScroll>

        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CatalogPage;
