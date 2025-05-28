"use client";

import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

type Assignment = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

const Assignments = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/assignments");
      const data = await res.json();
      setAssignments(data);
    };
    fetchData();
  }, []);

  const visibleAssignments = showAll ? assignments : assignments.slice(0, 6);

  return (
    <>
      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center my-16"
        id="Assignments"
      >
        {visibleAssignments.map((a) => (
          <AssignmentCard key={a.id} {...a} />
        ))}
      </section>

      {/* Toggle Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="border-yellow-500 border-2 rounded-full text-white font-semibold px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:bg-yellow-500 hover:text-black group"
        >
          {showAll ? "View Less" : "View More"}
          <span
            className={`group-hover:animate-bounceArrow inline-block`}
          >
            {showAll ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </span>
        </button>
      </div>
    </>
  );
};

export default Assignments;
