import { motion } from 'framer-motion';

interface HeroProps {
  bio: string;
  isDark: boolean;
  scrollTo: (id: string) => void;
}

export function Hero({ bio, isDark, scrollTo }: HeroProps) {
  return (
    <section className="min-h-[80vh] lg:min-h-screen flex items-center pt-20 pb-8 sm:pt-24 sm:pb-12 lg:py-20 px-5 sm:px-6 md:px-12 xl:px-20 max-w-[1600px] mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left"
        >
          <span
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-pill rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary border border-line"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
            Available for hire
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-[1.1] tracking-tighter italic text-foreground">
            Building{' '}
            <span className="text-primary">Robust</span>
            {' '}Solutions <br className="hidden sm:block" />
            <span className="font-medium tracking-normal text-muted">with Precision.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium text-muted">
            {bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-1 sm:pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white bg-primary hover:bg-primary/95 transition-all active:scale-95 shadow-[0_8px_32px_var(--glow)] cursor-pointer"
            >
              Explore Work
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-pill text-foreground border border-line hover:bg-elevated transition-all active:scale-95 cursor-pointer"
            >
              About Me
            </button>
          </div>
        </motion.div>

        {/* Hero mockup — desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:block relative group"
        >
          <div
            className="backdrop-blur-3xl rounded-[2.5rem] xl:rounded-[3rem] overflow-hidden shadow-2xl relative p-2.5 sm:p-3 bg-card border border-line shadow-[0_24px_80px_var(--glow)]"
          >
            <div
              className="px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between rounded-t-[2.5rem] xl:rounded-t-[3rem] bg-pill border-b border-line"
            >
              <div className="flex gap-2 sm:gap-2.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400 animate-pulse" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400 animate-pulse delay-75" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400 animate-pulse delay-150" />
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.4em] sm:tracking-[0.5em] font-black text-muted">GoldPurp</div>
            </div>
            <div className="aspect-[4/5] relative rounded-b-[2.5rem] xl:rounded-b-[3rem] overflow-hidden bg-pill">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200"
                alt="Code"
                className={`w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-1000 ${isDark ? '' : 'sepia-[0.4] hue-rotate-[100deg]'
                  }`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
