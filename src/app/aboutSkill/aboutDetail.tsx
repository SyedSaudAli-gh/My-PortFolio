"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
import { FaChevronUp } from 'react-icons/fa';

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

const quarters = [
    {
        id: 1,
        title: "📘 Quarter 1",
        borderColor: "border-purple-300/40",
        borderTopColor: "border-purple-300/30",
        content: (
            <>
                I studied <b className="text-indigo-600 dark:text-indigo-300">TypeScript</b>, npm, GitHub, and created several CLI-based projects and assignments.
                Alongside, I self-learned and explored <b className="text-indigo-600 dark:text-indigo-300">HTML</b>, <b className="text-indigo-600 dark:text-indigo-300">CSS</b>, and <b className="text-indigo-600 dark:text-indigo-300">TypeScript</b>.
            </>
        ),
        percentile: "90% Active"
    },
    {
        id: 2,
        title: "🎨 Quarter 2",
        borderColor: "border-pink-300/40",
        borderTopColor: "border-pink-300/30",
        content: (
            <>
                I learned <b className="text-indigo-600 dark:text-indigo-300">Next.js</b>, <b className="text-indigo-600 dark:text-indigo-300">React</b> Components, React Hooks, UI/UX principles, Tailwind CSS, Vercel deployment, Sanity CMS, Firebase.io, and Stripe integration. Participated in hackathons with top-tier performance.
            </>
        ),
        percentile: "66% Active"
    },
    {
        id: 3,
        title: "֎🇦🇮 Quarter 3",
        borderColor: "border-cyan-300/40",
        borderTopColor: "border-cyan-300/30",
        content: (
            <>
                Learned <b className="text-indigo-600 dark:text-indigo-300">Modern Python</b>, OOP paradigms and built Python projects (CLI + Streamlit, Chainlit). Then learned <b className="text-indigo-600 dark:text-indigo-300">OpenAI Agent SDK</b> frameworks for Agentic AI (Agents, Tools, Handoffs, Guardrails, Sessions, etc), Chatbots, and applications.
            </>
        ),
        percentile: "90% Active"
    },
        {
        id: 4,
        title: "🤖 Quarter 4",
        borderColor: "border-cyan-300/40",
        borderTopColor: "border-cyan-300/30",
        content: (
            <>
                Learned <b className="text-indigo-600 dark:text-indigo-300">MCP Servers</b>, Coming Soon <b className="text-indigo-600 dark:text-indigo-300">OpenAI Agent SDK</b> Coming Soon.
            </>
        ),
        percentile: null
    }
];

function AboutDetail() {
    const [isMobile, setIsMobile] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const handleResize = () =>
            setIsMobile(window.innerWidth < 1024); // lg breakpoint
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
        data-aos="fade-right"
        className="relative w-full max-w-[400px] mx-auto lg:mx-0 overflow-hidden group">
            {/* 📷 Image (Click to open overlay in mobile) */}
            <button
                type="button"
                onClick={() => isMobile && setShowOverlay(!showOverlay)}
                className="block w-full relative"
            >
                <Image
                    src="/image/saud_about.png"
                    alt="About Image"
                    width={800}
                    height={900}
                    sizes="(min-width:1024px) 33vw, 100vw"
                    className="w-full h-auto rounded-lg object-cover mx-auto"
                    priority
                />

                {/* Click + Up Icon (Only on Mobile, Bottom Center) */}
                {isMobile && !showOverlay && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 
                    
                    px-5 py-3 
                    shadow-xl
                    flex flex-col items-center gap-1
                    ">
                        <FaChevronUp className="w-5 h-5 text-white animate-bounce" />
                        <span className="text-base font-bold text-white -tracking-better">Click</span>
                    </div>
                )}
            </button>

            {/* 🧭 Overlay Panel */}
            <div
                onClick={() => isMobile && setShowOverlay(false)}
                className={`
          absolute inset-0 z-10 rounded-lg
         bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 text-white
          overflow-hidden backdrop-blur-xl
          transition-all duration-500 ease-in-out

          ${isMobile
                        ? showOverlay
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 translate-y-full pointer-events-none'
                        : 'group-hover:opacity-90 opacity-0 pointer-events-none translate-y-0 lg:pointer-events-auto hidden lg:block'}
        `}
            >
                <div
                    className={[
                        inter.className,
                        "w-full h-full overflow-y-auto",
                        isMobile ? "p-0" : "p-6",
                    ].join(" ")}
                >
                    {/* 🧢 Heading */}
                    <div className="text-center pt-4 pb-2 px-3">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold ">
                            🚀 <b className='underline decoration-black'>
                                GIAIC Journey
                                </b>
                        </h3>
                    </div>

                    {/* 📚 Content */}
                    <div className="px-3 pb-10">
                        <div className="space-y-5 text-gray-800 dark:text-gray-100">
                            {quarters.map((quarter) => (
                                <div
                                    key={quarter.id}
                                    className={`
                    p-4 rounded-xl border ${quarter.borderColor}
                    bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm 
                    shadow-md hover:shadow-lg transition-shadow duration-300
                  `}
                                >
                                    <strong className="block text-base font-semibold mb-2">
                                        {quarter.title}
                                    </strong>
                                    <p className="text-sm leading-relaxed">{quarter.content}</p>

                                    {quarter.percentile && (
                                        <div className={`mt-3 pt-3 border-t ${quarter.borderTopColor}`}>
                                            <span className="inline-block px-3 py-1 rounded-full bg-black text-blue-100 font-medium text-xs">
                                                🎯 Percentile: {quarter.percentile}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <em className="block text-center text-green-700 dark:text-green-200 mt-6 text-sm">
                                Looking forward to growing even more, InshaAllah!
                            </em>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutDetail;