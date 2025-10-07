import React from "react"

type Props = {
  label: string
  heading: string
}

export default function SectionLabel({ label, heading }: Props) {
  return (
    <div className="flex flex-col items-start mt-8 sm:mt-10 md:mt-12">
      <div className="relative w-fit">
        {/* Background glow blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-6 sm:-top-8 md:-top-10 flex justify-center blur-3xl -z-10"
        >
          <div className="h-32 w-[400px] sm:h-36 sm:w-[500px] md:h-40 md:w-[600px] rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20" />
        </div>

        <h2 className="select-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900/10 dark:text-white/10">
          {label}
        </h2>

        <h3
          className={[
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold",
            "bg-clip-text text-transparent whitespace-nowrap",
            "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400",
            "drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]",
            "z-10",
          ].join(" ")}
        >
          {heading}
        </h3>
      </div>
    </div>
  );
}