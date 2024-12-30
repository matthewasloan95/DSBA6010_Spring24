// src/types/course.ts
export type MaterialType = 'ExternalUrl' | 'Attachment' | 'pdf' | 'notebook' | 'excel' | 'zip' | 'video';

export type Material = {
  type: MaterialType;
  name: string;
  description?: string;
} & (
  | { type: 'ExternalUrl'; url: string; file?: never; }
  | { type: Exclude<MaterialType, 'ExternalUrl'>; file: string; url?: never; }
);

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