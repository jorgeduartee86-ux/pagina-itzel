
import React, { useState } from 'react';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    eventType: '',
    date: '',
    guests: '',
    city: '',
    contact: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="quote" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-purple-900 mb-6">¡Gracias!</h2>
            <p className="text-xl text-gray-700">Hemos recibido tu solicitud. Pronto te contactaremos para comenzar a planear tu evento soñado.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-purple-900 mb-4">Solicita una Cotización</h2>
            <p className="text-lg text-gray-600 mb-12">Cuéntanos sobre tu evento y nos pondremos en contacto para hacerlo realidad.</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-purple-50 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Nombre completo" required className="p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" value={formData.name} onChange={handleChange} />
            <select name="eventType" required className="p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white custom-select" value={formData.eventType} onChange={handleChange}>
                <option value="" disabled>Tipo de evento</option>
                <option value="Boda">Boda</option>
                <option value="Corporativo">Corporativo</option>
                <option value="Cumpleaños">Cumpleaños/Aniversario</option>
                <option value="Otro">Otro</option>
            </select>
            <input type="date" name="date" required className="p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" value={formData.date} onChange={handleChange} />
            <input type="number" name="guests" placeholder="Número de invitados" required className="p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" value={formData.guests} onChange={handleChange} />
            <input type="text" name="city" placeholder="Ciudad o lugar" required className="p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" value={formData.city} onChange={handleChange} />
            <input type="text" name="contact" placeholder="Teléfono / Correo electrónico" required className="p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" value={formData.contact} onChange={handleChange} />
          </div>
          <textarea name="message" placeholder="Mensaje adicional..." rows={4} className="mt-6 w-full p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" value={formData.message} onChange={handleChange}></textarea>
          <div className="text-center mt-8">
            <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Solicitar cotización
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
