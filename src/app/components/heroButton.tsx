import React from 'react';
import Link from 'next/link';
import { IoCloudDownloadOutline } from "react-icons/io5";

function HeroButton() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Hire Me Button */}
            <Link
                href="/contectToMail"
                className="
                    group relative rounded-full 
                    text-[14px] sm:text-[16px] lg:text-[18px]
                    px-8 py-3
                    font-semibold tracking-wide
                    bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
                    text-gray-900 dark:text-white
                    hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400
                    hover:scale-110 
                    hover:shadow-lg hover:shadow-purple-500/50
                    active:scale-95
                    transition-all duration-500 ease-out
                    overflow-hidden
                    whitespace-nowrap
                    inline-flex items-center justify-center
                "
            >
                <span className="relative z-10">Hire Me</span>
                
                {/* Gradient Underline */}
                <span className="
                    absolute inset-x-0 bottom-0 h-[3px] w-0 mx-auto 
                    bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300
                    transition-all duration-700 ease-out 
                    group-hover:w-full
                    shadow-md shadow-purple-400/60
                " />
                
                {/* Shine Effect on Hover */}
                <span className="
                    absolute inset-0 -translate-x-full 
                    bg-gradient-to-r from-transparent via-white/20 to-transparent
                    group-hover:translate-x-full
                    transition-transform duration-1000 ease-out
                " />
            </Link>

            {/* Download CV Button */}
            <a
                href="/resume/Syed Saud Ali Resume.pdf"
                download="Syed Saud Ali Resume.pdf"
                className="
                    group relative rounded-full 
                    text-[14px] sm:text-[16px] lg:text-[18px]
                    px-8 py-3
                    font-semibold tracking-wide
                    bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
                    text-gray-900 dark:text-white
                    hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400
                    hover:scale-110 
                    hover:shadow-lg hover:shadow-purple-500/50
                    active:scale-95
                    transition-all duration-500 ease-out
                    flex items-center justify-center gap-2
                    overflow-hidden
                    whitespace-nowrap
                "
            >
                <span className="relative z-10 flex items-center gap-2">
                    Resume
                    <IoCloudDownloadOutline
                        className="
                            w-5 h-5 sm:w-6 sm:h-6
                            transition-all duration-500 ease-out
                            group-hover:rotate-12 
                            group-hover:scale-125
                            group-hover:-translate-y-1
                            group-active:translate-y-1
                            animate-bounce-slow
                        "
                    />
                </span>
                
                {/* Gradient Underline */}
                <span className="
                    absolute inset-x-0 bottom-0 h-[3px] w-0 mx-auto 
                    bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300
                    transition-all duration-700 ease-out 
                    group-hover:w-full
                    shadow-md shadow-purple-400/60
                " />
                
                {/* Shine Effect on Hover */}
                <span className="
                    absolute inset-0 -translate-x-full 
                    bg-gradient-to-r from-transparent via-white/20 to-transparent
                    group-hover:translate-x-full
                    transition-transform duration-1000 ease-out
                " />
            </a>
        </div>
    );
}

export default HeroButton;