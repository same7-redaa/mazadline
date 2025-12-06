import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-4`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
            <img 
                src="/logo.png" 
                alt="MAZAD LINE" 
                className="h-12 md:h-16 w-auto object-contain" 
            />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-700 hover:text-brand-orange font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-brand-orange text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-transform transform hover:scale-105"
          >
            اطلب عرض سعر
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`flex flex-col p-6 space-y-4 transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          {NAV_LINKS.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-gray-700 hover:text-brand-orange font-medium text-lg transition-all duration-300 ${
                isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className={`bg-brand-orange text-center text-white px-6 py-3 font-bold transition-all duration-300 ${
              isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: isOpen ? `${NAV_LINKS.length * 50}ms` : '0ms' }}
            onClick={() => setIsOpen(false)}
          >
            اطلب عرض سعر
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;