import React from 'react';

interface FilterButtonProps {
  isSelected: boolean;
  onClick: () => void;
  label: string;
}

export function FilterButton({ isSelected, onClick, label }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
        isSelected
          ? 'bg-blue-100 text-blue-800'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );
}