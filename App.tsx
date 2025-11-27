import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CatalogPage from './pages/CatalogPage';

function App() {
  const path = window.location.pathname;
  
  if (path === '/catalog') {
    return <CatalogPage />;
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Brands />
        <Products />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;