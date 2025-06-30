import React, { useState, useRef, useEffect } from "react";
import { gsap } from 'gsap';
import Nav from './components/Navbar';
import Home from './components/Home';
import Exp from './components/Experience';
import Con from './components/Contact';
import Proj from './components/Projects';
import Cer from './components/Certificates';
import Ach from './components/Achievements';
import Skills from './components/Skills';
import Prof from './components/things/profile3.jpg';
import Chatbot from './components/Chatbot';
import Foot from './components/Footer';

function App() {
  const [showEntry, setShowEntry] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const particlesRef = useRef(null);
  const chatbotIconRef = useRef(null);

  useEffect(() => {
    if (showEntry) {
      const tl = gsap.timeline();
      
      tl.fromTo([leftPanelRef.current, rightPanelRef.current], 
        { 
          x: (index) => (index === 0 ? '-100%' : '100%'),
          opacity: 0 
        },
        { 
          x: '0%', 
          opacity: 1, 
          duration: 1.2, 
          ease: 'power3.out',
          stagger: 0.1
        }
      )
      .fromTo(titleRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          ease: 'back.out(1.7)' 
        }, 
        '-=0.5'
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: 'power2.out' 
        }, 
        '-=0.3'
      )
      .fromTo(imageRef.current,
        { 
          opacity: 0, 
          scale: 0.5, 
          rotation: -10,
          y: 50 
        },
        { 
          opacity: 1, 
          scale: 1, 
          rotation: 0,
          y: 0, 
          duration: 1, 
          ease: 'elastic.out(1, 0.75)' 
        }, 
        '-=0.8'
      )
      .fromTo(buttonRef.current,
        { 
          opacity: 0, 
          scale: 0.3, 
          y: 30 
        },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.6, 
          ease: 'back.out(2)' 
        }, 
        '-=0.4'
      );

      gsap.to(imageRef.current, {
        y: -10,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });

      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 1.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });

      createParticles();
    } else {
      if (chatbotIconRef.current) {
        gsap.fromTo(chatbotIconRef.current,
          { scale: 0, opacity: 0, rotation: -180 },
          { 
            scale: 1, 
            opacity: 1, 
            rotation: 0, 
            duration: 0.8, 
            ease: 'back.out(1.7)',
            delay: 0.5
          }
        );
        
        gsap.to(chatbotIconRef.current, {
          y: -8,
          duration: 2,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1
        });
      }
    }
  }, [showEntry]);

  const createParticles = () => {
    if (!particlesRef.current) return;
    particlesRef.current.innerHTML = '';
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(16, 185, 129, ${Math.random() * 0.5 + 0.3});
        border-radius: 50%;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      particlesRef.current.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        opacity: 0,
        duration: Math.random() * 3 + 2,
        ease: 'power1.out',
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2
      });
    }
  };

  const handleButtonClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const clickTl = gsap.timeline();
    clickTl
      .to(buttonRef.current, {
        scale: 0.85,
        duration: 0.15,
        ease: 'power2.inOut'
      })
      .to(buttonRef.current, {
        scale: 1.1,
        duration: 0.1,
        ease: 'power2.out'
      })
      .to(buttonRef.current, {
        boxShadow: '0 0 30px rgba(16, 185, 129, 0.8), 0 0 60px rgba(59, 130, 246, 0.6)',
        duration: 0.2,
        ease: 'power2.out'
      }, '-=0.1')
      .to(buttonRef.current, {
        scale: 0.9,
        duration: 0.1,
        ease: 'power2.inOut',
        onComplete: () => {
          const flash = document.createElement('div');
          flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(59,130,246,0.2) 50%, transparent 100%);
            pointer-events: none;
            z-index: 9999;
          `;
          document.body.appendChild(flash);

          gsap.fromTo(flash, 
            { opacity: 0 },
            { 
              opacity: 1,
              duration: 0.2,
              ease: 'power2.out',
              onComplete: () => {
                gsap.to(flash, {
                  opacity: 0,
                  duration: 0.3,
                  ease: 'power2.in',
                  onComplete: () => {
                    document.body.removeChild(flash);
                    startReverseAnimation();
                  }
                });
              }
            }
          );
        }
      });
  };

  const startReverseAnimation = () => {
    const exitTl = gsap.timeline();
    gsap.killTweensOf([imageRef.current, buttonRef.current]);

    exitTl
      .to(buttonRef.current, {
        opacity: 0,
        scale: 0.3,
        y: 30,
        rotation: 180,
        duration: 0.5,
        ease: 'back.in(2)'
      })
      .to(imageRef.current, {
        opacity: 0,
        scale: 0.5,
        rotation: 360,
        y: 50,
        duration: 0.8,
        ease: 'power3.in'
      }, '-=0.3')
      .to(subtitleRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.5,
        ease: 'power2.in'
      }, '-=0.5')
      .to(titleRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotation: -5,
        duration: 0.6,
        ease: 'back.in(1.7)'
      }, '-=0.4')
      .to([leftPanelRef.current, rightPanelRef.current], {
        scale: 1.1,
        opacity: 0.9,
        duration: 0.4,
        ease: 'power2.inOut'
      }, '-=0.3')
      .to(leftPanelRef.current, {
        x: '-150%',
        rotation: -25,
        scale: 0.7,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.in'
      })
      .to(rightPanelRef.current, {
        x: '150%',
        rotation: 25,
        scale: 0.7,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.in'
      }, '-=1.2')
      .call(() => {
        const particles = particlesRef.current?.children;
        if (particles) {
          Array.from(particles).forEach((particle, index) => {
            gsap.to(particle, {
              x: (Math.random() - 0.5) * 600,
              y: (Math.random() - 0.5) * 600,
              opacity: 0,
              scale: Math.random() * 2,
              rotation: Math.random() * 720,
              duration: 1.2,
              ease: 'power3.out',
              delay: index * 0.03
            });
          });
        }
      }, [], '-=0.8')
      .set([leftPanelRef.current, rightPanelRef.current, particlesRef.current], { display: 'none' })
      .set(contentRef.current, { display: 'block', opacity: 0 })
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 200, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power3.out' }
      )
      .call(() => {
        setShowEntry(false);
        setIsTransitioning(false);
      });
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    
    if (!showChatbot && chatbotIconRef.current) {
      gsap.to(chatbotIconRef.current, {
        scale: 0.8,
        duration: 0.1,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: 1
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');
        * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      <div className="fixed top-0 left-0 right-0 z-50" style={{ display: showEntry ? 'none' : 'block' }}>
        <Nav />
      </div>

      {!showEntry && (
        <div 
          ref={chatbotIconRef}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={toggleChatbot}
            className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full shadow-2xl 
              hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center
              hover:scale-110 active:scale-95 border-2 border-white/20 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-xl"></div>
            <svg 
              className="w-8 h-8 text-white relative z-10 transition-transform group-hover:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
              />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </button>
        </div>
      )}

      <Chatbot isOpen={showChatbot} toggleChatbot={toggleChatbot} />

      {showEntry && (
        <div className="fixed inset-0 flex z-50">
          <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>
          <div
            ref={leftPanelRef}
            className="w-1/2 bg-gradient-to-br from-slate-900 via-gray-800 to-emerald-900 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full blur-lg animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-400 rounded-full blur-md animate-pulse delay-500"></div>
            </div>
            <div className="text-center text-white px-8 relative z-10">
              <h1 
                ref={titleRef}
                className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
              Explore My Digital Universe!
              </h1>
              <p 
                ref={subtitleRef}
                className="text-lg mb-6 text-gray-300 leading-relaxed"
              >
                More than just code—this is my journey of learning, building, and solving real-world problems.
                Full-stack development, AI/ML experiments, and creative web solutions await.
                Step in and explore!<br />
                <span className="text-emerald-400 font-medium">Step in and Explore the Magic...!</span>
              </p>
            </div>
          </div>
          <div
            ref={rightPanelRef}
            className="w-1/2 bg-gradient-to-bl from-gray-800 via-slate-800 to-emerald-900 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-2xl animate-pulse delay-300"></div>
              <div className="absolute bottom-10 left-16 w-28 h-28 bg-blue-400 rounded-full blur-xl animate-pulse delay-700"></div>
            </div>
            <div className="relative">
              <img
                ref={imageRef}
                src={Prof}
                alt="Profile"
                className="max-w-md w-full h-auto rounded-2xl shadow-2xl border-4 border-emerald-400/30 relative z-10"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-blue-400/20 blur-sm"></div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-10 z-20">
            <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-ping scale-150"></div>
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping scale-125 delay-300"></div>
            <button
              ref={buttonRef}
              onClick={handleButtonClick}
              disabled={isTransitioning}
              className="relative mt-6 px-10 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold rounded-full text-xl
                hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 overflow-hidden group
                shadow-2xl hover:shadow-emerald-500/25 border-2 border-white/20 disabled:opacity-50
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-emerald-400/20 before:to-blue-400/20 before:blur-xl before:-z-10"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore together...🎉
              
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-blue-300 opacity-0 group-active:opacity-10 transition-opacity duration-200 scale-110"></div>
            </button>
          </div>
          <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-1500"></div>
        </div>
      )}

      <div
        ref={contentRef}
        className="min-h-screen pt-16"
        style={{ display: showEntry ? 'none' : 'block', opacity: showEntry ? 0 : 1 }}
      >
        <div>
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="experience" className="min-h-screen">
            <Exp />
          </section>
          <section id="projects" className="min-h-screen">
            <Proj />
          </section>
          <section id="certificates" className="min-h-screen">
            <Cer />
          </section>
          <section id="achievements" className="min-h-screen">
            <Ach />
          </section>
          <section id="skills" className="min-h-screen">
            <Skills />
          </section>
          <section id="contact" className="min-h-screen">
            <Con />
          </section>
          <Foot/>
        </div>
      </div>
    </div>
  );
}

export default App;