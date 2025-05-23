import React from 'react';
import { Award, BookOpen, Coffee } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: <Award size={24} />, count: '3+', label: 'Years Experience' },
    { icon: <BookOpen size={24} />, count: '50+', label: 'Projects Completed' },
    { icon: <Coffee size={24} />, count: '100+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-5/12 animate-fadeIn">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 opacity-30 blur"></div>
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Riead Mia working" 
                className="relative rounded-lg w-full h-auto object-cover z-10"
              />
            </div>
          </div>
          
          <div className="w-full md:w-7/12 animate-slideRight">
            <h3 className="text-2xl font-bold text-white mb-4">
              Frontend Developer & UI/UX Designer
            </h3>
            <p className="text-gray-400 mb-6">
              I'm a passionate frontend developer with expertise in creating visually appealing, responsive websites
              and web applications. With a strong foundation in modern web technologies and an eye for design,
              I strive to deliver high-quality, user-friendly digital experiences.
            </p>
            <p className="text-gray-400 mb-6">
              My journey in web development began 3 years ago, and since then, I've collaborated with various
              clients, ranging from small businesses to large corporations. I believe in writing clean, maintainable
              code and staying updated with the latest industry trends and best practices.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="text-teal-400 mb-2">{stat.icon}</div>
                  <h4 className="text-2xl font-bold text-white">{stat.count}</h4>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Name:</h4>
                <p className="text-gray-400">MD RIEAD MIA</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Email:</h4>
                <p className="text-gray-400">contact@example.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">From:</h4>
                <p className="text-gray-400">Bangladesh</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Freelance:</h4>
                <p className="text-teal-400">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;