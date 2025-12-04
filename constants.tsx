import { 
  ShieldCheck, 
  Truck, 
  Headset, 
  Settings, 
  DollarSign, 
  MapPin, 
  Award, 
  Clock, 
  Package, 
  Briefcase, 
  Layers 
} from 'lucide-react';
import { Product, Service, Reason, Brand } from './types';

export const NAV_LINKS = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'من نحن', href: '#about' },
  { name: 'منتجاتنا', href: '#products' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'تواصل معنا', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Insulated Flexible Duct',
    description: 'مجاري هواء مرنة معزولة بالألومنيوم لأنظمة التكييف والتهوية بكفاءة عالية.',
    category: 'HVAC',
    images: [
      'https://i.pinimg.com/1200x/0a/78/ab/0a78abe6e0e5abcb1d33bc87387b73ac.jpg'
    ]
  },
  {
    id: 2,
    title: 'Fiber Glass',
    description: 'لفائف وألواح الفايبر جلاس عالية الكثافة للعزل الحراري والصوتي بجودة فائقة.',
    category: 'عزل حراري',
    images: [
      'https://i.postimg.cc/wjdF9g1y/Whats_App_Image_2025_12_02_at_20_53_50_ec8648fd.jpg'
    ]
  },
  {
    id: 3,
    title: 'Insulated Pipes',
    description: 'مواسير عزل جاهزة بأقطار مختلفة لحماية شبكات التكييف والمياه بكفاءة عالية.',
    category: 'عزل مواسير',
    images: [
      'https://i.postimg.cc/RCgyX3bT/Whats-App-Image-2025-12-04-at-08-45-48-2a454836.jpg'
    ]
  },
  {
    id: 4,
    title: 'Armaflex',
    description: 'عزل مطاطي مرن من أرمافليكس لحماية الأنابيب والقنوات ومنع التكثف بكفاءة عالية.',
    category: 'عزل مطاطي',
    images: [
      'https://i.postimg.cc/wBYKKCzH/Whats-App-Image-2025-12-02-at-20-53-51-91a02ff3.jpg'
    ]
  },
  {
    id: 5,
    title: 'عزل صخري Rockwool',
    description: 'ألواح الصوف الصخري المقاومة للحريق والحرارة العالية للمباني الصناعية والتجارية.',
    category: 'عزل صخري',
    images: [
      'https://i.postimg.cc/d3yXS6xS/Whats-App-Image-2025-12-02-at-20-53-51-14fa25db.jpg'
    ]
  },
  {
    id: 6,
    title: 'عزل صوت',
    description: 'حلول العزل الصوتي المتقدمة لتقليل الضوضاء في المباني السكنية والتجارية.',
    category: 'عزل صوتي',
    images: [
      'https://i.postimg.cc/rFGZ0DXQ/Whats-App-Image-2025-12-02-at-20-53-52-920f2521.jpg'
    ]
  },
  {
    id: 7,
    title: 'Accessories',
    description: 'جميع مستلزمات وإكسسوارات التركيب من أشرطة لاصقة ومواد تثبيت وسيليكون.',
    category: 'إكسسوارات',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'التوريد السريع',
    description: 'شبكة لوجستية تضمن وصول الطلبات في الوقت المحدد للموقع.',
    Icon: Truck
  },
  {
    id: 2,
    title: 'دعم فني متواصل',
    description: 'فريق من المهندسين لتقديم الاستشارات الفنية وحساب الكميات.',
    Icon: Headset
  },
  {
    id: 3,
    title: 'حلول للمشاريع',
    description: 'توفير حزم متكاملة من مواد العزل للمشاريع الكبرى.',
    Icon: Settings
  },
  {
    id: 4,
    title: 'أسعار تنافسية',
    description: 'أفضل قيمة مقابل سعر في السوق المحلي والإقليمي.',
    Icon: DollarSign
  },
  {
    id: 5,
    title: 'تغطية شاملة',
    description: 'توريد لكل المحافظات والمناطق النائية بكفاءة عالية.',
    Icon: MapPin
  }
];

export const REASONS: Reason[] = [
  { id: 1, title: 'جودة عالمية', Icon: Award },
  { id: 2, title: 'التزام بالمواعيد', Icon: Clock },
  { id: 3, title: 'مخزون دائم', Icon: Package },
  { id: 4, title: 'خبرة طويلة', Icon: Briefcase },
  { id: 5, title: 'ماركات موثوقة', Icon: Layers },
];

export const CONTACT_INFO = {
  phone: '+966 12 345 6789',
  email: 'sales@mazadline.com',
  address: 'المنطقة الصناعية الثانية، الرياض، المملكة العربية السعودية'
};