"use client";
import React from "react";
import EducationGrid from "./educationCard";
import { SECTION_LABELS } from "../components/sectionLabels";
import SectionLabel from "../components/section_label";


export default function EducationSection() {
  const first = SECTION_LABELS[1]
  if (!first) return null

  return (
    <section id="education" className="relative py-12 sm:py-16">
      <div className="mx-auto ">
        {/* Background glow blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-10 flex justify-center blur-3xl"
        >
          <div className="h-40 w-[600px] rounded-full bg-gradient-to-r from-[#fc466b33] to-[#3f5efb33]" />
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center ">
          <SectionLabel {...SECTION_LABELS[1]} />
          {/* Stats row */}
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#fc466b]/10 to-[#3f5efb]/10 dark:from-[#fc466b]/20 dark:to-[#3f5efb]/20 ring-1 ring-black/5 dark:ring-white/10">
              6 Degrees
            </span>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#fc466b]/10 to-[#3f5efb]/10 dark:from-[#fc466b]/20 dark:to-[#3f5efb]/20 ring-1 ring-black/5 dark:ring-white/10">
              2011 - 2024
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10">
          <EducationGrid />
        </div>
      </div>
    </section>
  );
}