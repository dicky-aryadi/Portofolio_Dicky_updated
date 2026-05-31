import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useProjects } from '../hooks/useProjects';

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState<string>('All');
  
  const { projects, loading, error } = useProjects();

  const categories = ['All', 'UI/UX Design', 'Web Development', 'Data Intelligence'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(proj => proj.category === filter);

  // Loading state
  if (loading) {
    return (
      <section id="projects" className="py-24 md:py-36 px-6 md:px-20 bg-surface-lowest/40 relative">
        <div className="max-w-360 mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-white/60 mt-4">Loading projects...</p>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="projects" className="py-24 md:py-36 px-6 md:px-20 bg-surface-lowest/40 relative">
        <div className="max-w-360 mx-auto text-center">
          <p className="text-red-400">Error: {error}</p>
          <button onClick={() => window.location.reload()} className="text-primary underline mt-2">
            Try again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-20 bg-surface-lowest/40 relative">
      <div className="max-w-360 mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-primary font-semibold select-none">
            Selected Works
          </span>
          <h2 className="font-display text-[38px] md:text-5xl font-extrabold mt-3 text-white select-none">
            Featured Projects
          </h2>

          {/* Clean Glass Filters */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-xs uppercase px-5 py-2.5 rounded-full border transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-primary text-on-primary border-primary font-bold shadow-[0_0_15px_rgba(192,193,255,0.3)]'
                    : 'bg-white/2 border-white/10 text-on-surface-variant-custom hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card flex flex-col h-full rounded-4xl p-4 group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(192,193,255,0.08)]"
              onClick={() => onSelectProject(project.id)}
            >
              {/* Card Image Cover */}
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-8 bg-[#0d162a]">
                <img
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image_url}
                />
                {/* Immersive overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[3px] select-none">
                  <button className="bg-white text-surface-lowest hover:bg-white/95 text-sm px-6 py-2.5 rounded-full font-bold shadow-lg transition-transform active:scale-95">
                    View Project
                  </button>
                </div>
              </div>

              {/* Tag Badges */}
              <div className="px-4 pb-4 flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-mono text-[10px] uppercase bg-primary-container/20 text-primary px-3.5 py-1 rounded-full border border-primary/10 tracking-wide font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Title and summary */}
                <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant-custom mb-8 line-clamp-3 leading-relaxed grow">
                  {project.description}
                </p>

                {/* Footer specs of the card */}
                <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-auto">
                  <div className="flex gap-2.5 flex-wrap max-w-[65%]">
                    {/* Akses role dari details */}
                    {project.details?.role?.slice(0, 2).map((role: string) => (
                      <span key={role} className="font-mono text-[10px] text-white/50 bg-white/2 border border-white/5 px-2 py-0.5 rounded">
                        {role}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project.id);
                    }}
                    className="text-primary group-hover:text-white flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Case Study
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}