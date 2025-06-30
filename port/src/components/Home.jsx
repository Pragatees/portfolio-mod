import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, Download, Mail, Brain, Zap, Github, ExternalLink } from 'lucide-react';
import prof from './things/profile.jpg';
import res from './things/resume.pdf';

function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // Simulate resume download - replace with actual resume file path
    const link = document.createElement('a');
    link.href = res; 
    link.download = 'PragateeshG_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Pragateesh",
      href: "https://wa.me/917010441464",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "haripragateesh",
      href: "https://instagram.com/haripragateesh",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "haripragateesh7@gmail.com",
      href: "mailto:haripragateesh7@gmail.com",
      color: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-emerald-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-teal-500/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full blur-lg animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen lg:min-h-[80vh] py-8 lg:py-0">
          
          {/* Profile Image Section - Mobile First */}
          <div className="order-1 lg:order-2 flex justify-center w-full">
            <div className={`relative group ${animationStarted ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'}`}>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem]">
                {imageError ? (
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-slate-700 to-slate-600 shadow-2xl border-4 border-white/10 flex items-center justify-center text-white text-lg font-bold">
                    Pragateesh G
                  </div>
                ) : (
                  <img
                    src={prof}
                    alt="Pragateesh G Profile"
                    className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white/10 transform group-hover:scale-105 transition-all duration-500 relative z-10"
                    onError={() => setImageError(true)}
                  />
                )}
                {/* Decorative Elements */}
                <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 group-hover:border-emerald-500/60 transition-all duration-300 animate-pulse-ring"></div>
                <div className="absolute -inset-4 rounded-full border border-teal-500/20 animate-spin-slow"></div>
                <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`order-2 lg:order-1 text-center lg:text-left space-y-6 lg:space-y-8 w-full ${
            animationStarted ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'
          }`}>
            
            {/* Name and Title */}
            <div className="space-y-4">
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent leading-tight animate-gradient">
                  Pragateesh G
                </h1>
                <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-expand"></div>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300">
                <span className="text-emerald-400 animate-text-glow">AI Innovator</span> & <span className="text-teal-400 animate-text-glow-delayed">Full Stack Developer</span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <div className="space-y-3 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300">
                <p className={`${animationStarted ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '0.5s'}}>
                  A passionate <span className="text-emerald-400 font-medium">B.Tech (AI & DS)</span> student at 
                  <span className="text-teal-400 font-medium"> Sri Eshwar College of Engineering</span> (2022–2026).
                </p>

                <p className={`${animationStarted ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '0.7s'}}>
                  Specializing in <span className="text-emerald-400 font-medium">AI-driven solutions</span> and 
                  <span className="text-teal-400 font-medium"> full-stack applications</span> that solve real-world challenges.
                </p>

                <p className={`${animationStarted ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '0.9s'}}>
                  Expert in <span className="text-emerald-300 font-medium">Machine Learning</span>, 
                  <span className="text-teal-300 font-medium"> Data Science</span>, <span className="text-teal-300 font-medium">Generative AI</span>, and modern web technologies.
                </p>

                <div className={`pt-2 ${animationStarted ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '1.1s'}}>
                  <p className="text-base sm:text-lg font-medium italic text-gray-400 relative">
                    <span className="absolute -left-2 text-emerald-400 text-2xl">"</span>
                    Exploring the Future with Generative AI, Crafting Creativity with Full Stack, and Driving Insights as a Data Scientist.
                    <span className="absolute -right-2 text-emerald-400 text-2xl">"</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${
              animationStarted ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`} style={{animationDelay: '1.3s'}}>
              <a 
                href="#projects"
                className="group px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-emerald-500/40 relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#contact"
                className="group px-6 py-3 border-2 border-teal-600 text-teal-400 font-medium rounded-lg hover:bg-teal-900/50 hover:text-white hover:border-teal-400 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${social.color} hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl ${
                      animationStarted ? 'animate-bounce-in' : 'opacity-0 scale-75'
                    }`}
                    style={{ animationDelay: animationStarted ? `${1.5 + index * 0.1}s` : '0s' }}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                ))}
              </div>

              {/* Resume Download */}
              <div className={`flex justify-center lg:justify-start ${
                animationStarted ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`} style={{animationDelay: '1.9s'}}>
                <button 
                  onClick={handleDownloadResume} 
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-700 to-teal-700 text-white font-medium rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3) translateY(20px); }
          50% { transform: scale(1.05) translateY(-5px); }
          70% { transform: scale(0.95) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }

        @keyframes pulse-ring {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.6; transform: scale(1.02); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }

        @keyframes expand {
          from { width: 0; }
          to { width: 6rem; }
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(52, 211, 153, 0.3); }
          50% { text-shadow: 0 0 15px rgba(52, 211, 153, 0.6); }
        }

        @keyframes text-glow-delayed {
          0%, 100% { text-shadow: 0 0 5px rgba(45, 212, 191, 0.3); }
          50% { text-shadow: 0 0 15px rgba(45, 212, 191, 0.6); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-bounce-in { animation: bounce-in 0.6s ease-out forwards; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }
        .animate-expand { animation: expand 1s ease-out 0.5s forwards; width: 0; }
        .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
        .animate-text-glow-delayed { animation: text-glow-delayed 2s ease-in-out infinite 0.5s; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        @media (max-width: 640px) {
          .animate-slide-in-left { animation: fade-in-up 0.8s ease-out forwards; }
          .animate-slide-in-right { animation: fade-in-up 0.8s ease-out forwards; }
        }
      `}</style>
    </div>
  );
}

export default Home;