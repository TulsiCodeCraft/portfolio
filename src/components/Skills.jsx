import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillsData = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["HTML", "CSS", "Tailwind", "Javascript", "ReactJs", "Typescript", "NextJs", "Redux"],
      gradient: "from-pink-500 to-violet-500"
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["NodeJs", "ExpressJs", "Firebase"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Database",
      icon: "🗄️",
      skills: ["MongoDB", "SQL", "PostgreSQL", "Prisma", "Firebase"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      category: "Programming Languages",
      icon: "💻",
      skills: [ "Java", "Javascript", "Typescript"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "Docker"],
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-pink-500 to-pink-400 mx-auto rounded-full"
          />
          <p className="text-pink-100 text-lg mt-6 max-w-2xl mx-auto font-light tracking-wide">
            Passionate about creating exceptional digital experiences with modern technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              className="group relative"
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20">
                {/* Header */}
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-4xl mr-4 filter drop-shadow-lg">
                    {category.icon}
                  </span>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent tracking-wide">
                    {category.category}
                  </h3>
                </motion.div>

                {/* Skills List */}
                <motion.div 
                  className="flex flex-wrap gap-3"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group/skill cursor-pointer"
                    >
                      <div className="px-5 py-3 bg-gradient-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/40 rounded-xl text-pink-100 font-semibold text-sm tracking-wide transition-all duration-300 hover:border-pink-400 hover:text-pink-50 hover:shadow-lg hover:shadow-pink-500/20 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-pink-600/20 backdrop-blur-sm">
                        {skill}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${category.gradient} rounded-full opacity-60`}
                      animate={{
                        x: [0, Math.random() * 200 - 100],
                        y: [0, Math.random() * 200 - 100],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-pink-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 tracking-wide"
          >
            Let's Build Something Amazing Together
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;