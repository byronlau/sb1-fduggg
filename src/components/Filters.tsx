import React from 'react';
import { Category, PricingType } from '../types/tool';

interface FiltersProps {
  selectedCategory: Category | 'all';
  selectedPricing: PricingType | 'all';
  onCategoryChange: (category: Category | 'all') => void;
  onPricingChange: (pricing: PricingType | 'all') => void;
}

export function Filters({
  selectedCategory,
  selectedPricing,
  onCategoryChange,
  onPricingChange,
}: FiltersProps) {
  const categories: (Category | 'all')[] = ['all', 'design', 'development', 'marketing', 'productivity', 'analytics', 'other'];
  const pricingOptions: (PricingType | 'all')[] = ['all', 'free', 'paid', 'freemium'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                  selectedCategory === category
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Pricing</h3>
          <div className="space-y-2">
            {pricingOptions.map((price) => (
              <button
                key={price}
                onClick={() => onPricingChange(price)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                  selectedPricing === price
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {price.charAt(0).toUpperCase() + price.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}