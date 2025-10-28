
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-purple-900 mb-4">Ponte en Contacto</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Estamos listos para escuchar tus ideas. Contáctanos y empecemos a diseñar tu próximo gran evento.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-purple-800">Información de Contacto</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center"><span className="mr-3 text-purple-600 text-2xl">📞</span> <a href="tel:+521234567890" className="hover:text-purple-800">+52 123 456 7890</a></li>
              <li className="flex items-center"><span className="mr-3 text-purple-600 text-2xl">📧</span> <a href="mailto:hola@itzelgarciaevents.com" className="hover:text-purple-800">hola@itzelgarciaevents.com</a></li>
              <li className="flex items-center"><span className="mr-3 text-purple-600 text-2xl">📍</span><span>Ciudad de México, México</span></li>
              <li className="flex items-center"><span className="mr-3 text-purple-600 text-2xl">🕒</span> <span>Lunes a Viernes: 9:00 - 18:00</span></li>
            </ul>
            <div className="mt-8">
              <h4 className="text-xl font-serif font-semibold mb-4 text-purple-800">Síguenos</h4>
              <div className="flex space-x-4">
                {/* Placeholder links */}
                <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118c-2.136 0-3.864 1.728-3.864 3.864s1.728 3.864 3.864 3.864 3.864-1.728 3.864-3.864-1.728-3.864-3.864-3.864zM12 14.162c-1.203 0-2.179-.976-2.179-2.179s.976-2.179 2.179-2.179 2.179.976 2.179 2.179-.976 2.179-2.179 2.179zM16.882 6.462a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" /></svg></a>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.012 2C6.484 2 2 6.484 2 12s4.484 10 10.012 10C17.54 22 22 17.516 22 12S17.54 2 12.012 2zM8.94 17.484H6.625V8.89h2.314v8.594zM7.78 7.812a1.18 1.18 0 01-1.18-1.179c0-.65.53-1.18 1.18-1.18.65 0 1.179.53 1.179 1.18 0 .65-.53 1.18-1.18 1.18zm9.58 9.672h-2.31v-4.23c0-1.008-.02-2.304-1.404-2.304-1.404 0-1.62.1-1.62 2.23v4.303H9.71V8.89h2.215v1.012h.03c.308-.582 1.06-1.195 2.183-1.195 2.336 0 2.766 1.539 2.766 3.543v4.234z" /></svg></a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-96 lg:h-auto rounded-lg shadow-lg overflow-hidden">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.527011977937!2d-99.133208!3d19.432608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f94e1a3b5a93%3A0x2a2e3797964c48a!2sZ%C3%B3calo!5e0!3m2!1sen!2smx!4v1628795554321!5m2!1sen!2smx" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Ubicación de la oficina">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
