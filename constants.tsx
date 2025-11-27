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
    title: 'عزل فايبر جلاس',
    description: 'لفائف وألواح الفايبر جلاس (الزجاجي) عالية الكثافة للعزل الحراري والصوتي في المباني.',
    category: 'عزل حراري',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80'
    ]
  },
  {
    id: 2,
    title: 'Armaflex Sheets',
    description: 'صفائح رغوية مطاطية سوداء مرنة لعزل الأنابيب والقنوات بكفاءة عالية ومنع التكثف.',
    category: 'عزل مطاطي',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80'
    ]
  },
  {
    id: 3,
    title: 'مواسير العزل',
    description: 'مواسير عزل جاهزة (Pipe Insulation) بأقطار مختلفة لحماية شبكات التكييف والمياه.',
    category: 'عزل مواسير',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80'
    ]
  },
  {
    id: 4,
    title: 'دكت مرن ومعزول',
    description: 'مجاري هواء مرنة (Flexible Ducts) معزولة بالألومنيوم لسهولة التركيب في الأماكن الضيقة.',
    category: 'HVAC',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80'
    ]
  },
  {
    id: 5,
    title: 'إكسسوارات HVAC',
    description: 'جميع مستلزمات التركيب من أشرطة لاصقة (Tapes) ومواد تثبيت وسيليكون.',
    category: 'إكسسوارات',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80'
    ]
  },
  {
    id: 6,
    title: 'ألواح الصوف الصخري',
    description: 'حلول عزل Rockwool متقدمة للمباني الصناعية والتجارية مقاومة للحريق والحرارة العالية.',
    category: 'عزل صخري',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
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