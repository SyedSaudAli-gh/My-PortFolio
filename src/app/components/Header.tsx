"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="h-[90px] p-6 sticky top-0 z-10 shadow-2xl ">
      <div className="flex justify-between items-center">
      <Link
  className="flex items-center text-white ml-12 font-bold text-4xl hover:text-[#000000cc] transition-all duration-1000 group"
  href="/"
>
<Image
  src="/image/pf-logo.png"
  alt="My image"
  height={10}
  width={55}
  className="transition-transform duration-700 group-hover:rotate-[360deg]"
/>

  SYED SAUD ALI
</Link>


        <button className="lg:hidden text-white p-2" onClick={toggleMenu}>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>

        <ul
          className={`${
            isMenuOpen
              ? "flex flex-col absolute top-20 left-0 w-full p-4 text-center shadow-2xl bg-[#1a1a1a]"
              : "hidden lg:flex"
          } gap-6 text-white mr-12 transition-all duration-300`}
        >
          {[
            { label: "HOME", href: "/" },
            { label: "ABOUT", href: "#About" },
            { label: "EDUCATION", href: "#Education" },
            { label: "SERVICES", href: "#Services" },
            { label: "ASSIGNMENTS", href: "#Assignments" },
            { label: "CONTACT-US", href: "#Contact-us" },
          ].map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="relative font-semibold text-white group"
              >
                <span className="group-hover:text-yellow-400 transition duration-300">
                  {link.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
