import React from 'react';
import { Download, Github, Linkedin, Mail, Facebook } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0">
          <h2 className="text-lg md:text-xl font-medium text-teal-400 animate-fadeIn">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slideUp">
            MD RIEAD MIA
          </h1>
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-xl text-gray-300">And I'm a </p>
            <div className="ml-2 text-xl font-semibold text-teal-400 animate-typewriter">
              Frontend Developer
            </div>
          </div>
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 animate-fadeIn delay-300">
            I'm a professional web developer with strong skills in HTML, CSS, JavaScript, Tailwind, and JQuery. 
            I have been working in this field for almost 3 years and have completed all projects successfully 
            with 100% client satisfaction.
          </p>
          
          <div className="flex space-x-5 justify-center md:justify-start animate-fadeIn delay-500">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start mt-4 animate-fadeIn delay-700">
            <a
              href="#"
              className="flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
            <a
              href="#portfolio"
              className="flex items-center justify-center space-x-2 bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <span>View Portfolio</span>
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative animate-fadeIn delay-200">
          <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-teal-400 rounded-full opacity-20 animate-blob"></div>
            <div className="absolute top-0 -left-4 w-full h-full bg-teal-500 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-500 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
            
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full overflow-hidden w-full h-full border-4 border-gray-700 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Riead Mia" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="rgb(17, 24, 39)" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;