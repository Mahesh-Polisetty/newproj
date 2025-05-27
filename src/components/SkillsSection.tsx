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
        { name: "Python", icon: <SiPython className="text-5xl md:text-6xl hover:text-[#3776AB]" /> },
        { name: "Java", icon: <DiJava className="text-5xl md:text-6xl hover:text-[#007396]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-5xl md:text-6xl hover:text-[#F7DF1E]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-5xl md:text-6xl hover:text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-5xl md:text-6xl hover:text-[#1572B6]" /> },
        { name: "SQL", icon: <FaDatabase className="text-5xl md:text-6xl hover:text-[#336791]" /> }
      ]
    },
    {
      category: "Frameworks & CSS",
      items: [
        { name: "Spring", icon: <SiSpring className="text-5xl md:text-6xl hover:text-[#6DB33F]" /> },
        { name: "Django", icon: <SiDjango className="text-5xl md:text-6xl hover:text-[#092E20]" /> },
        { name: "Flask", icon: <SiFlask className="text-5xl md:text-6xl hover:text-[#000000]" /> },
        { name: "React", icon: <SiReact className="text-5xl md:text-6xl hover:text-[#61DAFB]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-5xl md:text-6xl hover:text-[#339933]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-5xl md:text-6xl hover:text-[#06B6D4]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-5xl md:text-6xl hover:text-[#7952B3]" /> }
      ]
    },
    {
      category: "ML & Data",
      items: [
        { name: "TensorFlow", icon: <SiTensorflow className="text-5xl md:text-6xl hover:text-[#FF6F00]" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-5xl md:text-6xl hover:text-[#F7931E]" /> },
        { name: "Pandas", icon: <SiPandas className="text-5xl md:text-6xl hover:text-[#150458]" /> },
        { name: "Tableau", icon: <SiTableau className="text-5xl md:text-6xl hover:text-[#E97627]" /> }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <SiGit className="text-5xl md:text-6xl hover:text-[#F05032]" /> },
        { name: "Jenkins", icon: <SiJenkins className="text-5xl md:text-6xl hover:text-[#D24939]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-5xl md:text-6xl hover:text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-5xl md:text-6xl hover:text-[#4169E1]" /> },
        { name: "Linux", icon: <SiLinux className="text-5xl md:text-6xl hover:text-[#FCC624]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-teal-500">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
            Technologies I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          {skills.map((section, index) => (
            <div key={index} className="relative">
              <div className="sticky top-24">
                <h3 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 text-center">
                  {section.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  {section.items.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group relative flex flex-col items-center"
                    >
                      <div 
                        className="transform transition-all duration-500 ease-in-out p-4
                          text-gray-400 filter saturate-0 hover:saturate-100 rounded-xl
                          hover:scale-110 hover:rotate-3 hover:bg-gray-800/50 backdrop-blur-sm
                          hover:shadow-lg hover:shadow-teal-500/10 group-hover:border-teal-500/50"
                      >
                        {skill.icon}
                      </div>
                      <span 
                        className="mt-3 text-sm font-medium text-gray-500 group-hover:text-teal-400
                          transition-all duration-300 absolute -bottom-6 left-1/2 transform -translate-x-1/2
                          opacity-0 group-hover:opacity-100 whitespace-nowrap"
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