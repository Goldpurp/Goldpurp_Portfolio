import { motion } from 'framer-motion';
import { 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconBrandWhatsapp 
} from '@tabler/icons-react';
import { portfolioConfig } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="py-10 sm:py-16 md:py-20 relative overflow-hidden border-t border-line bg-card">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-6 md:px-12 xl:px-20 flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
        <div className="flex gap-6 sm:gap-8">
          {[
            { icon: IconBrandGithub, url: portfolioConfig.socials.github, label: "GitHub" },
            { icon: IconBrandLinkedin, url: portfolioConfig.socials.linkedin, label: "LinkedIn" },
            { icon: IconBrandWhatsapp, url: portfolioConfig.socials.whatsapp, label: "WhatsApp" }
          ].map((item, i) => (
            <motion.a 
              key={i} 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
              whileHover={{ scale: 1.2, y: -4 }}
              className="transition-all text-muted hover:text-primary"
            >
              <item.icon size={24} />
            </motion.a>
          ))}
        </div>
        <div className="text-center space-y-2 sm:space-y-3">
          <p className="text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.4em] sm:tracking-[0.6em] font-black italic text-muted">
            Designed & Built by Kehinde Razaq.
          </p>
          <p className="text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black italic text-muted opacity-50">
            Powered by React & Tailwind.
          </p>
        </div>
        <div className="w-16 sm:w-20 h-px bg-line" />
        <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black text-muted opacity-40">
          © 2026 Kehinde Razaq
        </p>
      </div>
    </footer>
  );
}
