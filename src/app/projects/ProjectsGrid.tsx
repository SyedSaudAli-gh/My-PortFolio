"use client";
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { ChevronDownIcon } from 'lucide-react';
import { assignment } from '@/data/assignments';
import SectionLabel from '../components/section_label';
import { SECTION_LABELS } from '../components/sectionLabels';

interface ProjectsGridProps {
  showAllByDefault?: boolean; // ✅ New prop
}

const ProjectsGrid = ({ showAllByDefault = false }: ProjectsGridProps) => {
  const [showAll, setShowAll] = useState(showAllByDefault);
  const displayedProjects = showAll ? assignment : assignment.slice(0, 8);

  useEffect(() => {
    if (showAll) {
      setTimeout(() => {
        document.querySelectorAll('.animate-arrow-up')
          .forEach(el => {
            el.classList.remove('animate-arrow-up');
            setTimeout(() => el.classList.add('animate-arrow-up'), 10);
          });
      }, 500);
    } else {
      setTimeout(() => {
        document.querySelectorAll('.animate-arrow-down')
          .forEach(el => {
            el.classList.remove('animate-arrow-down');
            setTimeout(() => el.classList.add('animate-arrow-down'), 10);
          });
      }, 500);
    }
  }, [showAll]);

  const first = SECTION_LABELS[3];
  if (!first) return null;

  return (
    <section className="flex flex-col items-center my-16" id="Projects">
      <SectionLabel {...SECTION_LABELS[3]} />

      <div className="w-full px-4 md:px-6 lg:px-8 py-12 bg-transparent">
        {/* Projects Grid */}
        <div
          className="
            grid gap-8 justify-center
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
          "
        >
          {displayedProjects.map((p, index) => (
            <div
              key={p.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <ProjectCard
                image={p.image}
                title={p.title}
                description={p.description}
                vercelLink={p.vercelLink}
                githubLink={p.githubLink}
              />
            </div>
          ))}

        </div>

        {/* ✅ View More/View Less Button - Only show when not showing all by default */}
        {!showAllByDefault && assignment.length > 8 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`
                relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-500
                bg-white/20 backdrop-blur-md border border-white/30
                shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]
                hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
                hover:scale-105 hover:border-cyan-400
                bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text
                animate-gradient-xy
                flex items-center gap-3 group
              `}
            >
              <span>
                {showAll ? "View Less Projects" : "Explore More Projects"}
              </span>
              <span
                className={`transition-transform duration-500 ${showAll ? 'rotate-180' : 'rotate-0'
                  }`}
              >
                <ChevronDownIcon
                  className={`h-6 w-6 ${showAll
                    ? 'text-cyan-400 animate-arrow-up'
                    : 'text-pink-400 animate-arrow-down'
                    }`}
                />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;