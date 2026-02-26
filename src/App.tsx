/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Home, ArrowLeft } from 'lucide-react';

// Star component for background
const Star = ({ style }: { style: React.CSSProperties }) => (
  <div 
    className="absolute rounded-full bg-white animate-twinkle" 
    style={style}
  />
);

// Planet Component
const Planet = () => (
  <svg viewBox="0 0 200 200" className="w-64 h-64 md:w-96 md:h-96 opacity-90">
    <defs>
      <linearGradient id="planetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#4c1d95" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle cx="100" cy="100" r="80" fill="url(#planetGradient)" filter="url(#glow)" />
    <path d="M20,100 A80,20 0 0,1 180,100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
    <circle cx="50" cy="70" r="8" fill="rgba(255,255,255,0.1)" />
    <circle cx="140" cy="130" r="12" fill="rgba(255,255,255,0.1)" />
  </svg>
);

// Astronaut Component
const Astronaut = () => (
  <svg viewBox="0 0 100 100" className="w-48 h-48 md:w-80 md:h-80 drop-shadow-2xl">
    <g className="animate-float">
      {/* Backpack */}
      <rect x="20" y="25" width="60" height="50" rx="10" fill="#e2e8f0" />
      {/* Body */}
      <rect x="25" y="20" width="50" height="60" rx="15" fill="#f8fafc" />
      {/* Helmet */}
      <circle cx="50" cy="35" r="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="50" cy="35" r="15" fill="#1e293b" />
      {/* Reflection */}
      <path d="M45,30 Q50,25 55,30" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
      {/* Arms */}
      <path d="M25,40 Q10,50 20,70" stroke="#f8fafc" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M75,40 Q90,50 80,70" stroke="#f8fafc" strokeWidth="8" strokeLinecap="round" fill="none" />
      {/* Legs */}
      <path d="M35,80 L35,95" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
      <path d="M65,80 L65,95" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
      {/* Details */}
      <rect x="40" y="55" width="20" height="15" rx="2" fill="#cbd5e1" />
      <circle cx="45" cy="62" r="2" fill="#ef4444" />
      <circle cx="50" cy="62" r="2" fill="#22c55e" />
      <circle cx="55" cy="62" r="2" fill="#3b82f6" />
    </g>
  </svg>
);

export default function App() {
  const [stars, setStars] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          animationDelay: `${Math.random() * 4}s`,
          opacity: Math.random(),
        },
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0B0D17] relative overflow-hidden font-body text-white selection:bg-purple-500 selection:text-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e1b4b]/20 to-[#4c1d95]/20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/50 via-[#0B0D17] to-[#0B0D17] pointer-events-none" />

      {/* Stars */}
      {stars.map((star) => (
        <Star key={star.id} style={star.style} />
      ))}

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
            <Rocket size={16} className="text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider">SPACE.CO</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Mission</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium backdrop-blur-sm">
          Menu
        </button>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left max-w-xl"
        >
          <h2 className="font-display text-purple-400 text-lg md:text-xl tracking-[0.2em] mb-4 uppercase">
            System Malfunction
          </h2>
          <h1 className="font-display text-8xl md:text-[10rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            404
          </h1>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Lost in Space
          </h3>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Houston, we have a problem. The page you are looking for has drifted into a black hole or never existed in this galaxy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-shadow"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Home size={20} />
                Return to Earth
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 rounded-full font-bold text-lg text-white hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <ArrowLeft size={20} />
              Go Back
            </motion.button>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative flex items-center justify-center"
        >
          {/* Background Glow */}
          <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
          
          <div className="relative z-10 animate-float">
            <Astronaut />
          </div>
          
          <div className="absolute -top-20 -right-20 animate-float" style={{ animationDelay: '2s' }}>
            <Planet />
          </div>
        </motion.div>

      </main>

      {/* Footer Elements */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0B0D17] to-transparent z-20 pointer-events-none" />
      
      <div className="absolute bottom-8 left-0 w-full text-center text-gray-600 text-sm z-30 font-mono">
        COORD: 404.00.00 • SECTOR: UNKNOWN
      </div>
    </div>
  );
}

