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
        <div className="relative flex items-center justify-center py-2">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden absolute left-0 text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'services', 'portfolio', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleLinkClick(e, item)}
                className="capitalize text-gray-300 hover:text-teal-400 transition-colors duration-300 text-lg font-medium tracking-wide hover:scale-105 transform"
              >
                {item === 'services' ? 'Experience' : item === 'portfolio' ? 'Projects' : item}
              </a>
            ))}
          </div>
          

        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm mt-4 py-4 px-2 rounded-lg shadow-xl animate-fadeIn border border-gray-700/50">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'skills', 'services', 'portfolio', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleLinkClick(e, item)}
                  className="capitalize text-gray-300 hover:text-teal-400 transition-colors duration-300 px-4 py-3 text-lg font-medium hover:bg-gray-700/50 rounded-md"
                >
                  {item === 'services' ? 'Experience' : item === 'portfolio' ? 'Projects' : item}
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