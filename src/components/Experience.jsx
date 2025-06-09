import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Smartphone } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "FULL STACK DEVELOPER",
      company: "Varcsoft",
      period: "Feb 2025 - May 2025",
      skills: "REACT.JS, TAILWINDCSS, STYLED COMPONENTS, CSS, REDUX,PRISMA,POSTGRESQL",
      description: "Developed the frontend of the website, collaborating with the design team to create responsive and visually appealing interfaces. Also, I optimized the performance, while integrating APIs for seamless functionality.",
      websiteLink: "WEBSITE LINK",
      icon: <Code size={24} />,
      side: "left"
    },
    {
      id: 2,
      title: "WEB dEVELOPER",
      company: "Drixx Solutions",
      period: "Dec 2024 - Jan 2025",
      skills: "REACT.JS, STYLED COMPONENTS, CSS",
      description: "Responsible for creating the backend of a Flutter application and integrating it seamlessly using Flutter modules. Ensured efficient performance and smooth functionality through effective backend development practices.",
      websiteLink: "WEBSITE LINK",
      icon: <Smartphone size={24} />,
      side: "right"
    },
    {
      id: 3,
      title: "Web developer",
      company: "Weld and metal fabrication",
      period: "Dec 2025 - Feb 2025",
      skills: "JAVASCRIPT, NODE.JS, EXPRESS, MONGODB",
      description: "Built RESTful APIs and microservices for web applications. Collaborated with cross-functional teams to deliver scalable solutions and implemented best practices for code quality and performance optimization.",
      websiteLink: "WEBSITE LINK",
      icon: <Briefcase size={24} />,
      side: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-gray-300 text-lg font-light">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500 rounded-full"></div>

          {/* Experience Items */}
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: exp.side === 'left' ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-center"
              >
                {/* Content Card */}
                <div className={`w-full max-w-lg ${
                  exp.side === 'left' 
                    ? 'pr-4 ml-0 mr-auto' 
                    : 'pl-4 ml-auto mr-0'
                } relative`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-600/40 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-purple-500/10"
                  >
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
                    <p className="text-gray-300 text-sm leading-relaxed mb-8 line-height-loose">
                      {exp.description}
                    </p>

                    {/* Website Link */}
                    {/* <div className="border-t border-gray-600/30 pt-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold transition-all duration-300 hover:gap-3"
                      >
                        <span className="underline decoration-dotted underline-offset-4">
                          {exp.websiteLink}
                        </span>
                        <motion.span
                          className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </div> */}

                    {/* Connection Line to Timeline */}
                    <div className={`absolute top-1/2 ${
                      exp.side === 'left' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                    } w-4 h-0.5 bg-gradient-to-r from-purple-500/60 to-transparent transform -translate-y-1/2`}></div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 rounded-full border-4 border-gray-900 flex items-center justify-center text-white shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300 cursor-pointer"
                  >
                    {exp.icon}
                  </motion.div>
                  
                  {/* Period Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    className={`absolute -top-16 ${
                      exp.side === 'left' ? 'left-full ml-3' : 'right-full mr-3'
                    } bg-gradient-to-r from-gray-800/95 to-gray-900/95 backdrop-blur-sm border border-purple-500/30 rounded-xl px-4 py-2 whitespace-nowrap shadow-lg`}
                  >
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
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;