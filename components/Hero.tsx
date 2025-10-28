
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="relative z-20 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-4 animate-fade-in-down">
          Creamos momentos que se convierten en recuerdos inolvidables.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Especialistas en la creación de eventos únicos y personalizados que superan tus sueños.
        </p>
        <a 
          href="#quote" 
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
        >
          Agenda tu cita
        </a>
      </div>
    </section>
  );
};

export default Hero;
