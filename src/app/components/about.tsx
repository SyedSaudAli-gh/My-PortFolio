import React from "react";
import Image from "next/image";
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";

function About() {
  return (
    <section className="flex justify-between w-full h-auto" id="About">
      <div className="container group relative">
        <Image
          src="/image/saud_about.png"
          alt="aboutImg"
          height={900}
          width={800}
          className="lg:block hidden" 
        />
        <div className="absolute inset-0 bg-red-500 rounded-lg opacity-80 overflow-hidden h-full w-0 transition-all duration-500 ease-in-out group-hover:w-full lg:block hidden">
          <div className="text-center text-black text-sm md:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-2">
            <ul>
              <li className="mb-7">
                <span className="font-semibold">
                  Name:
                  <br />
                </span>{" "}
                Syed Saud Ali
              </li>
              <li className="mb-7">
                <span className="font-semibold">
                  Father Name:
                  <br />
                </span>{" "}
                Syed Saleem Ali
              </li>
              <li className="mb-7">
                <span className="font-semibold">
                  Date of Birth:
                  <br />
                </span>{" "}
                October 10, 1993
              </li>
              <li className="mb-7">
                <span className="font-semibold">
                  Marital Status:
                  <br />
                </span>{" "}
                Married
              </li>
              <li className="mb-7">
                <span className="font-semibold">
                  Nationality:
                  <br />
                </span>{" "}
                Pakistan
              </li>
              <li className="mb-7">
                <span className="font-semibold">
                  Religion:
                  <br />
                </span>{" "}
                Islam
              </li>
              <li className="mb-7">
                <span className="font-semibold">
                  Phone No.:
                  <br />
                </span>{" "}
                +92348-2554902
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="font-[system-ui] mt-10 lg:mt-28 mr-4 lg:mr-[100px] ml-4 lg:ml-[20px]">
        <h1 className="text-3xl lg:text-4xl font-sans font-bold mb-6 hover:text-white transition-all duration-1000">
          Learn About Me
        </h1>
        <p className="text-lg mb-6">
          As a passionate and detail-oriented software engineering graduate with
          a solid foundation in programming, software development, and
          problem-solving, I am seeking an entry-level position where I can
          apply my technical skills and contribute to innovative projects. Eager
          to join a dynamic team to enhance my knowledge, learn from experienced
          professionals, and grow within the company while delivering
          high-quality software solutions.
        </p>

        {/* Skills Section */}
        <div className="space-y-4">
          <div className="text-4xl flex items-center">
            <FaHtml5 />
            <p className="text-lg ml-2">HTML 5</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-[black] rounded-[20px] w-[90%] bg-[#fdae00] text-end mb-5">
              90%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <SiCss3 />
            <p className="text-lg ml-2">CSS 3</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-[black] rounded-[20px] w-3/4 bg-[#fdae00] text-end mb-5">
              75%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <RiTailwindCssFill />
            <p className="text-lg ml-2">Tailwind Css</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-[black] rounded-[20px] w-4/5 bg-[#fdae00] text-end mb-5">
              80%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <FaBootstrap />
            <p className="text-lg ml-2">BootStrap 5</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-[black] rounded-[20px] w-3/4 bg-[#fdae00] text-end mb-5">
              75%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <SiTypescript />
            <p className="text-lg ml-2">TypeScript</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-[black] rounded-[20px] w-[65%] bg-[#fdae00] text-end mb-5">
              65%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <IoLogoJavascript />
            <p className="text-lg ml-2">JavaScript</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-[black] rounded-[20px] w-[65%] bg-[#fdae00] text-end mb-5">
              65%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <RiNextjsFill />
            <p className="text-lg ml-2">NextJs</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-[black] rounded-[20px] w-4/5 bg-[#fdae00] text-end mb-5">
              80%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
