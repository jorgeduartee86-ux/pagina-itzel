
import React, { useState } from 'react';
import { galleryImages } from '../constants';
import type { GalleryCategory } from '../types';

const categories: GalleryCategory[] = ['Bodas', 'Empresariales', 'Infantiles'];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<GalleryCategory | 'Todos'>('Todos');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredImages = filter === 'Todos' ? galleryImages : galleryImages.filter(img => img.category === filter);

  const openModal = (src: string) => {
    setSelectedImg(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-purple-900 mb-12">Galería de Momentos</h2>
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          <button onClick={() => setFilter('Todos')} className={`px-4 py-2 text-sm md:text-base rounded-full transition-colors duration-300 ${filter === 'Todos' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-purple-200'}`}>
            Todos
          </button>
          {categories.map(category => (
            <button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 text-sm md:text-base rounded-full transition-colors duration-300 ${filter === category ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-purple-200'}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg cursor-pointer" onClick={() => openModal(image.src)}>
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-2">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img src={selectedImg} alt="Vista ampliada" className="max-w-full max-h-full object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Gallery;
