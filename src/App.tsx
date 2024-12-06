import React, { useState } from 'react';
import { Header } from './components/Header';
import { Filters } from './components/Filters/Filters';
import { ToolGrid } from './components/Tool/ToolGrid';
import { SubmitToolModal } from './components/SubmitTool/SubmitToolModal';
import { tools } from './data/tools';
import { Category, PricingType } from './types/tool';
import { useSearch } from './hooks/useSearch';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedPricing, setSelectedPricing] = useState<PricingType | 'all'>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const { searchQuery, setSearchQuery, filteredTools } = useSearch(tools);

  const displayedTools = filteredTools(selectedCategory, selectedPricing);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onMenuToggle={() => setIsFilterOpen(!isFilterOpen)}
        onSubmitClick={() => setIsSubmitModalOpen(true)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-24">
        <div className="flex gap-8">
          <Filters
            selectedCategory={selectedCategory}
            selectedPricing={selectedPricing}
            onCategoryChange={setSelectedCategory}
            onPricingChange={setSelectedPricing}
            isOpen={isFilterOpen}
          />
          <div className="flex-1">
            <ToolGrid tools={displayedTools} />
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile filter */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      <SubmitToolModal 
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
}

export default App;