"use client";
import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    name: "Whatapps",
    href: "https://wa.me/923482554902",
    bg: "bg-[#25D366]",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
        <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/syed-saud-ali-6399712b4/",
    bg: "bg-[#0077b5]",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
        <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/SyedSaudAli-gh",
    bg: "bg-gradient-to-r from-gray-800 to-black",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
        <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" />
      </svg>
    ),
  },
  // {
  //   name: "Gmail",
  //   href: "mailto:saud.saleem93@gmail.com",
  //   bg: "bg-gradient-to-r from-[#D93025]/90 to-[#C5221F]/90",
  //   svg: (
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 sm:w-6 sm:h-6">
  //       <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
  //       <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
  //       <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
  //       <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" />
  //       <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" />
  //     </svg>
  //   ),
  // },
  {
    name: "Facebook",
    href: "https://facebook.com/saud.saleem.391",
    bg: "bg-[#316FF6]",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/saudali242821",
    bg: "bg-gradient-to-r from-gray-800 to-black",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
        <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" />
      </svg>
    ),
  },
];

export default function SocialMedia({ variant = "default" }) {
  // Tablet floating panel (shown via button toggle)
  if (variant === "tablet") {
    return (
      <div className="flex flex-col gap-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg p-3 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
        {socialLinks.map(({ name, href, bg, svg }) => (
          <Link
            key={name}
            href={href}
            aria-label={name}
            title={name}
            target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`${bg} flex justify-center items-center p-3 w-12 h-12 rounded-xl text-white transition-all duration-300 hover:scale-110 active:scale-95`}
          >
            {svg}
          </Link>
        ))}
      </div>
    );
  }

  // Default variant (mobile horizontal + desktop sticky)
  return (
    <>
      {/* Mobile: Horizontal Single Line Layout */}
      <section className="sm:hidden flex flex-wrap justify-center items-center gap-3 mx-auto mt-8 mb-6 px-4">
        {socialLinks.map(({ name, href, bg, svg }) => (
          <Link
            key={name}
            href={href}
            aria-label={name}
            title={name}
            target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`${bg} flex justify-center items-center p-3 w-12 h-12 rounded-xl text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg`}
          >
            {svg}
          </Link>
        ))}
      </section>

      {/* Desktop: Original Sticky (ONLY visible on lg+ screens) */}
      <section className="hidden lg:flex sticky top-16 right-4 flex-col items-center gap-4">
        {socialLinks.map(({ name, href, bg, svg }) => (
          <Link
            key={name}
            href={href}
            aria-label={name}
            title={name}
            target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`${bg} group relative flex justify-center items-center p-3 w-11 h-11 rounded-md drop-shadow-xl text-white transition-all duration-300 hover:translate-y-1 hover:rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/70`}
          >
            {svg}

            <span className="pointer-events-none absolute z-50 opacity-0 group-hover:opacity-100 transition duration-150 ease-out select-none whitespace-nowrap bg-white/95 text-gray-900 dark:bg-gray-900 dark:text-white px-2 py-1 rounded-md shadow-md ring-1 ring-black/5 text-xs right-full top-1/2 -translate-y-1/2 mr-3">
              {name}
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}