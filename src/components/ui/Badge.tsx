import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] text-primary border border-primary/20 ${className}`}
    >
      {children}
    </span>
  );
}
