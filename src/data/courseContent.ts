// src/data/courseContent.ts

// Notes to self:
// page.tsx line 15 starts the weeks array, where 0 is important dates
import { Module, Assignment} from '../types/course';
export const courseModules: Module[] = [
    // Date Module
    {
      title: "Dates",
      subHeaders: ["Context Module Sub Header"],
      materials: [],
      importantDates: [
        { date: "2025-01-13", 
            title: "First Day of Clasess", 
            type: "class",
            description: '' },
        {
            date: '2025-01-21',
            title: "Last day to add/drop",
            type: "deadline",
            description: ''
        },
        {
            date: '2025-03-03',
            title: 'Start Spring Break!',
            type: 'holiday',
            description: 'Spring break starts today! March 3 - March 8'
        },
        {
            date: '2025-03-08',
            title: 'End Spring Break',
            type: 'holiday',
            description: ''
        },
        {
            date: '2025-03-17',
            title: 'Final day to withdraw',
            type: 'deadline',
            description: '\"March 17, 2025	Last day to withdraw from course (s); grade subject to Withdrawal Policy\"'
        },
        // April 24 final day of class
        {
            date: '2025-04-24',
            title: 'Our Final Day of Class',
            type: 'class',
            description: ''
        }
      ]
},
    // Week 1
    {
      title: "Deep Learning Recap / Intro to CV",
      subHeaders: ["Context Module Sub Header"],
      materials: [
        {
          type: 'ExternalUrl',
          name: 'Part 1 | But what is a neural network?',
          url: 'https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=1',
          description: '3Blue1Brown video on neural networks... 3B1B is great...'
        },
        {
          type: 'Attachment',
          name: 'NN Example.xlsx',
        //   file: 'https://instructure.charlotte.edu/courses/212415/files/23709511/download?download_frd=1',
          file: '/course_files/excel/NN Example.xlsx',
          description: 'Excel file with a simple neural network example'
        }
      ],
      labs: [
        { name: 'Lab 1: Chapter1_edit.ipynb', file: 'https://instructure.charlotte.edu/courses/212415/files/23769287/download?download_frd=1' },
        { name: 'Lab 2: Pytorch_tensors_student.ipynb', file: 'https://instructure.charlotte.edu/courses/212415/files/23769288/download?download_frd=1' }
      ]
    },

    // Week 2
    {
      title: "Advanced Deep Learning / Image Classification",
      subHeaders: ["Context Module Sub Header"],
      materials: [
        {
          type: 'Attachment',
          name: 'CNN Tracing.xlsx',
          file: 'path/to/CNN_Tracing.xlsx'
        }
      ],
      labs: [
        { name: 'Lab 4: Pytorch_neural_networks.ipynb', file: 'https://instructure.charlotte.edu/courses/212415/files/23890182/download?download_frd=1' },
        { name: 'Lab 5: CNN_Lab_Student.ipynb', file: 'https://instructure.charlotte.edu/courses/212415/files/23866404/download?download_frd=1'}
      ]
    },
    // Add additional modules following the same structure
  ];

  export const assignments: Assignment[] = [
    {
      name: 'Project Teams',
      file: 'https://instructure.charlotte.edu/courses/212415/assignments/2119824',
    },
    {
      name: 'Module 1 Labs',
      file: 'https://instructure.charlotte.edu/courses/212415/assignments/2125548',
    },
    {
      name: 'Week 2 Labs',
      file: 'https://instructure.charlotte.edu/courses/212415/assignments/2130745',
    },
    // Add more assignments as needed
  ];