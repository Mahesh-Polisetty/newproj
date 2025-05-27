import React from 'react';
import { Database, Layout, Cog, FileCode } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FileCode className="w-12 h-12 text-teal-400" />,
      title: 'Enterprise API Development',
      description: 'Designing and implementing secure enterprise APIs for healthcare systems',
      experience: 'CGI Inc. - CIGNA | Associate Software Engineer | May 2022 - June 2023',
      highlights: [
        'Bank information validation API with JEXL & JavaScript',
        'Email/phone verification system with domain & spam protection',
        'RESTful services using Spring Boot & Microservices'
      ]
    },
    {
      icon: <Layout className="w-12 h-12 text-teal-400" />,
      title: 'Full Stack Development',
      description: 'Building responsive web applications with modern frameworks',
      experience: 'CGI Inc. - CIGNA | Associate Software Engineer | May 2022 - June 2023',
      highlights: [
        'Single page applications with dynamic views',
        'Cross-browser responsive design for mobile/tablet',
        'JSP, JavaScript, jQuery, and CSS implementation'
      ]
    },
    {
      icon: <Database className="w-12 h-12 text-teal-400" />,
      title: 'Database & Application Development',
      description: 'Developing applications and managing databases for enterprise systems',
      experience: 'CGI Inc. | Software Engineer Intern | April 2021 - May 2022',
      highlights: [
        'Java & Spring Boot application development',
        'SQL & MongoDB database management',
        'Web application development with HTML/CSS/JS'
      ]
    },
    {
      icon: <Cog className="w-12 h-12 text-teal-400" />,
      title: 'DevOps & Testing',
      description: 'Implementing testing strategies and deployment workflows',
      experience: 'CGI Inc. - CIGNA | Associate Software Engineer | May 2022 - June 2023',
      highlights: [
        'BDD testing with Cucumber, Gherkin & Kotlin',
        'UI Automation with Selenium WebDriver',
        'CI/CD pipeline management with Jenkins/UDeploy'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-teal-500">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-4 font-bold">
            Over 2 years of experience in healthcare software development at CGI-CIGNA, specializing in enterprise applications and API development
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            <span className="text-teal-400 font-semibold">Experienced in Agile methodologies</span> and adept at working through all stages of the <span className="text-teal-400 font-semibold">Software Development Life Cycle (SDLC)</span>, from conceptualization and design to development, testing, and deployment.
          </p>
          <div className="mb-12 text-center">
            <p className="text-gray-400 text-lg mb-4 font-bold">Previously worked at</p>
            <div className="flex justify-center items-center">
              <img 
                src="/CGI_Inc.png" 
                alt="CGI Inc. Logo" 
                className="h-20 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gray-700 rounded-lg mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{service.description}</p>
              
              <div className="bg-gray-900/50 rounded-lg p-5">
                <p className="text-teal-400 font-semibold mb-4 text-lg">{service.experience}</p>
                <ul className="space-y-3">
                  {service.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-400 flex items-start text-base">
                      <span className="mr-3 text-teal-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ServicesSection;