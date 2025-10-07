import { AnimatedTextGenerate } from "@/components/ui/animated-textgenerate";

const words = `As a passionate and detail-oriented software engineering graduate with a solid foundation in programming, software development, and problem-solving, I am seeking an entry-level position where I can apply my technical skills and contribute to innovative projects. Eager to join a dynamic team to enhance my knowledge, learn from experienced professionals, and grow within the company while delivering high-quality software solutions.`;

export default function AnimatedTextGenerateDemo() {
  return (
    <AnimatedTextGenerate
      className="text-center p-4"
      textClassName="text-2xl md:text-3xl lg:text-lg text-center"
      text={words}
      blurEffect
      speed={1}
      highlightWords={["passionate", "solid foundation", "problem-solving", "technical skills"]}
      highlightClassName="text-red-500 dark:text-red-400 font-bold"
      linkWords={["problem-solving", "high-quality", "dynamic team"]}
      linkHrefs={["/", "/", "/"]}
      linkClassNames={[
        "underline decoration-pink-500 dark:decoration-pink-400 hover:decoration-pink-400 dark:hover:decoration-pink-300 transition",
        "underline decoration-sky-500 dark:decoration-sky-400 hover:decoration-sky-400 dark:hover:decoration-sky-300 transition",
        "underline decoration-blue-500 dark:decoration-blue-400 hover:decoration-blue-400 dark:hover:decoration-blue-300 transition",
      ]}
    />
  );
}

