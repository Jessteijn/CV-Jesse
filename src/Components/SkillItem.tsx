"use client";
import { SkillImgsProps } from "@/types/skills-image-types";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SkillItem({
  name,
  img,
  color,
  percentage,
}: SkillImgsProps) {
  return (
    <div className="text-center">
      <div className="group relative mb-8 mt-5 flex items-center justify-center">
        <div className="h-24 w-24 transition-all duration-700 ease-in-out group-hover:rotate-360 group-hover:scale-130">
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor: color,
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <Image
          src={img}
          width="50"
          height="50"
          alt={name}
          className="absolute flex transition-all duration-700 ease-in-out group-hover:-rotate-360 group-hover:scale-130"
        />
        <div className="absolute mt-40 flex justify-center text-zinc-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {name}
        </div>
      </div>
    </div>
  );
}
