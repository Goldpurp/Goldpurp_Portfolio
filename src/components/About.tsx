import {
  IconDownload,
  IconCode,
  IconHistory,
  IconRocket,
  IconBriefcase,
  IconTerminal2,
  IconCpu,
  IconBrandReact,
  IconBrandTypescript,
  IconDatabase,
  IconLayout,
  IconSparkles,
  IconCheck
} from '@tabler/icons-react';
import { Section } from './ui/Section';
import { SectionHeader } from './ui/SectionHeader';

interface AboutProps {
  bio: string;
}

export function About({ bio }: AboutProps) {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
        {/* Left biography & stats */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-10">
          <SectionHeader label="Discover" title="About Me" />

          <div
            className="rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 flex flex-col md:flex-row gap-5 sm:gap-8 md:gap-12 items-center md:items-start relative overflow-hidden group bg-card border border-line"
          >
            <div className="w-36 h-44 sm:w-48 sm:h-56 rounded-2xl sm:rounded-[2.5rem] flex-shrink-0 overflow-hidden shadow-2xl relative bg-pill mx-auto md:mx-0">
              <img
                src="https://i.pinimg.com/1200x/25/5f/fe/255ffee56d3a00f0eed3159bf0bcdf07.jpg"
                alt="Kehinde Razaq"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 rounded-full p-1.5 bg-primary border-2 border-card text-white">
                <IconCheck size={12} stroke={4} />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black italic leading-tight text-foreground">
                Bridging Backend Logic <br className="hidden sm:block" />with Frontend Aesthetics
              </h3>
              <p className="leading-relaxed font-medium text-sm sm:text-base md:text-lg text-muted">
                I am a <span className="font-bold text-primary">Backend & Full-Stack Developer</span> specializing in C# .NET, PostgreSQL database optimization, and React web ecosystems. Beyond writing clean code, I actively design microservices, configure APIs, and harness AI tools to speed up iteration times.
              </p>
              <p className="leading-relaxed font-medium text-xs sm:text-sm md:text-base text-muted">
                My approach translates product specifications into clean, scalable architecture. Whether architecting backend microservices or creating responsive interfaces, I maintain focus on code quality, speed, and platform robustness.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center md:justify-start">
                <button
                  className="px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white bg-primary hover:bg-primary/90 transition-all shadow-[0_4px_20px_var(--glow)] flex items-center gap-2 cursor-pointer"
                >
                  <IconDownload size={16} /> Download Resume
                </button>
                <a
                  href="https://github.com/Goldpurp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-pill text-foreground border border-line hover:bg-elevated transition-all flex items-center gap-2 cursor-pointer"
                >
                  <IconCode size={16} /> View GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {[
              { l: "EXPERIENCE", v: "3+ Years", i: <IconHistory /> },
              { l: "APPS SHIPPED", v: "6+", i: <IconRocket /> },
              { l: "STACK DEPTH", v: "Full-Stack", i: <IconBriefcase /> }
            ].map(s => (
              <div
                key={s.l}
                className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-[2rem] text-center space-y-2 sm:space-y-3 md:space-y-4 transition-all hover:shadow-lg bg-card border border-line"
              >
                <div className="mx-auto w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center bg-pill text-primary">
                  {s.i}
                </div>
                <div className="text-[7px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted">{s.l}</div>
                <div className="text-lg sm:text-2xl md:text-3xl font-black italic text-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side arsenal */}
        <div className="lg:col-span-5 space-y-5 sm:space-y-8 lg:space-y-12">
          <h3 className="text-xl sm:text-2xl font-black italic text-foreground">Technical Arsenal</h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3 md:gap-4">
            {[
              { n: "C#", s: "Backend Logic", i: <IconTerminal2 /> },
              { n: ".NET Core", s: "Backend Framework", i: <IconCpu /> },
              { n: "React", s: "Frontend UI", i: <IconBrandReact /> },
              { n: "TypeScript", s: "Type Safety", i: <IconBrandTypescript /> },
              { n: "PostgreSQL", s: "Database Storage", i: <IconDatabase /> },
              { n: "Tailwind CSS", s: "Utility Styling", i: <IconLayout /> },
              { n: "Git / GitHub", s: "Version Control", i: <IconCode /> },
              { n: "AI Prompting", s: "Dev Workflows", i: <IconSparkles /> }
            ].map(item => (
              <div
                key={item.n}
                className="rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex items-center gap-3 sm:gap-4 md:gap-6 transition-all hover:shadow-md bg-card border border-line"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center bg-pill text-primary flex-shrink-0">
                  {item.i}
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base md:text-lg font-black italic leading-tight text-foreground truncate">{item.n}</div>
                  <div className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted truncate">{item.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
