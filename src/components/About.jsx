import React from 'react';
import { Code, Database, Globe, Lightbulb, Award, Target, Coffee, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Globe, color: 'text-blue-400' },
    { name: 'Backend Development', icon: Database, color: 'text-green-400' },
    { name: 'Problem Solving', icon: Lightbulb, color: 'text-yellow-400' },
    { name: 'DSA & Algorithms', icon: Code, color: 'text-purple-400' }
  ];

  const stats = [
    { number: '300+', label: 'LeetCode Problems', icon: Target },
    { number: '10+', label: 'Projects Completed', icon: Award },
    { number: '2', label: 'Years Experience', icon: Coffee }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Introduction */}
            <div className="space-y-4 sm:space-y-6">
              <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed">
                <p className="mb-3 sm:mb-4">
                  Hi! I'm <span className="text-purple-400 font-semibold">Tulsi Pujari</span>, a passionate 
                  <span className="text-blue-400 font-semibold"> Full Stack Developer</span> and 
                  <span className="text-green-400 font-semibold"> Final Year Information Technology Engineering Student</span>
                </p>
                <p className="mb-3 sm:mb-4">
                  I love building innovative web applications and solving complex problems. 
                  With a strong foundation in the <span className="text-yellow-400 font-semibold">MERN stack </span> 
                  and <span className="text-cyan-400 font-semibold">Next.js</span>, I create scalable and 
                  user-friendly solutions that make a difference. I believe in continuous learning and pushing the boundaries of what's possible with code.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/50 rounded-xl p-3 sm:p-4 lg:p-5 hover:bg-gradient-to-br hover:from-slate-700/70 hover:to-slate-600/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-1.5 sm:p-2 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <skill.icon className={`${skill.color} group-hover:scale-110 transition-transform duration-300`} size={20} />
                      </div>
                      <span className="text-gray-200 font-medium text-sm sm:text-base lg:text-lg">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center group hover:scale-110 transition-transform duration-300"
                  >
                    <div className="bg-gradient-to-br from-purple-500/25 to-blue-500/25 backdrop-blur-sm border border-purple-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 mb-2 sm:mb-3 group-hover:from-purple-500/35 group-hover:to-blue-500/35 group-hover:border-purple-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25">
                      <stat.icon className="text-purple-400 mx-auto mb-2 sm:mb-3 group-hover:scale-125 group-hover:text-purple-300 transition-all duration-300" size={20} />
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm font-medium px-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center order-1 lg:order-2 lg:justify-end">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative">
                {/* Multiple Gradient Borders */}
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-sm sm:blur-lg group-hover:blur-md sm:group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-90 animate-pulse"></div>
                <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-br from-cyan-400 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl blur-xs sm:blur-sm group-hover:blur-sm sm:group-hover:blur-md transition-all duration-300 opacity-80 group-hover:opacity-100"></div>
                
                {/* Image */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-2xl">
                  <img
                    src="/images/tulsi_photo.jpg"
                    alt="Tulsi Pujari"
                    className="w-64 h-80 sm:w-80 sm:h-96 lg:w-[26rem] lg:h-[32rem] object-cover rounded-xl sm:rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-700 filter brightness-105 group-hover:brightness-110"
                  />
                  
                  {/* Image Overlay Effects */}
                  <div className="absolute inset-1.5 sm:inset-2 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Enhanced Floating Elements - Responsive sizes */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl rotate-12 opacity-80 group-hover:rotate-45 group-hover:scale-125 transition-all duration-700 shadow-lg shadow-purple-500/50"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-70 group-hover:scale-150 transition-all duration-600 shadow-lg shadow-blue-500/50"></div>
                <div className="absolute top-1/3 -left-4 sm:-left-6 lg:-left-10 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg rotate-45 opacity-60 group-hover:rotate-90 group-hover:scale-125 transition-all duration-700 shadow-lg shadow-yellow-500/50"></div>
                <div className="absolute top-1/6 -right-2 sm:-right-3 lg:-right-4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500 shadow-lg shadow-green-500/50"></div>
                <div className="absolute bottom-1/4 -right-6 sm:-right-8 lg:-right-12 w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl rotate-12 opacity-60 group-hover:rotate-45 group-hover:scale-120 transition-all duration-600 shadow-lg shadow-indigo-500/50"></div>

                {/* Enhanced Glow Effects */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 blur-xl sm:blur-2xl scale-110 sm:scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-400/20 via-purple-600/20 to-pink-600/20 blur-lg sm:blur-xl scale-105 sm:scale-115 opacity-0 group-hover:opacity-80 transition-all duration-500"></div>
              </div>

              {/* Enhanced Background Decorative Elements */}
              <div className="absolute -inset-6 sm:-inset-8 lg:-inset-12 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-2xl sm:blur-3xl scale-125 sm:scale-150 group-hover:scale-150 sm:group-hover:scale-200 transition-transform duration-1000"></div>
              <div className="absolute -inset-8 sm:-inset-12 lg:-inset-16 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-full blur-2xl sm:blur-3xl scale-110 sm:scale-125 group-hover:scale-125 sm:group-hover:scale-175 transition-transform duration-1200 animate-pulse"></div>
              
              {/* Particle Effects */}
              <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full opacity-60 animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-2/3 left-1/6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full opacity-70 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;