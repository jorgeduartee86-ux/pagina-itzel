// FIX: Import React to provide the React namespace for the React.ReactNode type.
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export type GalleryCategory = 'Bodas' | 'Empresariales' | 'Infantiles';

export interface GalleryImage {
  id: number;
  src: string;
  category: GalleryCategory;
  alt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}
