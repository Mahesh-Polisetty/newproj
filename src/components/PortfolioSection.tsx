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
    <section id="portfolio" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-teal-500">Projects</span></h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my latest projects showcasing my skills in machine learning, full-stack development, and data analysis.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg shadow-teal-500/25'
                : 'bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-gray-700/80 hover:text-white'
            }`}
          >
            All
          </button>
          {categories.slice(1).map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.value
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg shadow-teal-500/25'
                  : 'bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-gray-700/80 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 border border-gray-700/50">
                <div className="relative aspect-video overflow-hidden">
                  {project.title.toLowerCase().includes('medicall') && (
                    <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-sm font-bold py-1 px-3 rounded-full shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 0 1 .78.375l2.234 2.79a1 1 0 0 0 .654.375l3.162.264a1 1 0 0 1 .553 1.704l-2.393 2.195a1 1 0 0 0-.31.748l.264 3.162a1 1 0 0 1-1.45 1.054L10 13.291l-2.89 1.376a1 1 0 0 1-1.45-1.054l.264-3.162a1 1 0 0 0-.31-.748L3.22 7.508a1 1 0 0 1 .553-1.704l3.162-.264a1 1 0 0 0 .654-.375L9.22 2.375A1 1 0 0 1 10 2z" clipRule="evenodd" />
                      </svg>
                      Winner
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-500 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm text-gray-300 rounded-full text-sm
                      hover:bg-teal-500/20 hover:text-teal-300 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-2 flex items-center gap-2 text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-2 flex items-center gap-2 text-sm"
                  >
                    <Github size={16} />
                    View Code
                  </a>
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