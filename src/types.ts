export type PageId = 'home' | 'creations' | 'about' | 'craftsmanship' | 'faq' | 'contact';

export interface BusinessInfo {
  name: string;
  category: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  phoneRaw: string;
  rating: number;
  reviewCount: number;
  about: string;
}

export interface NavItem {
  id: PageId;
  label: string;
  description?: string;
}

export interface CreationCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  purpose: string;
  image?: string;
  imageAlt?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'creations' | 'studio' | 'gifts' | 'care';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
