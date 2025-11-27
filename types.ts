import { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  images: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface Reason {
  id: number;
  title: string;
  Icon: LucideIcon;
}

export interface Brand {
  id: number;
  name: string;
  logo: string; // URL placeholder
}