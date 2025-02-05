import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiArrowRightThick } from "react-icons/ti";

function Assignments() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center my-16"
      id="Assignments"
    >
      {/*  */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/Hackathon jan.PNG" // Make sure this is the RIGHT SCREENSHOT!
          alt="Screenshot of the Marketplace builder hackathon" // Specific alt text
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <h3 className="text-[24px] text-white font-bold text-center">
            Hackathon Marketplace Builder (Next.js, Sanity.io, Stripe)
          </h3>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            Developed for a hackathon, this project is a dynamic e-commerce
            marketplace built with Next.js, Sanity.io, and Stripe. Key features
            include dynamic product listing and routing, a user interface and
            dashboard, order management, add-to-cart functionality, checkout,
            wishlist integration, and secure payment processing.
          </p>
          <Link
            href="https://hackathon-3-project-iota.vercel.app/"
            target="_blank"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </Link>
        </div>
      </div>
      {/* UI/UX Hackathon Project */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/UIUX HACKATHON.PNG" // Make sure this is the RIGHT SCREENSHOT!
          alt="Screenshot of the UI/UX Hackathon Project" // Specific alt text
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <h3 className="text-[24px] text-white font-bold text-center">
            UI/UX Hackathon Project (Next.js)
          </h3>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            This project was developed during a UI/UX hackathon using Next.js.
            It demonstrates skills in front-end development, responsive design,
            and creating user-friendly interfaces with a focus on user
            experience principles.
          </p>
          <Link
            href="https://uiux-hackathon-nextjs-design-jam-2024-sable.vercel.app/"
            target="_blank"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </Link>
        </div>
      </div>

      {/* Full-Stack E-commerce Website */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/MILESTONE-3-E-COMMERCE.PNG" // VERY IMPORTANT: Make SURE you have a good E-commerce app screenshot!
          alt="Screenshot of the E-commerce Website (Next.js & Custom API)" // VERY specific alt text
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <h3 className="text-[24px] text-white font-bold text-center">
            Full-Stack E-commerce Website (Next.js & Custom API)
          </h3>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            This project demonstrates full-stack web development skills by
            building an e-commerce website with Next.js and a custom-built API.
            It showcases the ability to design and implement both the front-end
            user interface and the back-end data service.
          </p>
          <Link
            href="https://milestone-3-project-e-commerce-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </Link>
        </div>
      </div>

      {/* Dynamic Blog Website */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/Blog.PNG" // IMPORTANT: Is this a screenshot of the actual blog?
          alt="Screenshot of the Dynamic Blog Website (Next.js & Sanity.io)" // Specific alt text
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <h3 className="text-[24px] text-white font-bold text-center">
            Dynamic Blog Website (Next.js & Sanity.io)
          </h3>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            This project demonstrates the creation of a dynamic blog using
            Next.js and Sanity.io, showcasing skills in content management and
            responsive design.
          </p>
          <Link
            href="https://dynamic-blogs-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </Link>
        </div>
      </div>

      {/* Mini Hackathon Figma Design */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/Mini Hackathon Figma Design.PNG"
          alt="Screenshot of the Mini Hackathon Figma Design Implementation" // More specific Alt text
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <h3 className="text-[24px] text-white font-bold text-center">
            Next.js Implementation from Figma Design
          </h3>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            This project demonstrates the ability to translate design mockups
            into functional web applications, responsive design, and Tailwind
            CSS styling, all from provided design specifications.
          </p>
          <Link
            href="https://mini-hackathon-figma-design.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </Link>
        </div>
      </div>

      {/* Next.js Website Clone: Governor Sindh */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/CloneGovernorSindhWebsite.PNG"
          alt="Screenshot of the Governor Sindh Website Clone (Next.js)" // More specific Alt text
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <h3 className="text-[24px] text-white font-bold text-center">
            Next.js Website Clone: Governor Sindh
          </h3>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            This project involves creating a pixel-perfect clone of the Governor
            of Sindh's website using Next.js.
          </p>
          <Link
            href="https://clone-governor-sindh-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </Link>
        </div>
      </div>

      {/* Hair Salon Website */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/HairSalonWebsite.PNG" // ENSURE THIS IS A SCREENSHOT
          alt="Screenshot of the Hair Salon Website (Next.js)"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <h3 className="text-[24px] text-white font-bold text-center">
            Hair Salon Website (Next.js & Tailwind CSS)
          </h3>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            This project demonstrates building a responsive website using
            Next.js and Tailwind CSS for a hair salon.
          </p>
          <Link
            href="https://simple-website-custom-css.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </Link>
        </div>
      </div>

      {/* HTML-CSS-Mini-Assignments */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/property website.PNG"
          alt="Screenshot of the property website"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <h3 className="text-[24px] text-white font-bold text-center">
            Responsive Property Website (Next.js)
          </h3>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            A responsive mini property website utilizing HTML, CSS, and
            TypeScript built with Next.js.
          </p>
          <Link
            href="https://html-css-mini-assignments.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </Link>
        </div>
      </div>

      {/* Hackathom Milestones Resume Builder */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/Hackathom.jpg"
          alt="Hackathon Milestone Resume Builder"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <h3 className="text-[24px] text-white font-bold text-center">
            Hackathon Milestone Resume Builder
          </h3>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            This project showcases skills in creating interactive web
            applications. The Hackathon Milestone Resume Builder enables users
            to build, edit, download, and share resumes.
          </p>
          <Link
            href="https://hackathon-cdks.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </Link>
        </div>
      </div>

      {/* Simple Calculator (CLI) */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/Simple-calculator.jpeg"
          alt="Screenshot of Simple Calculator application"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <p className="text-[24px] text-white font-bold text-center">
            Simple Calculator (CLI)
          </p>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            A command-line interface (CLI) calculator to gain functional
            experience with TypeScript.
          </p>

          <a
            href="https://github.com/SyedSaudAli-gh/simple-calculator.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </a>
        </div>
      </div>

      {/* Number Guessing Game (CLI) */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/number-guessing.jpg"
          alt="Screenshot of Number Guessing game"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <p className="text-[24px] text-white font-bold text-center">
            Number Guessing Game (CLI)
          </p>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            Interactive Number Guessing Game application using TypeScript.
          </p>

          <a
            href="https://github.com/SyedSaudAli-gh/number-guessing.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </a>
        </div>
      </div>

      {/* Word Counter (CLI) */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/wordcounter.jpeg"
          alt="Screenshot of Word Counter"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <p className="text-[24px] text-white font-bold text-center">
            Word Counter (CLI)
          </p>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            Interactive Word Counter application built using TypeScript.
          </p>

          <a
            href="https://github.com/SyedSaudAli-gh/wordcounter.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </a>
        </div>
      </div>

      {/* ATM-Machine (CLI) */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/ATM.jpg"
          alt="Screenshot of ATM Application"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <p className="text-[24px] text-white font-bold text-center">
            ATM-Machine (CLI)
          </p>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            Interactive ATM Machine application using TypeScript.
          </p>

          <a
            href="https://github.com/SyedSaudAli-gh/ATM-Machine.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </a>
        </div>
      </div>

      {/* TODO LIST (CLI) */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/todo.png"
          alt="Screenshot of Todo list application"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <p className="text-[24px] text-white font-bold text-center">
            TODO LIST (CLI)
          </p>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            Interactive Todo List application with TypeScript.
          </p>
          <a
            href="https://github.com/SyedSaudAli-gh/Todo-list.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </a>
        </div>
      </div>

      {/* Currency Converter (CLI) */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/project-6.jpg"
          alt="Screenshot of currency converter"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <p className="text-[24px] text-white font-bold text-center">
            Currency Converter (CLI)
          </p>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            Interactive Currency Converter application built with TypeScript.
          </p>
          <a
            href="https://github.com/SyedSaudAli-gh/Currency-Converter.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </a>
        </div>
      </div>

      {/* Student Management System (CLI) */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/SMS.jpg"
          alt="Screenshot of Student management System application"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <p className="text-[24px] text-white font-bold text-center">
            Student Management System (CLI)
          </p>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            Interactive Student Management System application built using
            TypeScript.
          </p>

          <a
            href="https://github.com/SyedSaudAli-gh/Student-Management-System.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </a>
        </div>
      </div>

      {/* 45 Exercises TypeScript (CLI) */}
      <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
        <Image
          src="/image/45.Exercises-TypeScript.png"
          alt="A collection of 45 typscript exercises"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
          <p className="text-[24px] text-white font-bold text-center">
            45 Exercises TypeScript (CLI)
          </p>
          <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
            A collection of simple programs to explore TypeScript.
          </p>
          <a
            href="https://github.com/SyedSaudAli-gh/45.Exercises-TypeScript.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
              View Project
              <TiArrowRightThick />
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Assignments;
