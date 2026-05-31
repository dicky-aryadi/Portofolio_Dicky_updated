import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Sparkles, Layout, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onViewProjectsClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onViewProjectsClick, onContactClick }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinate between -0.5 and 0.5
      const normalizedX = (e.clientX / window.innerWidth) - 0.5;
      const normalizedY = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({ x: normalizedX, y: normalizedY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative px-6 md:px-20 pt-28 pb-16 overflow-hidden select-none"
    >
      {/* Dynamic atmospheric ambient lighting orbs driven by physical mouse parallax */}
      <div
        className="floating-orb bg-primary w-[350px] md:w-[600px] h-[350px] md:h-[600px] -top-24 md:-top-40 -left-20 md:-left-40"
        style={{
          transform: `translate(${mousePosition.x * 35}px, ${mousePosition.y * 35}px)`
        }}
      />
      <div
        className="floating-orb bg-secondary w-[400px] md:w-[700px] h-[400px] md:h-[700px] top-1/3 md:top-[15%] -right-10 md:-right-32"
        style={{
          transform: `translate(${mousePosition.x * -45}px, ${mousePosition.y * -45}px)`
        }}
      />
      <div
        className="floating-orb bg-tertiary w-[300px] md:w-[450px] h-[300px] md:h-[450px] bottom-10 left-[15%] opacity-[0.08]"
        style={{
          transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`
        }}
      />

      <div className="max-w-[1440px] mx-auto w-full grid md:grid-cols-12 items-center gap-12 z-10">
        
        {/* Left Side: Brand Text & CTAs */}
        <div className="md:col-span-7 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[55px] sm:text-[70px] lg:text-[84px] font-extrabold leading-none tracking-tighter mb-6 text-white uppercase select-none">
              DICKY <br />
              <span className="text-gradient">ARYADI</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-lg md:text-xl text-on-surface-variant-custom mb-10 max-w-xl leading-relaxed font-normal"
          >
            Creating digital experiences through a combination of technology, design, and problem solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button
              onClick={onViewProjectsClick}
              className="bg-primary text-on-primary font-sans font-bold text-base px-10 py-4 rounded-full flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(192,193,255,0.2)] hover:shadow-[0_0_35px_rgba(192,193,255,0.4)] transition-all hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onContactClick}
              className="glass-card px-10 py-4 rounded-full font-sans font-bold text-base border border-white/10 hover:bg-white/5 flex items-center justify-center transition-all hover:scale-[1.03] active:scale-95 text-white hover:border-primary/40 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Side: Interactive Abstract Visual Columns */}
        <div className="hidden md:flex md:col-span-5 h-[580px] relative items-center justify-center">
          <div className="absolute w-full h-full">
            
            {/* Ambient Pulse Light Bulb behind panels */}
            <div className="absolute top-1/3 left-1/3 w-36 h-36 rounded-full bg-tertiary blur-[100px] opacity-[0.22] animate-pulse pointer-events-none" />

            {/* Top Right Floating Panel */}
            <motion.div
              style={{
                y: mousePosition.y * -35,
                x: mousePosition.x * -25,
              }}
              className="glass-card inner-glow absolute top-6 right-2 w-72 h-88 rounded-2xl p-7 flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Sparkles className="text-primary w-6 h-6" />
                </div>
                <div className="h-2.5 w-full bg-white/15 rounded-full mb-4"></div>
                <div className="h-2.5 w-[85%] bg-white/10 rounded-full mb-4"></div>
                <div className="h-2.5 w-[60%] bg-[#4cd7f6]/20 rounded-full mb-4"></div>
                <div className="h-2.5 w-[70%] bg-white/5 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center bg-white/[0.03] border border-white/10 p-3 rounded-xl">
                <div className="flex gap-2 items-center">
                  <div className="w-6 h-6 rounded-md bg-secondary/20 flex items-center justify-center">
                    <Layout className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <span className="font-mono text-[10px] text-white/60">UI/UX Engine</span>
                </div>
                <span className="font-mono text-[10px] text-tertiary">Active</span>
              </div>
            </motion.div>

            {/* Bottom Left Floating Panel (Dots, wireframes) */}
            <motion.div
              style={{
                y: mousePosition.y * 30,
                x: mousePosition.x * 20,
              }}
              className="glass-card inner-glow absolute bottom-8 left-0 w-80 h-52 rounded-2xl p-6 flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                </div>
                <div className="flex gap-1 items-center font-mono text-[10px] text-primary">
                  <Code className="w-3.5 h-3.5" />
                  <span>Terminal</span>
                </div>
              </div>

              <div className="space-y-2 py-4">
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-10 bg-white/[0.04] rounded-lg border border-white/5 flex items-center justify-center font-mono text-[10px] text-white/50">DIV</div>
                  <div className="h-10 bg-white/[0.04] rounded-lg border border-white/5 flex items-center justify-center font-mono text-[10px] text-white/50">CSS</div>
                  <div className="h-10 bg-white/[0.04] rounded-lg border border-white/5 flex items-center justify-center font-mono text-[10px] text-white/50">JS</div>
                  <div className="h-10 bg-white/[0.04] rounded-lg border border-white/5 flex items-center justify-center font-mono text-[10px] text-primary">JSX</div>
                </div>
              </div>

              <div className="font-mono text-[11px] text-white/40 flex justify-between items-center">
                <span>npm run dev:portfolio</span>
                <span className="text-secondary tracking-widest animate-pulse">● Live</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
