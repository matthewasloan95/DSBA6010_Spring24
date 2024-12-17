// src/types/course.ts
export interface Material {
    type: 'ExternalUrl' | 'Attachment' | 'pdf' | 'notebook' | 'excel' | 'zip' | 'video';
    name: string;
    description?: string;
    url?: string;
    file?: string;
  }
  
  export interface Lab {
    name: string;
    file: string;
    description?: string;
  }
  
  export interface Solution {
    name: string;
    file: string;
    description?: string;
  }
  
  export interface ImportantDate {
    date: string;  // ISO date string
    title: string;
    description?: string;
    type: 'class' | 'holiday' | 'deadline' | 'exam';
  }

  export interface Module {
    title: string;
    subHeaders: string[];
    materials: Material[];
    labs?: Lab[];
    solutions?: Solution[];
    importantDates?: ImportantDate[];
  }

  export interface Assignment {
    name: string;
    file?: string;
    description?: string;
  };
  