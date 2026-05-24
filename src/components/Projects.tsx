import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconArrowRight, 
  IconCode, 
  IconExternalLink,
  IconX,
  IconBriefcase,
  IconStack2
} from '@tabler/icons-react';
import { Section, itemReveal } from './ui/Section';
import { SectionHeader } from './ui/SectionHeader';
import { portfolioConfig, type Project } from '../data/portfolio';

function ProjectDetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-2xl" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] sm:rounded-[3rem] bg-card border border-line shadow-2xl no-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface/80 backdrop-blur-xl border border-line flex items-center justify-center text-muted hover:text-foreground transition-colors cursor-pointer"
        >
          <IconX size={20} />
        </button>

        {/* Hero Image */}
        <div className="relative w-full aspect-video sm:aspect-[21/9] overflow-hidden rounded-t-[2rem] sm:rounded-t-[3rem]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          
          {/* Floating company badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 backdrop-blur-xl text-white">
              <IconBriefcase size={14} />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">{project.company}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 md:p-14 space-y-6 sm:space-y-10">
          {/* Title & Period */}
          <div className="space-y-3">
            <div className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary">
              {project.companyDetails}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic tracking-tight text-foreground leading-tight">
              {project.name}
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted flex items-center gap-2">
              <div className="w-6 h-px bg-primary" /> Project Overview
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted font-medium">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted flex items-center gap-2">
              <IconStack2 size={16} className="text-primary" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.frameworks.map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest bg-pill text-primary border border-line"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted flex items-center gap-2">
              <div className="w-6 h-px bg-primary" /> Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.categories
                .filter(c => c !== 'All Projects')
                .map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20"
                  >
                    {cat}
                  </span>
                ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-line">
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 sm:py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] italic bg-pill text-foreground border border-line hover:bg-elevated transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <IconCode size={20} /> View Source Code
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 sm:py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] italic text-white bg-primary hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-[0_8px_32px_var(--glow)] cursor-pointer"
              >
                <IconExternalLink size={20} /> View Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ['All Projects', 'Full Stack', 'Frontend', '.NET / C#'];

  const filteredProjects = useMemo(() => {
    const projects = portfolioConfig.projects;
    if (filter === 'All Projects') return projects;
    return projects.filter(p => p.categories.includes(filter));
  }, [filter]);

  return (
    <>
      <Section id="projects">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-6 sm:gap-10">
          <SectionHeader 
            id="02" 
            label="Portfolio" 
            title="Some Things I've Built" 
            desc="A curated collection of full-stack web applications and robust backend services." 
          />
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 no-scrollbar">
            {categories.map(f => (
              <button 
                key={f} 
                onClick={() => setFilter(f)} 
                className={`whitespace-nowrap px-5 sm:px-8 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer border ${
                  filter === f 
                    ? 'bg-primary text-white border-primary shadow-[0_4px_16px_var(--glow)]' 
                    : 'bg-transparent text-muted border-line hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                whileHover={{ y: -8 }}
                key={project.name}
                onClick={() => setSelectedProject(project)}
                className="rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col h-full relative bg-card border border-line shadow-[0_4px_24px_rgba(0,0,0,0.06)] group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-pill">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent opacity-50" />
                  {/* View Project overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-full">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1">
                  {/* Company Header */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                        {project.company}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-medium text-muted">
                        {project.companyDetails}
                      </span>
                    </div>
                    <div className="flex gap-3 sm:gap-4 text-muted">
                      {project.codeLink && (
                        <a 
                          href={project.codeLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="View Source Code"
                          className="transition-colors hover:text-primary"
                          onClick={e => e.stopPropagation()}
                        >
                          <IconCode size={18} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="View Live Demo"
                          className="transition-colors hover:text-primary"
                          onClick={e => e.stopPropagation()}
                        >
                          <IconExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 italic tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1 text-muted line-clamp-3">
                    {project.description}
                  </p>

                  {/* Frameworks & Tools */}
                  <div className="pt-4 sm:pt-5 flex flex-wrap gap-1 sm:gap-1.5 mt-auto border-t border-line">
                    {project.frameworks.slice(0, 4).map((tag: string) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 text-[8px] sm:text-[9px] font-bold rounded uppercase tracking-wider bg-pill text-primary border border-line"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.frameworks.length > 4 && (
                      <span className="px-2 py-1 text-[8px] sm:text-[9px] font-bold rounded uppercase tracking-wider bg-pill text-muted border border-line">
                        +{project.frameworks.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-8 sm:mt-20 flex justify-center">
          <a 
            href="https://github.com/Goldpurp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-3 sm:gap-4 italic border border-primary text-primary hover:bg-primary/5 hover:shadow-lg transition-all cursor-pointer"
          >
            View Full Project Archive <IconArrowRight size={18} />
          </a>
        </div>
      </Section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
