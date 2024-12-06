import React from 'react';
import { X } from 'lucide-react';
import { SubmitToolForm } from './SubmitToolForm';

interface SubmitToolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubmitToolModal({ isOpen, onClose }: SubmitToolModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />
      <div className="fixed inset-x-4 top-[50%] translate-y-[-50%] md:inset-x-auto md:left-[50%] md:translate-x-[-50%] md:max-w-lg w-full bg-white rounded-lg shadow-xl z-50 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Submit a Tool</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <SubmitToolForm onClose={onClose} />
      </div>
    </>
  );
}