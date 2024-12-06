import { useState, useCallback } from 'react';
import { Tool } from '../types/tool';

export function useSearch(tools: Tool[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useCallback(
    (categoryFilter: string, pricingFilter: string) => {
      return tools.filter((tool) => {
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = categoryFilter === 'all' || tool.category === categoryFilter;
        const matchesPricing = pricingFilter === 'all' || tool.pricing === pricingFilter;
        
        return matchesSearch && matchesCategory && matchesPricing;
      });
    },
    [searchQuery, tools]
  );

  return {
    searchQuery,
    setSearchQuery,
    filteredTools,
  };
}