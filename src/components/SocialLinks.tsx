import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after about section starts and hide at contact section
      const aboutSection = document.getElementById('about');
      const contactSection = document.getElementById('contact');
      
      if (aboutSection && contactSection) {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const aboutStart = aboutSection.offsetTop;
        const contactStart = contactSection.offsetTop;

        setIsVisible(scrollPosition >= aboutStart && scrollPosition < contactStart);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSocialClick = (url: string, isEmail: boolean = false) => {
    if (isEmail) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="hidden md:flex flex-col fixed left-8 top-1/2 transform -translate-y-1/2 space-y-8 animate-fadeIn z-50">
      <a 
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-4 cursor-pointer"
        aria-label="Resume"
      >
        <div className="p-4 rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-400 group-hover:text-teal-500 group-hover:bg-gray-700/80 transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-teal-500/20">
          <Download size={28} />
        </div>
        <div className="absolute left-20 bg-gray-800 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          <span className="block text-teal-500 text-sm font-medium mb-1">Resume</span>
          <span className="block text-gray-400 text-xs">Download PDF</span>
        </div>
      </a>
      <a 
        href="https://www.linkedin.com/in/mahesh-polisetty-aa7a41146/"
        onClick={(e) => {
          e.preventDefault();
          handleSocialClick('https://www.linkedin.com/in/mahesh-polisetty-aa7a41146/');
        }}
        className="group relative flex items-center gap-4 cursor-pointer"
        aria-label="LinkedIn"
      >
        <div className="p-4 rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-400 group-hover:text-[#0A66C2] group-hover:bg-gray-700/80 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
          <Linkedin size={28} />
        </div>
        <div className="absolute left-20 bg-gray-800 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          <span className="block text-[#0A66C2] text-sm font-medium mb-1">LinkedIn</span>
          <span className="block text-gray-400 text-xs">@mahesh-polisetty</span>
        </div>
      </a>
      <a 
        href="mailto:pmbhupathibalu@gmail.com"
        onClick={(e) => {
          e.preventDefault();
          handleSocialClick('mailto:pmbhupathibalu@gmail.com', true);
        }}
        className="group relative flex items-center gap-4 cursor-pointer"
        aria-label="Email"
      >
        <div className="p-4 rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-400 group-hover:text-red-500 group-hover:bg-gray-700/80 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
          <Mail size={28} />
        </div>
        <div className="absolute left-20 bg-gray-800 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          <span className="block text-red-500 text-sm font-medium mb-1">Email</span>
          <span className="block text-gray-400 text-xs">pmbhupathibalu@gmail.com</span>
        </div>
      </a>
      <a 
        href="https://github.com/Mahesh-Polisetty"
        onClick={(e) => {
          e.preventDefault();
          handleSocialClick('https://github.com/Mahesh-Polisetty');
        }}
        className="group relative flex items-center gap-4 cursor-pointer"
        aria-label="GitHub"
      >
        <div className="p-4 rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-400 group-hover:text-white group-hover:bg-gray-700/80 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
          <Github size={28} />
        </div>
        <div className="absolute left-20 bg-gray-800 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          <span className="block text-white text-sm font-medium mb-1">GitHub</span>
          <span className="block text-gray-400 text-xs">@Mahesh-Polisetty</span>
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;
