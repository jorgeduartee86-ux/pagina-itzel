
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default App;
