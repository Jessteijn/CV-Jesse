import { cn } from "@/lib/utils";

interface HeaderBraceProps {
  type: "left" | "right";
}

export default function HeaderBrace({ type }: HeaderBraceProps) {
  const item = {
    left: { text: "{", ani: "animate-move", textAlign: "text-right" },
    right: { text: "}", ani: "animate-move-r", textAlign: "text-left" },
  };

  return (
    <div
      className={cn(
        "text-15em hidden md:block",
        item[type].textAlign,
        item[type].ani,
      )}
    >
      {item[type].text}
    </div>
  );
}
