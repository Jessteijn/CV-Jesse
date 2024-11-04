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
        className="mx-auto w-10/12 max-w-3xl rounded-xl border-l-8 border-r-8 border-solid bg-white shadow-md md:w-3/5"
        style={{ borderColor: color }}
      >
        <div className="m-4 text-left">
          <div className="flex flex-wrap items-center gap-x-1">
            <h4 className="text-2xl font-bold">{name}</h4>
            {name && (project || link) ? <span className="mx-2">•</span> : null}
            {project ? (
              <h5 className="title-extra-part text-2xl">{project}</h5>
            ) : null}
            {project && link ? <span className="mx-2">•</span> : null}
            {link ? (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer"
              >
                <Globe size={24} color="blue" />
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
