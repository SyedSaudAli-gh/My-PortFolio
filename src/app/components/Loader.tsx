"use client";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="inline-block rounded-2xl px-8 py-4">
      <div className="flex h-10 items-center rounded-lg p-2.5 text-[25px] font-medium text-neutral-400">
        <p className="leading-none">loading</p>

        <div className="relative ml-2 h-10 overflow-hidden after:absolute after:inset-0 after:z-20 after:content-[''] after:bg-[linear-gradient(#111_10%,transparent_30%,transparent_70%,#111_90%)]">
          <span className="block h-full pl-[6px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-[spin-4991_4s_infinite]">
            buttons
          </span>
          <span className="block h-full pl-[6px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-[spin-4991_4s_infinite]">
            forms
          </span>
          <span className="block h-full pl-[6px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-[spin-4991_4s_infinite]">
            switches
          </span>
          <span className="block h-full pl-[6px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-[spin-4991_4s_infinite]">
            cards
          </span>
        </div>
      </div>

      {/* Keyframes (agar global me nahi hain to yahan rakh lo) */}
     
    </div>
  );
};

export default Loader;