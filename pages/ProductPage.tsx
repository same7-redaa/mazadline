import React from 'react';
import { PRODUCTS } from '../constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { ArrowRight, Package, ShieldCheck, Truck } from 'lucide-react';

const ProductPage: React.FC = () => {
  const productId = parseInt(window.location.pathname.split('/').pop() || '1');
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-brand-dark mb-4">المنتج غير موجود</h1>
          <a href="/" className="text-brand-orange hover:underline">العودة للرئيسية</a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-brand-orange transition-colors">الرئيسية</a>
            <span>/</span>
            <a href="/#products" className="hover:text-brand-orange transition-colors">المنتجات</a>
            <span>/</span>
            <span className="text-brand-dark font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="aspect-square bg-gray-50 border border-gray-200 shadow-xl overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Package size={16} />
                  <span>صورة المنتج</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:py-8">
              <div className="mb-6">
                <span className="inline-block bg-brand-orange/10 text-brand-orange px-4 py-1.5 text-sm font-medium border border-brand-orange/20">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-6">
                {product.title}
              </h1>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-10">
                <h2 className="text-xl font-bold text-brand-dark mb-4">مميزات المنتج</h2>
                
                <div className="flex items-start gap-3 p-4 bg-gray-50 border-r-4 border-brand-orange">
                  <ShieldCheck className="text-brand-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">جودة عالية</h3>
                    <p className="text-gray-600 text-sm">منتجات مطابقة للمواصفات العالمية ومضمونة</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 border-r-4 border-brand-orange">
                  <Truck className="text-brand-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">توصيل سريع</h3>
                    <p className="text-gray-600 text-sm">خدمة توصيل سريعة وآمنة لجميع أنحاء المملكة</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 border-r-4 border-brand-orange">
                  <Package className="text-brand-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">تنوع المقاسات</h3>
                    <p className="text-gray-600 text-sm">متوفر بمقاسات وأحجام مختلفة حسب احتياجك</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/966123456789?text=مرحباً، أريد الاستفسار عن منتج: {product.title}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-brand-orange to-orange-600 text-white px-8 py-4 font-bold text-center hover:from-orange-600 hover:to-brand-orange transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    تواصل عبر واتساب
                  </div>
                </a>
                
                <a 
                  href="/#contact"
                  className="flex-1 bg-white text-brand-dark border-2 border-brand-dark px-8 py-4 font-bold text-center hover:bg-brand-dark hover:text-white transition-all"
                >
                  <div className="flex items-center justify-center gap-2">
                    احصل على عرض سعر
                  </div>
                </a>
              </div>

              {/* Back Link */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <a 
                  href="/#products"
                  className="inline-flex items-center gap-2 text-brand-orange hover:text-orange-600 transition-colors font-medium"
                >
                  <ArrowRight size={20} />
                  العودة لجميع المنتجات
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-8 text-center">منتجات ذات صلة</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.filter(p => p.id !== productId).slice(0, 3).map((relatedProduct) => (
              <a 
                key={relatedProduct.id}
                href={`/product/${relatedProduct.id}`}
                className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="relative h-48 bg-gray-50 overflow-hidden">
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                    {relatedProduct.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedProduct.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;
