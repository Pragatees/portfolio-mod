import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const achievements = [
    {
      title: 'LeetCode Expert',
      description: 'Achieved a maximum contest rating of 1630 with over 541 problems solved.',
      icon: '💻',
      year: '2024',
      category: 'Coding',
    },
    {
      title: 'CodeChef Specialist',
      description: 'Earned a rating of 1244 with over 200 problems solved.',
      icon: '🍳',
      year: '2024',
      category: 'Coding',
    },
    {
      title: 'HackerRank Star',
      description: 'Secured 3⭐ in Python and 2⭐ in Java, C, and SQL.',
      icon: '🌟',
      year: '2023',
      category: 'Coding',
    },
    {
      title: 'Postman API Expert',
      description: 'Awarded the API Fundamentals Student Expert Badge.',
      icon: '📬',
      year: '2024',
      category: 'API Development',
    },
    {
      title: 'SAP Hackathon Finalist',
      description: 'Shortlisted twice for national-level offline rounds.',
      icon: '🏆',
      year: '2023',
      category: 'Hackathon',
    },
  ];

  const categoryColors = {
    Coding: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/50 text-emerald-300',
    'API Development': 'from-blue-500/20 to-indigo-500/20 border-blue-500/50 text-blue-300',
    Hackathon: 'from-teal-500/20 to-cyan-500/20 border-teal-500/50 text-teal-300',
  };

  // Header animation variants
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Trophy icon animation
  const trophyVariants = {
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

  // Stats animation variants
  const statsVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.6 + (index * 0.2),
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 120
      }
    })
  };

  // Achievement card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: -80,
      scale: 0.9,
      rotateY: -20
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        delay: 1.0 + (index * 0.15),
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
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
            <span className="text-8xl">🏆</span>
          </motion.div>
          
          <h2 className="text-6xl font-bold text-white mb-6">
            <span className="text-white">Achiev</span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              ements
            </span>
          </h2>
          
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of my competitive coding achievements, hackathon successes, and technical recognitions.
          </p>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          />
        </motion.div>

        {/* Floating Stats */}
        <div className="flex justify-center gap-8 mb-16">
          {[
            { label: 'Achievements', value: '5+' },
            { label: 'Coding Platforms', value: '3' },
            { label: 'Competitions', value: '10+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              custom={index}
              variants={statsVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievements List */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                scale: 1.02,
                y: -1,
                transition: { duration: 0.3 }
              }}
              className="group relative flex items-center p-6 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:border-emerald-500/50 transition-all duration-700 cursor-pointer"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Year Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 text-xs font-semibold bg-slate-900/80 text-emerald-400 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                  {achievement.year}
                </span>
              </div>

              {/* Icon and Content */}
              <div className="flex items-center space-x-4 w-full">
                <motion.span 
                  className="text-4xl"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {achievement.icon}
                </motion.span>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-400 mb-3 font-medium group-hover:text-slate-300 transition-colors duration-300">
                    {achievement.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span
                      className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${categoryColors[achievement.category]} backdrop-blur-sm border transition-all duration-300`}
                    >
                      {achievement.category}
                    </span>
                    <span className="text-xs text-emerald-400 font-medium">✓ Recognized</span>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;