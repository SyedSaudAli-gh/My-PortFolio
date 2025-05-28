"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { FaPython } from "react-icons/fa6";

interface Skill {
  name: string;
  icon: React.ReactNode;
  percentage: number;
}

const skills: Skill[] = [
  { name: "HTML 5", icon: <FaHtml5 />, percentage: 90 },
  { name: "CSS 3", icon: <FaCss3Alt />, percentage: 75 },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, percentage: 80 },
  { name: "TypeScript", icon: <SiTypescript />, percentage: 65 },
  { name: "Next.js", icon: <RiNextjsFill />, percentage: 80 },
  { name: "Python", icon: <FaPython />, percentage: 95 },
];

const SkillBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [controls, isVisible]);

  return (
    <div ref={containerRef} className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="group"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="text-2xl flex items-center gap-2 transition-transform"
          >
            {skill.icon}
            <p className="text-lg">{skill.name}</p>
          </motion.div>

          <div className="w-full bg-[#ddd] rounded-[20px] h-8 overflow-hidden mt-1">
            <motion.div
              className="bg-[#fdae00] text-[black] h-8 rounded-[20px] flex items-center justify-end pr-3 text-sm font-semibold"
              initial={{ width: "0%" }}
              animate={{ width: isVisible ? `${skill.percentage}%` : "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {skill.percentage}%
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillBar;
