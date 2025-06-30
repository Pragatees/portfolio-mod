import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import Dsa from "./things/DSA.png";
import Genai from "./things/genai.png";
import Databr from "./things/databricks.png";
import Java from "./things/java.png";
import Nptel from "./things/nptel.png";
import Python from "./things/python.png";

const certificates = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    category: "Data Science",
    image: Nptel,
    year: "2024",
    skills: ["Python", "Data Analysis", "Statistics"],
  },
  {
    title: "Crash Course on Python",
    issuer: "Coursera (Google)",
    category: "Programming",
    image: Python,
    year: "2023",
    skills: ["Python", "Automation", "Scripting"],
  },
  {
    title: "Java Programming",
    issuer: "Udemy",
    category: "Backend",
    image: Java,
    year: "2023",
    skills: ["Java", "OOP"],
  },
  {
    title: "Databricks Academy Accreditation",
    issuer: "Databricks (2024)",
    category: "Big Data",
    image: Databr,
    year: "2024",
    skills: ["Spark", "ML", "Data Engineering"],
  },
  {
    title: "Generative AI Accreditation",
    issuer: "Databricks (2024)",
    category: "Gen AI",
    image: Genai,
    year: "2024",
    skills: ["LLMs", "Prompt Engineering", "AI Ethics"],
  },
  {
    title: "Master in DSA using C & C++",
    issuer: "Udemy",
    category: "DSA",
    image: Dsa,
    year: "2023",
    skills: ["Algorithms", "Data Structures", "C++"],
  },
];

const CertificationsSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]));
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll("[data-index]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const categoryColors = {
    "Data Science": "from-emerald-500/20 to-teal-500/20 border-emerald-500/50 text-emerald-300",
    Programming: "from-slate-500/20 to-gray-500/20 border-slate-500/50 text-slate-300",
    Backend: "from-blue-500/20 to-indigo-500/20 border-blue-500/50 text-blue-300",
    "Big Data": "from-emerald-600/20 to-green-500/20 border-emerald-600/50 text-emerald-200",
    "Gen AI": "from-teal-500/20 to-cyan-500/20 border-teal-500/50 text-teal-300",
    DSA: "from-cyan-500/20 to-sky-500/20 border-cyan-500/50 text-cyan-300",
  };

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

  // Trophy icon animation
  const trophyVariants = {
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

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-8 relative overflow-hidden"
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
        {/* Animated Header */}
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-block mb-6"
            variants={trophyVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="text-6xl">🏅</span>
          </motion.div>
          <h2 className="text-6xl font-bold text-white mb-6">
            <span className="text-white">Certifi</span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              cations
            </span>
          </h2>
          <motion.p
            className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
            variants={descVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            A showcase of my continuous learning journey across Data Science, AI, Backend Development, and cutting-edge technologies.
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
            { label: "Certifications", value: "6+" },
            { label: "Technologies", value: "15+" },
            { label: "Years Learning", value: "3+" },
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

        {/* Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative overflow-hidden bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl hover:border-emerald-500/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
                visibleCards.has(index) ? "animate-slide-up opacity-100" : "opacity-0 translate-y-10"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 150}ms`,
                boxShadow:
                  hoveredCard === index
                    ? "0 20px 40px rgba(16, 185, 129, 0.15), 0 0 30px rgba(16, 185, 129, 0.1)"
                    : "none",
              }}
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Year Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 text-xs font-semibold bg-slate-900/80 text-emerald-400 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                  {cert.year}
                </span>
              </div>

              {/* Image with Overlay Effects */}
              <div className="relative h-52 bg-gradient-to-br from-slate-700/30 to-slate-800/30 overflow-hidden rounded-t-3xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Particles Effect */}
                {hoveredCard === index && (
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-emerald-400/60 rounded-full animate-float-particles"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-slate-400 mb-3 font-medium">{cert.issuer}</p>

                {/* Category Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${categoryColors[cert.category]} backdrop-blur-sm border transition-all duration-300`}
                  >
                    {cert.category}
                  </span>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/50 hover:border-emerald-500/50 hover:text-emerald-300 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-medium">✓ Verified Certificate</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold rounded-full hover:from-emerald-500 hover:to-teal-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                    View
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;