// data/assignment.ts
export type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  vercelLink?: string; 
  githubLink: string;   
};

export const assignment: Project[] = [
  {
    id: 18,
    image: "/image/wgtecsol.PNG",
    title: "WGtecsol — Next.js + Tailwind",
    description: "Figma → Next.js + Tailwind; pixel‑perfect, responsive, reusable routes/components. Deployed.",
    vercelLink: "https://wgtecsol-website.vercel.app/",
    githubLink: "https://github.com/SyedSaudAli-gh/wgtecsol-website.git",
  },
  {
    id: 17,
    image: "/image/Hackathon jan.PNG",
    title: "Hackathon Marketplace — Next.js, Sanity, Stripe",
    description: "Dynamic marketplace: products, routing, dashboard, cart, wishlist, Stripe checkout.",
    vercelLink: "https://hackathon-3-project-iota.vercel.app/",
    githubLink: "https://github.com/SyedSaudAli-gh/hackathon-3-project.git",
  },
  {
    id: 16,
    image: "/image/UIUX HACKATHON.PNG",
    title: "UI/UX Hackathon — Next.js",
    description: "Responsive UI in Next.js with UX‑focused components.",
    vercelLink: "https://uiux-hackathon-nextjs-design-jam-2024-sable.vercel.app/",
    githubLink: "https://github.com/SyedSaudAli-gh/uiux-hackathon-nextjs.git",
  },
  {
    id: 15,
    image: "/image/MILESTONE-3-E-COMMERCE.PNG",
    title: "Full‑Stack E‑commerce — Next.js + API",
    description: "Storefront + custom API; end‑to‑end flows and integrations.",
    vercelLink: "https://milestone-3-project-e-commerce-web.vercel.app/",
    githubLink: "https://github.com/SyedSaudAli-gh/milestone-3-ecommerce.git",
  },
  {
    id: 14,
    image: "/image/Blog.PNG",
    title: "Dynamic Blog — Next.js & Sanity",
    description: "CMS content, dynamic routes, responsive design.",
    vercelLink: "https://dynamic-blogs-website.vercel.app/",
    githubLink: "https://github.com/SyedSaudAli-gh/dynamic-blogs-website.git",
  },
  {
    id: 13,
    image: "/image/Mini Hackathon Figma Design.PNG",
    title: "Figma → Next.js (Tailwind)",
    description: "Converted Figma to responsive, component‑based Next.js UI.",
    vercelLink: "https://mini-hackathon-figma-design.vercel.app/",
    githubLink: "https://github.com/SyedSaudAli-gh/mini-hackathon-figma-design.git",
  },
  {
    id: 12,
    image: "/image/CloneGovernorSindhWebsite.PNG",
    title: "Governor Sindh Clone — Next.js",
    description: "Pixel‑perfect website clone in Next.js.",
    vercelLink: "https://clone-governor-sindh-website.vercel.app/",
    githubLink: "https://github.com/SyedSaudAli-gh/clone-governor-sindh-website.git",
  },
  {
    id: 11,
    image: "/image/HairSalonWebsite.PNG",
    title: "Hair Salon — Next.js + Tailwind",
    description: "Responsive business website with clean sections.",
    vercelLink: "https://simple-website-custom-css.vercel.app/",
    githubLink: "https://github.com/SyedSaudAli-gh/simple-website-custom-css.git",
  },
  {
    id: 10,
    image: "/image/property website.PNG",
    title: "Property Mini‑Site — Next.js",
    description: "HTML/CSS/TypeScript on Next.js; fully responsive.",
    vercelLink: "https://html-css-mini-assignments.vercel.app/",
    githubLink: "https://github.com/SyedSaudAli-gh/html-css-mini-assignments.git",
  },
  {
    id: 9,
    image: "/image/Hackathom.png",
    title: "Resume Builder — Hackathon",
    description: "Create, edit, download, share resumes.",
    vercelLink: "https://hackathon-cdks.vercel.app/",
    githubLink: "https://github.com/SyedSaudAli-gh/hackathon-resume-builder.git",
  },
  {
    id: 8,
    image: "/image/Simple-calculator.jpeg",
    title: "CLI Calculator — TypeScript",
    description: "Simple calculator CLI.",
    githubLink: "https://github.com/SyedSaudAli-gh/simple-calculator.git",
  },
  {
    id: 7,
    image: "/image/number-guessing.jpg",
    title: "CLI Number Guess — TypeScript",
    description: "Interactive number guessing game.",
    githubLink: "https://github.com/SyedSaudAli-gh/number-guessing.git",
  },
  {
    id: 6,
    image: "/image/wordcounter.jpeg",
    title: "CLI Word Counter — TypeScript",
    description: "Word/character counter CLI.",
    githubLink: "https://github.com/SyedSaudAli-gh/wordcounter.git",
  },
  {
    id: 5,
    image: "/image/ATM.jpg",
    title: "CLI ATM — TypeScript",
    description: "Simulated ATM with transactions.",
    githubLink: "https://github.com/SyedSaudAli-gh/ATM-Machine.git",
  },
  {
    id: 4,
    image: "/image/todo.png",
    title: "CLI Todo — TypeScript",
    description: "Todo list CLI with CRUD.",
    githubLink: "https://github.com/SyedSaudAli-gh/Todo-list.git",
  },
  {
    id: 3,
    image: "/image/project-6.jpg",
    title: "CLI Currency Converter — TypeScript",
    description: "Currency converter CLI.",
    githubLink: "https://github.com/SyedSaudAli-gh/Currency-Converter.git",
  },
  {
    id: 2,
    image: "/image/SMS.png",
    title: "CLI Student Management — TypeScript",
    description: "Student records management.",
    githubLink: "https://github.com/SyedSaudAli-gh/Student-Management-System.git",
  },
  {
    id: 1,
    image: "/image/45.Exercises-TypeScript.png",
    title: "45 TypeScript Exercises — CLI",
    description: "Practice programs collection.",
    githubLink: "https://github.com/SyedSaudAli-gh/45.Exercises-TypeScript.git",
  },
];