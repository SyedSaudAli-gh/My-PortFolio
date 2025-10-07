"use client";
import FlipStack from "@/components/ui/flipstack";
import React from "react";
import { SECTION_LABELS } from "../components/sectionLabels";
import SectionLabel from "../components/section_label";

type Service = {
  id?: number;
  title: string;
  description: string;
  bg?: string;
  accent?: string;
};

const defaultAccent =
  "from-cyan-500 via-purple-500 to-pink-500 dark:from-cyan-300 dark:via-purple-400 dark:to-pink-400";

function ServiceCardContent({ service }: { service: Service }) {
  const accent = service.accent ?? defaultAccent;
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
      <h3
        className={[
          "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r",
          accent,
        ].join(" ")}
      >
        {service.title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-900 dark:text-neutral-100 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {

  const services: Service[] = [
    {
      title: "Web Development",
      description:
        "Next.js + Tailwind se fast, responsive websites — clean UI, solid DX.",
      // bg: "/images/services/web.jpg",
    },
    {
      title: "UI/UX Design",
      description:
        "Figma wireframes se hi‑fi designs — clear flows, usable interfaces.",
    },
    {
      title: "AI Integrations",
      description:
        "Chatbots, content tools, smart features — OpenAI/LLM powered.",
      // accent: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Vercel/AWS deploy, CI/CD, env setup — reliable and scalable.",
    },
    {
      title: "Performance & SEO",
      description:
        "Core Web Vitals, image/JS optimizations, on‑page SEO improvements.",
    },
  ];

  // Map services -> FlipStack cards
  const cards = services.map((s, idx) => ({
    id: s.id ?? idx + 1, // ensure unique id
    content: <ServiceCardContent service={s} />,
    bg: s.bg,
  }));

  const first = SECTION_LABELS[2]
  if (!first) return null

  return (
    <section className="w-full text-center flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-16">
      
      {/* Section Label - Responsive */}
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <SectionLabel {...SECTION_LABELS[2]} />
      </div>

      {/* FlipStack Container - Fully Responsive */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
        <div className="relative flex items-center justify-center overflow-visible">
          <FlipStack cards={cards} />
        </div>
      </div>

      {/* Optional: Add some bottom spacing */}
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16" />
    </section>
  );
}