
import React, { useState, useEffect, useCallback } from 'react';
import { testimonials } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-purple-900 bg-opacity-90 text-white bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(88, 28, 135, 0.9), rgba(88, 28, 135, 0.9)), url(https://images.unsplash.com/photo-1519167758481-83f550bb49b6?q=80&w=1920&auto=format&fit=crop)'}}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-amber-300">Lo que dicen nuestros clientes</h2>
        <div className="relative max-w-3xl mx-auto h-64">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-xl md:text-2xl italic mb-6">"{testimonial.quote}"</p>
                <p className="font-bold text-lg text-amber-300">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
            <button onClick={prevSlide} className="mx-2 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="mx-2 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
