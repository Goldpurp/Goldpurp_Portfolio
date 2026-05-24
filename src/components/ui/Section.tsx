import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.1 },
  },
};

export const itemReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export function Section({ children, id, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={sectionReveal}
      className={`py-8 sm:py-16 md:py-24 lg:py-32 px-5 sm:px-6 md:px-12 xl:px-20 max-w-[1600px] mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}
