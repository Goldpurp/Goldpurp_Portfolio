import { IconSun, IconMoon } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

export function ThemeToggle({ isDark, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      className="w-9 h-9 rounded-xl bg-elevated border border-line flex items-center justify-center text-primary hover:scale-110 transition-all cursor-pointer"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconSun size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconMoon size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
