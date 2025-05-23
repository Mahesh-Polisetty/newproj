import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
};

type Category = 'all' | 'web' | 'app' | 'design';

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A fully responsive e-commerce platform with product listings, cart, and checkout functionality.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Restaurant App",
      category: "app",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A mobile application for food ordering and restaurant reservations.",
      technologies: ["React Native", "Firebase", "Redux"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A personal portfolio website for a graphic designer showcasing their work.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      category: "design",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A UI/UX design for a social media analytics dashboard.",
      technologies: ["Figma", "Illustrator"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 5,
      title: "Weather App",
      category: "app",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A weather forecasting application with location-based services.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "web",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A corporate website for a financial consulting firm.",
      technologies: ["WordPress", "PHP", "JavaScript", "SCSS"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web' },
    { value: 'app', label: 'App' },
    { value: 'design', label: 'Design' }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-teal-400">Portfolio</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Explore my recent projects and see how I've helped clients achieve their goals with beautiful, 
            functional web solutions.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-700/50 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-teal-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
                      title="View Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;