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
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="space-y-6">
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Hi! I'm <span className="text-purple-400 font-semibold">Tulsi Pujari</span>, a passionate 
                  <span className="text-blue-400 font-semibold"> Full Stack Developer</span> and 
                  <span className="text-green-400 font-semibold"> Final Year Information Technology Engineering Student</span> 
                  
                </p>
                <p className="mb-4">
                  I love building innovative web applications and solving complex problems. 
                  With a strong foundation in the <span className="text-yellow-400 font-semibold">MERN stack </span> 
                  and <span className="text-cyan-400 font-semibold">Next.js</span>, I create scalable and 
                  user-friendly solutions that make a difference.I believe in continuous learning and pushing the boundaries of what's possible with code
                </p>
                
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm border border-slate-600/50 rounded-xl p-5 hover:bg-gradient-to-br hover:from-slate-700/70 hover:to-slate-600/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <skill.icon className={`${skill.color} group-hover:scale-110 transition-transform duration-300`} size={24} />
                      </div>
                      <span className="text-gray-200 font-medium text-lg">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center group hover:scale-110 transition-transform duration-300"
                  >
                    <div className="bg-gradient-to-br from-purple-500/25 to-blue-500/25 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 mb-3 group-hover:from-purple-500/35 group-hover:to-blue-500/35 group-hover:border-purple-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25">
                      <stat.icon className="text-purple-400 mx-auto mb-3 group-hover:scale-125 group-hover:text-purple-300 transition-all duration-300" size={28} />
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            {/* <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button className="group bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 flex items-center justify-center gap-3 text-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Heart className="group-hover:text-pink-300 group-hover:scale-110 transition-all duration-300 relative z-10" size={20} />
                <span className="relative z-10">Let's Connect</span>
              </button>
              <button className="group border-2 border-purple-400/40 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-400/15 hover:to-blue-400/15 text-purple-400 hover:text-purple-300 px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 text-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </button>
            </div> */}
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative">
                {/* Multiple Gradient Borders */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-90 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-purple-600 to-pink-600 rounded-3xl blur-sm group-hover:blur-md transition-all duration-300 opacity-80 group-hover:opacity-100"></div>
                
                {/* Image */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-2 shadow-2xl">
                  <img
                    src="/src/assets/images/tulsi_photo.jpg"
                    alt="Darshan Jaju"
                    className="w-96 h-[28rem] lg:w-[26rem] lg:h-[32rem] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-700 filter brightness-105 group-hover:brightness-110"
                  />
                  
                  {/* Image Overlay Effects */}
                  <div className="absolute inset-2 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-12 opacity-80 group-hover:rotate-45 group-hover:scale-125 transition-all duration-700 shadow-lg shadow-purple-500/50"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-70 group-hover:scale-150 transition-all duration-600 shadow-lg shadow-blue-500/50"></div>
                <div className="absolute top-1/3 -left-10 w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg rotate-45 opacity-60 group-hover:rotate-90 group-hover:scale-125 transition-all duration-700 shadow-lg shadow-yellow-500/50"></div>
                <div className="absolute top-1/6 -right-4 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500 shadow-lg shadow-green-500/50"></div>
                <div className="absolute bottom-1/4 -right-12 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl rotate-12 opacity-60 group-hover:rotate-45 group-hover:scale-120 transition-all duration-600 shadow-lg shadow-indigo-500/50"></div>

                {/* Enhanced Glow Effects */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 blur-2xl scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-purple-600/20 to-pink-600/20 blur-xl scale-115 opacity-0 group-hover:opacity-80 transition-all duration-500"></div>
              </div>

              {/* Enhanced Background Decorative Elements */}
              <div className="absolute -inset-12 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl scale-150 group-hover:scale-200 transition-transform duration-1000"></div>
              <div className="absolute -inset-16 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl scale-125 group-hover:scale-175 transition-transform duration-1200 animate-pulse"></div>
              
              {/* Particle Effects */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;