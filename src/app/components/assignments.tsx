import Image from "next/image";
import React from "react";
import { TiArrowRightThick } from "react-icons/ti";

function Assignments() {
  return (
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center my-16" id="Assignments">
<a href="https://hackathon-cdks.vercel.app/" target="_blank">
    <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
      <Image
        src="/image/Hackathom.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
        <h3 className="text-[24px] text-white font-bold text-center">
        Hackathom Milestones Resume Builder (HTML, CSS, TypeScript)
          
        </h3>
        <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
        I developed an Hackathom Milestone Resume using HTML, Css, & TypeScript,
            enabling for interactive resume-cv like web online builder your resume creatable and editable and downloadable and shareable project. functionality.
        </p>
        <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">View Project<TiArrowRightThick /></p>
      </div>
    </div>
  </a>
  <a
    href="https://github.com/SyedSaudAli-gh/simple-calculator.git"
    target="_blank">
    <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
      <Image
        src="/image/Simple-calculator.jpeg"
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
        <p className="text-[24px] text-white font-bold text-center">
        Simple Calculator (CLI)
          
        </p>
        <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
        This a Cli based calculator to get some functional experience with
        TypeScript. Live coding Night Class.
        </p>
        <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">View Project<TiArrowRightThick /></p>
      </div>
    </div>
  </a>

  <a href="https://github.com/SyedSaudAli-gh/number-guessing.git" target="_blank">
    <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
      <Image
        src="/image/number-guessing.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
        <p className="text-[24px] text-white font-bold text-center">
        Number Guessing Game (CLI)
          
        </p>
        <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
        I developed an NUmber Guessing Game application using TypeScript & NPM
        Inquirer, functionality. Live coding Night Class.
        </p>
        <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">View Project<TiArrowRightThick /></p>
      </div>
    </div>
  </a>

  <a href="https://github.com/SyedSaudAli-gh/number-guessing.git" target="_blank">
    <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
      <Image
        src="/image/wordcounter.jpeg"
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
        <p className="text-[24px] text-white font-bold text-center">
        Word Counter (CLI)

        </p>
        <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
        I developed an NUmber Guessing Game application using TypeScript & NPM
        Inquirer, functionality. Live coding Night Class.
        </p>
        <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">View Project<TiArrowRightThick /></p>
      </div>
    </div>
  </a>

  <a href="https://github.com/SyedSaudAli-gh/ATM-Machine.git" target="_blank">
    <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
      <Image
        src="/image/ATM.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
        <p className="text-[24px] text-white font-bold text-center">
        ATM-Machine (CLI)
         
        </p>
        <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
        I developed an ATM machine application using TypeScript & NPM Inquirer,
        allowing for interactive command-line functionality. Live coding Night Class.
        </p>
        <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">View Project<TiArrowRightThick /></p>
      </div>
    </div>
  </a>

  <a href="https://github.com/SyedSaudAli-gh/Todo-list.git" target="_blank">
    <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
      <Image
        src="/image/todo.png"
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
        <p className="text-[24px] text-white font-bold text-center">
        TODO LIST (CLI)
        
        </p>
        <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
        I developed an Todo List application using TypeScript & NPM Inquirer,
            allowing for interactive command-line functionality add(Add, Edit and Delete). Live coding Night Class.
        </p>
        <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">View Project<TiArrowRightThick /></p>
      </div>
    </div>
  </a>

  <a href="https://github.com/SyedSaudAli-gh/Currency-Converter.git" target="_blank">
    <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
      <Image
        src="/image/project-6.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
        <p className="text-[24px] text-white font-bold text-center">
        Currency Converter (CLI)
         
        </p>
        <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
        I developed an Currency Converter application using TypeScript & NPM
        Inquirer, allowing for interactive command-line functionality. Live coding Night Class.
        </p>
        <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">View Project<TiArrowRightThick /></p>
      </div>
    </div>
  </a>

  <a href="https://github.com/SyedSaudAli-gh/Student-Management-System.git" target="_blank">
    <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
      <Image
        src="/image/SMS.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
        <p className="text-[24px] text-white font-bold text-center">
        Student Management System (CLI)
       
        </p>
        <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
        I developed an Student Management System application using TypeScript & NPM Inquirer,
        allowing for interactive command-line functionality.
        </p>
        <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">View Project<TiArrowRightThick /></p>
      </div>
    </div>
  </a>
  <a
    href="https://github.com/SyedSaudAli-gh/45.Exercises-TypeScript.git"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
      <Image
        src="/image/45.Exercises-TypeScript.png"
        alt="45 Exercises TypeScript"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
        <p className="text-[24px] text-white font-bold text-center">
          45 Exercises TypeScript (CLI)
         
        </p>
        <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">
          Try these short programs to get some firsthand experience with TypeScript.
        </p>
        <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">View Project<TiArrowRightThick /></p>
      </div>
    </div>
  </a>


 
</section>

  );
}

export default Assignments;
