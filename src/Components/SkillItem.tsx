"use client";
import Image from "next/image";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface SkillItemProps {
  img: string;
  color: string;
  percentage: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ img, color, percentage }) => {
  return (
    <div className="text-center">
      <div className="group relative my-3 flex items-center justify-center">
        <div className="group-hover:rotate-360 group-hover:scale-130 h-24 w-24 transition-all duration-700 ease-in-out">
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
          alt={img}
          className="group-hover:scale-130 group-hover:-rotate-360 absolute flex transition-all duration-700 ease-in-out"
        />
      </div>
    </div>
  );
};

export default SkillItem;
