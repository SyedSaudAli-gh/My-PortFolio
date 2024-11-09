import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { PiCopyright } from "react-icons/pi";

function Footer() {
  return (
    
    <div className="w-full h-80 opacity-80 shadow-2xl">
      <div className="w-full h-48 flex items-center justify-center">
        <div className="flex justify-center flex-col items-center text-center text-5xl gap-10 font-bold text-white">
          <h2 className="font-black">Syed Saud Ali</h2>
          <h3>North Karachi, Karachi, Paksiatan</h3>

          <div className="flex justify-center gap-4 ">
            <a
              target="_blank"
             className="text-4xl text-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-150"
              href="tel:"
            >
              <BsTelephone />
            </a>
            <a
              target="_blank"
              className="text-4xl text-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-150"
              href="mailto:saud.saleem93@gmail.com"
            >
              <CgMail />
            </a>
            <a
              target="_blank"
              className="text-4xl text-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-150"
              href="https://www.linkedin.com/in/syed-saud-ali-6399712b4/"
            >
              <CiLinkedin />
            </a>
            <a
              target="_blank"
            className="text-4xl text-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-150"
              href="https://github.com/SyedSaudAli-gh"
            >
              <FiGithub />
            </a>
            <a
              target="_blank"
               className="text-4xl text-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-150"
              href="https://www.facebook.com/saud.saleem.391"
            >
              <AiOutlineFacebook />
            </a>
            <a
              target="_blank"
              className="text-4xl text-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-150"
              href="https://www.instagram.com/syedsauda/"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20 gap-1 font-extrabold ">
        <PiCopyright />
        <p>All Right Reserved | Designed By </p>
        <p className="text-xl hover:scale-105 text-white">SYED SAUD ALI.</p>
      </div>
    </div>
  );
}

export default Footer;
