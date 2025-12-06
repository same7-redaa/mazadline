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

              {/* Insulated Flexible Duct Technical Details */}
              {product.id === 1 && (
                <div className="mb-10 space-y-6">
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 border-r-4 border-brand-orange">
                    <h2 className="text-2xl font-bold text-brand-dark mb-3">PERFECT FLEX™ – قنوات هواء مرنة</h2>
                    <p className="text-gray-700 leading-relaxed">
                      قنوات هواء مرنة مصنوعة من طبقات متعددة من رقائق الألمنيوم والبوليستر، ومخصّصة لأعمال مجاري الهواء ذات الضغط المنخفض والمتوسط.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">القنوات المرنة المعزولة</h3>
                    
                    <div className="bg-blue-50 p-5 border-r-4 border-blue-600 mb-6">
                      <h4 className="font-bold text-blue-900 mb-3">الوصف</h4>
                      <p className="text-gray-700 mb-3">
                        قناة مرنة معزولة حراريًا وصوتيًا، مصممة لأعمال التدفئة والتهوية وتكييف الهواء.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="flex items-center gap-2 bg-white p-2 border border-blue-200">
                          <span className="text-blue-600">✓</span>
                          <span className="text-sm font-medium">مرونة عالية</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white p-2 border border-blue-200">
                          <span className="text-blue-600">✓</span>
                          <span className="text-sm font-medium">مقاومة ممتازة للاهتزاز</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white p-2 border border-blue-200">
                          <span className="text-blue-600">✓</span>
                          <span className="text-sm font-medium">عزل صوتي وحراري محسّن</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-brand-dark mb-3">طبقات البناء</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange mt-1">1.</span>
                          <span>قناة مرنة داخلية من طبقات Aluminum/Polyester مدعمة بسلك فولاذي حلزوني عالي الشد</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange mt-1">2.</span>
                          <span>السلك محاط بطبقتين من البوليستر المقاوم للحريق</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange mt-1">3.</span>
                          <span>طبقة ألمنيوم خارجية لمنح مقاومة إضافية للحرارة والتمزق</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange mt-1">4.</span>
                          <span>طبقة عزل من الألياف الزجاجية Fiber Glass بكثافة 16 أو 24 كجم/م³</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange mt-1">5.</span>
                          <span>سماكة العزل: 25 مم أو 50 مم</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange mt-1">6.</span>
                          <span>غلاف خارجي (Jacket) من Aluminum/Polyester</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">الخصائص الفنية – القنوات المعزولة</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-gray-200">
                        <thead className="bg-brand-orange text-white">
                          <tr>
                            <th className="p-3 text-right">المواصفة</th>
                            <th className="p-3 text-right">القيمة</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">بنية القناة</td>
                            <td className="p-3">4 طبقات ألمنيوم / بوليستر</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">سماكة الطبقة</td>
                            <td className="p-3">50 ميكرون (ألمنيوم/بوليستر) – 78 ميكرون (القناة المرنة)</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">مدى الحرارة</td>
                            <td className="p-3">-30°C إلى +150°C</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">الأقطار المتاحة</td>
                            <td className="p-3">4" – 5" – 6" – 8" – 10" – 12" – 14" – 16" – 18" – 20"</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">العزل</td>
                            <td className="p-3">Fiber Glass</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">سماكة العزل</td>
                            <td className="p-3">25 مم أو 50 مم</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">كثافة العزل</td>
                            <td className="p-3">16 كجم/م³ أو 24 كجم/م³</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">الضغط التشغيلي</td>
                            <td className="p-3">3000 باسكال</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">الطول القياسي</td>
                            <td className="p-3">10 م</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">التغليف</td>
                            <td className="p-3">صندوق كرتون</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">مقاومة الحريق</td>
                            <td className="p-3">Difficult to ignite — مطابقة لمعيار M1 (France) و Class B1-d0 (Europe)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-brand-dark mb-4">القنوات المرنة غير المعزولة</h3>
                    <p className="text-gray-700 mb-4">
                      منتج مصمم لأعمال التكييف منخفضة ومتوسطة الضغط. مصنوع من عدة طبقات من رقائق Aluminum/Polyester. يتميز بخاصية Airtight لمنع تسرب الهواء.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white p-4 border-r-2 border-brand-orange">
                        <p className="text-sm text-gray-500 mb-1">سماكة القناة</p>
                        <p className="font-bold text-brand-dark">50 ميكرون – 78 ميكرون</p>
                      </div>
                      <div className="bg-white p-4 border-r-2 border-brand-orange">
                        <p className="text-sm text-gray-500 mb-1">مدى الحرارة</p>
                        <p className="font-bold text-brand-dark">-30°C إلى 200°C</p>
                      </div>
                      <div className="bg-white p-4 border-r-2 border-brand-orange">
                        <p className="text-sm text-gray-500 mb-1">سرعة الهواء</p>
                        <p className="font-bold text-brand-dark">30 م/ث (حد أقصى)</p>
                      </div>
                      <div className="bg-white p-4 border-r-2 border-brand-orange">
                        <p className="text-sm text-gray-500 mb-1">الضغط التشغيلي</p>
                        <p className="font-bold text-brand-dark">3000 باسكال</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 border border-blue-200">
                      <p className="text-sm font-medium text-blue-900">
                        <strong>الأقطار المتاحة:</strong> 2.5" – 3" – 4" – 5" – 6" – 8" – 10" – 12" – 14" – 16" – 18" – 20"
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">الخصائص والمميزات</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700 text-sm">صعوبة الاشتعال</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700 text-sm">تخميد الاهتزازات الميكانيكية</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700 text-sm">عزل صوتي ممتاز</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700 text-sm">فقد ضغط منخفض جدًا</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700 text-sm">سطح داخلي مقاوم للغبار</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700 text-sm">سلك فولاذي عالي الشد</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700 text-sm">مقاومة عالية للتشوه</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700 text-sm">مقاومة للمواد الكيميائية</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700 text-sm">مقاومة للماء وزيادة المتانة</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700 text-sm">سهلة التركيب</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700 text-sm">تكلفة منخفضة</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-5 border-r-4 border-green-600">
                    <h3 className="text-lg font-bold text-green-900 mb-3">مقاومة الحريق</h3>
                    <p className="text-gray-700">
                      <strong>جميع المكونات ذاتية الإطفاء</strong> (All components self-extinguishing) - صعوبة الاشتعال مع مطابقة للمعايير الأوروبية والفرنسية.
                    </p>
                  </div>
                </div>
              )}

              {/* Fiber Glass Technical Details */}
              {product.id === 2 && (
                <div className="mb-10 space-y-6">
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 border-r-4 border-brand-orange">
                    <h2 className="text-2xl font-bold text-brand-dark mb-3">IZOCAM DUCT BLANKET – بطانية عزل مجاري الهواء</h2>
                    <p className="text-gray-700 leading-relaxed">
                      بطانية مصنوعة من الصوف الزجاجي ومغلفة بوجه من رقائق الألمنيوم من جهة واحدة (مع إمكانية وجود أجنحة تثبيت بعرض 5 سم على الأطراف). تُستخدم في العزل الحراري الخارجي لمجاري الهواء الخاصة بأنظمة التهوية والتكييف.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-5 border-r-4 border-blue-600">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">قبل التركيب</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>تنظيف أسطح مجاري الهواء جيدًا من الغبار والزيوت والشحوم</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>استخدام دبابيس تثبيت ذاتية اللصق لتسهيل عملية التركيب</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">كيفية تحديد الطول المطلوب للقص</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-5 border-r-4 border-brand-orange">
                        <h4 className="font-bold text-brand-dark mb-3">1) مجرى هواء مستطيل</h4>
                        <div className="bg-white p-3 border border-gray-200 text-sm">
                          <p className="font-mono text-gray-700">
                            المحيط الخارجي للدكت + (8 × سماكة البطانية) + 5 سم
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-5 border-r-4 border-brand-orange">
                        <h4 className="font-bold text-brand-dark mb-3">2) مجرى هواء أسطواني</h4>
                        <div className="bg-white p-3 border border-gray-200 text-sm">
                          <p className="font-mono text-gray-700">
                            المحيط الخارجي للدكت + (2 × سماكة البطانية) + 5 سم
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">تفاصيل التطبيق</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">يتم لف البطانية حول مجرى الهواء بحيث يغطي جناح الألمنيوم وصلات الطول</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">إذا كانت المسامير من النوع القوسي، فيجب أن تكون (5–6 دبابيس لكل متر مربع)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">بعد التثبيت يمكن تغطية الوصلات بشريط ألمنيوم إذا لزم الأمر</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">يجب حماية العازل من التمزق أو التلف</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-5 border-r-4 border-yellow-600">
                    <h3 className="text-lg font-bold text-yellow-900 mb-3">⚠️ محاذير التعرض للشمس</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>في حالة الاستخدام الخارجي، يجب طلاء السطح خلال مدة لا تتجاوز 5 أيام</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>في الأماكن الداخلية التي تتعرض للضوء الطبيعي، لا حاجة للطلاء إذا كان الوجه من الألمنيوم</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">المقاسات المتوفرة</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-gray-200">
                        <thead className="bg-brand-orange text-white">
                          <tr>
                            <th className="p-3 text-right">السماكة (سم)</th>
                            <th className="p-3 text-right">العرض (سم)</th>
                            <th className="p-3 text-right">الطول (سم)</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">2.5</td>
                            <td className="p-3">40–120</td>
                            <td className="p-3">1000–3000</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">3</td>
                            <td className="p-3">110–120</td>
                            <td className="p-3">2000</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">4</td>
                            <td className="p-3">110–120</td>
                            <td className="p-3">1000–2000</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">5</td>
                            <td className="p-3">90–120</td>
                            <td className="p-3">1000–2400</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">6</td>
                            <td className="p-3">120</td>
                            <td className="p-3">1000</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">7.5</td>
                            <td className="p-3">120</td>
                            <td className="p-3">800–1000</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">8</td>
                            <td className="p-3">120</td>
                            <td className="p-3">800–1000</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">10</td>
                            <td className="p-3">40–120</td>
                            <td className="p-3">600–1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">البيانات الفنية</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border border-gray-200">
                        <thead className="bg-brand-orange text-white">
                          <tr>
                            <th className="p-2 text-right">الخاصية</th>
                            <th className="p-2 text-right">القيمة</th>
                            <th className="p-2 text-right">المعيار</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="border-t border-gray-200">
                            <td className="p-2 font-medium">المادة</td>
                            <td className="p-2">صوف زجاجي</td>
                            <td className="p-2">TS EN 14303</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-2 font-medium">الكثافة</td>
                            <td className="p-2">16–18–24 كجم/م³</td>
                            <td className="p-2">±10%</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-2 font-medium">العرض</td>
                            <td className="p-2">1100–1200 مم</td>
                            <td className="p-2">TS EN 822</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-2 font-medium">الطول</td>
                            <td className="p-2">6000–20000 مم</td>
                            <td className="p-2">TS EN 822</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-2 font-medium">السماكة</td>
                            <td className="p-2">25–100 مم</td>
                            <td className="p-2">TS EN 823</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-2 font-medium">الوجه</td>
                            <td className="p-2">ألمنيوم Foil</td>
                            <td className="p-2">–</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-2 font-medium">ردة الفعل على النار</td>
                            <td className="p-2">الفئة A2-s1, d0</td>
                            <td className="p-2">TS EN 13501-1</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-2 font-medium">الحرارة النوعية</td>
                            <td className="p-2">0.84 kJ/kg.K</td>
                            <td className="p-2">EN 12524</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">الموصلية الحرارية λ (W/m.K)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند 10°C</p>
                        <p className="font-bold text-brand-dark">0.034</p>
                      </div>
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند 25°C</p>
                        <p className="font-bold text-brand-dark">0.036</p>
                      </div>
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند 50°C</p>
                        <p className="font-bold text-brand-dark">0.041</p>
                      </div>
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند 75°C</p>
                        <p className="font-bold text-brand-dark">0.044</p>
                      </div>
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند 100°C</p>
                        <p className="font-bold text-brand-dark">0.048</p>
                      </div>
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند 125°C</p>
                        <p className="font-bold text-brand-dark">0.052</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">المزايا</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700">عزل حراري عالي</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700">أمان ضد الحريق</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700">سهولة وسرعة التركيب</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700">عزل صوتي واهتزازي</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-5 border border-gray-200">
                    <h3 className="text-lg font-bold text-brand-dark mb-3">معلومات إضافية</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>أقصى درجة حرارة خدمة على جانب الألمنيوم: 90°C</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>يمكن تصنيع البطانيات بدون وجه أو بوجه قماشي (Glass Tissue)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>بطانيات 5 سم بسماكة وكثافة 24 كجم/م³ تتوفر فقط حسب القيم المعروضة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Insulated Pipes Technical Details */}
              {product.id === 3 && (
                <div className="mb-10 space-y-6">
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 border-r-4 border-brand-orange">
                    <h2 className="text-2xl font-bold text-brand-dark mb-3">أنابيب الصوف الزجاجي GlassRock</h2>
                    <p className="text-gray-700 leading-relaxed">
                      أنابيب GlassRock مصنوعة من ألياف زجاجية دقيقة وثابتة ومترابطة براتنجات حرارية، ومشكلة على هيئة أنابيب. تمتاز بأنها غير قابلة للتعفن وخالية من الشوائب بفضل تركيبها المعدني.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">التطبيقات</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">مناسبة للعزل الحراري والصوتي لأنابيب النحاس، والحديد، والبلاستيك</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">تتحمل درجات حرارة تصل إلى 450 درجة مئوية</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">المواصفات الفنية</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 border-r-2 border-brand-orange">
                        <p className="text-sm text-gray-500 mb-1">الكثافة</p>
                        <p className="font-bold text-brand-dark">من 60 إلى 96 كجم/م³</p>
                      </div>
                      <div className="bg-gray-50 p-4 border-r-2 border-brand-orange">
                        <p className="text-sm text-gray-500 mb-1">الطول</p>
                        <p className="font-bold text-brand-dark">1200 مم</p>
                      </div>
                      <div className="bg-gray-50 p-4 border-r-2 border-brand-orange">
                        <p className="text-sm text-gray-500 mb-1">الأقطار</p>
                        <p className="font-bold text-brand-dark">من 1/2 بوصة إلى 72 بوصة</p>
                      </div>
                      <div className="bg-gray-50 p-4 border-r-2 border-brand-orange">
                        <p className="text-sm text-gray-500 mb-1">السماكات</p>
                        <p className="font-bold text-brand-dark">من 25 إلى 100 مم</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">الخصائص التقنية</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-gray-200">
                        <thead className="bg-brand-orange text-white">
                          <tr>
                            <th className="p-3 text-right">الخاصية</th>
                            <th className="p-3 text-right">الأداء</th>
                            <th className="p-3 text-right">المعيار</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">درجة الحرارة القصوى</td>
                            <td className="p-3">450°C</td>
                            <td className="p-3">ASTM C411</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">مقاومة الحريق</td>
                            <td className="p-3">الفئة 1 / الفئة 0</td>
                            <td className="p-3">BS 476 Part 6 & 7</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">نسبة الشوائب</td>
                            <td className="p-3">خالية من الشوائب</td>
                            <td className="p-3">ASTM C612</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">نمو الفطريات</td>
                            <td className="p-3">لا يشجع نمو الفطريات</td>
                            <td className="p-3">ASTM C665</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">امتصاص الرطوبة</td>
                            <td className="p-3">أقل من 0.2% بالحجم</td>
                            <td className="p-3">ASTM C533</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">المتانة والبيئة</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-bold text-brand-orange mb-3">مزايا المتانة</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-brand-orange mt-1">✓</span>
                            <span>عديمة الرائحة</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-brand-orange mt-1">✓</span>
                            <span>غير ممتصة للرطوبة</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-brand-orange mt-1">✓</span>
                            <span>مقاومة للقوارض</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-brand-orange mt-1">✓</span>
                            <span>لا تدعم نمو الفطريات أو العفن</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 border-r-4 border-green-600">
                        <h4 className="font-bold text-green-800 mb-2">صديق للبيئة</h4>
                        <p className="text-gray-700 text-sm">
                          المنتج خالٍ من مواد CFC وHCFC أو أي مواد تسبب استنزاف طبقة الأوزون، مما يجعله صديقًا للبيئة.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-5 border border-gray-200">
                    <h3 className="text-lg font-bold text-brand-dark mb-3">التعبئة والتخزين</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>تُعبّأ الأنابيب في صناديق كرتونية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>يجب تخزينها في عبواتها الأصلية وبعيدة عن العوامل الجوية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>في حال ابتلّت يمكن تجفيفها وإعادة استخدامها دون أن تتأثر خصائصها</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Rockwool Technical Details */}
              {product.id === 5 && (
                <div className="mb-10 space-y-6">
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 border-r-4 border-brand-orange">
                    <h2 className="text-2xl font-bold text-brand-dark mb-3">ما هو العزل الصخري Rockwool؟</h2>
                    <p className="text-gray-700 leading-relaxed">
                      العزل الصخري هو مادة عزل حراري وصوتي مصنوعة من صخور البازلت البركانية يتم صهرها عند درجات حرارة عالية ثم تحويلها إلى ألياف صخرية كثيفة ذات خصائص ممتازة.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">أهم استخدامات العزل الصخري</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">عزل الجدران والأسقف</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">عزل مجاري الهواء (Ducts)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">عزل الغلايات والخزانات والأنابيب</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">العزل الصوتي للستوديوهات والمباني</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">مقاومة الحريق في المنشآت الصناعية والتجارية</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">مميزات Rockwool</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-50 p-4 border-r-4 border-red-600">
                        <h4 className="font-bold text-red-900 mb-2">🔥 مقاومة عالية جدًا للحرارة</h4>
                        <p className="text-gray-700 text-sm">يتحمل حتى 750–1000°C دون أن يذوب</p>
                      </div>

                      <div className="bg-orange-50 p-4 border-r-4 border-orange-600">
                        <h4 className="font-bold text-orange-900 mb-2">🛡️ مقاومة للحريق بدرجة ممتازة</h4>
                        <p className="text-gray-700 text-sm">يصنف A1 (غير قابل للاشتعال)</p>
                      </div>

                      <div className="bg-blue-50 p-4 border-r-4 border-blue-600">
                        <h4 className="font-bold text-blue-900 mb-2">🔇 عزل صوتي قوي</h4>
                        <p className="text-gray-700 text-sm">يُعد من أقوى مواد العزل الصوتي بسبب تركيبته الليفية</p>
                      </div>

                      <div className="bg-purple-50 p-4 border-r-4 border-purple-600">
                        <h4 className="font-bold text-purple-900 mb-2">⏱️ ثبات أبعاد طويل المدى</h4>
                        <p className="text-gray-700 text-sm">لا ينكمش ولا يفقد فعاليته مع الزمن</p>
                      </div>

                      <div className="bg-cyan-50 p-4 border-r-4 border-cyan-600">
                        <h4 className="font-bold text-cyan-900 mb-2">💧 مقاوم للمياه والرطوبة</h4>
                        <p className="text-gray-700 text-sm">لا يتعفن ولا يدعم نمو الفطريات أو البكتيريا</p>
                      </div>

                      <div className="bg-green-50 p-4 border-r-4 border-green-600">
                        <h4 className="font-bold text-green-900 mb-2">🌱 صديق للبيئة</h4>
                        <p className="text-gray-700 text-sm">مصنوع من صخور طبيعية بدون مواد ضارة</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">أشكال العزل الصخري المتوفرة</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-5 border-r-4 border-brand-orange">
                        <h4 className="text-lg font-bold text-brand-dark mb-3">1) ألواح Rockwool Boards</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                          <div className="bg-white p-3 border border-gray-200">
                            <p className="text-xs text-gray-500 mb-1">الكثافات</p>
                            <p className="font-bold text-brand-dark text-sm">40 – 60 – 80 – 100 – 120 – 150 كجم/م³</p>
                          </div>
                          <div className="bg-white p-3 border border-gray-200">
                            <p className="text-xs text-gray-500 mb-1">السماكات</p>
                            <p className="font-bold text-brand-dark text-sm">25 – 50 – 75 – 100 مم</p>
                          </div>
                          <div className="bg-white p-3 border border-gray-200">
                            <p className="text-xs text-gray-500 mb-1">الاستخدام</p>
                            <p className="font-bold text-brand-dark text-sm">الأسقف والجدران</p>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm">
                          <strong>التطبيقات:</strong> الأسقف – الجدران – غرف التكييف – غرف التبريد – العزل الصوتي
                        </p>
                      </div>

                      <div className="bg-gray-50 p-5 border-r-4 border-brand-orange">
                        <h4 className="text-lg font-bold text-brand-dark mb-3">2) لفائف Rockwool Blanket</h4>
                        <p className="text-gray-700 mb-2">
                          تأتي مع أو بدون ورق ألومنيوم (FSK).
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>الاستخدام:</strong> مناسبة لعزل الدكتات والمواسير الكبيرة والخزانات
                        </p>
                      </div>

                      <div className="bg-gray-50 p-5 border-r-4 border-brand-orange">
                        <h4 className="text-lg font-bold text-brand-dark mb-3">3) عوازل الأنابيب Rockwool Pipe Section</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                          <div className="bg-white p-3 border border-gray-200">
                            <p className="text-xs text-gray-500 mb-1">الأقطار</p>
                            <p className="font-bold text-brand-dark text-sm">من ½" حتى 24"</p>
                          </div>
                          <div className="bg-white p-3 border border-gray-200">
                            <p className="text-xs text-gray-500 mb-1">السماكات</p>
                            <p className="font-bold text-brand-dark text-sm">25 – 50 مم</p>
                          </div>
                          <div className="bg-white p-3 border border-gray-200">
                            <p className="text-xs text-gray-500 mb-1">الكثافات</p>
                            <p className="font-bold text-brand-dark text-sm">60 – 100 – 120 كجم/م³</p>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm">
                          <strong>الاستخدام:</strong> العزل الحراري للمواسير الساخنة والباردة
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">الخواص الفنية العامة</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-gray-200">
                        <thead className="bg-brand-orange text-white">
                          <tr>
                            <th className="p-3 text-right">الخاصية</th>
                            <th className="p-3 text-right">القيمة</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">الكثافة</td>
                            <td className="p-3">من 40 إلى 150 كجم/م³</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">التوصيل الحراري</td>
                            <td className="p-3">0.034 – 0.040 W/m.K</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">امتصاص الصوت NRC</td>
                            <td className="p-3">يصل إلى 0.95</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">تصنيف الحريق</td>
                            <td className="p-3 font-bold text-red-600">A1 غير قابل للاشتعال</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">امتصاص الماء</td>
                            <td className="p-3">{"<"} 1%</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">درجة حرارة التشغيل</td>
                            <td className="p-3 font-bold text-red-600">حتى 1000°C حسب النوع</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-5 border-r-4 border-yellow-600">
                    <h3 className="text-lg font-bold text-yellow-900 mb-3">⭐ لماذا Rockwool هو الخيار الأفضل؟</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">✓</span>
                        <span>الخيار الأمثل للمباني التي تتطلب مقاومة عالية للحريق</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">✓</span>
                        <span>مثالي للتطبيقات الصناعية ذات الحرارة العالية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">✓</span>
                        <span>حل شامل للعزل الحراري والصوتي في آن واحد</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">✓</span>
                        <span>يدوم لسنوات طويلة دون فقدان الكفاءة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Sound Insulation Technical Details */}
              {product.id === 6 && (
                <div className="mb-10 space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-white p-6 border-r-4 border-purple-600">
                    <h2 className="text-2xl font-bold text-brand-dark mb-3">Acoustic Foam – فوم عزل صوتي</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      ألواح فوم مصنوعة من مادة <strong>Polyurethane Acoustic Foam</strong> بتصميم سطح مموّج يشبه "صينية البيض" بهدف:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-white p-3 border-r-2 border-purple-400">
                        <p className="text-gray-700 text-sm">🎵 امتصاص الترددات العالية والمتوسطة</p>
                      </div>
                      <div className="bg-white p-3 border-r-2 border-purple-400">
                        <p className="text-gray-700 text-sm">🔊 تقليل الصدى الداخلي (Reverb)</p>
                      </div>
                      <div className="bg-white p-3 border-r-2 border-purple-400">
                        <p className="text-gray-700 text-sm">🎙️ تحسين جودة التسجيل الصوتي</p>
                      </div>
                    </div>
                    <div className="bg-yellow-100 border-r-4 border-yellow-500 p-4 mt-4">
                      <p className="text-sm text-gray-800">
                        <strong>ملاحظة هامة:</strong> هذه الألواح <strong>لا تمنع انتقال الصوت بين الغرف</strong>، ولكنها تُحسّن جودة الصوت داخل الغرفة.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">المواصفات النموذجية للفوم الصوتي</h3>
                    <p className="text-sm text-gray-500 mb-3 italic">(قد تختلف حسب الشركة المصنعة لكنها غالبًا قريبة من الآتي)</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-gray-200">
                        <thead className="bg-purple-600 text-white">
                          <tr>
                            <th className="p-3 text-right">المواصفة</th>
                            <th className="p-3 text-right">القيمة</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">السماكة</td>
                            <td className="p-3">3 – 5 – 7 سم</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">الكثافة</td>
                            <td className="p-3">25–30 كجم/م³</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">معدل امتصاص الصوت NRC</td>
                            <td className="p-3 font-bold text-purple-600">0.65 – 0.90</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">المادة</td>
                            <td className="p-3">Polyurethane Acoustic Foam</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">الألوان</td>
                            <td className="p-3">أسود غالبًا، وأحيانًا رمادي/أزرق</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">التصميم</td>
                            <td className="p-3">Egg Crate / Wedge / Pyramid</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">الأبعاد</td>
                            <td className="p-3">50×50 سم، أو 30×30 سم حسب النوع</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">مقاومة الحريق</td>
                            <td className="p-3">متوفر منها Flame Retardant (حسب الطلب)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">الاستخدامات</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 border-r-4 border-purple-500">
                        <h4 className="font-bold text-purple-900 mb-2">🎤 استوديوهات التسجيل</h4>
                        <p className="text-gray-700 text-sm">تحسين جودة التسجيلات الصوتية والموسيقية</p>
                      </div>

                      <div className="bg-indigo-50 p-4 border-r-4 border-indigo-500">
                        <h4 className="font-bold text-indigo-900 mb-2">🎧 غرف البودكاست</h4>
                        <p className="text-gray-700 text-sm">الحصول على صوت نقي خالي من الصدى</p>
                      </div>

                      <div className="bg-pink-50 p-4 border-r-4 border-pink-500">
                        <h4 className="font-bold text-pink-900 mb-2">🎸 غرف الموسيقى</h4>
                        <p className="text-gray-700 text-sm">تحسين الصوتيات أثناء العزف والممارسة</p>
                      </div>

                      <div className="bg-blue-50 p-4 border-r-4 border-blue-500">
                        <h4 className="font-bold text-blue-900 mb-2">👥 غرف الاجتماعات</h4>
                        <p className="text-gray-700 text-sm">وضوح أفضل للمحادثات والعروض التقديمية</p>
                      </div>

                      <div className="bg-cyan-50 p-4 border-r-4 border-cyan-500">
                        <h4 className="font-bold text-cyan-900 mb-2">🏢 مكاتب صغيرة</h4>
                        <p className="text-gray-700 text-sm">تقليل الصدى وتحسين بيئة العمل</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-5 border-r-4 border-blue-600">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">📋 كيف يُستخدم هذا الفوم؟</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>يُركّب على <strong>جزء من الجدران وليس كامل السطح</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>يُستخدم <strong>لتحسين الصوت وليس لعزله</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>يحصل أفضل أداء عند تركيبه <strong>خلف الميكروفون وفوق المتحدث</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span><strong>لا يغني عن Rockwool أو MLV</strong> إذا كان الهدف منع مرور الصوت</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">متى أستخدم الفوم ومتى Rockwool؟</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-gray-200">
                        <thead className="bg-gradient-to-r from-purple-600 to-orange-600 text-white">
                          <tr>
                            <th className="p-3 text-right">الهدف</th>
                            <th className="p-3 text-right">المادة المناسبة</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">تحسين جودة الصوت داخل الغرفة</td>
                            <td className="p-3 font-bold text-purple-600">Acoustic Foam</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">منع انتقال الصوت بين الغرف</td>
                            <td className="p-3 font-bold text-orange-600">Rockwool + جبس</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">عزل دكت أو ماكينة</td>
                            <td className="p-3 font-bold text-orange-600">Rockwool أو Glasswool</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">غرفة احترافية</td>
                            <td className="p-3 font-bold text-green-600">مزيج من Rockwool + Foam</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-5 border-r-4 border-purple-600">
                    <h3 className="text-lg font-bold text-purple-900 mb-3">⭐ خلاصة الفوم الصوتي</h3>
                    <div className="space-y-2 text-gray-800 text-sm">
                      <p>✓ يعمل على <strong>تحسين جودة الصوت داخل الغرفة</strong> عن طريق امتصاص الانعكاسات</p>
                      <p>✓ <strong>لا يعزل الصوت بين الغرف</strong> – للعزل الكامل تحتاج Rockwool أو MLV</p>
                      <p>✓ خفيف الوزن وسهل التركيب – يُلصق بالجدار باستخدام لاصق خاص</p>
                      <p>✓ مثالي للاستوديوهات الصغيرة والبودكاست والموسيقى</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Armaflex Technical Details */}
              {product.id === 4 && (
                <div className="mb-10 space-y-6">
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 border-r-4 border-brand-orange">
                    <h2 className="text-2xl font-bold text-brand-dark mb-3">OPTIFLEX SHEET – عازل مطاطي مرن</h2>
                    <p className="text-gray-700 leading-relaxed">
                      عازل حراري مصنوع من المطاط المرن (Elastomeric Rubber Foam) على شكل شرائح ذات خلايا مغلقة. يُستخدم في أنظمة التكييف والتبريد والتدفئة لأغراض العزل الحراري ومنع التكثف.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">الاستخدامات</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">الأسطح الخارجية لمجاري الهواء (DUCTS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">الأنابيب ذات الأقطار الكبيرة في أنظمة التدفئة والتبريد والتكييف</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">التحكم في فقد الحرارة ومنع تكثف البخار</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-gray-700">في الأماكن التي يحدث فيها انتقال حراري بالإشعاع يُنصح باستخدام الألواح ذات وجه ألمنيوم</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">الخصائص الفنية الرئيسية</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-gray-200">
                        <thead className="bg-brand-orange text-white">
                          <tr>
                            <th className="p-3 text-right">الخاصية</th>
                            <th className="p-3 text-right">القيمة</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">المادة</td>
                            <td className="p-3">رغوة مطاطية مرنة – Elastomeric Rubber Foam</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">ردة الفعل على الحريق</td>
                            <td className="p-3">الفئة E (EN 13501-1)</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">درجة الحرارة</td>
                            <td className="p-3">من -50 إلى 105°C</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">العرض</td>
                            <td className="p-3">1000–1200 مم</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">السماكة</td>
                            <td className="p-3">من 6 حتى 50 مم</td>
                          </tr>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td className="p-3 font-medium">مقاومة انتشار بخار الماء µ</td>
                            <td className="p-3">≥ 5000</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-3 font-medium">نمو الفطريات</td>
                            <td className="p-3">معدوم</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">معامل التوصيل الحراري λD (W/m.K)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند -20°C</p>
                        <p className="font-bold text-brand-dark">0.031</p>
                      </div>
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند 0°C</p>
                        <p className="font-bold text-brand-dark">0.034</p>
                      </div>
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند 20°C</p>
                        <p className="font-bold text-brand-dark">0.036</p>
                      </div>
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند 40°C</p>
                        <p className="font-bold text-brand-dark">0.037</p>
                      </div>
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند 60°C</p>
                        <p className="font-bold text-brand-dark">0.038</p>
                      </div>
                      <div className="bg-gray-50 p-3 border-r-2 border-brand-orange">
                        <p className="text-xs text-gray-500">عند 80°C</p>
                        <p className="font-bold text-brand-dark">0.043</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">حالات الوجه (Facing)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 border-r-2 border-brand-orange">
                        <p className="font-bold text-brand-dark mb-1">بدون وجه</p>
                        <p className="text-sm text-gray-600">Unfaced</p>
                      </div>
                      <div className="bg-gray-50 p-4 border-r-2 border-brand-orange">
                        <p className="font-bold text-brand-dark mb-1">ألمنيوم AL</p>
                        <p className="text-sm text-gray-600">18 ميكرون – غير قابل للاحتراق</p>
                      </div>
                      <div className="bg-gray-50 p-4 border-r-2 border-brand-orange">
                        <p className="font-bold text-brand-dark mb-1">ذاتي اللصق KY</p>
                        <p className="text-sm text-gray-600">Self-adhesive</p>
                      </div>
                      <div className="bg-gray-50 p-4 border-r-2 border-brand-orange">
                        <p className="font-bold text-brand-dark mb-1">AL + KY</p>
                        <p className="text-sm text-gray-600">ألمنيوم + ذاتي اللصق</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">المزايا</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700">عزل حراري ممتاز</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700">منع التكثف</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700">خالٍ من CFC</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700">صديق للبيئة</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700">عالي المرونة</span>
                      </div>
                      <div className="flex items-center gap-3 bg-orange-50 p-3 border-r-2 border-brand-orange">
                        <span className="text-brand-orange text-xl">✓</span>
                        <span className="font-medium text-gray-700">مقاومة ممتازة للزيوت</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-5 border-r-4 border-blue-600">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">تعليمات التطبيق</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>تُلصق الشرائح على السطح باستخدام لاصق خاص توصي به Izocam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>يجب إغلاق الفواصل جيدًا، ويمكن تغطيتها بشريط عازل</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>الشرائح ذاتية اللصق لا تحتاج إلى استخدام لاصق إضافي</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>يجب حماية العازل من التمزق أو التلف أثناء وبعد التركيب</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>عند التعرض للشمس يجب استخدام طبقة حماية أو دهان واقٍ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>للاستخدام الخارجي يجب طلاء السطح خلال 5 أيام من التركيب</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

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
                  href={`https://wa.me/2001120746804?text=مرحباً، أريد الاستفسار عن منتج: ${product.title}`}
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
                  href="https://wa.me/2001120746804?text=أريد طلب عرض سعر"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-brand-dark border-2 border-brand-dark px-8 py-4 font-bold text-center hover:bg-brand-dark hover:text-white transition-all"
                >
                  <div className="flex items-center justify-center gap-2">
                    احصل على عرض سعر
                  </div>
                </a>
              </div>

              {/* Accessories Technical Details */}
              {product.id === 7 && (
                <div className="mb-10 space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 border-r-4 border-blue-600">
                    <h2 className="text-2xl font-bold text-brand-dark mb-3">مستلزمات العزل – Insulation Accessories</h2>
                    <p className="text-gray-700 leading-relaxed">
                      نوفر مجموعة شاملة من المستلزمات والمواد المساعدة اللازمة لإتمام مشروع العزل بشكل احترافي، بدءًا من اللواصق وصولاً إلى مواد التثبيت والحماية.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">أهم المستلزمات المتوفرة</h3>
                    
                    <div className="space-y-4">
                      {/* Adhesives */}
                      <div className="bg-white p-5 border-r-4 border-blue-500 shadow-sm">
                        <h4 className="text-lg font-bold text-blue-900 mb-3">🧴 اللواصق والمواد اللاصقة</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-blue-50 p-3 border border-blue-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Contact Adhesive 700</p>
                            <p className="text-gray-600 text-xs">لاصق قوي للأرمافلكس والعوازل المطاطية</p>
                          </div>
                          <div className="bg-blue-50 p-3 border border-blue-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Spray Adhesive</p>
                            <p className="text-gray-600 text-xs">لاصق بخاخ لتثبيت الفايبر جلاس والصوف الصخري</p>
                          </div>
                          <div className="bg-blue-50 p-3 border border-blue-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">PVC Glue</p>
                            <p className="text-gray-600 text-xs">لاصق لتركيب كانفاس الدكتات المرنة</p>
                          </div>
                          <div className="bg-blue-50 p-3 border border-blue-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Acoustic Foam Adhesive</p>
                            <p className="text-gray-600 text-xs">لاصق خاص بالفوم الصوتي</p>
                          </div>
                        </div>
                      </div>

                      {/* Tapes */}
                      <div className="bg-white p-5 border-r-4 border-green-500 shadow-sm">
                        <h4 className="text-lg font-bold text-green-900 mb-3">📏 أشرطة اللصق (Tapes)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-green-50 p-3 border border-green-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Aluminum Foil Tape</p>
                            <p className="text-gray-600 text-xs">شريط ألومنيوم مقاوم للحرارة لإغلاق الوصلات</p>
                          </div>
                          <div className="bg-green-50 p-3 border border-green-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">FSK Tape</p>
                            <p className="text-gray-600 text-xs">شريط FSK لإغلاق وصلات العزل بشكل محكم</p>
                          </div>
                          <div className="bg-green-50 p-3 border border-green-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Duct Tape Silver</p>
                            <p className="text-gray-600 text-xs">شريط فضي قوي لمجاري الهواء</p>
                          </div>
                          <div className="bg-green-50 p-3 border border-green-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Canvas Tape</p>
                            <p className="text-gray-600 text-xs">شريط كانفاس للدكتات المرنة</p>
                          </div>
                        </div>
                      </div>

                      {/* Fasteners */}
                      <div className="bg-white p-5 border-r-4 border-orange-500 shadow-sm">
                        <h4 className="text-lg font-bold text-orange-900 mb-3">🔩 مواد التثبيت والتركيب</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="bg-orange-50 p-3 border border-orange-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Insulation Pins</p>
                            <p className="text-gray-600 text-xs">مسامير تثبيت العوازل</p>
                          </div>
                          <div className="bg-orange-50 p-3 border border-orange-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Washers</p>
                            <p className="text-gray-600 text-xs">حلقات تثبيت بلاستيكية</p>
                          </div>
                          <div className="bg-orange-50 p-3 border border-orange-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Wire Mesh</p>
                            <p className="text-gray-600 text-xs">شبك معدني للحماية</p>
                          </div>
                          <div className="bg-orange-50 p-3 border border-orange-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Metal Bands</p>
                            <p className="text-gray-600 text-xs">أحزمة معدنية لتثبيت المواسير</p>
                          </div>
                          <div className="bg-orange-50 p-3 border border-orange-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Corner Clips</p>
                            <p className="text-gray-600 text-xs">كليبسات زوايا</p>
                          </div>
                          <div className="bg-orange-50 p-3 border border-orange-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Duct Hangers</p>
                            <p className="text-gray-600 text-xs">علاقات تعليق الدكتات</p>
                          </div>
                        </div>
                      </div>

                      {/* Sealants */}
                      <div className="bg-white p-5 border-r-4 border-purple-500 shadow-sm">
                        <h4 className="text-lg font-bold text-purple-900 mb-3">🛡️ مواد الإغلاق والحماية</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-purple-50 p-3 border border-purple-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Silicone Sealant</p>
                            <p className="text-gray-600 text-xs">سيليكون مقاوم للحرارة والرطوبة</p>
                          </div>
                          <div className="bg-purple-50 p-3 border border-purple-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Mastic Sealant</p>
                            <p className="text-gray-600 text-xs">مادة إغلاق مرنة للوصلات</p>
                          </div>
                          <div className="bg-purple-50 p-3 border border-purple-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Vapor Barrier</p>
                            <p className="text-gray-600 text-xs">حاجز بخار لمنع التكثف</p>
                          </div>
                          <div className="bg-purple-50 p-3 border border-purple-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Weather Barrier</p>
                            <p className="text-gray-600 text-xs">حاجز مقاوم للعوامل الجوية</p>
                          </div>
                        </div>
                      </div>

                      {/* Cladding */}
                      <div className="bg-white p-5 border-r-4 border-red-500 shadow-sm">
                        <h4 className="text-lg font-bold text-red-900 mb-3">🎨 مواد التكسية الخارجية</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-red-50 p-3 border border-red-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Aluminum Jacket</p>
                            <p className="text-gray-600 text-xs">كسوة ألومنيوم 0.4 – 0.6 – 0.8 مم</p>
                          </div>
                          <div className="bg-red-50 p-3 border border-red-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Stainless Steel Jacket</p>
                            <p className="text-gray-600 text-xs">كسوة ستانلس ستيل للبيئات القاسية</p>
                          </div>
                          <div className="bg-red-50 p-3 border border-red-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">PVC Cladding</p>
                            <p className="text-gray-600 text-xs">كسوة بلاستيكية مقاومة للرطوبة</p>
                          </div>
                          <div className="bg-red-50 p-3 border border-red-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Canvas Facing</p>
                            <p className="text-gray-600 text-xs">كانفاس خارجي للحماية</p>
                          </div>
                        </div>
                      </div>

                      {/* Tools */}
                      <div className="bg-white p-5 border-r-4 border-cyan-500 shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-900 mb-3">🛠️ أدوات القطع والتركيب</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="bg-cyan-50 p-3 border border-cyan-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Insulation Knife</p>
                            <p className="text-gray-600 text-xs">سكين قطع احترافي</p>
                          </div>
                          <div className="bg-cyan-50 p-3 border border-cyan-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Glue Brush</p>
                            <p className="text-gray-600 text-xs">فرشاة توزيع اللاصق</p>
                          </div>
                          <div className="bg-cyan-50 p-3 border border-cyan-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Measuring Tape</p>
                            <p className="text-gray-600 text-xs">متر قياس</p>
                          </div>
                          <div className="bg-cyan-50 p-3 border border-cyan-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Gloves</p>
                            <p className="text-gray-600 text-xs">قفازات حماية</p>
                          </div>
                          <div className="bg-cyan-50 p-3 border border-cyan-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Safety Goggles</p>
                            <p className="text-gray-600 text-xs">نظارات أمان</p>
                          </div>
                          <div className="bg-cyan-50 p-3 border border-cyan-200">
                            <p className="font-bold text-gray-800 text-sm mb-1">Scissors</p>
                            <p className="text-gray-600 text-xs">مقصات قوية</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">لماذا تحتاج هذه المستلزمات؟</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 border-r-4 border-blue-600">
                        <h4 className="font-bold text-blue-900 mb-2">✅ إتمام التركيب بشكل صحيح</h4>
                        <p className="text-gray-700 text-sm">المستلزمات ضرورية لتثبيت العزل بطريقة محترفة تضمن الأداء الأمثل</p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 border-r-4 border-green-600">
                        <h4 className="font-bold text-green-900 mb-2">🔒 إحكام الإغلاق</h4>
                        <p className="text-gray-700 text-sm">منع تسرب الهواء والحرارة من خلال الوصلات والفواصل</p>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 border-r-4 border-orange-600">
                        <h4 className="font-bold text-orange-900 mb-2">🛡️ الحماية والمتانة</h4>
                        <p className="text-gray-700 text-sm">حماية العزل من العوامل الخارجية وإطالة عمره الافتراضي</p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 border-r-4 border-purple-600">
                        <h4 className="font-bold text-purple-900 mb-2">⏱️ توفير الوقت والجهد</h4>
                        <p className="text-gray-700 text-sm">استخدام الأدوات الصحيحة يجعل العمل أسرع وأكثر دقة</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 border-r-4 border-yellow-600">
                    <h3 className="text-lg font-bold text-yellow-900 mb-3">💡 نصيحة احترافية</h3>
                    <div className="space-y-2 text-gray-800 text-sm">
                      <p>✓ استخدم دائمًا <strong>اللاصق المناسب لنوع العازل</strong> – كل عازل له لاصق خاص به</p>
                      <p>✓ لا تنسَ <strong>أشرطة الإغلاق (Tapes)</strong> – فهي ضرورية لمنع التسريب</p>
                      <p>✓ احرص على <strong>استخدام معدات الحماية</strong> عند التركيب (قفازات، نظارات)</p>
                      <p>✓ للمشاريع الخارجية، استخدم <strong>كسوة ألومنيوم أو ستانلس</strong> لحماية العزل من الطقس</p>
                    </div>
                  </div>

                  <div className="bg-brand-orange text-white p-6 text-center">
                    <h3 className="text-xl font-bold mb-3">🎯 نوفر جميع المستلزمات بجودة عالية</h3>
                    <p className="mb-4">احصل على كل ما تحتاجه لمشروع العزل من مصدر واحد موثوق</p>
                    <a 
                      href="/#contact" 
                      className="inline-block bg-white text-brand-orange px-6 py-3 font-bold hover:bg-gray-100 transition-colors"
                    >
                      اطلب عرض سعر الآن
                    </a>
                  </div>
                </div>
              )}

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
