import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconTerminal2,
  IconMenu2,
  IconX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp
} from '@tabler/icons-react';
import { ThemeToggle } from './ui/ThemeToggle';
import { portfolioConfig } from '../data/portfolio';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  scrollTo: (id: string) => void;
}

export function Navbar({ isDark, toggleTheme, scrollTo }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 h-16 sm:h-20 z-[100] transition-all duration-300 ${scrolled
            ? 'bg-card/80 backdrop-blur-xl border-b border-line'
            : 'bg-transparent'
          }`}
      >
        <div className="w-full max-w-[1600px] px-5 sm:px-6 md:px-12 xl:px-20 mx-auto flex justify-between items-center h-full">
          {/* Logo */}
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform text-white">
              <IconTerminal2 size={18} />
            </div>
            <span className="text-base sm:text-lg font-black tracking-tight uppercase italic leading-none text-foreground">
              KEHINDE DEV
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="text-xs font-bold uppercase tracking-[0.2em] text-muted hover:text-foreground hover:opacity-100 transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
            {/* Theme Toggle */}
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />

            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-white bg-primary hover:bg-primary/90 transition-all active:scale-95 shadow-[0_4px_20px_var(--glow)] cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile right side */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg sm:rounded-xl bg-pill border border-line text-foreground active:scale-95 transition-all cursor-pointer"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen
                  ? <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}><IconX size={20} /></motion.div>
                  : <motion.div key="m" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}><IconMenu2 size={20} /></motion.div>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] pt-24 sm:pt-32 px-8 sm:px-12 lg:hidden flex flex-col gap-6 sm:gap-10 bg-surface"
          >
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="text-2xl sm:text-4xl font-black italic text-left uppercase tracking-tighter text-foreground"
              >
                {item}
              </motion.button>
            ))}
            <div className="mt-auto pb-8 sm:pb-12 flex gap-6 sm:gap-8 text-muted">
              <a href={portfolioConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <IconBrandGithub size={28} />
              </a>
              <a href={portfolioConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <IconBrandLinkedin size={28} />
              </a>
              <a href={portfolioConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <IconBrandWhatsapp size={28} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
