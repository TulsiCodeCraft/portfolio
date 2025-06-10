import React from 'react';
import { Briefcase, Code, Smartphone } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
     {
      id: 1,
      title: "Web Developer",
      company: "Drixx Solutions",
      period: "Dec 2024 - Jan 2025",
      skills: "ReactJS, HTML, CSS, Javascript, Node.js, Express.js, SEO",
      description: "Designed and developed dynamic full-stack websites and applications for multiple clients, ensuring scalable architectures and optimized performance. Collaborated with clients to deliver tailored solutions and created Drixx Solution's portfolio website to showcase their services.",
      websiteLink: "WEBSITE LINK",
      icon: <Smartphone size={20} className="sm:w-6 sm:h-6" />,
      side: "left"
    },
       {
      id: 2,
      title: "Web developer",
      company: "Weld & Metal Fabrication",
      period: "Dec 2025 - Feb 2025",
      skills: "ReactJS, Node.js, Express.js, MongoDB, Three.js, SEO",
      description: "Designed, developed, and deployed the startup’s portfolio website with seamless full-stack functionality. Integrated interactive 3D model previews using Three.js and managed SEO strategies to improve visibility and performance. ",
      websiteLink: "WEBSITE LINK",
      icon: <Briefcase size={20} className="sm:w-6 sm:h-6" />,
      side: "right"
    },
    {
      id: 3,
      title: "FULL STACK DEVELOPER",
      company: "Varcsoft",
      period: "Feb 2025 - May 2025",
      skills: "ReactJS, NextJS, Node.js, Express.js, Prisma, PostgreSQL",
      description: "Built an AI agent using LangChain and LangGraph for enterprise-level NLP and decision-making; also led full-stack development of client projects, including user and admin panels. Developed a broadcasting system with Next.js, PostgreSQL, Prisma, Node.js, and Express, enhancing user experience by turning designs into functional features. ",
      websiteLink: "WEBSITE LINK",
      icon: <Code size={20} className="sm:w-6 sm:h-6" />,
      side: "left"
    },
 
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in-0 slide-in-from-top-4 duration-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent tracking-tight mb-3 sm:mb-4 leading-tight">
            Experience
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light px-4 sm:px-0">
            My professional journey and key achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500 rounded-full"></div>
          
          {/* Mobile Timeline Line - Visible on mobile/tablet only */}
          <div className="lg:hidden absolute left-6 sm:left-8 top-0 w-0.5 h-full bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500 rounded-full"></div>

          {/* Experience Items */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative animate-in fade-in-0 slide-in-from-bottom-8 duration-800"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden w-full pl-16 sm:pl-20">
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-600/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-105 transform">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-tr-2xl sm:rounded-tr-3xl"></div>
                    
                    {/* Period Badge - Mobile */}
                    <div className="mb-4 sm:mb-6">
                      <span className="inline-block bg-gradient-to-r from-gray-800/95 to-gray-900/95 backdrop-blur-sm border border-purple-500/30 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-bold text-purple-300 tracking-wide">
                        {exp.period}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="mb-5 sm:mb-6">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 font-semibold text-base sm:text-lg mb-2">
                        {exp.company}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-5 sm:mb-6">
                      <span className="text-xs sm:text-sm font-bold text-purple-300 mb-2 sm:mb-3 block tracking-wider">SKILLS</span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.skills.split(', ').map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-200 text-xs font-medium rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Mobile Timeline Node */}
                  <div className="absolute left-3 sm:left-5 top-8 sm:top-10 z-20">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 rounded-full border-2 sm:border-4 border-gray-900 flex items-center justify-center text-white shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300 cursor-pointer hover:scale-110 transform">
                      {exp.icon}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Fixed positioning */}
                <div className="hidden lg:flex lg:items-center w-full relative">
                  <div className={`w-full max-w-lg ${
                    exp.side === 'left' 
                      ? 'pr-4 ml-0 mr-auto' 
                      : 'pl-4 ml-auto mr-0'
                  } relative`}>
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-600/40 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-105 hover:-translate-y-2 transform">
                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-tr-3xl"></div>
                      
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 font-semibold text-lg mb-2">
                          {exp.company}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="mb-6">
                        <span className="text-sm font-bold text-purple-300 mb-3 block tracking-wider">SKILLS</span>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.split(', ').map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-purple-500/20 text-purple-200 text-xs font-medium rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-8">
                        {exp.description}
                      </p>

                      {/* Connection Line to Timeline */}
                      <div className={`absolute top-1/2 ${
                        exp.side === 'left' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                      } w-4 h-0.5 bg-gradient-to-r from-purple-500/60 to-transparent transform -translate-y-1/2`}></div>
                    </div>
                  </div>

                  {/* Desktop Timeline Node - Fixed positioning */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 rounded-full border-4 border-gray-900 flex items-center justify-center text-white shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-12 transform">
                      {exp.icon}
                    </div>
                    
                    {/* Period Badge - Desktop */}
                    <div className={`absolute -top-16 ${
                      exp.side === 'left' ? 'left-full ml-3' : 'right-full mr-3'
                    } bg-gradient-to-r from-gray-800/95 to-gray-900/95 backdrop-blur-sm border border-purple-500/30 rounded-xl px-4 py-2 whitespace-nowrap shadow-lg animate-in fade-in-0 scale-in-95 duration-500`}
                    style={{ animationDelay: `${index * 200 + 600}ms` }}>
                      <span className="text-sm font-bold text-purple-300 tracking-wide">
                        {exp.period}
                      </span>
                      {/* Arrow pointing to timeline */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                        exp.side === 'left' ? 'left-0 -translate-x-full' : 'right-0 translate-x-full'
                      }`}>
                        <div className={`w-0 h-0 border-t-4 border-b-4 border-transparent ${
                          exp.side === 'left' ? 'border-r-4 border-r-purple-500/30' : 'border-l-4 border-l-purple-500/30'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;