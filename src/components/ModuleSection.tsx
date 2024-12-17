// src/components/ModuleSection.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Book, Code, Table, Link, File, Play } from 'lucide-react';
import type { Material} from '../types/course';

const getIconForType = (type: Material['type']) => {
  switch (type) {
    case 'pdf': return FileText;
    case 'notebook': return Code;
    case 'excel': return Table;
    case 'ExternalUrl': return Link;
    case 'zip': return File;
    case 'video': return Play;
    default: return FileText;
  }
};
export const ModuleSection = ({ 
    title, 
    materials 
  }: { 
    title: string; 
    materials: Material[]; 
  }) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
      <div className="mb-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-3">
            <Book className="w-5 h-5 text-blue-600" />
            <span className="font-medium">{title}</span>
            <span className="text-sm text-gray-500">({materials.length} items)</span>
          </div>
          {expanded ? 
            <ChevronUp className="w-5 h-5 text-gray-500" /> : 
            <ChevronDown className="w-5 h-5 text-gray-500" />
          }
        </button>
        
        {expanded && (
          <div className="mt-2 ml-8 space-y-2">
            {materials.map((item, index) => {
              const Icon = getIconForType(item.type);
              return (
                <a
                  key={index}
                  href={item.url || item.file}
                  className="block p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-2 text-black">
                    <Icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span>{item.name}</span>
                  </div>
                  {item.description && (
                    <p className="mt-1 ml-6 text-sm text-gray-600">
                      {item.description}
                    </p>
                  )}
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
  };