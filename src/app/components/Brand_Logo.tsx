"use client";
import { Open_Sans } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

type BrandLogoProps = {
  className?: string; // allow external text color, etc.
};

function Brand_Logo({ className = "" }: BrandLogoProps) {
  const [logoHovered, setLogoHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';
  const logoSrc = isDark ? '/image/logoWhite.png' : '/image/logoBlack.png';

  // Placeholder during hydration
  if (!mounted) {
    return (
      <div>
        <Link className="flex items-center group" href="/">
          <div className="relative mr-2 sm:mr-3 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] bg-transparent" />
          <span
            className={[
              "font-lobster text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl truncate max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-none",
              className || "text-black dark:text-white",
            ].join(" ")}
          >
            SYED SAUD ALI
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        className="flex items-center group"
        href="/"
        onMouseEnter={() => setLogoHovered(true)}
        onMouseLeave={() => setLogoHovered(false)}
      >
        {/* Logo wrapper with animated glow */}
        <div className="relative mr-2 sm:mr-3 transform-gpu">
          {/* gradient pulsing aura */}
          <div className="absolute inset-[-8px] sm:inset-[-10px]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-lg blur-lg animate-pulse"></div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-lg blur-xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          {/* hover secondary glow */}
          <div
            className={`absolute transition-all duration-700 ease-in-out ${
              logoHovered ? "inset-[-10px] sm:inset-[-12px] opacity-100" : "inset-[-8px] sm:inset-[-10px] opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-lg"></div>
          </div>

          {/* Logo itself - Responsive sizes */}
          <div className="relative">
            <Image
              key={logoSrc}
              src={logoSrc}
              alt="My Logo"
              height={55}
              width={logoHovered ? 58 : 55}
              className={`
                relative z-10 transition-all duration-700 ease-out animate-float
                w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px]
                ${logoHovered
                  ? "scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                  : "scale-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                }
              `}
              priority
            />
            <div className="absolute inset-[-2px] sm:inset-[-3px] border border-white/10 rounded-full animate-spin-slow"></div>
          </div>
        </div>

        {/* Brand name — color controlled by className prop */}
        <span
          className={[
            "font-lobster",
            "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
            "transition-colors duration-700",
            "hover:bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400",
            "hover:bg-clip-text hover:text-transparent",
            "animate-text-glow",
            "truncate max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-none",
            className || "text-black dark:text-white",
          ].join(" ")}
        >
          SYED SAUD ALI
        </span>
      </Link>
    </div>
  )
}

export default Brand_Logo