import { NextResponse } from "next/server";

const assignmentApi = [
  {
    id: 17,
    image: "/image/Hackathon jan.PNG",
    title: "Hackathon Marketplace Builder (Next.js, Sanity.io, Stripe)",
    description:
      "Developed for a hackathon, this project is a dynamic e-commerce marketplace built with Next.js, Sanity.io, and Stripe. Key features include dynamic product listing and routing, a user interface and dashboard, order management, add-to-cart functionality, checkout, wishlist integration, and secure payment processing.",
    link: "https://hackathon-3-project-iota.vercel.app/",
  },
  {
    id: 16,
    image: "/image/UIUX HACKATHON.PNG",
    title: "UI/UX Hackathon Project (Next.js)",
    description:
      "This project was developed during a UI/UX hackathon using Next.js. It demonstrates skills in front-end development, responsive design, and creating user-friendly interfaces with a focus on user experience principles.",
    link: "https://uiux-hackathon-nextjs-design-jam-2024-sable.vercel.app/",
  },
  {
    id: 15,
    image: "/image/MILESTONE-3-E-COMMERCE.PNG",
    title: "Full-Stack E-commerce Website (Next.js & Custom API)",
    description:
      "This project demonstrates full-stack web development skills by building an e-commerce website with Next.js and a custom-built API. It showcases the ability to design and implement both the front-end user interface and the back-end data service.",
    link: "https://milestone-3-project-e-commerce-web.vercel.app/",
  },
  {
    id: 14,
    image: "/image/Blog.PNG",
    title: "Dynamic Blog Website (Next.js & Sanity.io)",
    description:
      "This project demonstrates the creation of a dynamic blog using Next.js and Sanity.io, showcasing skills in content management and responsive design.",
    link: "https://dynamic-blogs-website.vercel.app/",
  },
  {
    id: 13,
    image: "/image/Mini Hackathon Figma Design.PNG",
    title: "Next.js Implementation from Figma Design",
    description:
      "This project demonstrates the ability to translate design mockups into functional web applications, responsive design, and Tailwind CSS styling, all from provided design specifications.",
    link: "https://mini-hackathon-figma-design.vercel.app/",
  },
  {
    id: 12,
    image: "/image/CloneGovernorSindhWebsite.PNG",
    title: "Next.js Website Clone: Governor Sindh",
    description:
      "This project involves creating a pixel-perfect clone of the Governor of Sindh's website using Next.js.",
    link: "https://clone-governor-sindh-website.vercel.app/",
  },
  {
    id: 11,
    image: "/image/HairSalonWebsite.PNG",
    title: "Hair Salon Website (Next.js & Tailwind CSS)",
    description:
      "This project demonstrates building a responsive website using Next.js and Tailwind CSS for a hair salon.",
    link: "https://simple-website-custom-css.vercel.app/",
  },
  {
    id: 10,
    image: "/image/property website.PNG",
    title: "Responsive Property Website (Next.js)",
    description:
      "A responsive mini property website utilizing HTML, CSS, and TypeScript built with Next.js.",
    link: "https://html-css-mini-assignments.vercel.app/",
  },
  {
    id: 9,
    image: "/image/Hackathom.png",
    title: "Hackathon Milestone Resume Builder",
    description:
      "This project showcases skills in creating interactive web applications. The Hackathon Milestone Resume Builder enables users to build, edit, download, and share resumes.",
    link: "https://hackathon-cdks.vercel.app/",
  },
  {
    id: 8,
    image: "/image/Simple-calculator.jpeg",
    title: "Simple Calculator (CLI)",
    description:
      "A command-line interface (CLI) calculator to gain functional experience with TypeScript.",
    link: "https://github.com/SyedSaudAli-gh/simple-calculator.git",
  },
  {
    id: 7,
    image: "/image/number-guessing.jpg",
    title: "Number Guessing Game (CLI)",
    description:
      "Interactive Number Guessing Game application using TypeScript.",
    link: "https://github.com/SyedSaudAli-gh/number-guessing.git",
  },
  {
    id: 6,
    image: "/image/wordcounter.jpeg",
    title: "Word Counter (CLI)",
    description: "Interactive Word Counter application built using TypeScript.",
    link: "https://github.com/SyedSaudAli-gh/wordcounter.git",
  },
  {
    id: 5,
    image: "/image/ATM.jpg",
    title: "ATM-Machine (CLI)",
    description: "Interactive ATM Machine application using TypeScript.",
    link: "https://github.com/SyedSaudAli-gh/ATM-Machine.git",
  },
  {
    id: 4,
    image: "/image/todo.png",
    title: "TODO LIST (CLI)",
    description: "Interactive Todo List application with TypeScript.",
    link: "https://github.com/SyedSaudAli-gh/Todo-list.git",
  },
  {
    id: 3,
    image: "/image/project-6.jpg",
    title: "Currency Converter (CLI)",
    description:
      "Interactive Currency Converter application built with TypeScript.",
    link: "https://github.com/SyedSaudAli-gh/Currency-Converter.git",
  },
  {
    id: 2,
    image: "/image/SMS.png",
    title: "Student Management System (CLI)",
    description:
      " Interactive Student Management System application built using TypeScript.",
    link: "https://github.com/SyedSaudAli-gh/Student-Management-System.git",
  },
  {
    id: 1,
    image: "/image/45.Exercises-TypeScript.png",
    title: "45 Exercises TypeScript (CLI)",
    description: "A collection of simple programs to explore TypeScript.",
    link: "https://github.com/SyedSaudAli-gh/45.Exercises-TypeScript.git",
  },
];

export async function GET() {
  return NextResponse.json(assignmentApi);
}
