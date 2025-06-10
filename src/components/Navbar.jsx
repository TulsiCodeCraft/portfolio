import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for navbar
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-enter {
          animation: slideDown 0.5s ease-out;
        }
        
        .mobile-menu-enter {
          animation: slideInDown 0.3s ease-out;
        }
        
        .mobile-item-enter {
          animation: slideInLeft 0.3s ease-out forwards;
        }
        
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <nav
        className={`nav-enter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="text-2xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                Tulsi Pujari.
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer relative group hover:scale-105 ${
                      activeSection === item.href.substring(1)
                        ? 'text-purple-400'
                        : 'text-gray-300 hover:text-purple-400'
                    }`}
                  >
                    {item.name}
                    <span 
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-purple-400 transition-transform origin-left duration-200 ${
                        activeSection === item.href.substring(1)
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`} 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Button - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Contact Me
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-purple-400 focus:outline-none focus:text-purple-400 transition-colors duration-200 active:scale-95"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen 
              ? 'max-h-96 opacity-100 mobile-menu-enter' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`mobile-item-enter block px-3 py-3 rounded-md text-base font-medium cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                    activeSection === item.href.substring(1)
                      ? 'text-purple-400 bg-purple-500/10 border-l-4 border-purple-400'
                      : 'text-gray-300 hover:text-purple-400 hover:bg-gray-800/50'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Mobile Contact Button */}
            <div className="px-5 py-1 border-t border-gray-700/50">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-purple-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-purple-700 transition-all duration-200 shadow-lg w-full hover:scale-105 active:scale-95"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;