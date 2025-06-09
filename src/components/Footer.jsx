import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:tulsi@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in'
    },
    {
      icon: Github,
      label: 'Github',
      href: 'https://github.com'
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Side - Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 Portfolio by{' '}
            <span className="text-green-400 font-medium">Tulsi Pujari</span>
          </div>

          {/* Center - Description */}
          <div className="text-gray-500 text-sm text-center">
            Final Year Information Technology Student | Full Stack Developer 
          </div>

          {/* Right Side - Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                <social.icon size={16} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;