import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';

const HeroSection: React.FC = () => {
  const titles = [
    'Full-Stack Innovator',
    'Research Driven Engineer',
    'Machine Learning Enthusiast',
    'AI Orchestrator',
    'Visual Story Teller',
    'Weekend Photographer',
    'Culture Driven Coder'
  ];

  const currentTitle = useTypewriter(titles, 100, 50, 2000);

  return (
    <section 
      id="home" 
      className="min-h-[85vh] pt-20 pb-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-12">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0">
          <h2 className="text-lg md:text-xl font-medium text-teal-400 animate-fadeIn">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slideUp">
            Mahesh Polisetty
          </h1>
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-xl text-gray-300">And I'm a </p>
            <div className="ml-2 text-xl font-semibold text-teal-400 border-r-2 border-teal-400 pr-1">
              {currentTitle}
            </div>
          </div>
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 animate-fadeIn delay-300 text-lg leading-relaxed">
            I'm a passionate software engineer specializing in AI/ML and full-stack development. With a Master's in Data Engineering 
            from UNT, I combine cutting-edge AI technologies with robust web development to create innovative solutions that make a real impact.
          </p>
          
          <div className="flex space-x-6 justify-center md:justify-start animate-fadeIn delay-500 mt-2">
            <a 
              href="https://www.linkedin.com/in/mahesh-polisetty-aa7a41146/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:pmbhupathibalu@gmail.com" 
              className="text-gray-400 hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com/Mahesh-Polisetty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start mt-8 animate-fadeIn delay-700">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-teal-500 hover:bg-teal-600 text-white font-medium py-3.5 px-7 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
            <a
              href="#portfolio"
              className="flex items-center justify-center space-x-3 bg-transparent border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-medium py-3.5 px-7 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <span>View Portfolio</span>
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative animate-fadeIn delay-200">
          <div className="relative mx-auto w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
            <div className="absolute inset-0 bg-teal-400 rounded-full opacity-20 animate-blob"></div>
            <div className="absolute top-0 -left-4 w-full h-full bg-teal-500 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-500 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
            
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full overflow-hidden w-full h-full border-4 border-gray-700 shadow-2xl">
              <img 
                src="/my2.jpg" 
                alt="Mahesh Polisetty" 
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