import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconMail, 
  IconMapPin, 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconBrandWhatsapp, 
  IconSend,
  IconCheck,
  IconLoader2
} from '@tabler/icons-react';
import { Section, itemReveal } from './ui/Section';
import { SectionHeader } from './ui/SectionHeader';
import { portfolioConfig } from '../data/portfolio';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/kehinderazaq03@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject || "New Portfolio Message",
          Message: formData.message
        })
      });

      const result = await response.json();
      if (response.ok && result.success === "true") {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
        <div className="space-y-5 sm:space-y-8 lg:space-y-12">
          <SectionHeader 
            label="Open to opportunities" 
            title={<>Ready to build <br /><span className="text-primary">the future?</span></>} 
            desc="Specializing in C#, React, and scalable web solutions. Whether you have a project in mind or just want to chat tech, my inbox is open." 
          />
          
          <div className="space-y-3 sm:space-y-4">
            {[
              { icon: <IconMail size={24} />, label: "Email Me", value: portfolioConfig.email, href: `mailto:${portfolioConfig.email}` },
              { icon: <IconMapPin size={24} />, label: "Location", value: portfolioConfig.location, href: null },
            ].map(item => {
              const content = (
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] bg-card border border-line transition-all hover:shadow-md">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex-shrink-0 flex items-center justify-center shadow-xl bg-pill text-primary">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] sm:text-[10px] font-black uppercase mb-0.5 sm:mb-1 tracking-widest text-muted">{item.label}</div>
                    <div className="font-bold text-sm sm:text-lg md:text-xl italic tracking-tight text-foreground truncate">{item.value}</div>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a key={item.label} href={item.href} className="block cursor-pointer">
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}
          </div>

          <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
            <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] italic text-muted opacity-50">Connect</div>
            <div className="flex gap-3 sm:gap-4">
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
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center bg-card border border-line text-muted hover:text-primary transition-all shadow-sm cursor-pointer"
                >
                  <item.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          variants={itemReveal} 
          className="rounded-2xl sm:rounded-[3rem] p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden bg-card border border-line"
        >
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(var(--primary)_1px,transparent_1px)] bg-[length:24px_24px]" />
          <h3 className="text-2xl sm:text-3xl font-black italic mb-2 sm:mb-4 leading-tight relative z-10 text-foreground">Send a message</h3>
          <p className="mb-5 sm:mb-8 text-xs sm:text-sm relative z-10 text-muted">I usually respond within 24 hours.</p>
          
          <form className="space-y-4 sm:space-y-6 md:space-y-8 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2 sm:space-y-3">
                <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-1 text-muted">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full rounded-xl sm:rounded-2xl py-3.5 sm:py-5 px-4 sm:px-6 text-sm font-bold bg-pill border border-line text-foreground outline-none transition-all placeholder:text-muted/60"
                />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-1 text-muted">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com" 
                  required
                  className="w-full rounded-xl sm:rounded-2xl py-3.5 sm:py-5 px-4 sm:px-6 text-sm font-bold bg-pill border border-line text-foreground outline-none transition-all placeholder:text-muted/60"
                />
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-1 text-muted">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project collaboration" 
                className="w-full rounded-xl sm:rounded-2xl py-3.5 sm:py-5 px-4 sm:px-6 text-sm font-bold bg-pill border border-line text-foreground outline-none transition-all placeholder:text-muted/60"
              />
            </div>
            <div className="space-y-2 sm:space-y-3">
              <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-1 text-muted">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..." 
                required
                className="w-full rounded-xl sm:rounded-[2rem] p-4 sm:p-6 text-sm font-bold bg-pill border border-line text-foreground outline-none transition-all min-h-[140px] sm:min-h-[180px] resize-none placeholder:text-muted/60"
              />
            </div>
            
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 sm:py-6 rounded-xl sm:rounded-[2rem] text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-white bg-primary hover:bg-primary/95 italic flex items-center justify-center gap-3 sm:gap-4 active:scale-[0.98] transition-all shadow-[0_8px_32px_var(--glow)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>Sending... <IconLoader2 size={18} className="animate-spin" /></>
              ) : status === 'success' ? (
                <>Message Sent! <IconCheck size={18} /></>
              ) : (
                <>Send Message <IconSend size={18} /></>
              )}
            </button>
            
            <AnimatePresence>
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-3 sm:p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-bold text-center italic"
                >
                  Thank you! Your message has been sent successfully. I will get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-3 sm:p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs sm:text-sm font-bold text-center italic"
                >
                  Oops! Something went wrong. Please try again or email me directly at {portfolioConfig.email}.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
