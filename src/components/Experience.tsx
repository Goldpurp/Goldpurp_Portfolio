import { motion } from 'framer-motion';
import { 
  IconChevronRight, 
  IconArrowUpRight, 
  IconDownload 
} from '@tabler/icons-react';
import { Section, itemReveal } from './ui/Section';
import { SectionHeader } from './ui/SectionHeader';
import { portfolioConfig } from '../data/portfolio';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader 
        label="Career Path" 
        title={<>Professional <span className="text-primary">Experience</span></>} 
        desc="A timeline of my journey as a full-stack engineer, building scalable solutions across various industries." 
      />
      
      {/* Timeline */}
      <div className="relative">
        {/* Central vertical line — visible only on md+ */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-line" />

        <div className="space-y-6 sm:space-y-8">
          {portfolioConfig.experience.map((exp, idx) => (
            <motion.div 
              key={exp.company + exp.period} 
              variants={itemReveal}
              className="relative flex gap-4 sm:gap-8 md:gap-12"
            >
              {/* Timeline dot + icon — always on the left */}
              <div className="flex flex-col items-center flex-shrink-0 z-10">
                {/* Period badge sits ABOVE the dot */}
                <div className="mb-2 px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] bg-pill text-primary border border-line whitespace-nowrap">
                  {exp.period}
                </div>
                {/* Icon dot */}
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg bg-card border-2 border-primary text-primary"
                >
                  <IconChevronRight size={18} />
                </div>
                {/* Connecting line below the dot */}
                {idx < portfolioConfig.experience.length - 1 && (
                  <div className="w-px flex-1 min-h-[20px] bg-line mt-2" />
                )}
              </div>

              {/* Content card */}
              <div 
                className="flex-1 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-10 space-y-3 sm:space-y-5 transition-all hover:shadow-lg bg-card border border-line"
              >
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black italic tracking-tight text-foreground leading-tight">
                    {exp.title}
                  </h3>
                  <div className="font-bold uppercase tracking-widest text-[10px] sm:text-[11px] flex items-center gap-1.5 text-primary">
                    {exp.company} <IconArrowUpRight size={14} />
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-muted">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-line">
                  {exp.tags.map(t => (
                    <span 
                      key={t} 
                      className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[8px] sm:text-[9px] font-black uppercase tracking-widest bg-pill text-muted border border-line"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center pt-8 sm:pt-16 relative z-20">
          <button 
            className="px-8 sm:px-14 py-4 sm:py-6 rounded-[1.5rem] sm:rounded-[2rem] text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] italic flex items-center gap-3 sm:gap-4 bg-card border border-line text-foreground hover:shadow-xl transition-all cursor-pointer"
          >
            <IconDownload size={20} className="text-primary" /> Download Full Resume
          </button>
        </div>
      </div>
    </Section>
  );
}
