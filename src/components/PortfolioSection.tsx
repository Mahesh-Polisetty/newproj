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

type Category = 'all' | 'ml-dl' | 'full-stack' | 'data-analysis';

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "MediCall",
      category: "full-stack",
      image: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg",
      description: "AI-powered healthcare assistant using LLM for natural voice conversations. Features real-time appointment scheduling, speech-to-text processing, and seamless hospital system integration.",
      technologies: ["React", "Node.js", "LLM", "Speech AI", "Supabase"],
      demoLink: "https://vapiiiii.netlify.app/",
      codeLink: "https://github.com/Mahesh-Polisetty/medicall"
    },
    {
      id: 2,
      title: "LeafCare",
      category: "ml-dl",
      image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg",
      description: "Deep learning-powered plant disease detection system achieving high accuracy using CNN architecture. Processes leaf images to identify diseases across multiple plant species.",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Deep Learning"],
      demoLink: "",
      codeLink: "https://github.com/Mahesh-Polisetty/LeafCare-CNN_Based-Plant-Disease-Detection"
    },
    {
      id: 3,
      title: "Medical Text Analyzer",
      category: "ml-dl",
      image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
      description: "NLP-powered medical document analyzer deployed on Hugging Face. Extracts key medical information, identifies conditions, and processes healthcare documents efficiently.",
      technologies: ["Python", "NLP", "Machine Learning", "Text Analysis"],
      demoLink: "https://huggingface.co/spaces/KOTI614/Medical_text_Analyser",
      codeLink: "https://github.com/Mahesh-Polisetty/Medical_Text_Analyzer"
    },
    {
      id: 4,
      title: "EcoCast",
      category: "ml-dl",
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
      description: "Advanced economic forecasting system combining Random Forest and ARIMA models. Analyzes multiple economic indicators to predict GDP trends with high accuracy.",
      technologies: ["Python", "Random Forest", "ARIMA", "Scikit-learn", "Pandas"],
      demoLink: "",
      codeLink: "https://github.com/Mahesh-Polisetty/EcoCast-ML-ARIMA-Based-GDP-Forecasting"
    },
    {
      id: 5,
      title: "CinematicTrends",
      category: "data-analysis",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg",
      description: "Comprehensive analysis of global box office trends using advanced data analytics and Tableau visualizations. Provides insights into genre performance and market trends.",
      technologies: ["Python", "Pandas", "Tableau", "Data Analysis", "Visualization"],
      demoLink: "",
      codeLink: "https://github.com/Mahesh-Polisetty/CinematicTrends-Global-Box-Office-Genre-Insights"
    },
    {
      id: 6,
      title: "SmogSense",
      category: "data-analysis",
      image: "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg",
      description: "Data-driven air quality analysis platform for India. Features pollution forecasting, trend analysis, and comprehensive environmental insights using time-series analysis.",
      technologies: ["Python", "Data Analysis", "Forecasting", "Visualization"],
      demoLink: "",
      codeLink: "https://github.com/Mahesh-Polisetty/SmogSense-Air-Pollution-Analysis-Forecasting-in-India"
    },
    {
      id: 7,
      title: "Traffic Flow Prediction",
      category: "ml-dl",
      image: "https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg",
      description: "Machine learning system for real-time traffic prediction. Uses historical patterns and real-time data to forecast congestion and optimize traffic flow.",
      technologies: ["Python", "Machine Learning", "Prediction Models", "Data Analysis"],
      demoLink: "",
      codeLink: "https://github.com/Mahesh-Polisetty/Traffic-Flow-Prediction"
    },
    {
      id: 8,
      title: "Gaming Leaderboard",
      category: "full-stack",
      image: "https://images.pexels.com/photos/7862657/pexels-photo-7862657.jpeg",
      description: "Real-time gaming leaderboard platform with user authentication, live score tracking, and instant rankings. Features responsive design and efficient database management.",
      technologies: ["Database", "Backend", "Frontend", "Real-time Updates"],
      demoLink: "",
      codeLink: "https://github.com/Mahesh-Polisetty/GamingLeaderboard_Db"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'ml-dl', label: 'ML/DL' },
    { value: 'full-stack', label: 'Full Stack' },
    { value: 'data-analysis', label: 'Data Analysis' }
  ];

  return (
    <section id="portfolio" className="py-32 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-teal-400">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Explore my recent projects and see how I've helped clients achieve their goals with beautiful, 
            functional web solutions.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-16">
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
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
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