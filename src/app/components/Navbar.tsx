"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeSwitchHideInactive from "./themeSwitch";
import Brand_Logo from "./Brand_Logo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = "0";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  // Navigation links
  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/aboutSkill" },
    { label: "EDUCATION", href: "/educations" },
    { label: "SERVICES", href: "/services" },
    { label: "ASSIGNMENTS", href: "/projects" },
    { label: "CONTACT-US", href: "/contectToMail" },
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        className={`
          sticky top-0 left-0 right-0 z-50
          h-[70px] sm:h-[80px] md:h-[90px]
          px-3 sm:px-4 md:px-6 
          py-4 sm:py-5 md:py-6
          transition-all duration-500
          backdrop-blur-lg bg-white/5 dark:bg-black/10
          text-foreground
          ${scrolled ? "shadow-lg" : ""}
        `}
      >
        {/* Wrapper for rounded corners */}
        <div className="absolute inset-0 rounded-b-[24px] overflow-hidden -z-10 backdrop-blur-lg bg-white/5 dark:bg-black/10"></div>
        
        {/* ✨ Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-80 pointer-events-none" />

        <div className="relative z-10 flex justify-between items-center h-full max-w-7xl mx-auto px-2 sm:px-4 md:px-5">
          
          {/* Brand Logo */}
          <div className="flex-1 min-w-0 max-w-[60%] sm:max-w-[65%] md:max-w-[70%]">
            <Brand_Logo />
          </div>

          {/* Right Side: Theme + Burger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeSwitchHideInactive />

            {/* Burger Button */}
            <button
              className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 z-50 group text-foreground"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto flex items-center justify-center">
                
                {/* Animated dots (burger icon) */}
                {[...Array(8)].map((_, index) => (
                  <span
                    key={index}
                    className={`
                      absolute transition-all duration-500 ease-out rounded-full bg-foreground
                      ${isMenuOpen
                        ? "w-0 h-0 opacity-0 scale-0"
                        : "w-1 h-1 sm:w-1.5 sm:h-1.5 opacity-60 group-hover:opacity-100 group-hover:animate-pulse"
                      }
                    `}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: !isMenuOpen
                        ? `translate(-50%, -50%) translate(${Math.cos(index * (Math.PI / 4)) * 10}px, ${Math.sin(index * (Math.PI / 4)) * 10}px)`
                        : "translate(-50%, -50%)",
                      transitionDelay: `${index * 30}ms`,
                      animationDelay: `${index * 125}ms`,
                    }}
                  />
                ))}

                {/* X close icon */}
                <span
                  className={`
                    absolute h-0.5 bg-foreground transition-all duration-500 ease-out
                    ${isMenuOpen
                      ? "w-6 sm:w-7 md:w-8 rotate-45 shadow-[0_0_10px_currentColor,0_0_20px_currentColor]"
                      : "w-0 opacity-0"
                    }
                  `}
                />
                <span
                  className={`
                    absolute h-0.5 bg-foreground transition-all duration-500 ease-out
                    ${isMenuOpen
                      ? "w-6 sm:w-7 md:w-8 -rotate-45 shadow-[0_0_10px_currentColor,0_0_20px_currentColor]"
                      : "w-0 opacity-0"
                    }
                  `}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <div
        className={`
          fixed inset-0 z-40 transition-all duration-500
          ${isMenuOpen ? "visible" : "invisible"}
        `}
      >
        {/* Background with gradient overlay */}
        <div
          className={`
            absolute inset-0 transition-all duration-700
            ${isMenuOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={toggleMenu}
          role="presentation"
        >
          {/* Solid base layer */}
          <div className="absolute inset-0 bg-background" />
          
          {/* Blur layer */}
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
          
          {/* Gradient shimmer */}
          <div
            className={`
              absolute inset-0 
              bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 
              transition-opacity duration-1000
              ${isMenuOpen ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>

        {/* Navigation Links */}
        <div
          className={`
            absolute inset-0 flex items-center justify-center 
            transition-all duration-500
            ${isMenuOpen ? "opacity-100" : "opacity-0"}
          `}
        >
          <nav aria-label="Mobile navigation">
            <ul className="text-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 px-4 sm:px-6 font-lobster w-full max-w-xl">
              {navLinks.map((link, index) => (
                <li
                  key={link.label}
                  className={`
                    transform transition-all duration-700 ease-out
                    ${isMenuOpen
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-10 opacity-0 scale-95"
                    }
                  `}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 80}ms` : "0ms",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl group inline-block overflow-hidden"
                  >
                    {/* Gradient text with shimmer */}
                    <span
                      className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-shimmer"
                      style={{ backgroundSize: "200% auto" }}
                    >
                      {link.label}
                    </span>

                    {/* Glow effect on hover */}
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-150 animate-pulse-slow" />

                    {/* Bottom underline */}
                    <span className="absolute left-0 -bottom-1 sm:-bottom-2 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-500 w-0 group-hover:w-full" />

                    {/* Shimmer overlay */}
                    <span className="absolute inset-0 -z-5 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ===== ANIMATIONS ===== */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        .animate-shimmer { 
          animation: shimmer 3s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;