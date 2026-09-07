import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  RefreshCw,
  Download,
  Github,
  Linkedin,
  Mail,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    // Simulate API pipeline transmission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[800px] mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[42px] md:text-5xl font-extrabold mb-6 text-white leading-tight">
            Let&apos;s Build <span className="text-gradient">Together</span>
          </h2>

          <p className="text-on-surface-variant-custom font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Feel free to reach out for collaborations, freelance projects,
            or just to connect and discuss ideas.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/dicky-aryadi/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glass-card px-6 py-3 rounded-xl font-sans font-semibold text-white hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 flex items-center gap-2 border border-white/10"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </motion.a>

{/* Behance - 
          <motion.a
            href="https://behance.net/dickyaryadi" // ⚠️ GANTI dengan URL asli kamu
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glass-card px-6 py-3 rounded-xl font-sans font-semibold text-white hover:bg-white/10 hover:border-tertiary/30 transition-all duration-300 flex items-center gap-2 border border-white/10"
          >
            <Globe className="w-4 h-4" />
            <span>Behance</span>
          </motion.a>
*/}
          {/* GitHub */}
          <motion.a
            href="https://github.com/dicky-aryadi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glass-card px-6 py-3 rounded-xl font-sans font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2 border border-white/10"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:aryadidicky20@gmail.com"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glass-card px-6 py-3 rounded-xl font-sans font-semibold text-white hover:bg-white/10 hover:border-primary/30 transition-all duration-300 flex items-center gap-2 border border-white/10"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </motion.a>

        </div>

        {/* Download CV */}
        <div className="flex justify-center mb-12">
          <motion.a
            href="https://oqfpbqwrfnojakgmydci.supabase.co/storage/v1/object/public/portofolio-assets/documents/CV%20Dicky%20Aryadi.pdf"
            download="Dicky-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-sans font-bold shadow-[0_0_20px_rgba(192,193,255,0.2)] hover:shadow-[0_0_30px_rgba(192,193,255,0.35)] transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </motion.a>
        </div>

        {/* Download Portfolio */}
        <div className="flex justify-center mb-12">
          <motion.a
            href="https://oqfpbqwrfnojakgmydci.supabase.co/storage/v1/object/public/portofolio-assets/documents/Portfolio%20Dicky%20Aryadi.pdf"
            download="Dicky-Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-sans font-bold shadow-[0_0_20px_rgba(192,193,255,0.2)] hover:shadow-[0_0_30px_rgba(192,193,255,0.35)] transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Portfolio</span>
          </motion.a>
        </div>

        {/* Form Section - Bisa kamu tambahkan lagi kalau perlu */}
        {/* ... form code ... */}

      </div>
    </section>
  );
}