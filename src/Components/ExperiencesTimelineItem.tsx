import React from "react";

interface ExperiencesTimelineItemProps {
  side: "left" | "right";
  color: string;
  time: string;
  children: React.ReactNode;
}

function getOtherSide(side: "left" | "right"): "left" | "right" {
  return side === "left" ? "right" : "left";
}

const ExperiencesTimelineItem: React.FC<ExperiencesTimelineItemProps> = ({
  side,
  color,
  time,
  children,
}) => {
  return (
    <div className="relative md:grid md:grid-cols-2">
      <div
        className="absolute left-1/2-minus-10px top-4 z-10 hidden h-5 w-5 rounded-full md:block"
        style={{ backgroundColor: color }}
      />
      <div
        className={`md:text-${getOtherSide(side)} group border-gray-500 text-center transform ${side === "left" ? "md:border-r-4 md:translate-x-2px" : "md:border-l-4 md:-translate-x-2px"} `}
      >
        <div
          className={`absolute ${getOtherSide(side)}-4 top-4 hidden h-0 w-0 border-b-10 ${side === "left" ? "border-l-20" : "border-r-20"} border-t-10 border-transparent md:block`}
          style={{ borderLeftColor: color, borderRightColor: color }}
        />
        <div
          className={`mx-auto mb-5 mt-0 inline-block w-[80%] rounded border-t-8 bg-white p-5 md:mx-9 ${side === "left" ? "md:border-r-8" : "md:border-l-8"} md:border-t-0`}
          style={{ borderColor: color }}
        >
          <p className="block text-base md:hidden">{time}</p>
          {children}
        </div>
      </div>
      <div
        className={`hidden text-${side} md:block ${side === "right" ? "order-first" : ""}`}
      >
        <div className="mx-4 mb-0 mt-2 inline-block rounded-full bg-orange-700 px-3 py-2 text-base text-white">
          {time}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesTimelineItem;
