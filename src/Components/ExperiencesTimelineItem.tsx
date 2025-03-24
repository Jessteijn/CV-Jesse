import { cn } from "@/lib/utils";
import Link from "next/link";

interface ExperiencesTimelineItemProps {
  side: "left" | "right";
  title: string;
  color: string;
  time: string;
  link?: string;
  children: React.ReactNode;
}

export default function ExperiencesTimelineItem({
  side,
  title,
  color,
  time,
  link,
  children,
}: ExperiencesTimelineItemProps) {
  return (
    <div className="relative md:grid md:grid-cols-2">
      <div
        className="left-1/2-minus-10px absolute top-4 z-10 hidden h-5 w-5 rounded-full shadow-md md:block"
        style={{ backgroundColor: color }}
      />
      <div
        className={cn(
          "group transform border-indigo-200 text-center",
          side === "left"
            ? "md:translate-x-2px md:border-r-4 md:text-right"
            : "md:-translate-x-2px md:border-l-4 md:text-left",
        )}
      >
        <div
          className={cn(
            "absolute top-4 hidden h-0 w-0 border-t-10 border-b-10 border-transparent md:block",
            side === "left" ? "right-4 border-l-20" : "left-4 border-r-20",
          )}
          style={{ borderLeftColor: color, borderRightColor: color }}
        />
        <div
          className={cn(
            "mx-auto mt-0 mb-5 inline-block w-[80%] rounded-sm border-t-8 bg-white p-5 shadow-md md:mx-9 md:border-t-0",
            side === "left" ? "md:border-r-8" : "md:border-l-8",
          )}
          style={{ borderColor: color }}
        >
          <p className="block text-base md:hidden">{time}</p>
          {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <h2
                className="text-2xl font-bold group-hover:underline"
                style={{ color: color }}
              >
                {title}
              </h2>
            </Link>
          ) : (
            <h2 className="text-2xl font-bold" style={{ color: color }}>
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
      <div
        className={`hidden text-${side} md:block ${side === "right" ? "order-first" : ""}`}
      >
        <div className="mx-4 mt-2 mb-0 inline-block rounded-full bg-orange-700 px-3 py-2 text-base text-white shadow-md">
          {time}
        </div>
      </div>
    </div>
  );
}
