import React from 'react';
import { 
  Code, 
  Layout, 
  Smartphone, 
  Globe, 
  Search, 
  RefreshCw 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Layout />,
      title: "Web Development",
      description: "Creating responsive, modern websites with clean code and optimal performance."
    },
    {
      icon: <Code />,
      title: "Frontend Development",
      description: "Building interactive user interfaces with the latest frontend technologies."
    },
    {
      icon: <Smartphone />,
      title: "Responsive Design",
      description: "Ensuring your website looks and functions perfectly on all devices and screen sizes."
    },
    {
      icon: <Globe />,
      title: "Website Maintenance",
      description: "Keeping your website up-to-date, secure, and running smoothly with regular updates."
    },
    {
      icon: <Search />,
      title: "SEO Optimization",
      description: "Implementing best practices to improve your website's search engine rankings."
    },
    {
      icon: <RefreshCw />,
      title: "Website Redesign",
      description: "Transforming outdated websites into modern, user-friendly digital experiences."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-teal-400">Services</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            I offer a range of services to help businesses and individuals establish a strong online presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 group animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-teal-500/10 text-teal-500 rounded-lg flex items-center justify-center mb-5 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;