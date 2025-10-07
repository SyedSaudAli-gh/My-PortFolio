"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Link from "next/link";
import FollowMeProject from "../components/FollowMeProject";

type CardProps = {
  image: string;
  title: string;
  description: string;
  vercelLink?: string;
  githubLink: string;
};

const ProjectCard = ({ image, title, description, vercelLink, githubLink }: CardProps) => {
  const [showSocials, setShowSocials] = useState(false);
  const [active, setActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null); // ✅ Reference for main card area

  // ✅ Detect if device supports touch
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        (navigator as any).msMaxTouchPoints > 0
      );
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // ✅ Click/touch outside to close
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Node | null;
      if (cardRef.current && target && !cardRef.current.contains(target)) {
        setShowSocials(false);
        setActive(false);
      }
    };
    
    if (isTouchDevice) {
      document.addEventListener("touchstart", handleClickOutside);
      return () => document.removeEventListener("touchstart", handleClickOutside);
    } else {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isTouchDevice]);

  // ✅ Handle card click/touch
  const handleCardClick = (e: React.MouseEvent | React.TouchEvent) => {
    // Check if clicked element is a link or button
    const target = e.target as HTMLElement;
    const isInteractiveElement = target.closest('a, button');
    
    // Don't toggle if clicking on interactive elements
    if (!isInteractiveElement && isTouchDevice) {
      e.stopPropagation();
      setActive((prev) => !prev); // ✅ Toggle on same card click
    }
  };

  return (
    <div className="relative flex justify-center" ref={cardRef}>
      <div className="w-full max-w-[400px]">
        <div
          ref={mainCardRef}
          className="
            group relative w-full h-[350px] bg-white/20 backdrop-blur-lg backdrop-saturate-150 
            rounded-[32px] p-[3px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
            border border-white/20
            transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:rounded-tl-[55px] 
            data-[active=true]:rounded-tl-[55px]
            data-[active=true]:shadow-[0_8px_40px_0_rgba(252,70,107,0.4)]
            hover:shadow-[0_8px_40px_0_rgba(252,70,107,0.3)] 
            hover:scale-[1.02] 
            dark:bg-gray-800/30 dark:border-gray-600/40
            dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
            dark:hover:shadow-[0_8px_40px_0_rgba(142,45,226,0.5)]
          "
          data-active={active ? "true" : undefined}
          // ✅ Desktop: Auto hover
          onMouseEnter={() => !isTouchDevice && setActive(true)}
          onMouseLeave={() => !isTouchDevice && setActive(false)}
          // ✅ Mobile/Tablet: Click to toggle
          onClick={handleCardClick}
          onTouchEnd={handleCardClick}
        >
          {/* Mail Button */}
          <Link 
            href="/contectToMail" 
            className="absolute right-8 top-[1.4rem] opacity-100 scale-100 z-20"
            onClick={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            <HiOutlineMail className="text-[24px]" />
          </Link>

          {/* Profile Picture */}
          <div
            className="
              absolute w-[calc(100%-6px)] h-[calc(100%-6px)] top-[3px] left-[3px] rounded-[29px] z-[1] 
              overflow-hidden bg-[var(--background-secondary)] backdrop-blur-sm transition-all duration-500 
              group-hover:w-[120px] group-hover:h-[120px] group-hover:aspect-square group-hover:top-[20px] 
              group-hover:left-[20px] group-hover:rounded-full group-hover:z-[3] group-hover:border-[5px] 
              group-hover:border-[var(--border-color)] group-hover:shadow-[0_0_25px_var(--card-glow)] 
              group-data-[active=true]:w-[120px] group-data-[active=true]:h-[120px]
              group-data-[active=true]:aspect-square group-data-[active=true]:top-[20px] group-data-[active=true]:left-[20px]
              group-data-[active=true]:rounded-full group-data-[active=true]:z-[3]
              group-data-[active=true]:border-[5px] group-data-[active=true]:border-[var(--border-color)]
              group-data-[active=true]:shadow-[0_0_25px_var(--card-glow)]
            "
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 280px) 100vw, 280px"
              className="
                object-cover object-center transition-transform duration-500 ease-out 
                group-hover:scale-110 group-hover:brightness-110 
                group-data-[active=true]:scale-110 group-data-[active=true]:brightness-110
              "
              priority={false}
            />
          </div>

          {/* Bottom Section with Glowing Gradient */}
          <div
            className="
              absolute bottom-[3px] left-[3px] right-[3px] bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] 
              top-[80%] rounded-[29px] z-[2] shadow-[inset_0_2px_10px_0_rgba(255,255,255,0.3),0_0_20px_var(--card-glow)] 
              overflow-hidden transition-all duration-500 
              group-hover:top-[20%] group-hover:rounded-[80px_29px_29px_29px] group-hover:delay-200 
              group-hover:shadow-[inset_0_2px_10px_0_rgba(255,255,255,0.3),0_0_40px_var(--card-glow)]
              group-data-[active=true]:top-[20%] group-data-[active=true]:rounded-[80px_29px_29px_29px]
              group-data-[active=true]:delay-200
              group-data-[active=true]:shadow-[inset_0_2px_10px_0_rgba(255,255,255,0.3),0_0_40px_var(--card-glow)]
            "
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="absolute bottom-0 left-6 right-6 h-[182px] z-10">
              <span
                className={`block text-[1.05rem] text-[var(--text-primary)] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] line-clamp-2 transform transition-transform duration-300 group-hover:translate-y-[-10px] group-data-[active=true]:translate-y-[-10px]`}
              >
                {title}
              </span>

              <p
                className={`
                  mt-3 text-[0.85rem] text-[var(--text-secondary)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]
                  opacity-0 translate-y-4 max-h-0 overflow-hidden transition-all duration-300 ease-out
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-32 group-hover:delay-200
                  group-data-[active=true]:opacity-100 group-data-[active=true]:translate-y-0 group-data-[active=true]:max-h-32 group-data-[active=true]:delay-200
                `}
              >
                {description}
              </p>
            </div>

            {/* Bottom Actions */}
            <div
              className={`absolute bottom-4 left-6 right-6 flex items-center justify-between z-10 transform transition-transform duration-300 group-hover:translate-y-[-10px] group-data-[active=true]:translate-y-[-10px]`}
            >
              <div className="flex gap-4">
                <div className="relative group/github">
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                  >
                    <FaGithub
                      className={`h-5 w-5 text-[var(--text-primary)] drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:text-[var(--gradient-end)] hover:scale-[1.2] hover:drop-shadow-[0_0_15px_var(--card-glow)] transition-all duration-300 cursor-pointer`}
                    />
                  </Link>
                  <div
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--tooltip-bg)] text-[var(--tooltip-text)] px-2 py-1 rounded text-xs opacity-0 invisible transition-all duration-300 group-hover/github:opacity-100 group-hover/github:visible whitespace-nowrap pointer-events-none z-50`}
                  >
                    Code
                  </div>
                </div>

                {vercelLink && (
                  <div className="relative group/vercel">
                    <Link
                      href={vercelLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onTouchEnd={(e) => e.stopPropagation()}
                    >
                      <SiVercel
                        className={`h-5 w-5 text-[var(--text-primary)] drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:text-[var(--gradient-end)] hover:scale-[1.2] hover:drop-shadow-[0_0_15px_var(--card-glow)] transition-all duration-300 cursor-pointer`}
                      />
                    </Link>
                    <div
                      className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--tooltip-bg)] text-[var(--tooltip-text)] px-2 py-1 rounded text-xs opacity-0 invisible transition-all duration-300 group-hover/vercel:opacity-100 group-hover/vercel:visible whitespace-nowrap pointer-events-none z-50`}
                    >
                      Live
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSocials((v) => !v);
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                  setShowSocials((v) => !v);
                }}
                className={`
                  bg-[var(--background-secondary)] backdrop-blur-md text-[var(--text-primary)] 
                  border border-[var(--border-color)] rounded-[20px] 
                  text-[0.6rem] px-[0.6rem] py-[0.35rem] shadow-[0_0_15px_rgba(255,255,255,0.2)] 
                  hover:bg-[var(--gradient-start)] hover:text-white hover:bg-black hover:shadow-[0_0_25px_var(--card-glow)] 
                  hover:border-[var(--gradient-end)] transition-all duration-300 transform hover:scale-[1.05]
                `}
              >
                Follow Me
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons Section */}
        <FollowMeProject showSocials={showSocials} />
      </div>
    </div>
  );
};

export default ProjectCard;