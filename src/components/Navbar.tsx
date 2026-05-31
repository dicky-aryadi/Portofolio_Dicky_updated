import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onNavigateHome: () => void;
  isProjectDetail: boolean;
}

export default function Navbar({
  activeSection,
  onNavigate,
  onNavigateHome,
  isProjectDetail
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (isProjectDetail) {
      onNavigateHome();
      // Wait for navigation and then scroll to the section
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      onNavigate(id);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b1326]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_20px_50px_-20px_rgba(192,193,255,0.15)]'
          : 'bg-[#0b1326]/40 backdrop-blur-md border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-360 mx-auto px-6 md:px-20 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => {
            onNavigateHome();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display text-2xl font-black text-primary tracking-tighter hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-1"
        >
          DICKY<span className="text-secondary"> ARYADI</span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = !isProjectDetail && activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans text-sm font-medium transition-all duration-300 relative cursor-pointer py-1 ${
                  isActive
                    ? 'text-primary'
                    : 'text-on-surface-variant-custom hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleLinkClick('contact')}
            className="bg-primary hover:bg-primary/90 text-on-primary font-display font-bold text-sm px-7 py-2.5 rounded-full shadow-[0_0_20px_rgba(192,193,255,0.2)] hover:shadow-[0_0_30px_rgba(192,193,255,0.4)] active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            Hire Me
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-primary transition-colors focus:outline-none p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full bg-[#0b1326]/95 border-b border-white/10 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left font-display text-lg font-semibold py-1 transition-colors ${
                    !isProjectDetail && activeSection === link.id
                      ? 'text-primary'
                      : 'text-on-surface-variant-custom hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <hr className="border-white/10" />
              <button
                onClick={() => handleLinkClick('contact')}
                className="bg-primary text-on-primary font-display font-bold text-base py-3 w-full rounded-xl text-center shadow-lg active:scale-95 transition-all text-gradient bg-clip-text flex justify-center items-center gap-2"
              >
                Hire Me
                <ArrowUpRight className="w-4 h-4 text-on-primary" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
