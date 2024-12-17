// src/components/ImportantDates.tsx
import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { ImportantDate } from '../types/course';

const getIconForDateType = (type: ImportantDate['type']) => {
  switch (type) {
    case 'class':
      return BookOpen;
    case 'holiday':
      return Clock;
    case 'deadline':
      return AlertCircle;
    case 'exam':
      return Calendar;
    default:
      return Calendar;
  }
};

const getColorForDateType = (type: ImportantDate['type']) => {
  switch (type) {
    case 'class':
      return 'text-blue-600 bg-blue-50';
    case 'holiday':
      return 'text-green-600 bg-green-50';
    case 'deadline':
      return 'text-red-600 bg-red-50';
    case 'exam':
      return 'text-purple-600 bg-purple-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

export const ImportantDates = ({ dates }: { dates: ImportantDate[] }) => {
  // Sort dates chronologically
  const sortedDates = [...dates].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center hover:bg-gray-100 transition-colors"
      >
        <h3 className="text-lg font-medium text-gray-900 flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Important Dates
        </h3>
        {isExpanded ? 
          <ChevronUp className="w-5 h-5 text-gray-500" /> : 
          <ChevronDown className="w-5 h-5 text-gray-500" />
        }
      </button>
      
      {isExpanded && (
        <div className="divide-y divide-gray-200">
          {sortedDates.map((date, index) => {
            const Icon = getIconForDateType(date.type);
            const colorClass = getColorForDateType(date.type);
            
            return (
              <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium text-gray-900">{date.title}</h4>
                      <span className="ml-2 text-sm text-gray-500">
                        {new Date(date.date + 'T00:00:00').toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                      </span>
                    </div>
                    {date.description && (
                      <p className="mt-1 text-sm text-gray-600">{date.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};