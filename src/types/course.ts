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

export type ResourceIcon = 'youtube' | 'pytorch' | 'book' | 'externallink'; // Extend as needed

export interface ImportantDate {
  title: string;
  type: 'class' | 'holiday' | 'deadline' | 'exam' | 'external';
  date: string;
  icon?: ResourceIcon;
  description?: string;
}

export interface Module {
  week: number;
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
}

export interface ResourceItem {
  name: string;
  url: string;
  type: 'external' | 'file';
  icon?: ResourceIcon;
}

export interface ResourceSection {
  title: string;
  icon?: ResourceIcon;
  items: ResourceItem[];
}

export interface Resources {
  sections: ResourceSection[];
}

export function hasDescription(material: Material): material is Material & { description: string } {
  return typeof material.description === 'string';
}