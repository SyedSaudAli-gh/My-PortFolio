"use client";

import Image from "next/image";
import { TiArrowRightThick } from "react-icons/ti";

type Props = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const AssignmentCard = ({ image, title, description, link }: Props) => {
  return (
    <div className="relative w-[410px] h-[300px] rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-all duration-600 ease-in-out hover:opacity-90">
        <p className="text-[24px] text-white font-bold text-center">{title}</p>
        <p className="mt-[10px] text-[14px] text-gray-400 leading-[1.4] text-center p-5">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className="text-white flex items-center gap-2 hover:text-blue-500 hover:underline">
            View Project <TiArrowRightThick />
          </p>
        </a>
      </div>
    </div>
  );
};

export default AssignmentCard;
