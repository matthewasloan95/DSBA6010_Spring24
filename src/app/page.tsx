// src/app/page.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Book, Calendar, FileText, Notebook, Link2, ExternalLink } from 'lucide-react';
import { courseModules, assignments } from '../data/courseContent';
import { ImportantDates } from '../components/ImportantDates';
import type { ImportantDate } from '../types/course'; 

const Page = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  // Organize content by weeks
  const weeks = [
    { week: 1, title: "Deep Learning Fundamentals", content: courseModules[1] },
    { week: 2, title: "Neural Networks & PyTorch", content: courseModules[2] },
    // { week: 3, title: "Advanced Deep Learning", content: courseModules[2] },
    // { week: 4, title: "CNN Architecture", content: courseModules[3] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ACV Course Content</h1>
          <div className="space-x-8">
            <a href="#schedule" className="hover:text-blue-300 transition-colors">Schedule</a>
            <a href="#assignments" className="hover:text-blue-300 transition-colors">Assignments</a>
            <a href="#resources" className="hover:text-blue-300 transition-colors">Resources</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">DSBA 6010 - Applied Computer Vision</h1>
          <p className="text-gray-600">Rick Chakra - rchakra4@charlotte.edu - Office Hours - etc</p>
          <p className="text-gray-600">Matt Sloan - msloan16@charlotte.edu - Office Hours - etc</p>
          <p className="text-gray-600"> Meets Thursdays @ 05:30 PM - 08:15 PM @ Uptown, Dubois 606</p>
          
        </div>

        {/* Important Dates */}
        <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
          <Calendar className="mr-2" /> Course Schedule
        </h2>
        <ImportantDates 
          dates={courseModules.reduce((acc, module) => 
            module.importantDates ? [...acc, ...module.importantDates] : acc, 
            [] as ImportantDate[]
          )} 
        />
      </section>

        {/* Weekly Schedule */}
        <section id="schedule" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <Calendar className="mr-2" /> Weekly Schedule
          </h2>
          <div className="space-y-4">
            {weeks.map((week) => (
              <div key={week.week} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Week {week.week}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900">{week.title}</h3>
                  </div>
                  {expandedWeek === week.week ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedWeek === week.week && (
                  <div className="p-4 bg-gray-50 border-t border-gray-100">
                    {/* Materials */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Materials</h4>
                      <div className="grid gap-2">
                        {week.content.materials.map((material, idx) => (
                          <a
                            key={idx}
                            href={material.url || material.file}
                            className="block p-2 bg-white rounded hover:bg-blue-50 transition-colors"
                          >
                            <div className="flex items-center space-x-2">
                              {material.type === 'ExternalUrl' ? 
                                <ExternalLink className="text-blue-600 flex-shrink-0" /> : 
                                <FileText className="text-gray-600 flex-shrink-0" />
                              }
                              <span className="text-gray-900">{material.name}</span>
                            </div>
                            {material.description && (
                              <p className="mt-1 ml-6 text-sm text-gray-600">
                                {material.description}
                              </p>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
              
                    {/* Labs */}
                    {week.content.labs && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Labs</h4>
                        <div className="grid gap-2">
                          {week.content.labs.map((lab, idx) => (
                            <a
                              key={idx}
                              href={lab.file}
                              className="flex items-center space-x-2 p-2 bg-white rounded hover:bg-green-50 transition-colors"
                            >
                              <Notebook className="text-green-600" />
                              <span className="text-gray-900">{lab.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Assignments */}
        <section id="assignments" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <Book className="mr-2" /> Assignments
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {assignments.map((assignment, idx) => (
                <a
                  key={idx}
                  href={assignment.file}
                  className="block p-4 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-900">{assignment.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <Link2 className="mr-2" /> Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">External Resources</h3>
              <ul className="space-y-2">
                {/* Pytorch Tutorials */}
                <li>
                <a 
                  href="https://pytorch.org/tutorials/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  PyTorch Tutorials
                </a>
              </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Course Materials</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Course Syllabus
                  </a>
                </li>
                <li>
                <a 
                  href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Three Blue One Brown (NN playlist)
                </a>
              </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;