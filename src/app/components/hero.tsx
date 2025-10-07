"use client";
import React, { useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { CursorHighlight } from "@/components/ui/cursor-highlight";
import HeroButton from "./heroButton";
import SocialMedia from "./socialMedia";
import Globe from "@/components/ui/globe";

function Hero() {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div
      className="flex flex-col sm:flex-row justify-between items-center w-full min-h-screen px-4 sm:px-6 lg:px-0"
      id="home"
    >
      {/* Background glow blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-10 flex justify-center blur-3xl"
      >
        <div className="h-40 w-[400px] sm:w-[600px] md:w-[800px] rounded-full bg-gradient-to-r from-[#fc466b33] to-[#3f5efb33]" />
      </div>

      {/* Left Content */}
      <div className="flex flex-col justify-center items-center sm:items-start font-bold px-4 sm:px-6 lg:px-14 text-center sm:text-left w-full sm:w-1/2 mt-20 sm:mt-24 lg:mt-0">
        <p className="text-xl sm:text-2xl md:text-3xl mb-0">Hello I'm</p>
        <CursorHighlight
          className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"
          gradient="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-text-glow"
          showPointer={true}
          pointerClassName="text-pink-500"
          rectangle="border-blue dark:border-white/20 rounded-lg p-2 sm:p-3 md:p-4"
        >
          <h1>Syed Saud Ali</h1>
        </CursorHighlight>
        <h2 className="mt-6 sm:mt-8 mb-8 sm:mb-10 text-black dark:text-white text-[24px] sm:text-[20px] md:text-[28px] lg:text-[40px] font-semibold sm:whitespace-nowrap overflow-hidden">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Front End Developer",
                "Back End Developer",
                "Apps Developer",
                "Agentic Ai Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        {/* Buttons */}
        <HeroButton />

        {/* Globe - Shows below button ONLY on mobile (< 640px) */}
        <div className="flex sm:hidden justify-center items-center w-full mt-12">
          <div className="w-full max-w-[350px] h-[350px]">
            <Globe />
          </div>
        </div>
      </div>

      {/* Globe - Shows on RIGHT side for tablet (640px - 1023px) */}
   
      <div className="hidden sm:flex lg:hidden justify-center items-center w-full sm:w-1/2 mt-10 sm:mt-0 relative">
        <div className="w-full max-w-[400px] h-[400px] md:max-w-[500px] md:h-[500px]">
          <Globe />
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setShowSocial(!showSocial)}
          className="absolute bottom-4 right-4 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Toggle social media"
        >
          {showSocial ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          )}
        </button>

        {/* Social Media - Smooth Slide Animation */}
        {/* Social Media - Extra Smooth Spring Animation */}
        <div
          className={`
    absolute bottom-20 right-1 z-40
    transition-all duration-700 ease-out
    ${showSocial
              ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
              : 'translate-y-12 opacity-0 scale-95 pointer-events-none'
            }
  `}
          style={{
            transitionTimingFunction: showSocial
              ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' // Spring effect opening
              : 'cubic-bezier(0.4, 0, 1, 1)'        // Smooth closing
          }}
        >
          <SocialMedia variant="tablet" />
        </div>
      </div>

      {/* Image - Shows on RIGHT side ONLY on desktop (≥ 1024px) */}
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

      {/* Social Media - Original positioning */}
      <SocialMedia variant="default" />
    </div>
  );
}

export default Hero;