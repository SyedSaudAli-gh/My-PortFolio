import React from "react";
import Image from "next/image";
import Skills from "./skills";

function About() {
  return (
    <section className="flex justify-between w-full h-auto" id="About">
      <div className="container group relative w-full max-w-[800px] mx-auto">
        <Image
          src="/image/saud_about.png"
          alt="About Image"
          height={900}
          width={800}
          className="lg:block hidden w-full h-auto rounded-lg"
        />
        <div className="absolute inset-0 bg-red-500 rounded-lg opacity-80 overflow-hidden h-full w-0 transition-all duration-500 ease-in-out group-hover:w-full lg:block hidden">
          <div className="text-left text-white text-sm md:text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-8 w-full max-w-[90%] h-full overflow-y-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 underline decoration-yellow-400">
              🚀 My GIAIC Journey
            </h3>

            <div className="space-y-4">
              <p>
                <strong>📘 Quarter 1:</strong> I studied TypeScript, npm,
                GitHub, and created several CLI-based projects and assignments.
                Alongside, I self-learned and explored HTML, CSS, and
                JavaScript.
                <br />
                <span className="text-yellow-400 font-semibold">
                  🎯 Percentile: 90% Active
                </span>
              </p>

              <p>
                <strong>🧠 Quarter 2:</strong> I learned Next.js, React
                Components, React Hooks, UI/UX principles, Tailwind CSS, Vercel
                deployment, Sanity CMS, Firebase.io, and Stripe integration. I
                worked on multiple projects, assignments, and also participated
                in hackathons with top-tier performance.
                <br />
                <span className="text-yellow-400 font-semibold">
                  🎯 Percentile: 66% Active
                </span>
              </p>

              <p>
                <strong>🤖 Quarter 3:</strong> I learned Modern AI with Python,
                focusing on Object-Oriented Programming (OOP) and paradigms. I
                created various Python-based projects and assignments, some
                CLI-based and others using Streamlit and Chainlit with
                interactive UI.
              </p>

              <p>
                <strong>🧠 Quarter 4 (Ongoing):</strong> Currently learning
                Agentic AI frameworks in Python. Working on autonomous AI tools
                and applications.
                <br />
                <em className="text-green-400">
                  Looking forward to growing even more, InshaAllah!
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="font-[system-ui] mt-10 lg:mt-28 mr-4 lg:mr-[100px] ml-4 lg:ml-[20px]">
        <h1 className="text-3xl lg:text-4xl font-sans font-bold mb-6 hover:text-white transition-all duration-1000">
          Learn About Me
        </h1>
        <p className="text-lg mb-6">
          As a passionate and detail-oriented software engineering graduate with
          a solid foundation in programming, software development, and
          problem-solving, I am seeking an entry-level position where I can
          apply my technical skills and contribute to innovative projects. Eager
          to join a dynamic team to enhance my knowledge, learn from experienced
          professionals, and grow within the company while delivering
          high-quality software solutions.
        </p>

        {/* Skills Section */}
        <Skills />
      </div>
    </section>
  );
}

export default About;
