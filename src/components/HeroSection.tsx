import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';

const HeroSection: React.FC = () => {
  const handleSocialClick = (url: string, isEmail: boolean = false) => {
    if (isEmail) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

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
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden flex items-center"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-16">
          <div className="w-full lg:w-3/5 space-y-10 text-center lg:text-left relative">
            {/* Decorative elements */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 -right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>



            {/* Mobile Social Icons */}
            <div className="flex md:hidden justify-center space-x-8">
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="p-4 rounded-full bg-gray-800 text-gray-400 hover:text-teal-500 hover:bg-gray-700 transition-all duration-300 mb-2 shadow-lg">
                  <Download size={28} />
                </div>
                <span className="text-gray-400 text-sm font-medium">Resume</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/mahesh-polisetty-aa7a41146/"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick('https://www.linkedin.com/in/mahesh-polisetty-aa7a41146/');
                }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="p-4 rounded-full bg-gray-800 text-gray-400 hover:text-[#0A66C2] hover:bg-gray-700 transition-all duration-300 mb-2 shadow-lg">
                  <Linkedin size={28} />
                </div>
                <span className="text-gray-400 text-sm font-medium">LinkedIn</span>
              </a>
              <a 
                href="mailto:pmbhupathibalu@gmail.com"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick('mailto:pmbhupathibalu@gmail.com', true);
                }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="p-4 rounded-full bg-gray-800 text-gray-400 hover:text-red-500 hover:bg-gray-700 transition-all duration-300 mb-2 shadow-lg">
                  <Mail size={28} />
                </div>
                <span className="text-gray-400 text-sm font-medium">Email</span>
              </a>
              <a 
                href="https://github.com/Mahesh-Polisetty"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick('https://github.com/Mahesh-Polisetty');
                }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="p-4 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 mb-2 shadow-lg">
                  <Github size={28} />
                </div>
                <span className="text-gray-400 text-sm font-medium">GitHub</span>
              </a>
            </div>

            {/* Main Content */}
            <div className="space-y-8 animate-fadeInUp backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl border border-gray-800/50">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-gray-300 font-medium">Available for opportunities</span>
              </div>

              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  Mahesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Polisetty</span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-2xl text-gray-300">
                  <span className="font-light">I'm a</span>
                  <span className="font-semibold text-teal-400">{currentTitle}</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 mt-8">
                <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="https://www.linkedin.com/in/mahesh-polisetty-aa7a41146/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick('https://www.linkedin.com/in/mahesh-polisetty-aa7a41146/');
                  }}
                  className="group flex items-center gap-3 px-5 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-[#0A66C2]/50 transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <div className="p-2 rounded-lg bg-gray-700/50 text-[#0A66C2] group-hover:bg-[#0A66C2]/10 transition-colors duration-300">
                    <Linkedin size={20} />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-[#0A66C2] transition-colors duration-300">LinkedIn</span>
                </a>

                <a 
                  href="https://github.com/Mahesh-Polisetty"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick('https://github.com/Mahesh-Polisetty');
                  }}
                  className="group flex items-center gap-3 px-5 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-white/50 transition-all duration-300 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <div className="p-2 rounded-lg bg-gray-700/50 text-white group-hover:bg-white/10 transition-colors duration-300">
                    <Github size={20} />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">GitHub</span>
                </a>

                <a 
                  href="mailto:pmbhupathibalu@gmail.com"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick('mailto:pmbhupathibalu@gmail.com', true);
                  }}
                  className="group flex items-center gap-3 px-5 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Email"
                >
                  <div className="p-2 rounded-lg bg-gray-700/50 text-red-500 group-hover:bg-red-500/10 transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-red-500 transition-colors duration-300">Email</span>
                </a>
                </div>

                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-teal-500/50 hover:border-teal-400 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  aria-label="Download Resume"
                >
                  <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400 group-hover:bg-teal-500/30 transition-colors duration-300">
                    <Download size={20} />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-teal-400 transition-colors duration-300">Hire Me</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Image with Effects */}
          <div className="w-full lg:w-2/5 relative animate-fadeIn animation-delay-700">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] mx-auto">
              {/* Background Effects */}
              <div className="absolute inset-4 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-xl"></div>
              
              {/* Gradient orbs */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-1/2 -right-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-10 left-1/2 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/60 z-10"></div>
                <img 
                  src="/my2.jpg" 
                  alt="Mahesh Polisetty"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 brightness-125 contrast-125 saturate-125"
                />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 opacity-30 blur-2xl animate-pulse -z-10"></div>
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