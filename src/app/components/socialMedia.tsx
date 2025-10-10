"use client";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const iconClass = "text-[20px] sm:text-[24px]";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/syed-saud-ali-6399712b4/",
    bg: "bg-[#0077b5]",
    Icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/SyedSaudAli-gh",
    bg: "bg-gradient-to-r from-gray-800 to-black",
    Icon: FaGithub,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923482554902",
    bg: "bg-[#25D366]",
    Icon: FaWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/saud.saleem.391",
    bg: "bg-[#316FF6]",
    Icon: FaFacebookF,
  },
  {
    name: "X",
    href: "https://x.com/saudali242821",
    bg: "bg-gradient-to-r from-gray-800 to-black",
    Icon: FaXTwitter, // Font Awesome 6
  },
];

export default function SocialMedia({ variant = "default" }: { variant?: "default" | "tablet" }) {
  // Tablet floating panel
  if (variant === "tablet") {
    return (
      <div className="flex flex-col gap-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg p-3 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
        {socialLinks.map(({ name, href, bg, Icon }) => (
          <Link
            key={name}
            href={href}
            aria-label={name}
            title={name}
            target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`${bg} flex justify-center items-center p-3 w-12 h-12 rounded-xl text-white transition-all duration-300 hover:scale-110 active:scale-95`}
          >
            <Icon className={iconClass} aria-hidden="true" />
          </Link>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <>
      {/* Mobile: Horizontal */}
      <section className="sm:hidden flex flex-wrap justify-center items-center gap-3 mx-auto mt-8 mb-6 px-4">
        {socialLinks.map(({ name, href, bg, Icon }) => (
          <Link
            key={name}
            href={href}
            aria-label={name}
            title={name}
            target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`${bg} flex justify-center items-center p-3 w-12 h-12 rounded-xl text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg`}
          >
            <Icon className={iconClass} aria-hidden="true" />
          </Link>
        ))}
      </section>

      {/* Desktop: Sticky */}
      <section className="hidden lg:flex sticky top-16 right-4 flex-col items-center gap-4">
        {socialLinks.map(({ name, href, bg, Icon }) => (
          <Link
            key={name}
            href={href}
            aria-label={name}
            title={name}
            target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`${bg} group relative flex justify-center items-center p-3 w-11 h-11 rounded-md drop-shadow-xl text-white transition-all duration-300 hover:translate-y-1 hover:rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/70`}
          >
            <Icon className={iconClass} aria-hidden="true" />
            <span className="pointer-events-none absolute z-50 opacity-0 group-hover:opacity-100 transition duration-150 ease-out select-none whitespace-nowrap bg-white/95 text-gray-900 dark:bg-gray-900 dark:text-white px-2 py-1 rounded-md shadow-md ring-1 ring-black/5 text-xs right-full top-1/2 -translate-y-1/2 mr-3">
              {name}
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}