import React from 'react';
import { Category, PricingType } from '../../types/tool';
import { CategoryFilter } from './CategoryFilter';
import { PricingFilter } from './PricingFilter';

interface FiltersProps {
  selectedCategory: Category | 'all';
  selectedPricing: PricingType | 'all';
  onCategoryChange: (category: Category | 'all') => void;
  onPricingChange: (pricing: PricingType | 'all') => void;
  isOpen: boolean;
}

export function Filters({
  selectedCategory,
  selectedPricing,
  onCategoryChange,
  onPricingChange,
  isOpen,
}: FiltersProps) {
  return (
    <div className={`
      bg-white p-6 rounded-lg shadow-sm
      fixed md:static top-[120px] left-0 right-0 bottom-0 md:bottom-auto
      md:w-64 z-40 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="space-y-6">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        <PricingFilter
          selectedPricing={selectedPricing}
          onPricingChange={onPricingChange}
        />
      </div>
    </div>
  );
}