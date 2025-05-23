import React from 'react';
import { Code, Database, Layout, Palette } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-teal-400" />,
      skills: [
        { name: "HTML", proficiency: 95 },
        { name: "CSS/SCSS", proficiency: 90 },
        { name: "JavaScript", proficiency: 85 },
        { name: "React", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "Node.js", proficiency: 75 },
        { name: "Express", proficiency: 70 },
        { name: "MongoDB", proficiency: 65 },
        { name: "REST API", proficiency: 80 }
      ]
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      skills: [
        { name: "Figma", proficiency: 85 },
        { name: "Photoshop", proficiency: 75 },
        { name: "UI/UX", proficiency: 80 }
      ]
    },
    {
      title: "Other Skills",
      icon: <Code className="w-6 h-6 text-amber-400" />,
      skills: [
        { name: "Git", proficiency: 85 },
        { name: "Responsive Design", proficiency: 95 },
        { name: "Performance Optimization", proficiency: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-teal-400">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            I've developed a diverse skill set over the years. Here's an overview of my technical expertise
            and proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gray-800 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;