import React, { useState } from 'react';
import { Award, BookOpen, Coffee, GraduationCap, Trophy } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'education' | 'achievements'>('about');

  const stats = [
    { icon: <Award size={24} />, count: '2.5+', label: 'Years Experience' },
    { icon: <BookOpen size={24} />, count: '8+', label: 'Academic Projects' },
    { icon: <Trophy size={24} />, count: '3.8', label: 'GPA' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-teal-500">Me</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center md:items-start justify-center">
          {/* Profile Image - Always Visible */}
          <div className="md:w-2/5 md:pl-4">
            <div className="sticky top-28">
              <div className="relative group max-w-[400px] mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/main.jpg"
                    alt="Profile"
                    className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 md:pr-4">
            {/* Navigation Tabs */}
            <div className="flex justify-start mb-8 space-x-4">
              {[
                { id: 'about', label: 'About Me', icon: <Coffee className="w-5 h-5" /> },
                { id: 'education', label: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
                { id: 'achievements', label: 'Achievements', icon: <Trophy className="w-5 h-5" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'bg-teal-500 text-white'
                      : 'text-gray-400 hover:text-teal-400'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content Sections */}
            <div className="max-w-4xl mx-auto">
          {/* About Section */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer & AI Engineer</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  I'm a Full-Stack Developer and AI Engineer with a Master's degree in Data Engineering from the University of North Texas 
                  and 2.5 years of industry experience as a Software Engineer. I bring end-to-end proficiency across the Software Development 
                  Life Cycle (SDLC), with strengths in Java full-stack development, responsive web design, and test automation.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Recognized as the Outstanding Graduate Student of the Year 2024–25 by the UNT Computer Science Department, I blend academic 
                  excellence with real-world impact. My projects span cutting-edge domains—from MediCall, an award-winning AI healthcare voice 
                  assistant built with large language models and speech tech, to LeafCare, a CNN-based plant disease detection system, and 
                  EcoCast, a data-driven GDP forecasting tool using Random Forest and ARIMA models.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  My technical specialties include AI/ML, full-stack development, and data engineering. I have a strong foundation in computer 
                  vision, natural language processing, and advanced AI research. With a 3.8 GPA and a passion for innovation, I strive to create 
                  accessible, scalable, and meaningful tech solutions that drive real-world change.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-center group"
                  >
                    <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-teal-500/10 text-teal-500 mb-4 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.count}</div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Education Section */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gray-800">
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src="/university-of-north-texas-logo-png_seeklogo-479554.png"
                    alt="UNT Logo"
                    className="w-24 h-24 object-contain"
                  />
                  <div>
                    <h4 className="text-2xl font-bold text-white">Master of Science in Computer Science</h4>
                    <p className="text-teal-400 text-xl font-semibold">University of North Texas (August 2023 - May 2025)</p>
                  </div>
                </div>
                <p className="text-gray-400 mt-4">GPA: 3.8/4.0</p>
                <div className="mt-4">
                  <h5 className="text-lg font-semibold text-white mb-2">Key Coursework:</h5>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Advanced Artificial Intelligence</li>
                    <li>Software Engineering</li>
                    <li>Machine Learning</li>
                    <li>Deep Learning Neural Networks</li>
                    <li>Computer Vision</li>
                    <li>Natural Language Processing</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-white mb-2">Research Interests:</h5>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Large Language Models</li>
                    <li>Computer Vision Applications</li>
                    <li>Neural Network Architectures</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Achievements Section */}
          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gray-800">
                <h4 className="text-2xl font-bold text-white mb-4">Academic Achievements</h4>
                <ul className="space-y-6">
                  <li className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                    <div className="flex items-start gap-6">
                      <span className="flex-shrink-0">
                        <img src="/university-of-north-texas-logo-png_seeklogo-479554.png" alt="UNT Logo" className="w-12 h-12 object-contain" />
                      </span>
                      <div>
                        <h5 className="text-2xl text-white font-bold mb-2">Outstanding Graduate Student of the Year</h5>
                        <p className="text-gray-300 mb-2">Academic Year 2024-2025</p>
                        <p className="text-gray-400 mb-3">Awarded by the UNT Department of Computer Science</p>
                        <a 
                          href="https://www.linkedin.com/posts/mahesh-polisetty-aa7a41146_unt-untcse-computerscience-activity-7327830333284896768-j01k?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACNkqN8BxfA0I95mdT3euKN6HCFb6bGCRGU" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-teal-400 hover:text-teal-300"
                        >
                          <span>View Announcement</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                    <div className="flex items-start gap-6">
                      <span className="flex-shrink-0">
                        <img src="/gradinnohack.avif" alt="GradInnoHack Logo" className="w-12 h-12 object-contain rounded-lg" />
                      </span>
                      <div>
                        <h5 className="text-2xl text-white font-bold mb-2">UNTGradInnoHack2025 Winner</h5>
                        <p className="text-gray-300 mb-2">Spring 2025</p>
                        <p className="text-gray-400 mb-3">Won this for the project MediCall - AI Voice Assistant for Healthcare</p>
                        <a 
                          href="https://www.gradinnohack.com/2025winners" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-teal-400 hover:text-teal-300"
                        >
                          <span>View Achievement</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                    <div className="flex items-start gap-6">
                      <span className="flex-shrink-0">
                        <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </span>
                      <div>
                        <h5 className="text-2xl text-white font-bold mb-2">Great Graduate Students List</h5>
                        <p className="text-gray-300 mb-2">Spring 2025</p>
                        <p className="text-gray-400 mb-3">Recognized for outstanding academic achievements</p>
                        <a 
                          href="https://www.linkedin.com/posts/unt-department-of-computer-science-engineering_gradinnohackathon2025-activity-7315827582011166722-JwGX?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACNkqN8BxfA0I95mdT3euKN6HCFb6bGCRGU" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-teal-400 hover:text-teal-300"
                        >
                          <span>View Recognition</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;