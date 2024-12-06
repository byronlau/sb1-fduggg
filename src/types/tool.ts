export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  pricing: PricingType;
  rating: number;
  url: string;
  imageUrl: string;
}

export type Category = 
  | 'design'
  | 'development'
  | 'marketing'
  | 'productivity'
  | 'analytics'
  | 'other';

export type PricingType = 
  | 'free'
  | 'paid'
  | 'freemium';