import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Tool } from '../../types/tool';
import { ToolRating } from './ToolRating';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={tool.imageUrl}
        alt={tool.name}
        className="w-full h-48 sm:h-40 lg:h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {tool.pricing}
          </span>
        </div>
        <p className="mt-2 text-gray-600 text-sm h-[40px] line-clamp-2">{tool.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <ToolRating rating={tool.rating} />
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Visit <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}