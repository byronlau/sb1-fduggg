import React from 'react';
import { Category } from '../../types/tool';
import { FilterButton } from './FilterButton';

interface CategoryFilterProps {
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: (Category | 'all')[] = [
    'all',
    'design',
    'development',
    'marketing',
    'productivity',
    'analytics',
    'other'
  ];

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <FilterButton
            key={category}
            isSelected={selectedCategory === category}
            onClick={() => onCategoryChange(category)}
            label={category.charAt(0).toUpperCase() + category.slice(1)}
          />
        ))}
      </div>
    </div>
  );
}