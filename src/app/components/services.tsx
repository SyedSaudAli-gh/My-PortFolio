import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { SiUbiquiti } from "react-icons/si";
import { FaBrain } from "react-icons/fa";

function Services() {
  return (
    <section className="mt-[50px] mx-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[30px]" id="Services">
    <div className="w-full h-[600px] [perspective:1000px]">
      <div className="w-full h-full [transform-style:preserve-3d] [transition:transform_300ms] [box-shadow:0px_0px_10px_1px_#000000ee] rounded-[5px] hover:[transform:rotateY(180deg)]">
        <div className="w-full h-full flex justify-center items-center absolute rounded-[5px]">
          <div className="absolute w-[99%] h-[99%] text-4xl flex flex-col justify-center items-center gap-[30px]">
            <FaLaptopCode className="text-9xl" />
            <strong>WEB DESIGN</strong> 
          </div>
        </div>
        <div className="[transform:rotateY(180deg)] text-[white] bg-[#151515] absolute w-full h-full [backface-visibility:hidden] rounded-[5px] overflow-hidden p-[2px] text-[x-large] flex flex-col">
          <div className="absolute w-full h-full object-cover object-center">
            <div className="w-full h-[15px] bg-[#ffbb66] blur-[15px] mt-2"></div>
          </div>
          <div className="absolute w-full h-full px-[10px] py-[2px]">
            <small className="text-3xl flex justify-center mb-3 mt-1">Web Developer</small>
            <div className="[box-shadow:0px_0px_10px_5px_#00000088] p-[10px] backdrop-filter backdrop-blur-[5px] rounded-[5px]">
              <p className="text-[25px]">
                I developed a basic website as part of my learning journey in web development. This project allowed me to gain hands-on experience with HTML/Bootstrap, CSS/Tailwind-CSS, and TypeScript/JavaScript. I also explored Next.js, learning the fundamentals of responsive design and web layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="w-full h-[600px] [perspective:1000px]">
      <div className="w-full h-full [transform-style:preserve-3d] [transition:transform_300ms] [box-shadow:0px_0px_10px_1px_#000000ee] rounded-[5px] hover:[transform:rotateY(180deg)]">
        <div className="w-full h-full flex justify-center items-center absolute rounded-[5px]">
          <div className="absolute w-[99%] h-[99%] text-4xl flex flex-col justify-center items-center gap-[30px]">
            <SiUbiquiti className="text-9xl" />
            <strong>UI/UX DESIGN</strong>
          </div>
        </div>
        <div className="[transform:rotateY(180deg)] text-[white] bg-[#151515] absolute w-full h-full [backface-visibility:hidden] rounded-[5px] overflow-hidden p-[2px] text-[x-large] flex flex-col">
          <div className="absolute w-full h-full object-cover object-center">
            <div className="w-full h-[15px] bg-[#ffbb66] blur-[15px] mt-2"></div>
          </div>
          <div className="absolute w-full h-full px-[10px] py-[2px]">
            <small className="text-3xl flex justify-center mb-3 mt-1">UI/UX DESIGN</small>
            <div className="[box-shadow:0px_0px_10px_5px_#00000088] p-[10px] backdrop-filter backdrop-blur-[5px] rounded-[5px]">
              <p className="text-[25px]">
                I designed a basic website layout using Figma as part of my learning journey in UI/UX design. The project helped me understand the fundamentals of design principles, wireframing, and creating user-friendly interfaces. Through this experience, I gained hands-on skills in using Figma to create visually appealing and functional website designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="w-full h-[600px] [perspective:1000px]">
      <div className="w-full h-full [transform-style:preserve-3d] [transition:transform_300ms] [box-shadow:0px_0px_10px_1px_#000000ee] rounded-[5px] hover:[transform:rotateY(180deg)]">
        <div className="w-full h-full flex justify-center items-center absolute rounded-[5px]">
          <div className="absolute w-[99%] h-[99%] text-4xl flex flex-col justify-center items-center gap-[30px]">
            <FaBrain className="text-9xl" />
            <strong>Artificial Intelligence</strong>
          </div>
        </div>
        <div className="[transform:rotateY(180deg)] text-[white] bg-[#151515] absolute w-full h-full [backface-visibility:hidden] rounded-[5px] overflow-hidden p-[2px] text-[x-large] flex flex-col">
          <div className="absolute w-full h-full object-cover object-center">
            <div className="w-full h-[15px] bg-[#ffbb66] blur-[15px] mt-2"></div>
          </div>
          <div className="absolute w-full h-full px-[10px] py-[2px]">
            <small className="text-3xl flex justify-center mb-3 mt-1">Artificial intelligence</small>
            <div className="[box-shadow:0px_0px_10px_5px_#00000088] p-[10px] backdrop-filter backdrop-blur-[5px] rounded-[5px]">
              <p className="text-[25px]">
                Artificial Intelligence is revolutionizing the learning experience by personalizing education, automating administrative tasks, and providing intelligent tutoring. With AI, learning platforms can adapt content to individual needs, offer real-time feedback, and make education more accessible. I explore AI's potential in learning to create smarter, more engaging educational solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Services;
