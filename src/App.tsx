import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { portfolioConfig } from './data/portfolio';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div 
      className="min-h-screen bg-surface text-foreground transition-colors duration-300 selection:bg-primary/20"
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] z-[120] origin-left bg-primary sm:hidden"
        style={{ scaleX }} 
      />

      {/* Navigation Menu */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} scrollTo={scrollTo} />

      {/* Main Sections */}
      <main>
        <Hero bio={portfolioConfig.bio} isDark={isDark} scrollTo={scrollTo} />
        <About bio={portfolioConfig.bio} />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}
