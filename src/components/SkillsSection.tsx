import React from 'react';
import { 
  SiPython, SiJavascript, SiSpring, SiDjango, SiFlask, 
  SiReact, SiNodedotjs, SiTensorflow, SiScikitlearn, SiPandas, 
  SiTableau, SiGit, SiJenkins, SiMongodb, SiPostgresql, 
  SiLinux, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { FaDatabase } from 'react-icons/fa';

const SkillsSection: React.FC = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Python", icon: <SiPython className="text-4xl hover:text-[#3776AB]" /> },
        { name: "Java", icon: <DiJava className="text-4xl hover:text-[#007396]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-4xl hover:text-[#F7DF1E]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-4xl hover:text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-4xl hover:text-[#1572B6]" /> },
        { name: "SQL", icon: <FaDatabase className="text-4xl hover:text-[#336791]" /> }
      ]
    },
    {
      category: "Frameworks & CSS",
      items: [
        { name: "Spring", icon: <SiSpring className="text-4xl hover:text-[#6DB33F]" /> },
        { name: "Django", icon: <SiDjango className="text-4xl hover:text-[#092E20]" /> },
        { name: "Flask", icon: <SiFlask className="text-4xl hover:text-[#000000]" /> },
        { name: "React", icon: <SiReact className="text-4xl hover:text-[#61DAFB]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-4xl hover:text-[#339933]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-4xl hover:text-[#06B6D4]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-4xl hover:text-[#7952B3]" /> }
      ]
    },
    {
      category: "ML & Data",
      items: [
        { name: "TensorFlow", icon: <SiTensorflow className="text-4xl hover:text-[#FF6F00]" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-4xl hover:text-[#F7931E]" /> },
        { name: "Pandas", icon: <SiPandas className="text-4xl hover:text-[#150458]" /> },
        { name: "Tableau", icon: <SiTableau className="text-4xl hover:text-[#E97627]" /> }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <SiGit className="text-4xl hover:text-[#F05032]" /> },
        { name: "Jenkins", icon: <SiJenkins className="text-4xl hover:text-[#D24939]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-4xl hover:text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl hover:text-[#4169E1]" /> },
        { name: "Linux", icon: <SiLinux className="text-4xl hover:text-[#FCC624]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical <span className="text-teal-400">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {skills.map((section, index) => (
            <div key={index} className="relative">
              <div className="sticky top-24">
                <h3 className="text-2xl font-semibold mb-8 text-gray-300 text-center">
                  {section.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  {section.items.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group relative flex flex-col items-center"
                    >
                      <div 
                        className="transform transition-all duration-500 ease-in-out
                          text-gray-400 filter saturate-0 hover:saturate-100
                          hover:scale-110 hover:rotate-3"
                      >
                        {skill.icon}
                      </div>
                      <span 
                        className="mt-3 text-sm font-medium text-gray-500 group-hover:text-gray-300
                          transition-colors duration-300"
                      >
                        {skill.name}
                      </span>
                    </div>
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

export default SkillsSection;