import { Globe } from "lucide-react";
import Link from "next/link";

interface ExtraItemProps {
  color: string;
  name: string;
  project?: string;
  time?: string;
  link?: string;
  children?: React.ReactNode;
}

export default function ExtraItem({
  color,
  name,
  project,
  time,
  link,
  children,
}: ExtraItemProps) {
  return (
    <div className="flex justify-center py-4">
      <div
        className="group mx-auto w-10/12 max-w-3xl rounded-xl border-r-8 border-l-8 border-solid bg-white shadow-md md:w-3/5"
        style={{ borderColor: color }}
      >
        <div className="m-4 text-left">
          <div className="flex justify-between">
            <div className="flex flex-wrap items-center">
              <h2 className="text-2xl font-bold">
                {name}
                {name && (project || link) ? (
                  <span className="mx-2 text-xl font-normal">•</span>
                ) : null}
              </h2>

              {project ? (
                <>
                  <h3 className="text-2xl">{project}</h3>
                </>
              ) : null}
            </div>
            {link ? (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2px inline-block hover:cursor-pointer"
                title={link}
              >
                <Globe
                  size={24}
                  color="blue"
                  className="transform transition-transform duration-100 group-hover:scale-110"
                />
              </Link>
            ) : null}
          </div>
          <p>{time}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
