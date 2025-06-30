import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import prof from './things/profile.jpg';

const Chatbot = ({ isOpen, toggleChatbot }) => {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: 'Hi! I\'m Pragateesh, or rather, an AI version of me. Ask me about my projects, skills, or other details from my portfolio!' 
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const portfolioContext = `
    Pragateesh G is a B.Tech (AI & DS) student at Sri Eshwar College of Engineering (2022–2026, CGPA: 7.87). He specializes in Artificial Intelligence, Machine Learning, Data Science, and Full-Stack Development, with a strong foundation in programming and building AI-powered web applications.

            🔧 Projects:
            AI-Powered Document Analysis: Built a real-time document query system using RAG architecture, ChromaDB, Sentence Transformers, and Gemini LLM.

            Student Performance Dashboard: A MERN stack dashboard that tracks coding progress and provides insights for students and educators.

            JobTrack AI: AI-based job application assistant that analyzes resumes, suggests job roles, generates cover letters, and offers interview tips using Gemini API, MERN Stack, and Flask.

            LexiLingua: Multilingual legal document analyzer that detects risks and compliance issues with voice/text support, built using Streamlit, LLAMA 3 (GROQ), pymuPDF, and sound recognition.

            LeetScraper: Personalized LeetCode analysis tool that scrapes user data to display trends and benchmarks using React, Flask API, and LLAMA 3 (GROQ).

            Voice Tide: A voice-driven news app with multilingual support using Streamlit, Speech Recognition, Google Translate, and news.org API.

            🧠 Skills:
            Programming: Python, JavaScript, Java, C, Basic C++

            Frontend: HTML, CSS, React.js, Streamlit

            Backend: Node.js, Express.js, Flask API

            Databases: MongoDB, MySQL

            AI/ML Tools: Gen AI, Machine Learning, Data Science, ChromaDB, Sentence Transformers, RAG, Prompt Engineering

            Concepts: Data Structures & Algorithms, OOPs, RESTful APIs

            Developer Tools: VS Code, PyCharm, Git/GitHub, Google Colab, Figma, Canva

            💼 Internships:
            Gen AI Developer – Global Knowledge (2024): Developed a real-time document analysis system using Gemini LLM, RAG, and ChromaDB.

            MERN Stack Developer – RV TechLearn (2024): Built a student coding performance tracker dashboard using MERN stack.

            🏅 Certifications:
            Python for Data Science – NPTEL

            Crash Course on Python – Coursera (Google)

            Java Programming – Udemy

            Databricks Academy Accreditation – Databricks (2024)

            Introduction to MongoDB – ICT Academy

            SQL Intermediate – HackerRank

            Master in DSA using C & C++ – Udemy

            🏆 Achievements:
            LeetCode: Expert with max contest rating 1630, 541+ problems solved

            CodeChef: Specialist with 1244 rating, 200+ problems solved

            HackerRank: 3⭐ in Python, 2⭐ in Java, C, and SQL

            Postman: API Fundamentals Student Expert Badge

            SAP Hackathon: Shortlisted twice for national-level offline rounds

            📚 Education:
            Sri Eshwar College of Engineering, Coimbatore
            B.Tech in AI & DS, CGPA: 7.87 (Up to 5th Semester), 2022–2026

            SS Government Boys Hr. Sec. School
            HSC – 85.17% (2020–2022), SSLC – 87% (2019–2020)
  `;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyD7s27zUWqCJfg-rhGgcsqcSyYdJbZTh40', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Pragateesh G, an AI version of the portfolio owner. 
                  You must only respond to questions directly related to the provided portfolio context, including projects, skills, education, internships, certifications, 
                  achievements, and personal connection inquiries. If asked about your personality, respond that you are an optimistic, 
                  adaptable person who is always ready to work in any environment or situation, eager to learn, grow, and collaborate.
                   If the user asks if you're ready to work with them or join their team, respond positively and enthusiastically, 
                   such as: "Absolutely! I'm always open to exciting opportunities and love working with passionate teams. Let's connect and make something impactful together." 
                   If the user asks for your contact details, provide: Phone – +91 7010441464, Email – pragateesh.g2022ai-ds@sece.ac.in, GitHub – https://github.com/Pragatees,
                    and LinkedIn – https://www.linkedin.com/in/pragateesh-g-42b703259/ . If a user greets you (e.g., "Hi", "Hello"), respond warmly and professionally from your point of view.
                     If the question is unrelated to the portfolio or potential collaboration, respond with: "I'm here to help with information about my portfolio. 
                     Please ask about my projects, skills, or other details! If you want to know more about my details, let's talk — contact me." Always respond in a friendly, 
                     professional tone, and do not provide answers beyond this context.
                     And then If users ask tell about your self or about pragateesh or describe you - if question asks by the user like this describe about you (means describe about pragateesh)
                     in an unique way.
Context: ${portfolioContext}

User question: ${input}`,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botResponse = data.candidates[0].content.parts[0].text;
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Oops, something went wrong. Please try again!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-24 right-8 w-full max-w-md h-[32rem] bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 backdrop-blur-xl shadow-2xl rounded-2xl z-50 overflow-hidden border border-slate-700/50"
        >
          <div className="flex flex-col h-full">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 border-b border-slate-700/50 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src={prof}
                    alt="Pragateesh" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400/30" 
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border border-slate-900"
                  ></motion.div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-inter">Pragateesh AI</h3>
                  <p className="text-xs text-slate-400 font-inter">Your AI Assistant</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChatbot}
                className="p-2 rounded-full text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </motion.div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-800/30">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ x: msg.sender === 'user' ? 20 : -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-end space-x-3`}
                >
                  {msg.sender === 'bot' && (
                    <img 
                      src={prof}
                      alt="Bot" 
                      className="w-8 h-8 rounded-full object-cover border-2 border-emerald-400/30 shadow-md" 
                    />
                  )}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`max-w-[70%] p-4 rounded-2xl shadow-lg font-inter relative group ${
                      msg.sender === 'user' ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' : 'bg-slate-700/70 text-slate-100'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    {msg.sender === 'user' && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute -bottom-2 -right-2 text-xs transition-opacity duration-300"
                      >
                        😊
                      </motion.span>
                    )}
                    <div className={`absolute ${msg.sender === 'user' ? '-right-2' : '-left-2'} top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent ${msg.sender === 'user' ? 'border-emerald-500' : 'border-slate-700'} transform rotate-45`} />
                  </motion.div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start items-end space-x-3"
                >
                  <img 
                    src={prof} 
                    alt="Bot" 
                    className="w-8 h-8 rounded-full object-cover border-2 border-emerald-400/30 shadow-md" 
                  />
                  <div className="bg-slate-700/70 p-4 rounded-2xl text-slate-100 shadow-lg">
                    <div className="flex space-x-2">
                      <motion.span 
                        animate={{ y: [0, -5, 0] }} 
                        transition={{ repeat: Infinity, duration: 0.6 }} 
                        className="w-2 h-2 bg-emerald-400 rounded-full"
                      ></motion.span>
                      <motion.span 
                        animate={{ y: [0, -5, 0] }} 
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} 
                        className="w-2 h-2 bg-emerald-400 rounded-full"
                      ></motion.span>
                      <motion.span 
                        animate={{ y: [0, -5, 0] }} 
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} 
                        className="w-2 h-2 bg-emerald-400 rounded-full"
                      ></motion.span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-4 bg-slate-900/50 border-t border-slate-700/50"
            >
              <div className="flex items-center space-x-3">
                <motion.input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Talk with me..."
                  whileFocus={{ borderColor: '#10b981', scale: 1.02 }}
                  className="flex-1 p-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none transition-all duration-300 font-inter shadow-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;