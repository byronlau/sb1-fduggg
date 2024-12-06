import React from 'react';
import { PricingType } from '../../types/tool';
import { FilterButton } from './FilterButton';

interface PricingFilterProps {
  selectedPricing: PricingType | 'all';
  onPricingChange: (pricing: PricingType | 'all') => void;
}

export function PricingFilter({ selectedPricing, onPricingChange }: PricingFilterProps) {
  const pricingOptions: (PricingType | 'all')[] = ['all', 'free', 'paid', 'freemium'];

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900 mb-3">Pricing</h3>
      <div className="space-y-2">
        {pricingOptions.map((price) => (
          <FilterButton
            key={price}
            isSelected={selectedPricing === price}
            onClick={() => onPricingChange(price)}
            label={price.charAt(0).toUpperCase() + price.slice(1)}
          />
        ))}
      </div>
    </div>
  );
}