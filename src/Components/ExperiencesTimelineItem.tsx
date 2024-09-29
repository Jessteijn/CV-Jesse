import React from "react";

interface ExperiencesTimelineItemProps {
  side: "left" | "right";
  color: string;
  time: string;
  children: React.ReactNode;
}

const ExperiencesTimelineItem: React.FC<ExperiencesTimelineItemProps> = ({
  side,
  color,
  time,
  children,
}) => {
  return (
    <>
      {side === "left" ? (
        <div className="relative grid md:grid-cols-2">
          <div
            className="absolute left-1/2-minus-10px top-4 z-10 hidden h-5 w-5 rounded-full md:block"
            style={{ backgroundColor: color }}
          />
          <div className="group border-gray-500 text-center translate-x-2px transform md:border-r-4 md:text-right">
            <div
              className="absolute right-4 top-4 hidden h-0 w-0 border-b-10 border-l-20 border-t-10 border-transparent md:block"
              style={{ borderLeftColor: color }}
            />
            <div
              className="mx-9 mb-5 mt-0 inline-block rounded border-t-8 bg-white p-5 md:border-r-8 md:border-t-0"
              style={{ borderRightColor: color, borderTopColor: color }}
            >
              <p className="block text-base md:hidden">{time}</p>
              {children}
            </div>
          </div>
          <div className="hidden text-left md:block">
            <div className="mx-4 mb-0 mt-2 inline-block rounded-full bg-orange-700 px-3 py-2 text-base text-white">
              {time}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative grid md:grid-cols-2">
          <div
            className="absolute left-1/2-minus-10px top-4 z-10 hidden h-5 w-5 rounded-full md:block"
            style={{ backgroundColor: color }}
          />
          <div className="hidden text-right md:block">
            <div className="mx-4 mb-0 mt-2 inline-block rounded-full bg-orange-700 px-3 py-2 text-base text-white">
              {time}
            </div>
          </div>
          <div className="group border-gray-500 text-center -translate-x-2px transform md:border-l-4 md:text-left">
            <div
              className="absolute left-4 top-4 hidden h-0 w-0 border-b-10 border-r-20 border-t-10 border-transparent md:block"
              style={{ borderRightColor: color }}
            />
            <div
              className="mx-9 mb-5 mt-0 inline-block rounded border-t-8 bg-white p-5 md:border-l-8 md:border-t-0"
              style={{ borderLeftColor: color, borderTopColor: color }}
            >
              <p className="block text-base md:hidden">{time}</p>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperiencesTimelineItem;
