export interface Project {
  name: string;
  company: string;
  companyDetails: string;
  description: string;
  image: string;
  frameworks: string[];
  codeLink: string;
  liveLink: string;
  categories: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  desc: string;
  tags: string[];
}

export interface PortfolioConfig {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  socials: { github: string; linkedin: string; whatsapp: string };
  projects: Project[];
  experience: Experience[];
}

export const portfolioConfig: PortfolioConfig = {
  name: "Kehinde Razaq",
  role: "Backend & Full-Stack Developer",
  bio: "Adaptive Software Developer with a track record of scaling products from initial concept to launch within fast-paced startup environments. Specialize in building high-performance web applications using the React ecosystem and C# .NET. Proactive builder and AI-assisted workflow advocate.",
  location: "United Kingdom",
  email: "kehinderazaq03@gmail.com",
  phone: "+44-734-439-7646",
  socials: {
    github: "https://github.com/Goldpurp",
    linkedin: "https://www.linkedin.com/in/kehinde-razaq-52628b1ba",
    whatsapp: "https://wa.me/447344397646",
  },
  projects: [
    {
      name: "Konvato",
      company: "Konvato",
      companyDetails: "Backend Engineering (2025 – 2026)",
      description:
        "Designed and implemented scalable server-side features, microservices, and secure RESTful APIs using C# and .NET Core. Structured and optimized PostgreSQL relational database queries and aligned architectures with AWS cloud principles.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
      frameworks: ["C#", ".NET Core", "PostgreSQL", "AWS", "REST APIs", "Docker"],
      codeLink: "",
      liveLink: "https://dev.konvato.com/",
      categories: ["All Projects", ".NET / C#"],
    },
    {
      name: "Fanful",
      company: "Fanful",
      companyDetails: "Software Developer (2024 – 2025)",
      description:
        "Built and maintained frontend features, developed highly responsive, accessible UI components using React and Tailwind CSS, and integrated interfaces with RESTful APIs for real-time creator data flow.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
      frameworks: ["React", "TypeScript", "Tailwind CSS", "RESTful APIs", "Chakra UI"],
      codeLink: "https://github.com/Goldpurp",
      liveLink: "https://github.com/Goldpurp",
      categories: ["All Projects", "Frontend", "Full Stack"],
    },
    {
      name: "Weddn",
      company: "Weddn",
      companyDetails: "Software Developer (2024 – 2025)",
      description:
        "Designed and built highly interactive wedding planning SaaS dashboards. Created clean, reusable frontend components and optimized layouts for cross-browser compatibility and loading speeds.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
      frameworks: ["React", "JavaScript", "HTML5", "CSS3", "Framer Motion"],
      codeLink: "https://github.com/Goldpurp",
      liveLink: "https://github.com/Goldpurp",
      categories: ["All Projects", "Frontend"],
    },
    {
      name: "AltSchool Africa",
      company: "AltSchool Africa",
      companyDetails: "Front-End Intern (2023 - 2024)",
      description:
        "Built responsive UI components, mastered state management and clean coding principles, and collaborated on school and bootcamp web apps using Git workflows under senior engineering mentorship.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800",
      frameworks: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
      codeLink: "https://github.com/Goldpurp",
      liveLink: "https://github.com/Goldpurp",
      categories: ["All Projects", "Frontend"],
    },
  ],
  experience: [
    {
      title: "Backend Engineer",
      company: "Konvato",
      period: "2025–2026",
      desc: "Designed and implemented scalable server-side features, microservices, and secure RESTful APIs using C# and .NET Core. Managed and optimized PostgreSQL database queries, streamlined development cycles, and aligned architecture with AWS cloud principles.",
      tags: ["C#", ".NET Core", "PostgreSQL", "REST APIs", "AWS", "Microservices"],
    },
    {
      title: "Software Developer",
      company: "Fanful",
      period: "2024–2025",
      desc: "Built responsive, accessible UI features using React, TypeScript, and Tailwind CSS. Integrated front-end components with RESTful APIs, improved performance, fixed front-end bugs, and participated actively in agile sprint ceremonies.",
      tags: ["React", "TypeScript", "Tailwind CSS", "RESTful APIs", "Agile"],
    },
    {
      title: "Software Developer",
      company: "Weddn",
      period: "2024–2025",
      desc: "Designed and built responsive user interfaces, optimized web apps for loading speed and cross-browser compatibility, engineered clean reusable components, and translated high-fidelity wireframes into pixel-perfect pages.",
      tags: ["React", "JavaScript", "Framer Motion", "Responsive Design", "UI/UX"],
    },
    {
      title: "Front-End Engineer Intern",
      company: "AltSchool Africa",
      period: "2023-2024",
      desc: "Built responsive UI components, mastered state management and clean code principles, and transitioned foundational knowledge into collaborative development using Git/GitHub workflows under senior engineering mentorship.",
      tags: ["HTML5", "CSS3", "JavaScript", "React", "State Management", "Git"],
    },
  ],
};
