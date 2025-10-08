"use client";

import React from "react";
import Globe from "@/components/ui/globe";
import Brand_Logo from "./Brand_Logo";
import Link from 'next/link'
import FollowMeProject from "./FollowMeProject";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative rounded-t-[24px] overflow-hidden mt-20 text-black dark:text-white">
      {/* 🔻 Top Gradient Border Line — match Navbar (thin + light + slight blur) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 rounded-full opacity-40 blur-[0.2px] z-20 pointer-events-none" />
      {/* 🌐 Background Globe with Glass Effect — match Navbar */}
      <div className="absolute inset-0 z-0 overflow-hidden backdrop-blur-md bg-white/5 dark:bg-black/10 pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <Globe />
        </div>
      </div>

      {/* 🌟 Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:justify-between space-y-12 md:space-y-0 pointer-events-none">
        {/* 🔹 Left Column */}
        <div className="md:w-1/2 space-y-6 pointer-events-auto">
        
          <Brand_Logo className="text-gray-200" />

          <p className="text-sm leading-relaxed max-w-md text-gray-400">
            Empowering physicians with advanced multi-modal tools to improve treatment selection and patient outcomes.
          </p>

          {/* Social Icons - Always Visible */}
          <div className="flex text-lg -ml-4">
            <FollowMeProject alwaysVisible={true} />
          </div>

          {/* Back to Top Button */}
          <div className="pt-4">
            <Link
              href="#top"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 
                text-xs uppercase tracking-wide font-medium
                bg-white dark:bg-gray-800 text-black dark:text-white
                transition-all duration-300 rounded shadow-sm
                active:scale-95
                focus-visible:ring-offset-2 focus-visible:ring-offset-black
                relative overflow-hidden group"
            >
              <span
                className="
    relative z-10
    text-black dark:text-white        /* always visible */
    transition-colors duration-500 ease-out
  "
              >
                <FaArrowUp />
              </span>

              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent
                group-hover:text-black group-focus:text-black group-active:text-black
                transition-colors duration-500 ease-out animate-text-glow">
                Back To Top
              </span>

              <span
                className="absolute inset-0 bg-gradient-to-t from-cyan-400 via-purple-400 to-pink-400 opacity-0
                  transition-all duration-500 ease-out
                  group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100
                  group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0
                  translate-y-full"
              />
            </Link>
          </div>
        </div>

        {/* 🔹 Right Columns: Site Map */}
        <div className="md:w-1/2 flex flex-col sm:flex-row justify-end gap-10 pointer-events-auto">
          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Site Map
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li><Link href="/" className="relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-cyan-400 after:via-purple-400 after:to-pink-400 after:transition-all after:duration-500 hover:after:w-full">Home</Link></li>
              <li><Link href="/aboutSkill" className="relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-cyan-400 after:via-purple-400 after:to-pink-400 after:transition-all after:duration-500 hover:after:w-full">About & Skills</Link></li>
              <li><Link href="/educations" className="relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-cyan-400 after:via-purple-400 after:to-pink-400 after:transition-all after:duration-500 hover:after:w-full">Education</Link></li>
              <li><Link href="/services" className="relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-cyan-400 after:via-purple-400 after:to-pink-400 after:transition-all after:duration-500 hover:after:w-full">Services</Link></li>
              <li><Link href="/projects" className="relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-cyan-400 after:via-purple-400 after:to-pink-400 after:transition-all after:duration-500 hover:after:w-full">Assignments</Link></li>
              <li><Link href="/contectToMail" className="relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-cyan-400 after:via-purple-400 after:to-pink-400 after:transition-all after:duration-500 hover:after:w-full">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🚩 Bottom Info Bar (no corners) */}
      <div className="text-center text-xs py-4 text-black dark:text-white">
        © 2025 Syed Saud Ali, All Rights Reserved.
      </div>
    </footer>
  );
}