import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, 'home')}
            className="text-2xl font-bold text-white"
          >
            <span className="text-teal-400">R</span>IEAD
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'services', 'portfolio', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleLinkClick(e, item)}
                className="capitalize text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 mt-4 py-4 px-2 rounded-lg shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'skills', 'services', 'portfolio', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleLinkClick(e, item)}
                  className="capitalize text-gray-300 hover:text-teal-400 transition-colors duration-300 px-4 py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;