import React from "react";

interface EducationItemProps {
  color: string;
  name: string;
  time: string;
  gpa: string;
  major?: string;
}

export default function EducationItem({
  color,
  name,
  time,
  gpa,
  major,
}: EducationItemProps) {
  return (
    <div className="flex justify-center py-4">
      <div
        className="mx-1/12 sm:mx-1/4 w-10/12 max-w-3xl border-l-8 border-solid bg-white shadow-edu sm:w-1/2"
        style={{ borderLeftColor: color }}
      >
        <div className="m-4 grid grid-cols-2">
          <div className="text-left">
            <p>{time}</p>
            <h4 className="text-2xl font-bold">{name}</h4>
            {major && <i>Major: {major}</i>}
          </div>
          <div className="text-right">
            <p>GPA</p>
            <h4 className="text-3xl text-red-400">{gpa}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
