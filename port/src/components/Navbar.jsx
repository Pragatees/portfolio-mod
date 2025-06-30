import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Prof from './things/profile.jpg';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const mobileButtonRef = useRef(null);
  const navbarRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Handle scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Starter animation on mount
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate navbar container
    tl.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );

    // Animate logo (profile image and name)
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5, rotation: -10 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    // Animate nav items with stagger
    tl.fromTo(
      navItemsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
      '-=0.3'
    );

    // Animate mobile menu button
    tl.fromTo(
      mobileButtonRef.current,
      { opacity: 0, scale: 0.3 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' },
      '-=0.2'
    );
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'certificates', label: 'Certificates', icon: '🏆' },
    { id: 'achievements', label: 'Achievements', icon: '⭐' },
    { id: 'skills', label: 'Skills', icon: '🔧' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-slate-800/95 backdrop-blur-md shadow-2xl border-b border-emerald-500/20'
          : 'bg-gradient-to-r from-slate-900/80 via-gray-900/80 to-slate-800/80 backdrop-blur-sm'
      }`}
    >
      {/* Animated border */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-600 via-teal-500 via-green-500 to-emerald-600 animate-pulse"></div>

      <div className="flex justify-between items-center h-16 px-6 relative">
        {/* Logo Section with Animation */}
        <div
          ref={logoRef}
          className="flex items-center space-x-4 group cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 p-0.5">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img
                  src={Prof}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <span className="text-xl font-bold text-white group-hover:text-gray-200 transition-all duration-300">
              Pragateesh G
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              ref={(el) => (navItemsRef.current[index] = el)}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                activeSection === item.id
                  ? 'text-emerald-400 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 shadow-lg shadow-emerald-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span className="text-sm group-hover:animate-bounce">{item.icon}</span>
                <span>{item.label}</span>
              </span>

              {/* Animated underline */}
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-600/0 to-teal-600/0 group-hover:from-emerald-600/10 group-hover:to-teal-600/10 transition-all duration-300"></div>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={mobileButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
        >
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-b from-slate-900/95 to-gray-900/95 backdrop-blur-md border-t border-emerald-500/20">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`w-full px-6 py-4 text-left transition-all duration-300 flex items-center space-x-3 group border-b border-slate-800/50 last:border-b-0 ${
                activeSection === item.id
                  ? 'text-emerald-400 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 shadow-inner'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
              }}
            >
              <span className="text-lg group-hover:animate-bounce">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;