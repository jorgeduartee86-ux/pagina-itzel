
import React from 'react';
import { navLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-purple-100">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <a href="#home" className="font-serif text-3xl font-bold text-white mb-2 inline-block">
              Itzel García Events
            </a>
            <p className="italic text-purple-200">“Diseñamos emociones, no solo eventos.”</p>
          </div>
          <nav className="flex flex-wrap justify-center space-x-6 mb-8 md:mb-0">
            {navLinks.slice(0,5).map((link) => (
              <a key={link.name} href={link.href} className="hover:text-amber-300 transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-purple-700 pt-6 text-center text-purple-300">
          <p>&copy; {new Date().getFullYear()} Itzel García Events. Todos los derechos reservados.</p>
          <p className="text-sm mt-1">
            <a href="#privacy" className="hover:text-amber-300 transition-colors">Política de Privacidad</a> | <a href="#legal" className="hover:text-amber-300 transition-colors">Aviso Legal</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
