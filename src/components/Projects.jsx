import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      id: 1,
      name: "Zeecare",
      description: "A doctor appointment and patient management system for Zeecare Medical, featuring multi-department scheduling and a doctor admin panel.",
      image: "/public/images/zeecare.png",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce",
      tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      name: "Educrew",
      description: "A collaborative study platform where users can form groups, assign tasks, and track study progress for better virtual learning.",
      image: "/public/images/educrew.png",
      liveUrl: "https://demo-taskapp.com",
      githubUrl: "https://github.com/username/taskapp",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"]
    },
    {
      id: 3,
      name: "Interwin",
      description: "A job search and preparation platform offering job listings, role-based resources, resume building, and interview readiness.",
      image: "/public/images/interwin.png",
      liveUrl: "https://demo-crypto.com",
      githubUrl: "https://github.com/username/crypto",
      tech: ["React Native", "Redux", "CoinGecko API", "Firebase"]
    },
    {
      id: 4,
      name: "Meeting Summarizer",
      description: "An AI tool that summarizes Zoom and Google Meet recordings with timestamps and concise key-point summaries.",
      image: "/public/images/vidsummaryai.png",
      liveUrl: "https://demo-weather.com",
      githubUrl: "https://github.com/username/weather",
      tech: ["Vue.js", "Chart.js", "Weather API", "Tailwind"]
    },
    {
      id: 5,
      name: "Financial Planner",
      description: "A financial planning assistant that provides tailored investment strategies to help users manage and grow their finances.",
      image: "/public/images/investiqo.png",
      liveUrl: "https://demo-analytics.com",
      githubUrl: "https://github.com/username/analytics",
      tech: ["React", "D3.js", "Express", "PostgreSQL"]
    },
    {
      id: 6,
      name: "CodeBook- Ecommerce Platform",
      description: "An e-commerce platform to browse and purchase popular coding and technology books across various categories.",
      image: "/public/images/codebook.png",
      liveUrl: "https://demo-crypto.com",
      githubUrl: "https://github.com/username/crypto",
      tech: ["React Native", "Redux", "CoinGecko API", "Firebase"]
    },
    {
      id: 7,
      name: "Notification Management System",
      description: "A bulk messaging system for sending SMS, emails, and WhatsApp messages to multiple users with broadcasting history tracking using cron jobs.",
      image: "/public/images/nms.jpg",
      liveUrl: "https://demo-crypto.com",
      githubUrl: "https://github.com/username/crypto",
      tech: ["React Native", "Redux", "CoinGecko API", "Firebase"]
    },
    
    {
      id: 8,
      name: "BeingKare",
      description: "An insurance management platform built for a client, covering various types of insurance and guiding users in selecting the right plans.",
      image: "/public/images/beingkare.png",
      liveUrl: "https://demo-crypto.com",
      githubUrl: "https://github.com/username/crypto",
      tech: ["React Native", "Redux", "CoinGecko API", "Firebase"]
    },
     
    {
      id: 9,
      name: "Weld & Metal Fabrication",
      description: "A portfolio website developed for a fabrication startup, showcasing services, projects, and brand identity.",
      image: "/public/images/weldmetalfab.png",
      liveUrl: "https://demo-crypto.com",
      githubUrl: "https://github.com/username/crypto",
      tech: ["React Native", "Redux", "CoinGecko API", "Firebase"]
    },
    {
      id: 10,
      name: "Riser Realty",
      description: "A real estate business website made for a client to display residential and commercial properties available for sale or purchase.",
      image: "/public/images/riserrealty.png",
      liveUrl: "https://demo-crypto.com",
      githubUrl: "https://github.com/username/crypto",
      tech: ["React Native", "Redux", "CoinGecko API", "Firebase"]
    },
     {
      id: 11,
      name: "Hotel Booking Application",
      description: "A digital booking system created for Hotel Ratna Palace, allowing customers to reserve tables based on availability, streamlining business operations.",
      image: "/public/images/hotel.png",
      liveUrl: "https://demo-crypto.com",
      githubUrl: "https://github.com/username/crypto",
      tech: ["React Native", "Redux", "CoinGecko API", "Firebase"]
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const totalSlides = Math.ceil(projects.length / 3);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextSlide = () => {
    const totalSlides = Math.ceil(projects.length / 3);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    const totalSlides = Math.ceil(projects.length / 3);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-16"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent tracking-tight">
              My Projects
            </h2>
            <p className="text-gray-300 text-lg mt-4 font-light">
              Showcasing my latest work and creative solutions
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {/* Create slides with 3 projects each */}
              {Array.from({ length: Math.ceil(projects.length / 3) }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {projects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500"
                      >
                        {/* Project Image */}
                        <div className="relative h-46 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          
                          {/* Tech Stack Pills */}
                          {/* <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                            {project.tech.slice(0, 2).map((tech, techIndex) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-200 text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div> */}
                        </div>

                        {/* Project Details */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                            {project.name}
                          </h3>
                          
                          <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group/btn flex-1 justify-center"
                            >
                              <ExternalLink size={16} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                              View Live
                            </motion.a>
                            
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-all duration-300 group/btn flex-1 justify-center"
                            >
                              <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                              GitHub
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: Math.ceil(projects.length / 3) }, (_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-500 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Auto-play Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                : 'bg-white/10 text-gray-300 border border-white/20'
            }`}
          >
            {isAutoPlaying ? 'Auto-play ON' : 'Auto-play OFF'}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;