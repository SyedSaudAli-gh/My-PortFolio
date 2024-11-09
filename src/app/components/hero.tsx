"use client"
import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between" id="home">
    <div className="flex flex-col justify-center font-bold ml-14 text-7xl lg:text-left text-center">
      <p className="text-2xl mb-0">Hello I'm</p>
      <h1 className="text-3xl lg:text-4xl">Syed Saud Ali</h1>
      <h2 className="mt-10 mb-14 text-white text-[40px]">
        <Typewriter
          options={{
            strings: [
              "Web Designer", "Web Developer", "UI/UX Designer",
              "Front End Developer", "Apps Designer", "Apps Developer"
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <div className="flex gap-3 justify-center lg:justify-start">
        <div className="rounded text-center text-[20px] px-14 py-3 text-black bg-[#fc4440] hover:bg-[#faa000] duration-500 hover:text-white">
          <button>Hire Me</button>
        </div>
        <div className="btnDiv rounded text-center text-[20px] px-14 py-3 text-black bg-[#fc4440] hover:bg-[#faa000] duration-500 hover:text-white">
          <button id="downloadBtn" value="download">
            <a className="flex gap-2" href="/cv/myCv.pdf" download="Saud.Cv.pdf">
              Download CV
              <IoCloudDownloadOutline />
            </a>
          </button>
        </div>
      </div>
    </div>
  
    <div className="mt-10 lg:mt-0 lg:h-screen flex justify-center lg:justify-end w-full">
      <Image
        src="/image/saud-Photoroom.png"
        alt="My image"
        height={100}
        width={450}
        className="max-w-full h-auto"
      />
    </div>
  
    <section className="flex justify-center mt-6">
      <div className="text-4xl flex gap-4 lg:flex-col mr-4">
        <a target="_blank" href="https://www.linkedin.com/in/syed-saud-ali-6399712b4/">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/SyedSaudAli-gh">
          <FaGithub />
        </a>
        <a target="_blank" href="mailto:saud.saleem93@gmail.com">
          <SiGmail />
        </a>
        <a target="_blank" href="https://www.facebook.com/saud.saleem.391">
          <FaFacebook />
        </a>
        <a target="_blank" href="https://www.instagram.com/syedsauda/">
          <TiSocialInstagram />
        </a>
      </div>
    </section>
  </div>
  
  );
}

export default Hero;
