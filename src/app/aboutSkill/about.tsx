import React from "react";

import Skills from "./skills";
import AnimatedTextGenerateDemo from "../components/animatedTextGenerateDemo";
import AboutDetail from "./aboutDetail";
import SectionLabel from "../components/section_label";
import { SECTION_LABELS } from "../components/sectionLabels";

function About() {
  const first = SECTION_LABELS[0]
  if (!first) return null

  return (
    <section id="About" className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-6">

          {/* Left: Image (fixed at 1/3 on lg+) */}
          <AboutDetail />


          {/* Right: Content (fixed at 2/3 on lg+) */}
          <div className="w-full min-w-0 font-[system-ui]">


            {/* Heading */}
          <div className="px-5">

            <SectionLabel {...SECTION_LABELS[0]} />
          </div>

            <AnimatedTextGenerateDemo />

            {/* Skills Section */}
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;