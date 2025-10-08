"use client";
import React, { useState, useEffect } from "react";
import ThemeSwitchHideInactive from "./themeSwitch";
import Brand_Logo from "./Brand_Logo";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          sticky top-0 left-0 right-0 z-50
          h-[70px] sm:h-[80px] md:h-[90px]
          px-3 sm:px-4 md:px-6 
          py-4 sm:py-5 md:py-6
          transition-all duration-500
          backdrop-blur-md bg-white/5 dark:bg-black/10
          text-foreground
          ${scrolled ? "shadow-lg" : ""}
        `}
      >
        {/* Rounded background wrapper (as-is) */}
        <div className="absolute inset-0 rounded-b-[24px] overflow-hidden -z-10 backdrop-blur-lg bg-white/5 dark:bg-black/10" />

        {/* Bottom gradient line - thinner, lighter, and clipped to rounded corners */}
        <div className="pointer-events-none absolute inset-0 rounded-b-[24px] overflow-hidden z-0">
          <div className="absolute bottom-0 left-0 w-full h-px rounded-full
                  bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300
                  opacity-40 blur-[0.2px]" />
        </div>
        <div className="relative z-10 flex justify-between items-center h-full max-w-7xl mx-auto px-2 sm:px-4 md:px-5">
          {/* Brand Logo */}
          <div className="flex-1 min-w-0 max-w-[60%] sm:max-w-[65%] md:max-w-[70%]">
            <Brand_Logo />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeSwitchHideInactive />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;