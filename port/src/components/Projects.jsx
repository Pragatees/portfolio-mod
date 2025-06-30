import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const projects = [
  {
    title: "JobTrack AI",
    year: "2025",
    description: "An AI-powered job application tracking platform that helps users manage applications efficiently. It includes intelligent resume analysis, automatic cover letter generation, and provides personalized interview tips using machine learning models.",
    tech: [
      { name: "MERN Stack", percentage: 40, color: "#3B82F6" },
      { name: "Flask API", percentage: 25, color: "#F97316" },
      { name: "Gemini API", percentage: 20, color: "#8B5CF6" },
      { name: "AI/ML", percentage: 15, color: "#10B981" },
    ],
    category: "AI Platform",
    color: "from-blue-500 to-purple-600",
    github: "https://github.com/Pragatees/AI_JOB_APP",
    video: "https://drive.google.com/file/d/1MuNgnu_ekbu9Qytu7vnaS3YEFdxJhQDg/preview",
    emoji: "🤖"
  },
  {
    title: "LexiLingua",
    year: "2025",
    description: "An advanced legal document analyzer powered by AI, designed to understand and process multi-lingual legal texts in Indian languages. Features include intelligent risk assessment, multi-language support, and an interactive voice-based legal assistant.",
    tech: [
      { name: "Streamlit", percentage: 30, color: "#F59E0B" },
      { name: "LLama GROQ (70B)", percentage: 35, color: "#EC4899" },
      { name: "Python", percentage: 25, color: "#EF4444" },
      { name: "NLP", percentage: 10, color: "#0EA5E9" },
    ],
    category: "Legal AI",
    color: "from-emerald-500 to-cyan-500",
    github: "https://github.com/Pragatees/LEXILINGUA_AI_Powered_legal_document_analyzer_and_bot",
    video: "https://drive.google.com/file/d/1TAxy9H_p6UvS2_LMq1E0vKNIh9ExiHeh/preview",
    emoji: "⚖️"
  },
  {
    title: "Type Game",
    year: "2024",
    description: "A fun and interactive web-based application to enhance typing speed and accuracy. It features customizable themes, real-time performance metrics, and global leaderboards to encourage competition and improve skills.",
    tech: [
      { name: "MongoDB", percentage: 20, color: "#84CC16" },
      { name: "Express Js", percentage: 25, color: "#EAB308" },
      { name: "React Js", percentage: 35, color: "#7C3AED" },
      { name: "Node Js", percentage: 20, color: "#D946EF" },
    ],
    category: "Typing Game",
    color: "from-orange-500 to-pink-500",
    github: "https://github.com/Pragatees/TYPE",
    video: "https://drive.google.com/file/d/1orqGBaN6-_jsLceahFXQ7HNTz76l81Cj/preview",
    emoji: "⌨️"
  },
  {
    title: "SkillForgeIQ",
    year: "2025",
    description: "A dynamic and responsive portfolio platform that showcases an individual's skills, projects, and achievements. It includes an AI-powered chatbot for real-time interaction and feedback, making it ideal for personal branding.",
    tech: [
      { name: "React Js", percentage: 40, color: "#0F766E" },
      { name: "Tailwind CSS", percentage: 25, color: "#22C55E" },
      { name: "Gemini API", percentage: 20, color: "#A855F7" },
      { name: "GSAP", percentage: 15, color: "#E11D48" },
    ],
    category: "Portfolio",
    color: "from-cyan-500 to-teal-500",
    github: "https://github.com/Pragatees/SkillForgeIQ",
    video: "https://drive.google.com/file/d/1CLCs5azjqjEbdx_JN-4dPQ7qU25KrRPM/preview",
    emoji: "💼"
  },
  {
    title: "Voice Tide",
    year: "2024",
    description: "A real-time news application that delivers personalized news updates through both voice and manual inputs. It leverages speech recognition and APIs to enhance user engagement and streamline information access.",
    tech: [
      { name: "Streamlit", percentage: 40, color: "#BE185D" },
      { name: "Speech Recognition", percentage: 35, color: "#A21CAF" },
      { name: "News API", percentage: 25, color: "#9333EA" },
    ],
    category: "News App",
    color: "from-violet-500 to-fuchsia-500",
    github: "https://github.com/Pragatees/Voice_Tide_Ride_Wave_of_News",
    video: "https://drive.google.com/file/d/1eWubIGn7gIYULuN89lQfHuOcm795K6oA/preview",
    emoji: "📰"
  },
  {
    title: "WebExtractIQ",
    year: "2025",
    description: "An AI-based web content extractor that intelligently summarizes large-scale data and creates a searchable knowledge base. It uses GROQ Llama AI and BeautifulSoup to process, clean, and represent structured insights from unstructured web pages.",
    tech: [
      { name: "Streamlit", percentage: 25, color: "#10B981" },
      { name: "GROQ Llama AI", percentage: 30, color: "#7E22CE" },
      { name: "Python", percentage: 25, color: "#EA580C" },
      { name: "BS4 & Requests", percentage: 20, color: "#0284C7" },
    ],
    category: "Web Data AI",
    color: "from-indigo-500 to-blue-600",
    github: "https://github.com/Pragatees/web-summarizer",
    video: "https://drive.google.com/file/d/10wistZ5C9dkTnmZEZE40z79A2PvFmu-p/preview",
    emoji: "🔍"
  },
  {
    title: "Turf Hub",
    year: "2024",
    description: "A feature-rich turf booking platform that allows users to reserve sports venues effortlessly. It includes a user-friendly interface, real-time availability, and a robust booking management system for both users and administrators.",
    tech: [
      { name: "MongoDB", percentage: 20, color: "#16A34A" },
      { name: "Express Js", percentage: 25, color: "#F43F5E" },
      { name: "React Js", percentage: 35, color: "#E879F9" },
      { name: "Node Js", percentage: 20, color: "#6D28D9" },
    ],
    category: "Booking Platform",
    color: "from-teal-500 to-blue-600",
    github: "https://github.com/Pragatees/TURF-HUB",
    video: "https://drive.google.com/file/d/1p3nkSNMf-t1h-v-lElGicxbvfiNCNkSW/preview",
    emoji: "⚽"
  },
  {
    title: "Task Manager",
    year: "2024",
    description: "A minimalist task management tool for efficiently organizing, tracking, and updating daily activities. It offers a clean UI and is ideal for personal productivity, supporting CRUD operations and task filtering.",
    tech: [
      { name: "MongoDB", percentage: 20, color: "#FB923C" },
      { name: "Express Js", percentage: 25, color: "#F87171" },
      { name: "React Js", percentage: 35, color: "#60A5FA" },
      { name: "Node Js", percentage: 20, color: "#A3E635" },
    ],
    category: "Productivity",
    color: "from-red-500 to-rose-500",
    github: "https://github.com/Pragatees/TASK_MANAGER",
    video: "https://drive.google.com/file/d/1qRNcrlzWy44x7FbwbIOy_TLZSOESVWUQ/preview",
    emoji: "📝"
  },
];

const Projects = () => {
  const projectsRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  // Calculate stats for the stats section
  const projectCount = projects.length;
  const uniqueTech = [...new Set(projects.flatMap(project => project.tech.map(tech => tech.name)))].length;
  const years = projects.map(project => parseInt(project.year));
  const yearsActive = Math.max(...years) - Math.min(...years) + 1;

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", type: "spring", stiffness: 100 },
    },
  };

  // Emoji animation
  const emojiVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 150 },
    },
  };

  // Description animation
  const descVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
    },
  };

  // Underline animation
  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: 128,
      transition: { delay: 1.2, duration: 1, ease: "easeOut" },
    },
  };

  // Stats animation variants
  const statsVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.6 + index * 0.2,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  // Background elements animation
  const backgroundVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: index * 0.3, duration: 2, ease: "easeOut" },
    }),
  };

  const getPieChartData = (tech) => {
    return {
      labels: tech.map((t) => t.name),
      datasets: [
        {
          data: tech.map((t) => t.percentage),
          backgroundColor: tech.map((t) => `${t.color}CC`),
          borderColor: tech.map((t) => t.color),
          borderWidth: 2,
          hoverOffset: 15,
          borderRadius: 4,
        },
      ],
    };
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-emerald-500/5 rounded-full blur-3xl"
          variants={backgroundVariants}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-blue-500/5 rounded-full blur-3xl"
          variants={backgroundVariants}
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.div
          className="absolute top-3/4 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-violet-500/5 rounded-full blur-3xl"
          variants={backgroundVariants}
          custom={2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>

      <div className="max-w-10xl mx-auto relative z-10" ref={projectsRef}>
        {/* Animated Header */}
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-block mb-6"
            variants={emojiVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="text-6xl">🚀</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 font-inter">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <motion.p
            className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-inter px-4"
            variants={descVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Explore my technical expertise through innovative projects spanning AI, web development, and more.
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto mt-8 rounded-full"
            variants={underlineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </motion.div>

        {/* Floating Stats */}
        <div className="flex justify-center gap-8 mb-16">
          {[
            { label: "Projects", value: `${projectCount}+` },
            { label: "Technologies", value: `${uniqueTech}+` },
            { label: "Years Active", value: `${yearsActive}+` },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              custom={index}
              variants={statsVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const [isFlipped, setIsFlipped] = useState(false);

            return (
              <motion.div
                key={index}
                className="group perspective-1000 h-[600px] w-full cursor-pointer"
                initial={{ opacity: 0, translateY: 20, scale: 0.95 }}
                animate={isInView ? { 
                  opacity: 1, 
                  translateY: 0, 
                  scale: 1,
                  transition: { duration: 0.6, delay: 0.8, ease: 'easeOut' }
                } : { opacity: 0, translateY: 20, scale: 0.95 }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Front Side */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br ${project.color} backdrop-blur-sm border ${project.color.replace('from-', 'border-').replace(' to-', '-').replace(/-\d+/g, '-500/30')} p-0.5`}>
                    <div className="bg-slate-900/95 rounded-2xl h-full flex flex-col relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                      {/* Video Section */}
                      <motion.div 
                        className="relative overflow-hidden rounded-t-2xl flex-shrink-0"
                        style={{ height: '40%' }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { 
                          opacity: 1, 
                          scale: 1,
                          transition: { duration: 0.6, delay: 1.0, ease: 'easeOut' }
                        } : { opacity: 0, scale: 0.95 }}
                      >
                        {project.video ? (
                          <iframe
                            className="w-full h-full object-cover rounded-t-2xl hover:scale-105 transition-transform duration-500"
                            src={project.video}
                            title={`${project.title} Demo`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          ></iframe>
                        ) : (
                          <div className="h-full bg-gradient-to-br from-slate-800 to-gray-900 flex items-center justify-center rounded-t-2xl border-b border-slate-700/30">
                            <div className="text-center">
                              <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center mb-2 mx-auto opacity-60`}>
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <p className="text-slate-400 text-sm font-inter">Preview Coming Soon</p>
                            </div>
                          </div>
                        )}
                      </motion.div>

                      {/* Title and Description */}
                      <motion.div 
                        className="px-6 py-4 flex flex-col"
                        style={{ height: '30%' }}
                        initial={{ opacity: 0, translateY: 15 }}
                        animate={isInView ? { 
                          opacity: 1, 
                          translateY: 0,
                          transition: { duration: 0.6, delay: 1.2, ease: 'easeOut' }
                        } : { opacity: 0, translateY: 15 }}
                      >
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-inter text-center leading-tight mb-2`}>
                          {project.title}
                          <span className="block text-sm font-normal text-slate-500 mt-1">{project.year}</span>
                        </h3>
                        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
                          <p className="text-slate-400 text-sm leading-relaxed font-inter pr-2">
                            {project.description}
                          </p>
                        </div>
                      </motion.div>

                      {/* Tech Stack */}
                      <motion.div 
                        className="px-6 py-3 border-t border-slate-700/30"
                        style={{ height: '20%' }}
                        initial={{ opacity: 0, translateY: 15 }}
                        animate={isInView ? { 
                          opacity: 1, 
                          translateY: 0,
                          transition: { duration: 0.6, delay: 1.4, ease: 'easeOut' }
                        } : { opacity: 0, translateY: 15 }}
                      >
                        <h4 className="text-xs font-semibold text-slate-300 mb-2 font-inter uppercase tracking-wider">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-2.5 py-1 bg-slate-800/70 text-slate-300 rounded-full text-xs font-medium font-inter border border-slate-700/50 group-hover:bg-slate-700/70 transition-all duration-300 hover:scale-105"
                              style={{ backgroundColor: `${tech.color}33`, borderColor: `${tech.color}66` }}
                              initial={{ opacity: 0, translateX: 10 }}
                              animate={isInView ? { 
                                opacity: 1, 
                                translateX: 0,
                                transition: { duration: 0.6, delay: 1.4, ease: 'easeOut' }
                              } : { opacity: 0, translateX: 10 }}
                            >
                              {tech.name}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Category and GitHub */}
                      <motion.div 
                        className="px-6 py-3 border-t border-slate-700/30 flex items-center justify-between"
                        style={{ height: '10%' }}
                        initial={{ opacity: 0, translateY: 15 }}
                        animate={isInView ? { 
                          opacity: 1, 
                          translateY: 0,
                          transition: { duration: 0.6, delay: 1.6, ease: 'easeOut' }
                        } : { opacity: 0, translateY: 15 }}
                      >
                        <span className={`px-3 py-1.5 bg-gradient-to-r ${project.color} text-white rounded-full font-medium font-inter text-xs whitespace-nowrap shadow-md`}>
                          {project.category}
                        </span>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-800/70 hover:bg-slate-700/70 rounded-full transition-all duration-300 hover:scale-110 border border-slate-700/50 shadow-sm"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-white p-0.5">
                    <div className="bg-white backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col border border-gray-200 relative overflow-hidden shadow-lg">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5`} />
                      <div className="absolute top-4 left-4 text-3xl">
                        {project.emoji}
                      </div>
                      
                      {/* Back Side Header */}
                      <motion.div 
                        className="text-center mb-6 mt-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.6, delay: 1.0 }
                        } : { opacity: 0, y: -20 }}
                      >
                        <h3 className="text-2xl font-bold text-gray-900 font-inter mb-2">
                          {project.title}
                        </h3>
                        <p className={`text-sm font-medium ${project.color.replace('from-', 'text-').replace(' to-', '-').replace(/-\d+/g, '-500')}`}>
                          Tech Stack Breakdown
                        </p>
                      </motion.div>

                      {/* Pie Chart */}
                      <motion.div 
                        className="flex-grow flex flex-col justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { 
                          opacity: 1, 
                          scale: 1,
                          transition: { duration: 0.6, delay: 1.2 }
                        } : { opacity: 0, scale: 0.8 }}
                      >
                        <div className="h-64 mb-4 relative">
                          <Pie 
                            data={getPieChartData(project.tech)} 
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: {
                                legend: {
                                  position: 'bottom',
                                  labels: {
                                    color: '#374151',
                                    font: { size: 12, family: 'Inter', weight: '500' },
                                    padding: 20,
                                    usePointStyle: true,
                                    pointStyle: 'circle',
                                  },
                                },
                                tooltip: {
                                  callbacks: { 
                                    label: (context) => `${context.label}: ${context.parsed}%`,
                                    labelColor: (context) => ({
                                      borderColor: context.dataset.borderColor[context.dataIndex],
                                      backgroundColor: context.dataset.backgroundColor[context.dataIndex],
                                      borderWidth: 2,
                                      borderRadius: 2,
                                    }),
                                  },
                                  titleColor: '#111827',
                                  bodyColor: '#111827',
                                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                  borderColor: 'rgba(0, 0, 0, 0.1)',
                                  borderWidth: 1,
                                  bodyFont: { family: 'Inter', size: 12 },
                                  titleFont: { family: 'Inter', size: 13, weight: 'bold' },
                                  padding: 12,
                                  cornerRadius: 8,
                                  displayColors: true,
                                  boxPadding: 6,
                                },
                              },
                              animation: {
                                animateScale: true,
                                animateRotate: true,
                                duration: 1200,
                                easing: 'easeOutQuart',
                              },
                              cutout: '60%',
                            }} 
                          />
                        </div>
                      </motion.div>

                      {/* Back Side Footer */}
                      <motion.div 
                        className="flex justify-between items-center pt-4 border-t border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.6, delay: 1.4 }
                        } : { opacity: 0, y: 20 }}
                      >
                        <button 
                          onClick={() => setIsFlipped(false)}
                          className={`px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white text-sm font-medium font-inter shadow-md hover:shadow-lg transition-all duration-300`}
                        >
                          View Project
                        </button>
                        <div className="text-xs text-gray-500 font-medium font-inter">
                          Click chart for details
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-20 text-center px-4"
          initial={{ opacity: 0, translateY: 20 }}
          animate={isInView ? { 
            opacity: 1, 
            translateY: 0,
            transition: { duration: 0.6, delay: 1.8, ease: 'easeOut' }
          } : { opacity: 0, translateY: 20 }}
        >
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-slate-800/50 to-gray-700/50 backdrop-blur-sm rounded-full border border-slate-600/30 shadow-lg">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <span className="text-slate-400 text-sm font-medium font-inter">More projects coming soon!</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thumb-slate-600::-webkit-scrollbar-thumb {
          background-color: #475569;
          border-radius: 4px;
        }
        .scrollbar-track-slate-800::-webkit-scrollbar-track {
          background-color: #1e293b;
        }
      `}</style>
    </section>
  );
};

export default Projects;