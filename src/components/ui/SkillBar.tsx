import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  label?: string;
}

export function SkillBar({ name, level, label }: SkillBarProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-sm">
        <span className="font-bold text-foreground">{name}</span>
        <span className="font-black text-primary">{label || `${level}%`}</span>
      </div>
      <div className="h-2 w-full bg-line/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'circOut' }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </div>
  );
}
