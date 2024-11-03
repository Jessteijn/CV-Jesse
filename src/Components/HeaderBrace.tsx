import React from "react";

interface HeaderBraceProps {
  type: "left" | "right";
}

export default function HeaderBrace({ type }: HeaderBraceProps) {
  const item = {
    left: {
      text: "{",
      ani: "animate-move",
      textAlign: "right",
    },
    right: {
      text: "}",
      ani: "animate-move-r",
      textAlign: "left",
    },
  };

  return (
    <div
      className={`hidden text-15em md:block text-${item[type].textAlign} ${item[type].ani}`}
    >
      {item[type].text}
    </div>
  );
}
