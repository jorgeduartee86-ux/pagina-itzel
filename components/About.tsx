
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&h=800&fit=crop&crop=faces" 
              alt="Itzel García" 
              className="rounded-full shadow-2xl mx-auto object-cover w-64 h-64 md:w-96 md:h-96" 
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-purple-900 mb-6">Sobre Itzel García</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Desde hace más de 10 años, Itzel transforma sueños en experiencias únicas. Con una pasión inigualable por la perfección y la creatividad, cada detalle es pensado para reflejar la esencia y el estilo de nuestros clientes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Con certificaciones internacionales y una trayectoria impecable, nuestro compromiso es crear eventos que no solo se vean espectaculares, sino que se sientan mágicos e inolvidables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
