import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    title: "Gen AI Intern",
    company: "Global Knowledge",
    companyLink: "#",
    date: "Jun 2024 - July 2024",
    description:
      "Developed a RAG architecture for the document query system using ChromaDB as the vector database and Gemini API for content formatting.",
    skills: [
      { name: "Gen AI", color: "bg-emerald-500/20 text-emerald-400" },
      { name: "LLM's", color: "bg-teal-500/20 text-teal-400" },
      { name: "RAG Model", color: "bg-slate-700/20 text-slate-300" },
    ],
  },
  {
    title: "MERN Stack Intern",
    company: "RV Tech Learn",
    companyLink: "#",
    date: "Jan 2024 - Feb 2024",
    description:
      "Built responsive web applications using React.js and Node.js. Collaborated with the design team to implement user-friendly interfaces and optimize application performance.",
    skills: [
      { name: "React.js", color: "bg-emerald-500/20 text-emerald-400" },
      { name: "Node.js", color: "bg-teal-500/20 text-teal-400" },
      { name: "JavaScript", color: "bg-slate-700/20 text-slate-300" },
    ],
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Header animation variants
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Briefcase emoji animation variants (same pattern as trophy)
  const briefcaseVariants = {
    hidden: { 
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 150
      }
    }
  };

  // Timeline line animation
  const lineVariants = {
    hidden: { 
      height: 0,
      opacity: 0
    },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8,
      rotateY: -15
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: { 
        delay: 0.8 + (index * 0.3), 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    })
  };

  // Dot animation variants
  const dotVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: (index) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.0 + (index * 0.3),
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    })
  };

  // Background elements animation
  const backgroundVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: (index) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.3,
        duration: 2,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4 md:px-12 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
          variants={backgroundVariants}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"
          variants={backgroundVariants}
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.div 
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-slate-500/5 rounded-full blur-3xl"
          variants={backgroundVariants}
          custom={2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>

      <div className="max-w-10xl mx-auto relative z-10">
        {/* Section Title with Emoji */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-block mb-6"
            variants={briefcaseVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="text-8xl">💼</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Experience &{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Internships
            </span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            A showcase of my hands-on experience across diverse technologies and domains, gained through real-world internships and development work.
          </p>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 rounded-full"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ height: "calc(100% - 4rem)" }}
          />
          
          <div className="pl-20">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-20 relative">
                {/* Animated Dot */}
                <motion.span 
                  className="absolute left-[-74px] top-6 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-slate-800 shadow-lg shadow-emerald-500/50 z-10"
                  custom={index}
                  variants={dotVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />

                {/* Enhanced Card */}
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-xl p-8 md:p-10 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 cursor-pointer"
                >
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <a 
                        href={exp.companyLink} 
                        className="text-teal-400 text-lg hover:text-teal-300 hover:underline transition-colors duration-300 font-medium"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <span className="text-slate-300 text-lg font-medium bg-slate-700/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                      {exp.date}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 group-hover:text-slate-200 transition-colors duration-300">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className={`text-sm font-semibold px-4 py-2 rounded-full ${skill.color} border border-slate-600/50 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;