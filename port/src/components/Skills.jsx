import React, { useState, useEffect, useRef } from "react";
import { Code, Brain, BarChart, Globe, GitBranch, Database, Github, Monitor, GitFork, Cpu } from "lucide-react";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const sectionRef = useRef(null);

  const skills = {
    "Programming Languages": {
      items: ["Python", "Java", "C++", "JavaScript"],
      percentages: [70, 60, 80, 75],
      colors: ["#FF6B6B", "#FFFF00", "#FF69B4", "#32CD32"],
      gradient: "from-blue-600 via-blue-500 to-purple-600",
      cardBg: "bg-gradient-to-br from-blue-900/20 to-purple-900/20",
      borderColor: "border-blue-500/30",
      hoverShadow: "hover:shadow-blue-500/20"
    },
    Frontend: {
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
      percentages: [88, 92, 85, 80],
      colors: ["#FFA500", "#800080", "#4682B4", "#4B0082"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      cardBg: "bg-gradient-to-br from-emerald-900/20 to-cyan-900/20",
      borderColor: "border-emerald-500/30",
      hoverShadow: "hover:shadow-emerald-500/20"
    },
    Backend: {
      items: ["Node.js", "Express.js", "Flask API", "RESTful APIs"],
      percentages: [60, 60, 70, 80],
      colors: ["#FF0000", "#808080", "#EE82EE", "#A52A2A"],
      gradient: "from-orange-500 via-red-500 to-pink-500",
      cardBg: "bg-gradient-to-br from-orange-900/20 to-pink-900/20",
      borderColor: "border-orange-500/30",
      hoverShadow: "hover:shadow-orange-500/20"
    },
    Databases: {
      items: ["MongoDB", "MySQL", "ChromaDB", "Firebase"],
      percentages: [60, 40, 60, 55],
      colors: ["#32CD32", "#FF69B4", "#FFFF00", "#FF6B6B"],
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      cardBg: "bg-gradient-to-br from-violet-900/20 to-indigo-900/20",
      borderColor: "border-violet-500/30",
      hoverShadow: "hover:shadow-violet-500/20"
    },
    "AI/ML": {
      items: ["Gen AI", "Machine Learning", "Data Science", "RAG Architecture"],
      percentages: [70, 70, 50, 60],
      colors: ["#4682B4", "#FFA500", "#800080", "#32CD32"],
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      cardBg: "bg-gradient-to-br from-rose-900/20 to-fuchsia-900/20",
      borderColor: "border-rose-500/30",
      hoverShadow: "hover:shadow-rose-500/20"
    }
  };

  const skillIcons = {
    "Programming Languages": <Code className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
    Frontend: <Globe className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />,
    Backend: <GitBranch className="w-6 h-6 md:w-8 md:h-8 text-orange-400" />,
    Databases: <Database className="w-6 h-6 md:w-8 md:h-8 text-violet-400" />,
    "AI/ML": <Brain className="w-6 h-6 md:w-8 md:h-8 text-rose-400" />
  };

  const tools = [
    { name: "VS Code", icon: <Monitor className="w-6 h-6 text-blue-500" /> },
    { name: "GitHub", icon: <Github className="w-6 h-6 text-gray-800 dark:text-gray-200" /> },
    { name: "Git", icon: <GitFork className="w-6 h-6 text-orange-500" /> },
    { name: "Eclipse", icon: <Cpu className="w-6 h-6 text-purple-500" /> },
    { name: "PyCharm", icon: <Code className="w-6 h-6 text-green-500" /> },
    { name: "Jupyter", icon: <Brain className="w-6 h-6 text-yellow-500" /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
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
  }, []);

  const handleCardClick = (category) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const emojiAnimationStyle = {
    display: 'inline-block',
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    transformOrigin: 'center',
    transform: isVisible 
      ? 'scale(1) rotate(0deg)' 
      : 'scale(0) rotate(-180deg)',
    opacity: isVisible ? 1 : 0,
    transitionDelay: '0.2s'
  };

  const backgroundElementStyle = (index) => ({
    transition: 'all 2s ease-out',
    transitionDelay: `${index * 0.3}s`,
    transform: isVisible ? 'scale(1)' : 'scale(0)',
    opacity: isVisible ? 1 : 0
  });

  return (
    <>
      <style jsx global>{`
        .card-flip-container {
          perspective: 1000px;
          width: 100%;
          min-height: 380px;
        }
        
        .card-flip-inner {
          position: relative;
          width: 100%;
          height: 380px;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        
        .card-flip-inner.flipped {
          transform: rotateY(180deg);
        }
        
        .card-flip-front, .card-flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        
        .card-flip-back {
          transform: rotateY(180deg);
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(30px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }
        
        .tool-icon {
          transition: all 0.3s ease;
        }
        
        .tool-icon:hover {
          transform: translateY(-5px) scale(1.1);
        }
        
        @media (max-width: 768px) {
          .card-flip-container {
            perspective: 800px;
            height: 360px;
          }
        }
      `}</style>
      
      <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-16 md:pt-24 pb-10 px-4 md:px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-emerald-500/5 rounded-full blur-3xl"
            style={backgroundElementStyle(0)}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-blue-500/5 rounded-full blur-3xl"
            style={backgroundElementStyle(1)}
          />
          <div 
            className="absolute top-3/4 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-violet-500/5 rounded-full blur-3xl"
            style={backgroundElementStyle(2)}
          />
        </div>

        <div className="max-w-10xl mx-auto relative z-10">
          {/* Header with Animated Emoji and Title */}
          <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-20 scale-90'
          }`}>
            {/* Animated Emoji */}
            <div className="mb-4 md:mb-6">
              <span style={emojiAnimationStyle}>🧠</span>
            </div>
            
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                <span className="text-white">Skill </span>
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  sets
                </span>
              </h2>
            </div>
            <p className={`text-slate-400 text-lg md:text-xl mt-4 md:mt-6 max-w-3xl mx-auto leading-relaxed transition-all duration-800 transform px-4 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '1s' }}>
              Explore my technical expertise across various domains of software development and emerging technologies.
            </p>
          </div>

          {/* Animated Underline */}
          <div className={`relative mx-auto transition-all duration-1000 ${
              isVisible ? 'w-24 md:w-32 opacity-100' : 'w-0 opacity-0'
            }`} style={{ transitionDelay: '0.6s' }}>
            <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 w-full h-full transition-transform duration-2000 ${
                isVisible ? 'translate-x-full' : '-translate-x-full'
              }`} style={{ transitionDelay: '0.8s' }} />
            </div>
            <p><br/></p>
          </div>

          {/* Floating Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12">
            {[
              { label: 'Technologies', value: '20+' },
              { label: 'Skill Categories', value: '5' },
              { label: 'Years Experience', value: '3+' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-800 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-90'
                }`}
                style={{ 
                  transitionDelay: `${1.2 + (index * 0.2)}s`,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Skills Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {Object.entries(skills).map(([category, data], index) => (
              <div
                key={category}
                className={`transition-all duration-1000 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
                    : 'opacity-0 translate-y-16 scale-95 rotate-3'
                }`}
                style={{ transitionDelay: `${1.8 + (index * 0.15)}s` }}
              >
                <div className="card-flip-container h-full">
                  <div 
                    className={`card-flip-inner ${flippedCards.has(category) ? 'flipped' : ''}`}
                    onClick={() => handleCardClick(category)}
                  >
                    {/* Front Side */}
                    <div className="card-flip-front">
                      <div className={`${data.cardBg} backdrop-blur-sm border ${data.borderColor} rounded-2xl p-4 md:p-6 h-full transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl ${data.hoverShadow} relative overflow-hidden group`}>
                        {/* Animated Gradient Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                        <div className="absolute inset-0 opacity-10">
                          <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-20`} />
                          <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                                             radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                                             radial-gradient(circle at 40% 40%, rgba(120, 255, 198, 0.3) 0%, transparent 50%)`
                          }} />
                        </div>

                        <div className="relative z-10 h-full flex flex-col">
                          <div className="flex items-center mb-4 md:mb-6">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${data.gradient} bg-opacity-20`}>
                              {skillIcons[category]}
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-white ml-3 group-hover:text-emerald-300 transition-colors duration-300">
                              {category}
                            </h3>
                          </div>
                          
                          <div className="flex-1 space-y-2 md:space-y-3">
                            {data.items.map((skill, skillIndex) => (
                              <div
                                key={skill}
                                className={`relative bg-slate-700/50 text-slate-300 px-3 md:px-4 py-2 md:py-3 rounded-lg text-sm font-medium border border-slate-600/30 hover:bg-slate-600/50 transition-all duration-300 transform hover:translate-x-2 group overflow-hidden ${
                                  isVisible ? 'animate-slide-in-right' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${2.2 + (index * 0.2) + (skillIndex * 0.1)}s` }}
                              >
                                <div className={`absolute inset-0 bg-gradient-to-r ${data.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                  {skill}
                                </span>
                                <div className="absolute bottom-0 left-0 h-1 bg-current opacity-20 group-hover:opacity-40 transition-all duration-300" 
                                  style={{ width: `${data.percentages[skillIndex]}%` }} />
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-4 flex items-center justify-between">
                            <div className="text-xs text-slate-400 opacity-70">
                              {data.percentages.reduce((a, b) => a + b, 0) / data.percentages.length}% avg
                            </div>
                            <div className="flex items-center space-x-2">
                              <BarChart className="w-4 h-4 text-slate-400" />
                              <span className="text-xs text-slate-400 opacity-70 hidden md:inline">Click for insights</span>
                            </div>
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        {/* Subtle shine effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                      </div>
                    </div>

                    {/* Back Side with Bar Chart */}
                    <div className="card-flip-back">
                      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 md:p-6 h-full relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5">
                          <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient}`} />
                        </div>

                        <div className="relative z-10 h-full flex flex-col">
                          <div className="flex items-center mb-3 md:mb-4">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${data.gradient} bg-opacity-10`}>
                              {skillIcons[category]}
                            </div>
                            <div className="ml-3">
                              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                {category}
                              </h3>
                              <span className="text-xs md:text-sm font-normal text-gray-600">Proficiency</span>
                            </div>
                          </div>
                          
                          <div className="flex-1 min-h-0">
                            <Bar
                              data={{
                                labels: data.items.map(item => {
                                  return window.innerWidth < 768 && item.length > 8 
                                    ? item.substring(0, 6) + '...' 
                                    : item;
                                }),
                                datasets: [
                                  {
                                    label: 'Proficiency (%)',
                                    data: data.percentages,
                                    backgroundColor: data.colors.map(color => color + 'CC'),
                                    borderColor: data.colors,
                                    borderWidth: 2,
                                    borderRadius: 6,
                                    borderSkipped: false,
                                  }
                                ]
                              }}
                              options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                  legend: { display: false },
                                  tooltip: {
                                    backgroundColor: '#1e293b',
                                    titleColor: '#e2e8f0',
                                    bodyColor: '#e2e8f0',
                                    borderColor: data.colors[0],
                                    borderWidth: 1,
                                    cornerRadius: 8,
                                    callbacks: {
                                      label: function(context) {
                                        return `${context.parsed.y}% proficiency`;
                                      }
                                    }
                                  },
                                },
                                scales: {
                                  x: {
                                    ticks: { 
                                      color: '#374151',
                                      font: { 
                                        weight: 'bold',
                                        size: window.innerWidth < 768 ? 10 : 12
                                      }
                                    },
                                    grid: { 
                                      color: '#e5e7eb',
                                      lineWidth: 1
                                    }
                                  },
                                  y: {
                                    beginAtZero: true,
                                    max: 100,
                                    ticks: { 
                                      color: '#374151',
                                      font: { 
                                        size: window.innerWidth < 768 ? 10 : 12
                                      },
                                      callback: function(value) {
                                        return value + '%';
                                      }
                                    },
                                    grid: { 
                                      color: '#e5e7eb',
                                      lineWidth: 1
                                    }
                                  }
                                },
                                animation: {
                                  duration: 1500,
                                  easing: 'easeOutQuart'
                                }
                              }}
                            />
                          </div>
                          
                          <div className="mt-2 md:mt-4 text-center">
                            <span className="text-xs md:text-sm text-gray-600">
                              Average: {Math.round(data.percentages.reduce((a, b) => a + b, 0) / data.percentages.length)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        {/* Tools Section */}
<div className={`max-w-4xl mx-auto transition-all duration-1000 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
}`} style={{ transitionDelay: '2.5s' }}>
  <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
    {/* Animated Gradient Border */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
    
    <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-6 md:mb-8">
      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Development Tools
      </span>
    </h3>
    
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-6">
      {tools.map((tool, index) => (
        <div 
          key={tool.name}
          className={`flex flex-col items-center transition-all duration-700 ease-out transform ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-90'
          }`}
          style={{ transitionDelay: `${2.7 + (index * 0.1)}s` }}
        >
          <div className="p-3 md:p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 mb-2 hover:bg-slate-700/70 hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group relative overflow-hidden">
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {tool.icon}
          </div>
          <span className="text-sm text-slate-300 group-hover:text-emerald-300 transition-colors duration-300">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
    
    {/* Subtle shine effect */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-200%] hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
  </div>
</div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;