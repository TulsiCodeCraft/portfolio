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
    { icon: Github, href: 'https://github.com/TulsiCodeCraft', color: 'hover:text-green-400', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tulsi-pujari-b72384272/', color: 'hover:text-blue-400', label: 'LinkedIn' },


  ];

  // Resume download function for PDF file
  const downloadResume = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/src/assets/tulsiUpdatedResume.pdf'; // Replace with your actual PDF file path
    link.download = 'Tulsi_Pujari_Resume.pdf'; // The name for the downloaded file
    link.target = '_blank'; // Open in new tab as fallback
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting */}
            <div className="space-y-3 sm:space-y-4">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Hi,
                </span>{' '}
                <span className="text-white block sm:inline">I'm Tulsi Pujari</span>
              </div>
              
              {/* Dynamic Role */}
              <div className="text-lg sm:text-xl md:text-2xl text-gray-300 h-8 sm:h-10 font-mono">
                <span>
                  {displayText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-purple-400`}>
                    |
                  </span>
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-base sm:text-lg md:text-xl">
              <p>BE IT IN TCET-26 | MERN | NEXT JS</p>
              <p>Full Stack Developer | DSA</p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 p-2 sm:p-3 rounded-lg hover:bg-white/10 group`}
                >
                  <social.icon size={20} className="sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <button 
                onClick={downloadResume}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 sm:gap-3 text-base sm:text-lg mx-auto lg:mx-0"
              >
                <Download size={18} className="sm:w-5 sm:h-5 group-hover:animate-bounce" />
                GET RESUME
              </button>
            </div>
          </div>

          {/* Right Content - Code Window */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl">
              {/* Code Window */}
              <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700/50 shadow-2xl">
                {/* Window Header */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-slate-700/50">
                  <div className="flex space-x-1.5 sm:space-x-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-mono hidden sm:block">
                    tulsi-pujari.js
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-3 sm:p-4 lg:p-6 xl:p-8 font-mono text-xs sm:text-sm lg:text-base leading-relaxed overflow-x-auto">
                  <pre className="text-gray-300 whitespace-pre-wrap break-words">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-300">Programmer</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-white">{'{'}</span>
                    {'\n  '}
                    <span className="text-red-300">name</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-green-300">"Tulsi Pujari"</span>
                    <span className="text-white">,</span>
                    {'\n  '}
                    <span className="text-red-300">location</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-green-300">"Mumbai, India"</span>
                    <span className="text-white">,</span>
                    {'\n  '}
                    <span className="text-red-300">languages</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-white">[</span>
                    {'\n    '}
                    <span className="text-cyan-300">"English"</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-cyan-300">"Hindi"</span>
                    <span className="text-white">,</span>
                    {'\n    '}
                    <span className="text-cyan-300">"Marathi"</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-cyan-300">"Kannada"</span>
                    {'\n  '}
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
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg rotate-12 opacity-80"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-4 sm:-right-6 lg:-right-8 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-sm rotate-45 opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;