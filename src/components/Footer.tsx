import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              <span className="text-teal-400">R</span>IEAD
            </a>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            {['home', 'about', 'skills', 'services', 'portfolio', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="capitalize text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="text-gray-400 text-sm flex items-center">
            &copy; {new Date().getFullYear()} MD RIEAD MIA. Made with 
            <Heart size={14} className="text-red-500 mx-1" fill="currentColor" />
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;