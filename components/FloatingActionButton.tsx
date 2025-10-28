
import React from 'react';

const FloatingActionButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <a 
            href="https://wa.me/521234567890" // Replace with actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
            aria-label="Chat on WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.356 1.905 6.101l-1.217 4.445 4.564-1.195z" />
            </svg>
        </a>
        <a 
            href="#quote"
            className="bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-purple-800 transition-transform transform hover:scale-105"
        >
            Agenda tu cita
        </a>
    </div>
  );
};

export default FloatingActionButton;
