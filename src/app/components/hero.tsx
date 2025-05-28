"use client";
import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TiSocialInstagram } from "react-icons/ti";

function Hero() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center w-full"
      id="home"
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center items-center lg:items-start font-bold px-6 lg:px-14 text-center lg:text-left lg:w-1/2 mt-10 lg:mt-0">
        <p className="text-2xl mb-0">Hello I'm</p>
        <h1 className="text-3xl lg:text-5xl">Syed Saud Ali</h1>
        <h2 className="mt-8 mb-10 text-white text-[32px] lg:text-[40px]">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "UI/UX Designer",
                "Front End Developer",
                "Apps Developer",
                "Modern AI Python Developer",
                "AI Agent Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="group relative rounded text-[18px] px-10 py-3 bg-[#fc4440] text-white hover:bg-[#faa000] duration-500">
            Hire Me
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </button>

          <a
            href="/cv/myCv.pdf"
            download="Saud.Cv.pdf"
            className="group relative rounded text-[18px] px-10 py-3 bg-[#fc4440] text-white hover:bg-[#faa000] duration-500 flex items-center justify-center gap-2"
          >
            Download CV <IoCloudDownloadOutline size={20} />
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:flex justify-center lg:justify-end w-full lg:w-1/2 mt-10 lg:mt-0">
        <div className="relative w-[90%] h-[30vh] lg:h-screen overflow-hidden group">
          <Image
            src="/image/hero.png"
            alt="My image"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* Social Links – sticky-style right corner */}
      <section className="sticky top-16 right-4 flex flex-row  lg:flex-col items-center gap-4 text-3xl text-gray-900">
        {[
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/syed-saud-ali-6399712b4/",
          },
          {
            icon: <FaGithub />,
            link: "https://github.com/SyedSaudAli-gh",
          },
          {
            icon: <SiGmail />,
            link: "mailto:saud.saleem93@gmail.com",
          },
          {
            icon: <FaFacebook />,
            link: "https://www.facebook.com/saud.saleem.391",
          },
          {
            icon: <TiSocialInstagram />,
            link: "https://www.instagram.com/syedsauda/",
          },
        ].map(({ icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-gray-900"
          >
            {icon}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </section>
    </div>
  );
}

export default Hero;
