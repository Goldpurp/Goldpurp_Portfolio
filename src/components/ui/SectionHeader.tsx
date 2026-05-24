import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { itemReveal } from './Section';

interface SectionHeaderProps {
  id?: string;
  label: string;
  title: ReactNode;
  desc?: string;
  centered?: boolean;
}

export function SectionHeader({ id, label, title, desc, centered }: SectionHeaderProps) {
  return (
    <motion.div variants={itemReveal} className={`mb-6 sm:mb-8 md:mb-12 ${centered ? 'text-center mx-auto' : ''}`}>
      <div className={`flex items-center gap-2 sm:gap-3 text-primary font-mono text-[9px] sm:text-[10px] mb-2 sm:mb-4 ${centered ? 'justify-center' : ''}`}>
        {id && <span className="opacity-50">{id}.</span>}
        <div className="h-px w-6 sm:w-8 bg-primary/30" />
        <span className="tracking-[0.3em] sm:tracking-[0.4em] uppercase font-black">{label}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground leading-tight mb-3 sm:mb-6">
        {title}
      </h2>
      {desc && (
        <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">{desc}</p>
      )}
    </motion.div>
  );
}
