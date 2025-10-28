
import React from 'react';
import type { NavLink, Service, GalleryImage, Testimonial } from './types';

export const navLinks: NavLink[] = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre Nosotros', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'Contacto', href: '#contact' },
];

export const services: Service[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Bodas personalizadas',
    description: 'Diseñamos bodas únicas que cuentan su historia de amor, cuidando cada detalle para un día inolvidable.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18.22V14.15M12 11.25h.008v.008H12v-.008z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75L14.25 6l-2.25 2.25L12 3.75zM21 3.75L18.75 6l2.25 2.25L21 3.75zM3 3.75l2.25 6-2.25 2.25L3 3.75z" />
      </svg>
    ),
    title: 'Eventos corporativos',
    description: 'Organizamos lanzamientos, conferencias y celebraciones que reflejan la profesionalidad y visión de su empresa.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-8.25M12 4.875A2.625 2.625 0 1014.625 7.5H9.375A2.625 2.625 0 1012 4.875z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.875v.008z" />
      </svg>
    ),
    title: 'Cumpleaños y aniversarios',
    description: 'Creamos celebraciones memorables, desde fiestas íntimas hasta grandes festejos, llenos de alegría y estilo.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.622-3.385m0 5.042a3 3 0 00-3.388-1.622 3 3 0 00-1.622 3.385m0 0a15.998 15.998 0 01-3.388 1.62m5.043-.025a15.998 15.998 0 00-1.622 3.385m-1.622-3.385a3 3 0 003.388 1.622 3 3 0 001.622-3.385" />
      </svg>
    ),
    title: 'Decoración temática',
    description: 'Transformamos espacios con conceptos creativos y decoraciones espectaculares que cautivan a los invitados.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: 'Asesoría integral',
    description: 'Le acompañamos en cada paso, desde la idea inicial hasta la ejecución, asegurando una planificación sin estrés.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    title: 'Logística de proveedores',
    description: 'Coordinamos a los mejores proveedores del mercado para garantizar un servicio de excelencia y una ejecución impecable.',
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&h=600&auto=format&fit=crop', category: 'Bodas', alt: 'Decoración de boda elegante' },
  { id: 2, src: 'https://images.unsplash.com/photo-1597158296996-ccab11e5a847?q=80&w=600&h=600&auto=format&fit=crop', category: 'Bodas', alt: 'Novios en el altar' },
  { id: 3, src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&h=600&auto=format&fit=crop', category: 'Empresariales', alt: 'Reunión corporativa' },
  { id: 4, src: 'https://images.unsplash.com/photo-1517172963172-1b0f023758a4?q=80&w=600&h=600&auto=format&fit=crop', category: 'Infantiles', alt: 'Fiesta infantil colorida' },
  { id: 5, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&h=600&auto=format&fit=crop', category: 'Bodas', alt: 'Mesa de recepción de boda' },
  { id: 6, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&h=600&auto=format&fit=crop', category: 'Empresariales', alt: 'Networking en evento de negocios' },
  { id: 7, src: 'https://images.unsplash.com/photo-1595475838044-913c1c4f4a38?q=80&w=600&h=600&auto=format&fit=crop', category: 'Bodas', alt: 'Detalle de ramo de novia' },
  { id: 8, src: 'https://images.unsplash.com/photo-1600812693549-36c1e54911e3?q=80&w=600&h=600&auto=format&fit=crop', category: 'Infantiles', alt: 'Mesa de dulces para niños' },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Gracias a Itzel y su equipo, nuestro día fue perfecto. Cada detalle fue mágico y superó todas nuestras expectativas.',
    author: '– Carolina & Luis',
  },
  {
    quote: 'La organización del evento de lanzamiento de nuestra marca fue impecable. Profesionalismo y creatividad en todo momento.',
    author: '– CEO, Tech Innovators',
  },
  {
    quote: 'Itzel transformó mi cumpleaños en una fiesta de ensueño. ¡La decoración era espectacular! Mis invitados quedaron fascinados.',
    author: '– Sofía R.',
  },
];
