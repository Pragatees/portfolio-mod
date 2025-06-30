import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Github, Linkedin, MapPin, Send, User, MessageSquare, X } from "lucide-react";


const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted) {
            setIsVisible(true);
            setAnimationStarted(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationStarted]);

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init('Ev1z07uMmVUbDYQj2'); // Replace with your actual EmailJS public key
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7010441464",
      href: "tel:+917010441464",
      color: "from-emerald-500 to-teal-600",
      description: "Call me anytime"
    },
    {
      icon: Mail,
      label: "Email",
      value: "pragateesh.g2022ai-ds@sece.ac.in",
      href: "mailto:pragateesh.g2022ai-ds@sece.ac.in",
      color: "from-blue-500 to-purple-600",
      description: "Drop me a line"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Pragatees",
      href: "https://github.com/Pragatees",
      color: "from-gray-500 to-slate-600",
      description: "Check out my code"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/pragateesh-g-42b703259",
      color: "from-blue-600 to-cyan-600",
      description: "Let's network"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!window.emailjs) {
      alert('EmailJS is not loaded. Please try again in a moment.');
      return;
    }

    setIsLoading(true);
    
    // Current date and time
    const time = new Date().toLocaleString();

    // Template parameters for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: time,
      to_name: 'Pragateesh',
    };

    window.emailjs
      .send('service_notify', 'template_3ap51jt', templateParams)
      .then(
        () => {
          setShowSuccessMessage(true);
          setFormData({ name: '', email: '', message: '' });
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send message. Please try again or contact me directly.');
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleContactClick = (href) => {
    if (href !== '#') {
      window.open(href, '_blank');
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-8 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl transition-all duration-2000 ease-out ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: isVisible ? '0s' : '0s' }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl transition-all duration-2000 ease-out ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: isVisible ? '0.3s' : '0s' }}
        />
        <div 
          className={`absolute top-3/4 left-1/2 w-64 h-64 bg-slate-500/5 rounded-full blur-3xl transition-all duration-2000 ease-out ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}
        />
      </div>

      <div className="max-w-10xl mx-auto relative z-10">
        {/* Success Message */}
        {showSuccessMessage && (
          <div className="fixed top-8 right-8 bg-emerald-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center space-x-2 animate-fade-in">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <span className="font-medium">Message sent successfully!</span>
            <button 
              onClick={() => setShowSuccessMessage(false)}
              className="ml-2 text-white hover:text-emerald-200 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Animated Header with Emoji */}
        <div className="text-center mb-16">
          {/* Animated Contact Emoji */}
          <div 
            className={`inline-block mb-6 transition-all duration-800 ease-out ${
              isVisible 
                ? 'opacity-100 scale-100 rotate-0' 
                : 'opacity-0 scale-0 -rotate-180'
            }`}
            style={{ 
              transitionDelay: isVisible ? '0.2s' : '0s' 
            }}
          >
            <span className="text-8xl">📞</span>
          </div>

          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 -translate-y-10"
            }`}
            style={{ 
              transitionDelay: isVisible ? '0.4s' : '0s' 
            }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? Let's connect and create something amazing together. 
              I'm always excited to discuss new opportunities and innovative ideas.
            </p>
            <div
              className={`w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-8 rounded-full transition-all duration-1000 ease-out transform ${
                isVisible 
                  ? "opacity-100 scale-x-100" 
                  : "opacity-0 scale-x-0"
              }`}
              style={{ 
                transitionDelay: isVisible ? '0.8s' : '0s' 
              }}
            ></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ease-out transform ${
                isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ 
                transitionDelay: isVisible ? '1.0s' : '0s' 
              }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Start a{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Conversation
                </span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Choose your preferred way to connect:
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`group relative cursor-pointer transition-all duration-700 ease-out transform ${
                    hoveredCard === index
                      ? "scale-105 shadow-2xl"
                      : "scale-100"
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0 rotate-0"
                      : "opacity-0 translate-y-20 rotate-3"
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${1.2 + index * 0.15}s` : '0s' 
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleContactClick(contact.href)}
                >
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 overflow-hidden hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Icon */}
                    <div className={`relative z-10 w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        {contact.label}
                      </h4>
                      <p className="text-emerald-400 text-sm font-medium mb-1">
                        {contact.value}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {contact.description}
                      </p>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-500 rounded-2xl pointer-events-none"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
                      {[...Array(2)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-ping"
                          style={{
                            right: `${10 + Math.random() * 20}%`,
                            top: `${10 + Math.random() * 20}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                          }}
                        ></div>
                      ))}
                    </div>

                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                  </div>
                </div>
              ))}
            </div>

            {/* Location Info */}
            <div
              className={`transition-all duration-1000 ease-out transform ${
                isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ 
                transitionDelay: isVisible ? '1.8s' : '0s' 
              }}
            >
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Based in India</p>
                  <p className="text-slate-400 text-sm">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-10"
            }`}
            style={{ 
              transitionDelay: isVisible ? '1.0s' : '0s' 
            }}
          >
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />

              <h3 className="text-2xl font-bold text-white mb-6">
                Send a{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Message
                </span>
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-400" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg transform ${
                    isLoading
                      ? 'bg-slate-600 cursor-not-allowed shadow-slate-500/25'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-20 text-center transition-all duration-1000 ease-out transform ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
          style={{ 
            transitionDelay: isVisible ? '2.2s' : '0s' 
          }}
        >
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-slate-300 text-lg mb-6">
              Let's collaborate and create something extraordinary together. I'm just a message away!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['AI Development', 'Web Applications', 'Mobile Apps', 'Consulting'].map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 text-sm font-medium transition-all duration-700 ease-out transform ${
                    isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${2.5 + index * 0.1}s` : '0s' 
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 0.8s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;