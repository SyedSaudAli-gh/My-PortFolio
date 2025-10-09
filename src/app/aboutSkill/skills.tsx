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
  color: string;
}

const skills: Skill[] = [
  {
    name: "HTML 5",
    icon: <FaHtml5 className="text-orange-500" />,
    percentage: 90,
    color: "from-orange-400 to-orange-600"
  },
  {
    name: "CSS 3",
    icon: <FaCss3Alt className="text-blue-500" />,
    percentage: 75,
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-cyan-500" />,
    percentage: 80,
    color: "from-cyan-400 to-cyan-600"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    percentage: 65,
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill className="text-gray-800 dark:text-white" />,
    percentage: 80,
    color: "from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600"
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-500" />,
    percentage: 95,
    color: "from-yellow-400 to-yellow-600"
  },
];

// Component for animated percentage counter
const AnimatedPercentage: React.FC<{ value: number; isVisible: boolean }> = ({ value, isVisible }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000;
    const steps = 100;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <span>{displayValue}%</span>;
};

const SkillBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <div
    data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      ref={containerRef}
      className="
        w-full 
        max-w-full
        px-4 sm:px-6 md:px-8 lg:px-10
        py-4 sm:py-6
        space-y-6
      "
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="group w-full"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.3
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Skill Name & Icon */}
          <motion.div
            animate={{
              scale: hoveredIndex === index ? 1.05 : 1,
              x: hoveredIndex === index ? 5 : 0,
            }}
            transition={{ duration: 0.2 }}
            className="text-2xl flex items-center gap-3"
          >
            <motion.span
              animate={{
                scale: hoveredIndex === index ? 1.2 : 1,
                rotate: hoveredIndex === index ? 10 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              {skill.icon}
            </motion.span>
            <p className={`
              text-lg font-medium transition-all duration-300
              truncate
              ${hoveredIndex === index
                ? 'text-purple-600 dark:text-purple-400 font-bold'
                : 'text-gray-800 dark:text-gray-100'
              }
            `}>
              {skill.name}
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div
          
          className="
            w-full 
            bg-gray-200 dark:bg-gray-700 
            rounded-full 
            h-8
            overflow-hidden 
            mt-2 
            shadow-inner
            relative
            cursor-pointer
          ">
            <motion.div
              className={`
                bg-gradient-to-r ${skill.color}
                h-8 
                rounded-full 
                flex 
                items-center 
                justify-end 
                pr-4 
                text-sm 
                font-bold 
                text-white
                shadow-lg
                relative
                overflow-hidden
              `}
              initial={{ width: "0%" }}
              animate={{
                width: isVisible ? `${skill.percentage}%` : "0%",
                filter: hoveredIndex === index ? "brightness(1.2)" : "brightness(1)",
              }}
              transition={{
                width: { duration: 3, ease: "easeOut", delay: index * 0.2 },
                filter: { duration: 0.3 }
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />

              {/* Percentage */}
              <motion.span
                className="relative z-10 drop-shadow-md"
                animate={{
                  scale: hoveredIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedPercentage value={skill.percentage} isVisible={isVisible} />
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillBar;