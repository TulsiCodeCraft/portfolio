import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Twitter, MessageCircle, Download, Code2, Palette, Database, Globe } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const roles = [
    'Web Developer',
    'Full Stack Developer', 
    'React Developer',
    'MERN Stack Developer',
    'Problem Solver'
  ];

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      if (!isDeleting && charIndex <= currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex));
        charIndex++;
        setTimeout(type, 100);
      } else if (!isDeleting && charIndex > currentRole.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
      } else if (isDeleting && charIndex >= 0) {
        setDisplayText(currentRole.substring(0, charIndex));
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeleting = false;
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com', color: 'hover:text-green-400' },
    { icon: Linkedin, href: 'https://linkedin.com/in', color: 'hover:text-blue-400' },
    { icon: Code2, href: '#', color: 'hover:text-cyan-400' },
    { icon: Palette, href: '#', color: 'hover:text-yellow-400' },
    { icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
    { icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-300' },
    { icon: MessageCircle, href: 'https://discord.com', color: 'hover:text-purple-400' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 z-10 lg:pl-8">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="text-3xl md:text-4xl lg:text-5xl font-light">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Hi,
                </span>{' '}
                <span className="text-white">I'm Tulsi Pujari</span>
              </div>
              
              {/* Dynamic Role */}
              <div className="text-xl md:text-2xl text-gray-300 h-8 font-mono">
                <span>
                  {displayText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-purple-400`}>
                    |
                  </span>
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-300 space-y-2 text-lg md:text-xl">
              <p>IT IN TCET-26 | MERN | NEXT JS |</p>
              <p>Full Stack Developer | DSA </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/10`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-3 text-lg">
                <Download size={20} className="group-hover:animate-bounce" />
                GET RESUME
              </button>
            </div>
          </div>

          {/* Right Content - Code Window */}
          <div className="relative flex justify-center lg:justify-start lg:pr-8">
            <div className="w-full max-w-xl lg:max-w-2xl">
              {/* Code Window */}
              <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700/50 shadow-2xl">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-8 font-mono text-base leading-relaxed">
                  <pre className="text-gray-300">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-300">Programmer</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-white">{'{'}</span>
                    {'\n  '}
                    <span className="text-red-300">name</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-green-300">Tulsi Pujari</span>
                    <span className="text-white">,</span>
                    {'\n  '}
                    <span className="text-red-300">location</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-green-300">Mumbai, India</span>
                    <span className="text-white">,</span>
                    {'\n  '}
                    <span className="text-red-300">Languages</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-white">[</span>
                    <span className="text-cyan-300">English</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-cyan-300">Hindi</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-cyan-300">Marathi</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-cyan-300">Kannada</span>
                    <span className="text-white">],</span>
                    {'\n  '}
                    <span className="text-red-300">hireable</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-blue-400">true</span>
                    <span className="text-white">,</span>
                    {'\n'}
                    <span className="text-white">{'};'}</span>
                  </pre>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg rotate-12 opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-sm rotate-45 opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;