interface ExperiencesTimelineItemProps {
  side: "left" | "right";
  color: string;
  time: string;
  children: React.ReactNode;
}

export default function ExperiencesTimelineItem({
  side,
  color,
  time,
  children,
}: ExperiencesTimelineItemProps) {
  return (
    <div className="relative md:grid md:grid-cols-2">
      <div
        className="absolute left-1/2-minus-10px top-4 z-10 hidden h-5 w-5 rounded-full shadow-md md:block"
        style={{ backgroundColor: color }}
      />
      <div
        className={`group border-indigo-200 text-center transform ${side === "left" ? "md:border-r-4 md:text-right md:translate-x-2px" : "md:border-l-4 md:text-left md:-translate-x-2px"} `}
      >
        <div
          className={`absolute top-4 hidden h-0 w-0 border-b-10 ${side === "left" ? "right-4 border-l-20" : "left-4 border-r-20"} border-t-10 border-transparent md:block`}
          style={{ borderLeftColor: color, borderRightColor: color }}
        />
        <div
          className={`mx-auto mb-5 mt-0 inline-block w-[80%] rounded border-t-8 bg-white p-5 shadow-md md:mx-9 ${side === "left" ? "md:border-r-8" : "md:border-l-8"} md:border-t-0`}
          style={{ borderColor: color }}
        >
          <p className="block text-base md:hidden">{time}</p>
          {children}
        </div>
      </div>
      <div
        className={`hidden text-${side} md:block ${side === "right" ? "order-first" : ""}`}
      >
        <div className="mx-4 mb-0 mt-2 inline-block rounded-full bg-orange-700 px-3 py-2 text-base text-white shadow-md">
          {time}
        </div>
      </div>
    </div>
  );
}
