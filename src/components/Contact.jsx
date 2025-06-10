import React, { useState, useEffect } from 'react';
import { Mail, User, MessageSquare, Send, Linkedin, CheckCircle, XCircle, X } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "pujaritulsi231@gmail.com",
      href: "mailto:pujaritulsi231@gmail.com"
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/tulsi-pujari-b72384272/"
    }
  ];

  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const hideToast = () => {
    setShowToast(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS (you can also do this once in useEffect)
      if (typeof window !== 'undefined' && window.emailjs) {
        // Replace with your actual EmailJS public key
        window.emailjs.init("5YHCIgaKBNtogleg2");
        
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.msg,
          to_email: "pujaritulsi231@gmail.com",
          reply_to: formData.email,
          subject: `New Contact Form Message from ${formData.name}`,
          current_date: new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          current_time: new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })
        };

        // Send email using EmailJS
        // Replace with your actual service ID and template ID
        const response = await window.emailjs.send(
          "service_ebrqrgs",
          "template_kfqmxlz", 
          templateParams
        );

        console.log('Email sent successfully:', response);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', msg: '' });
        showToastMessage('🎉 Message sent successfully! I\'ll get back to you within 24 hours.', 'success');
      } else {
        throw new Error('EmailJS not loaded');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      showToastMessage('❌ Failed to send message. Please try again or contact me directly at pujaritulsi231@gmail.com', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ToastNotification = () => (
    showToast && (
      <div className="fixed top-4 left-4 right-4 sm:top-6 sm:right-6 sm:left-auto z-50 max-w-sm sm:max-w-md mx-auto sm:mx-0 animate-in slide-in-from-top-2 duration-300">
        <div className={`relative p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl backdrop-blur-xl border-2 ${
          toastType === 'success' 
            ? 'bg-green-500/20 border-green-500/50 text-green-100' 
            : 'bg-red-500/20 border-red-500/50 text-red-100'
        }`}>
          <div className="flex items-start gap-2 sm:gap-3">
            <div className={`p-1.5 sm:p-2 rounded-full ${
              toastType === 'success' ? 'bg-green-500/30' : 'bg-red-500/30'
            }`}>
              {toastType === 'success' ? (
                <CheckCircle size={16} className="text-green-300 sm:w-5 sm:h-5" />
              ) : (
                <XCircle size={16} className="text-red-300 sm:w-5 sm:h-5" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className={`font-semibold mb-1 text-sm sm:text-base ${
                toastType === 'success' ? 'text-green-200' : 'text-red-200'
              }`}>
                {toastType === 'success' ? 'Success!' : 'Error!'}
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                toastType === 'success' ? 'text-green-100' : 'text-red-100'
              }`}>
                {toastMessage}
              </p>
            </div>
            <button
              onClick={hideToast}
              className={`p-1 rounded-full hover:bg-white/10 transition-colors ${
                toastType === 'success' ? 'text-green-300' : 'text-red-300'
              }`}
            >
              <X size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 h-1 rounded-full bg-gradient-to-r from-transparent via-current to-transparent opacity-50 animate-pulse w-full" />
        </div>
      </div>
    )
  );

  return (
    <>
      <ToastNotification />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-in fade-in-0 slide-in-from-top-4 duration-800">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent tracking-tight mb-3 sm:mb-4 leading-tight">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1 animate-in fade-in-0 slide-in-from-left-8 duration-800">
              <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-gray-800/70 transition-all duration-500">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                  <MessageSquare className="text-purple-400" size={24} />
                  Send Message
                </h3>

                <div className="space-y-5 sm:space-y-6">
                  {/* Name Field */}
                  <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500 delay-100">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-900/50 border border-gray-600/50 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm sm:text-base"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500 delay-200">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-900/50 border border-gray-600/50 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm sm:text-base"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500 delay-300">
                    <label htmlFor="msg" className="block text-sm font-semibold text-gray-300 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400" size={18} />
                      <textarea
                        id="msg"
                        name="msg"
                        value={formData.msg}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-900/50 border border-gray-600/50 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none text-sm sm:text-base"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500 delay-400">
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`w-full py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 transform hover:scale-105 active:scale-95 text-sm sm:text-base ${
                        isSubmitting
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="text-center p-3 bg-green-500/10 border border-green-500/20 rounded-lg sm:rounded-xl animate-in fade-in-0 scale-in-95 duration-300">
                      <p className="text-green-400 font-medium text-xs sm:text-sm">
                        ✅ Message sent successfully!
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="text-center p-3 bg-red-500/10 border border-red-500/20 rounded-lg sm:rounded-xl animate-in fade-in-0 scale-in-95 duration-300">
                      <p className="text-red-400 font-medium text-xs sm:text-sm">
                        ❌ Failed to send. Please try again.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 animate-in fade-in-0 slide-in-from-right-8 duration-800">
              <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                  Let's Connect
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.title === 'LinkedIn' ? '_blank' : undefined}
                      rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-900/30 rounded-lg sm:rounded-xl hover:bg-gray-900/50 transition-all duration-300 group cursor-pointer border border-gray-600/30 hover:border-purple-500/30 transform hover:scale-105 hover:translate-x-1 sm:hover:translate-x-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-2 sm:p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:bg-purple-500/30 group-hover:text-purple-300 transition-all duration-300 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-400 text-xs sm:text-sm font-medium">{info.title}</p>
                        <p className="text-white font-semibold text-sm sm:text-base truncate">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-800 delay-300">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  Quick Response
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I typically respond to messages within 24 hours. Whether you have a project proposal, 
                  collaboration idea, or just want to connect, I'm always excited to hear from fellow 
                  developers and potential clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;