import React from 'react';
import { GraduationCap, CheckCircle, Code } from 'lucide-react';
import { motion } from 'motion/react';
import { useEducation } from '../hooks/useEducation'; // ✅ Import hook

export default function About() {
  
  const { education, loading } = useEducation();

  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-primary" />;
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-secondary" />;
      case 'Code':
        return <Code className="w-5 h-5 text-tertiary" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'group-hover:border-primary text-primary';
      case 'secondary':
        return 'group-hover:border-secondary text-secondary';
      case 'tertiary':
        return 'group-hover:border-tertiary text-tertiary';
      default:
        return 'group-hover:border-white/40 text-white';
    }
  };

  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-center">
          
          {/* Left Column: Portrait Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 relative group"
          >
            {/* Soft background ambient gradient behind avatar */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-25 blur-3xl group-hover:opacity-35 transition-all duration-700" />
            
            <div className="glass-card rounded-[2rem] overflow-hidden p-3.5 inner-glow max-w-[500px] mx-auto aspect-square group-hover:scale-[1.025] transition-all duration-700">
              <img
                alt="Dicky Profile Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[1.5rem] grayscale group-hover:grayscale-0 contrast-[1.05] brightness-95 group-hover:brightness-100 transition-all duration-700 ease-out"
                src="https://oqfpbqwrfnojakgmydci.supabase.co/storage/v1/object/public/portofolio-assets/Dicky.jpeg"
              />
            </div>
          </motion.div>

          {/* Right Column: Creative & Tech descriptions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6"
          >
            <h2 className="font-display text-[42px] md:text-5xl font-extrabold leading-tight tracking-tight mb-8 text-white select-none">
              Introduction <br />
              <span className="text-tertiary">About Me</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-on-surface-variant-custom mb-12 leading-relaxed">
              Informatics Engineering student interested in web development, UI/UX design, and data analysis, with a focus on creating simple and user-friendly digital experiences.
            </p>

            {/* Academic Checkpoints list */}
            <div className="space-y-6">
              {/* ✅ Loading state untuk education */}
              {loading ? (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="text-white/60 text-sm mt-2">Loading education...</p>
                </div>
              ) : (
                education.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex gap-6 items-start group cursor-default"
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <div className={`w-12 h-12 flex-shrink-0 glass-card rounded-xl flex items-center justify-center border-white/10 ${getColorClass(item.color)} transition-all duration-300`}>
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="font-display text-lg md:text-xl font-bold text-white transition-colors group-hover:text-primary leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-on-surface-variant-custom/75 font-mono text-xs tracking-wider mt-1.5 uppercase">
                        {item.institution} &bull; {item.period}
                      </p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}