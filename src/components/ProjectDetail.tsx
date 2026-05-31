import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Code, Calendar, User, Shield, Star, Target } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectDetailData {
  id: string
  title: string
  category: string
  sub_category: string
  description: string
  long_description: string
  image_url: string
  demo_url: string
  github_url: string
  behance_url: string
  tools: string[]
  overview: {
    background: string
    goals: string
    problem: string
  } | null
  details: {
    duration: string
    role: string[]
    process: string[]
    features: string[]
    scope: string[]
  } | null
}

interface ProjectDetailProps {
  project: ProjectDetailData
  onBack: () => void
  onContactClick: () => void
}

export default function ProjectDetail({ project, onBack, onContactClick }: ProjectDetailProps) {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [project.id]);

  // Fallback kalau null
  const overview = project.overview || { background: '', goals: '', problem: '' }
  const details = project.details || { duration: '', role: [], process: [], features: [], scope: [] }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="pt-28 pb-24 md:pb-40 max-w-360 mx-auto px-6 md:px-20 relative z-10"
    >
      {/* Dynamic atmospheric ambient lighting */}
      <div className="floating-orb bg-primary w-125 h-125 -top-32 -left-32 opacity-15" />
      <div className="floating-orb bg-secondary w-100 h-100 top-[30%] -right-16 opacity-10" />

      {/* Back Button */}
      <div className="mb-12">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-xl group transition-all duration-300 hover:border-primary/40 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-xs text-on-surface-variant-custom tracking-wider group-hover:text-white uppercase">
            Back to Projects
          </span>
        </button>
      </div>

      {/* Project Header */}
      <header className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
        
        {/* Left column */}
        <div className="lg:col-span-7 z-10">
          <span className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] font-semibold block mb-4">
            {project.category}
            {project.sub_category ? ` • ${project.sub_category}` : ""}
          </span>
          <h1 className="font-display text-[48px] sm:text-[62px] lg:text-[76px] font-extrabold text-white leading-none tracking-tighter mb-8">
            {project.title}
          </h1>
          <p className="font-sans text-base md:text-lg text-on-surface-variant-custom leading-relaxed max-w-xl mb-12">
            {project.long_description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary font-sans font-bold px-8 py-4 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(192,193,255,0.15)] hover:shadow-[0_0_30px_rgba(192,193,255,0.35)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-4.5 h-4.5" />
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-4 rounded-xl font-sans font-bold text-white hover:bg-white/5 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 cursor-pointer border-white/10"
              >
                <span>GitHub Repository</span>
                <Code className="w-4.5 h-4.5 text-white/70" />
              </a>
            )}
            {project.behance_url && (
              <a
                href={project.behance_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-4 rounded-xl font-sans font-bold text-white hover:bg-white/5 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 cursor-pointer border-white/10"
              >
                <span>Behance Case Study</span>
                <ExternalLink className="w-4.5 h-4.5 text-white/70" />
              </a>
            )}
          </div>
        </div>

        {/* Right column: mockup */}
        <div className="lg:col-span-5 relative group mt-8 lg:mt-0">
          <div className="absolute -inset-4 bg-primary/10 blur-[60px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
          <motion.div
            initial={{ rotate: 3, scale: 0.95 }}
            animate={{ rotate: 3, scale: 1 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="glass-card rounded-2xl overflow-hidden p-4 shadow-2xl relative"
          >
            <img
              alt={`${project.title} Interface Detail Screenshot`}
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-xl object-contain shadow-2xl relative z-10"
              src={project.image_url}
            />
          </motion.div>
        </div>

      </header>

      {/* Overview & Tools */}
      <section className="grid md:grid-cols-12 gap-8 mb-24 items-stretch">
        
        {/* Project Overview */}
        <div className="md:col-span-8 glass-card p-8 md:p-12 rounded-4xl inner-glow flex flex-col justify-between">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-8 border-b border-white/5 pb-4">
              Project Overview
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-2.5 font-semibold">Background</h3>
                <p className="text-on-surface-variant-custom text-sm md:text-base leading-relaxed">
                  {overview.background}
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-2.5 font-semibold">Goals</h3>
                <p className="text-on-surface-variant-custom text-sm md:text-base leading-relaxed">
                  {overview.goals}
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-2.5 font-semibold">The Problem</h3>
                <p className="text-on-surface-variant-custom text-sm md:text-base leading-relaxed">
                  {overview.problem}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <aside className="md:col-span-4 glass-card p-8 md:p-10 rounded-4xl inner-glow flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-6 border-b border-white/5 pb-4">
              Tools &amp; Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-xs font-semibold px-4 py-2 bg-surface-lowest/70 border border-white/10 rounded-full text-tertiary shadow-inner hover:border-tertiary/40 hover:text-white transition-colors duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </aside>

      </section>

      {/* Project Details */}
      <section className="glass-card p-8 md:p-16 rounded-[2.5rem] inner-glow mb-24">
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-12 border-b border-white/5 pb-4">
          Project Details
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Duration */}
          <div>
            <h4 className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Duration
            </h4>
            <p className="text-on-surface-variant-custom text-sm leading-relaxed">
              {details.duration}
            </p>
          </div>

          {/* Role */}
          <div>
            <h4 className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Role
            </h4>
            <ul className="text-on-surface-variant-custom text-sm space-y-2">
              {details.role.map((role) => (
                <li key={role} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <h4 className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Process
            </h4>
            <ul className="text-on-surface-variant-custom text-sm space-y-2">
              {details.process.map((step) => (
                <li key={step} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features & Scope */}
          {(details.features?.length > 0 || details.scope?.length > 0) && (
            <div className="space-y-6">
              
              {details.features?.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    Key Features
                  </h4>
                  <ul className="text-on-surface-variant-custom text-sm space-y-2">
                    {details.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {details.scope?.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Project Scope
                  </h4>
                  <ul className="text-on-surface-variant-custom text-sm space-y-2">
                    {details.scope.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          )}

        </div>
      </section>

    </motion.div>
  );
}