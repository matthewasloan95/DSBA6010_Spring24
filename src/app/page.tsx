// src/app/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Book, Calendar, FileText, Notebook, Link2, ExternalLink } from 'lucide-react';
import { ImportantDates } from '../components/ImportantDates';
import type { ImportantDate } from '../types/course';
import dates from '../data/dates.json';
import weeks from '../data/weeks.json';
import resources from '../data/resources.json';
import assignments from '../data/assignments.json';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Page() {
  const [headerText, setHeaderText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  useEffect(() => {
    // Fetch text content
    fetch(`/DSBA6010_Spring24/course_files/content/header.txt`)
      .then(res => res.text())
      .then(data => setHeaderText(data));

    fetch(`/DSBA6010_Spring24/course_files/content/title.txt`)
      .then(res => res.text())
      .then(data => setTitleText(data));

    fetch(`/DSBA6010_Spring24/course_files/content/description.txt`)
      .then(res => res.text())
      .then(data => setDescriptionText(data));

  }, [basePath])
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav bar */}
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* HEADER */}
          <div className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: headerText }}></div>
          <div className="space-x-8">
            <a href="#schedule" className="hover:text-blue-300 transition-colors">
              Schedule
            </a>
            <a href="#assignments" className="hover:text-blue-300 transition-colors">
              Assignments
            </a>
            <a href="#resources" className="hover:text-blue-300 transition-colors">
              Resources
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Main content */}
        {/* TITLE */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="text-3xl font-bold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: titleText }}></div>
          {descriptionText.split('\n').map((line, i) => (
            <p key={i} className="text-gray-600">
              {line}
            </p>
          ))}
        </div>

        {/* Important Dates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <Calendar className="mr-2" /> Course Schedule
          </h2>
          <ImportantDates dates={dates as ImportantDate[]} />
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
                        {week.materials.map((material, idx) => (
                          <a
                            key={idx}
                            href={material.type === 'ExternalUrl' ? material.url : material.file}
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
                    {week.labs && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Labs</h4>
                        <div className="grid gap-2">
                          {week.labs.map((lab, idx) => (
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
            {resources.sections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <a
                        href={item.url}
                        target={item.type === 'external' ? "_blank" : undefined}
                        rel={item.type === 'external' ? "noopener noreferrer" : undefined}
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        {item.type === 'external' ? 
                          <ExternalLink className="w-4 h-4 mr-2" /> : 
                          <FileText className="w-4 h-4 mr-2" />
                        }
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
