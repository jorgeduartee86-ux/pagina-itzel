
import React from 'react';
import { services } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-purple-900 mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Ofrecemos una gama completa de servicios para asegurar que tu evento sea exactamente como lo imaginaste, o incluso mejor.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-purple-600 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-serif font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
