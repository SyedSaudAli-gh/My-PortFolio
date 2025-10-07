"use client";
import React from "react";

// Type-safe model
export type Education = {
  degree: string;
  institution: string;
  shortform: string;
  year: number | string;
};

// Sample data
export const EDUCATIONS: Education[] = [
  {
    degree: "Certified Cloud Applied Generative AI Engineer (GenEng)",
    institution: "Governor House Karachi",
    shortform: "GH",
    year: 2024,
  },
  {
    degree: "Bachelor of Commerce",
    institution: "Karachi University",
    shortform: "KU",
    year: 2024,
  },
  {
    degree: "Amazon (Short Course)",
    institution: "JDC IT CITY Karachi, Pakistan",
    shortform: "JDC",
    year: 2021,
  },
  {
    degree: "Intermediate in Commerce",
    institution: "Govt. Boys City College Karachi, Pakistan",
    shortform: "CC",
    year: 2013,
  },
  {
    degree: "Certificate Information Technology (C.I.T)",
    institution: "Computer Collegiate",
    shortform: "CC",
    year: 2012,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Govt. Boys High School S.M. Public Nazimabad Karachi, Pakistan",
    shortform: "SM",
    year: 2011,
  },
];

// Reusable Card
export function EducationCard({ education }: { education: Education }) {
  const { degree, institution, shortform, year } = education;

  return (
    <>
      <div className="
        education-card-container
        w-full max-w-[390px] h-[320px]
        xs:w-[280px] xs:h-[280px]
        sm:w-[320px] sm:h-[300px]
        md:w-[350px] md:h-[310px]
        lg:w-[370px] lg:h-[320px]
        xl:w-[390px] xl:h-[320px]
        relative group
      ">
        <div className="education-card-3d h-full rounded-[40px] xs:rounded-[45px] sm:rounded-[50px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-500 ease-in-out relative z-[1]">

          {/* Glass Effect */}
          <div className="glass-effect absolute inset-2 rounded-[38px] xs:rounded-[43px] sm:rounded-[48px] bg-gradient-to-t from-white/35 to-white/80 backdrop-blur-[5px] border-l border-b border-white transition-all duration-500 ease-in-out" />

          {/* Content */}
          <div className="content-3d pt-[70px] xs:pt-[75px] sm:pt-[80px] md:pt-[85px] lg:pt-[90px] px-[20px] xs:px-[22px] sm:px-[25px] md:px-[28px] lg:px-[30px] pb-[20px] xs:pb-[22px] sm:pb-[25px] relative z-10 h-full flex flex-col">

            {/* Degree Section */}
            <div className="h-[75px] xs:h-[78px] sm:h-[82px] md:h-[86px] lg:h-[90px] mb-2 xs:mb-2.5 sm:mb-3 overflow-hidden">
              <span className="block text-black font-black text-[15px] xs:text-[16px] sm:text-[17px] md:text-[17.5px] lg:text-[18px] leading-[1.2] line-clamp-3">
                {degree}
              </span>
            </div>

            {/* Institution Section */}
            <div className="h-[60px] xs:h-[63px] sm:h-[66px] md:h-[68px] lg:h-[70px] mb-2 xs:mb-2.5 sm:mb-3 overflow-hidden">
              <span className="block text-black/80 text-[12px] xs:text-[12.5px] sm:text-[13px] md:text-[13.5px] lg:text-[14px] leading-[1.3] line-clamp-3">
                {institution}
              </span>
            </div>

            {/* Year Badge */}
            <div className="year-badge-container mt-auto">
              <span className="year-badge inline-flex px-2.5 xs:px-2.5 sm:px-3 py-0.5 xs:py-0.5 sm:py-1 rounded-full bg-white/20 text-black text-[11px] xs:text-[12px] sm:text-[13px] font-semibold backdrop-blur-[2px] transition-all duration-300 ease-in-out pointer-events-none">
                {year}
              </span>
            </div>
          </div>

          {/* Logo Circles */}
          <div className="logo-circles absolute right-0 top-0 z-[5]">
            <span className="circle circle-1 block absolute aspect-square rounded-full top-[6px] xs:top-[7px] sm:top-[8px] right-[6px] xs:right-[7px] sm:right-[8px] backdrop-blur-[5px] bg-white/[0.233] w-[140px] xs:w-[150px] sm:w-[160px] md:w-[165px] lg:w-[170px] transition-all duration-500 ease-in-out" />

            <span className="circle circle-2 block absolute aspect-square rounded-full backdrop-blur-[1px] bg-white/[0.233] w-[115px] xs:w-[125px] sm:w-[130px] md:w-[135px] lg:w-[140px] top-[8px] xs:top-[9px] sm:top-[10px] right-[8px] xs:right-[9px] sm:right-[10px] transition-all duration-500 ease-in-out" />

            <span className="circle circle-3 block absolute aspect-square rounded-full backdrop-blur-[5px] bg-white/[0.233] w-[90px] xs:w-[98px] sm:w-[103px] md:w-[106px] lg:w-[110px] top-[14px] xs:top-[15px] sm:top-[17px] right-[14px] xs:right-[15px] sm:right-[17px] transition-all duration-500 ease-in-out" />

            <span className="circle circle-4 block absolute aspect-square rounded-full backdrop-blur-[5px] bg-white/[0.233] w-[66px] xs:w-[71px] sm:w-[75px] md:w-[77px] lg:w-[80px] top-[19px] xs:top-[21px] sm:top-[23px] right-[19px] xs:right-[21px] sm:right-[23px] transition-all duration-500 ease-in-out" />

            <span className="circle circle-5 block absolute aspect-square rounded-full backdrop-blur-[5px] bg-white/[0.233] w-[42px] xs:w-[45px] sm:w-[48px] md:w-[49px] lg:w-[50px] top-[25px] xs:top-[27px] sm:top-[30px] right-[25px] xs:right-[27px] sm:right-[30px] grid place-content-center transition-all duration-500 ease-in-out cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="w-[17px] xs:w-[18px] sm:w-[19px] md:w-[19.5px] lg:w-[20px] text-black fill-current" aria-label={shortform}>
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontFamily="Inter, 'Segoe UI', Roboto, Arial, sans-serif" fontWeight="800" fontSize="16" letterSpacing="0.5" fill="currentColor">
                  {shortform}
                </text>
                <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .education-card-container {
          perspective: 1000px;
        }

        .education-card-3d {
          transform-style: preserve-3d;
          box-shadow: rgba(37, 5, 71, 0) 40px 50px 25px -40px,
                      rgba(34, 5, 71, 0.2) 0px 25px 25px -5px;
        }

        .glass-effect {
          transform-style: preserve-3d;
          transform: translate3d(0px, 0px, 25px);
          border-top-right-radius: 100%;
        }

        .content-3d {
          transform: translate3d(0, 0, 26px);
        }

        .year-badge-container {
          transform-style: preserve-3d;
        }

        .year-badge {
          transform: translateZ(1px);
        }

        .logo-circles {
          transform-style: preserve-3d;
        }

        .circle {
          box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
        }

        .circle-1 {
          transform: translate3d(0, 0, 20px);
        }

        .circle-2 {
          transform: translate3d(0, 0, 40px);
          transition-delay: 0.1s;
        }

        .circle-3 {
          transform: translate3d(0, 0, 60px);
          transition-delay: 0.2s;
        }

        .circle-4 {
          transform: translate3d(0, 0, 80px);
          transition-delay: 0.3s;
        }

        .circle-5 {
          transform: translate3d(0, 0, 100px);
          transition-delay: 0.4s;
        }

        /* Hover Effects - Card pe hover */
        .education-card-container:hover .education-card-3d {
          transform: rotate3d(1, 1, 0, 30deg);
          box-shadow: rgba(28, 5, 71, 0.3) 30px 50px 25px -40px,
                      rgba(28, 5, 71, 0.3) 0px 25px 30px 0px;
        }

        .education-card-container:hover .circle-2 {
          transform: translate3d(0, 0, 60px);
          background: rgba(255, 255, 255, 0.3);
        }

        .education-card-container:hover .circle-3 {
          transform: translate3d(0, 0, 80px);
          background: rgba(255, 255, 255, 0.4);
        }

        .education-card-container:hover .circle-4 {
          transform: translate3d(0, 0, 100px);
          background: rgba(255, 255, 255, 0.5);
        }

        .education-card-container:hover .circle-5 {
          transform: translate3d(0, 0, 120px);
          background: rgba(255, 255, 255, 0.6);
        }

        /* Year Badge - Card Hover pe hi animate hoga */
        .education-card-container:hover .year-badge {
          transform: scale(1.1) translateZ(30px);
          background: rgba(255, 255, 255, 0.4);
          box-shadow: rgba(34, 5, 71, 0.4) 0px 10px 20px 0px;
        }

        /* Shortform Circle (circle-5) Individual Hover - Sirf yeh individual hover kar sakta hai */
        .circle-5:hover {
          transform: scale(1.15) translate3d(0, 0, 150px) !important;
          background: rgba(255, 255, 255, 0.8) !important;
          box-shadow: rgba(34, 5, 71, 0.5) 0px 15px 30px 0px;
        }

        .circle-5:active {
          transform: scale(1.1) translate3d(0, 0, 130px) !important;
        }
      `}</style>
    </>
  );
}

// Grid/Section
export default function EducationGrid() {
  return (
    <div className="w-full min-h-screen px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 overflow-visible">
      <div className="grid gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 place-items-center max-w-[1600px] mx-auto">
        {EDUCATIONS.map((edu, index) => (
          <EducationCard
            key={`${edu.shortform}-${edu.year}-${index}`}
            education={edu}
          />
        ))}
      </div>
    </div>
  );
}