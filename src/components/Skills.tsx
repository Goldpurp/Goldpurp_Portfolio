import { motion } from 'framer-motion';
import { 
  IconLayout, 
  IconServer, 
  IconDatabase, 
  IconSparkles, 
  IconBolt, 
  IconActivity, 
  IconArrowRight 
} from '@tabler/icons-react';
import { Section, itemReveal } from './ui/Section';
import { SectionHeader } from './ui/SectionHeader';
import { SkillBar } from './ui/SkillBar';

export function Skills() {
  const skillCards = [
    {
      icon: <IconLayout size={28} stroke={1.5} />,
      title: "Frontend",
      sub: "React ecosystem & Modern UI",
      bars: [
        { name: "React & JavaScript", level: 95 }, 
        { name: "TypeScript", level: 90 }
      ],
      tags: ["TypeScript", "JavaScript", "React", "Tailwind CSS", "Chakra UI"]
    },
    {
      icon: <IconServer size={28} stroke={1.5} />,
      title: "Backend",
      sub: "Scalable Architecture",
      bars: [
        { name: "C# / .NET Core", level: 100, label: "Expert" }, 
        { name: "RESTful API Design", level: 95 }
      ],
      tags: ["C#", ".NET Core", "RESTful API Design", "Server-Side Logic", "Clean Architecture"]
    },
    {
      icon: <IconDatabase size={28} stroke={1.5} />,
      title: "Databases",
      sub: "Data Modeling & Optimization",
      bars: [
        { name: "PostgreSQL", level: 90 }, 
        { name: "Relational Schema & Query Optimization", level: 85 }
      ],
      tags: ["PostgreSQL", "Relational Schema Design", "Query Optimization", "Entity Framework"]
    },
    {
      icon: <IconSparkles size={28} stroke={1.5} />,
      title: "Workflow & AI",
      sub: "Next-Gen Productivity",
      bars: [],
      tags: ["Git / GitHub", "Peer Code Reviews", "Sprint Planning", "Cross-Functional Collaboration"],
      extra: [
        { icon: <IconBolt size={18} />, title: "AI-Driven Workflows", sub: "Integrating Copilot and ChatGPT for efficient scaffolding" },
        { icon: <IconActivity size={18} />, title: "Prompt Engineering", sub: "Structuring high-context prompts to solve complex tasks rapidly" }
      ]
    }
  ];

  return (
    <Section id="skills">
      <SectionHeader 
        label="Expertise" 
        title={<>Technical Skills <span className="italic text-muted">& Workflow</span></>} 
        desc="A comprehensive overview of my technical stack, from high-performance backend systems to responsive frontend interfaces." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {skillCards.map(card => (
          <motion.div 
            key={card.title}
            variants={itemReveal} 
            className="rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 lg:p-14 space-y-4 sm:space-y-6 md:space-y-10 transition-all hover:shadow-lg bg-card border border-line"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center bg-pill text-primary flex-shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black italic text-foreground">{card.title}</h3>
                <p className="text-xs sm:text-sm font-medium text-muted">{card.sub}</p>
              </div>
            </div>
            
            {card.bars.length > 0 && (
              <div className="space-y-5 sm:space-y-8">
                {card.bars.map(b => (
                  <SkillBar key={b.name} name={b.name} level={b.level} label={b.label} />
                ))}
              </div>
            )}
            
            {card.extra && (
              <div className="space-y-3 sm:space-y-4">
                {card.extra.map(e => (
                  <div 
                    key={e.title} 
                    className="flex gap-3 sm:gap-5 p-3 sm:p-5 rounded-xl sm:rounded-2xl transition-all bg-pill border border-line"
                  >
                    <div className="text-primary flex-shrink-0 mt-0.5">{e.icon}</div>
                    <div>
                      <div className="text-xs sm:text-sm font-black uppercase tracking-widest italic text-foreground">{e.title}</div>
                      <div className="text-[9px] sm:text-[10px] font-medium text-muted">{e.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 sm:pt-6 border-t border-line">
              {card.tags.map(t => (
                <span 
                  key={t} 
                  className="px-2 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[10px] font-black uppercase tracking-widest rounded-md sm:rounded-lg bg-pill text-muted border border-line"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 sm:mt-12 md:mt-16 flex justify-center">
        <button className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] flex items-center gap-2 sm:gap-3 transition-all hover:opacity-100 text-muted hover:text-foreground cursor-pointer">
          View full technical resume <IconArrowRight size={16} />
        </button>
      </div>
    </Section>
  );
}
