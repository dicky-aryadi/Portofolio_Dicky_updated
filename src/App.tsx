import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import { useProjects } from './hooks/useProjects';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  //  Pakai hook useProjects
  const { projects, loading, error } = useProjects();

  // Monitor scroll height to highlight the active navbar segment
  useEffect(() => {
    if (activeProjectId) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const homeSec = document.getElementById('home');
      const aboutSec = document.getElementById('about');
      const projectsSec = document.getElementById('projects');
      const contactSec = document.getElementById('contact');

      if (contactSec && scrollPosition >= contactSec.offsetTop) {
        setActiveSection('contact');
      } else if (projectsSec && scrollPosition >= projectsSec.offsetTop) {
        setActiveSection('projects');
      } else if (aboutSec && scrollPosition >= aboutSec.offsetTop) {
        setActiveSection('about');
      } else if (homeSec) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeProjectId]);

  const handleNavigate = (sectionId: string) => {
    setActiveProjectId(null);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigateHome = () => {
    setActiveProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectProject = (id: string | null) => {
    setActiveProjectId(id);
    if (!id) {
      setTimeout(() => {
        const element = document.getElementById('projects');
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'instant' as any
          });
        }
      }, 50);
    }
  };

  // Cari project dari data Supabase
  const activeProject = projects.find(p => p.id === activeProjectId);

  const triggerContactFormScroll = () => {
    handleNavigate('contact');
  };

  // Loading state untuk seluruh app
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b1326] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-white/60 font-mono text-sm uppercase tracking-wider">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-[#0b1326] flex items-center justify-center">
        <div className="text-center glass-card p-12 rounded-2xl">
          <p className="text-red-400 text-lg mb-4">Failed to load portfolio data</p>
          <p className="text-white/40 text-sm mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(192,193,255,0.3)] transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1326] relative text-on-surface-custom selection:bg-primary/30 selection:text-white">
      {/* Dynamic Background Noise/Mesh texture */}
      <div className="absolute inset-0 bg-repeat bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none opacity-60 z-0" />
      
      {/* Floating Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onNavigateHome={handleNavigateHome}
        isProjectDetail={activeProjectId !== null}
      />

      {/* Main Container */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {!activeProjectId ? (
            // Portfolio Landing View
            <motion.div
              key="main-landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero */}
              <Hero
                onViewProjectsClick={() => handleNavigate('projects')}
                onContactClick={() => handleNavigate('contact')}
              />

              {/* About */}
              <About />

              {/* Projects Grid */}
              <Projects onSelectProject={selectProject} />

              {/* Contact */}
              <Contact />
            </motion.div>
          ) : (
            // Project Case Study View
            <motion.div
              key="detailed-case-study"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeProject && (
                <ProjectDetail
                  project={activeProject}
                  onBack={() => selectProject(null)}
                  onContactClick={triggerContactFormScroll}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Interactive Footer */}
      <Footer onContactClick={triggerContactFormScroll} />
    </div>
  );
}