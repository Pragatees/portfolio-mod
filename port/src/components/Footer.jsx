import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Github, Linkedin, Instagram, MapPin, Heart, ArrowUp, ExternalLink } from "lucide-react";

const FooterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7010441464",
      href: "tel:+917010441464",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "pragateesh.g2022ai-ds@sece.ac.in",
      href: "mailto:pragateesh.g2022ai-ds@sece.ac.in",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Pragatees",
      href: "https://github.com/Pragatees",
      color: "from-gray-600 to-slate-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Pragateesh G",
      href: "https://www.linkedin.com/in/pragateesh-g-42b703259",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "haripragateesh",
      href: "https://www.instagram.com/haripragateesh",
      color: "from-pink-500 to-purple-600",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "AI/ML Solutions",
    "UI/UX Design",
    "API Development",
    "Consulting"
  ];

  return (
    <>
      <footer
        ref={sectionRef}
        className="relative bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden"
        style={{
          fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className={`absolute top-20 left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl transition-all duration-3000 ease-out ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
            style={{
              animation: isVisible ? 'float 8s ease-in-out infinite' : 'none'
            }}
          />
          <div 
            className={`absolute bottom-20 right-20 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl transition-all duration-3000 ease-out ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
            style={{
              animation: isVisible ? 'float 10s ease-in-out infinite reverse' : 'none',
              animationDelay: '2s'
            }}
          />
          
          {/* Subtle grid pattern */}
          <div 
            className={`absolute inset-0 opacity-5 transition-opacity duration-2000 ${
              isVisible ? 'opacity-10' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Main Footer Content */}
        <div className="max-w-screen-10xl mx-auto px-8 pt-16 pb-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Section */}
            <div
              className={`lg:col-span-1 transition-all duration-1000 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? '0.1s' : '0s' }}
            >
              <div className="mb-6">
                <h3 
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Pragateesh{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                    G
                  </span>
                </h3>
                <p className="text-emerald-400 font-medium text-sm tracking-wide">FULL STACK DEVELOPER & AI Engineer</p>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Crafting innovative digital solutions with cutting-edge technologies. 
                Passionate about creating meaningful experiences through code.
              </p>

              <div className="flex items-center space-x-3 text-slate-300 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Based in India</p>
                  <p className="text-slate-400 text-xs">Available worldwide</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className={`transition-all duration-1000 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Navigation
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-emerald-400 text-sm transition-all duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-400/60 rounded-full mr-3 group-hover:bg-emerald-400 transition-colors duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div
              className={`transition-all duration-1000 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? '0.3s' : '0s' }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Services
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-slate-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-teal-400/60 rounded-full mr-3"></span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div
              className={`transition-all duration-1000 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Connect
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: isVisible ? `${0.5 + index * 0.1}s` : '0s' }}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                      <social.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{social.label}</p>
                    </div>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div
            className={`border-t border-slate-700/50 pt-8 mt-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-slate-400 text-sm">
                  &copy; {new Date().getFullYear()} Pragateesh G. All rights reserved.
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Designed & developed with passion
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-slate-400 text-sm">
                <span className="flex items-center space-x-1">
                  <span>Built with</span>
                  <Heart className="w-3 h-3 text-red-500" />
                </span>
                <span className="text-slate-600">|</span>
                <span className="text-emerald-400 font-medium">React</span>
                <span className="text-slate-600">&</span>
                <span className="text-teal-400 font-medium">Tailwind</span>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group backdrop-blur-sm"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      )}
    </>
  );
};

export default FooterSection;