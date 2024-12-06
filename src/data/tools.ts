import { Tool } from '../types/tool';

export const tools: Tool[] = [
  {
    id: '1',
    name: 'DesignAI Pro',
    description: 'AI-powered design tool for creating stunning visuals in minutes. Perfect for social media, marketing materials, and web design.',
    category: 'design',
    pricing: 'freemium',
    rating: 4.8,
    url: 'https://example.com/designai',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '2',
    name: 'CodeFlow',
    description: 'Smart code editor with AI pair programming capabilities. Boost your productivity with intelligent code suggestions.',
    category: 'development',
    pricing: 'paid',
    rating: 4.9,
    url: 'https://example.com/codeflow',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: '3',
    name: 'MarketMaster',
    description: 'All-in-one marketing automation platform. Schedule posts, analyze metrics, and grow your audience.',
    category: 'marketing',
    pricing: 'freemium',
    rating: 4.7,
    url: 'https://example.com/marketmaster',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&h=300'
  }
];