import React from "react";

interface HeaderBraceProps {
  type: "left" | "right";
}

const HeaderBrace: React.FC<HeaderBraceProps> = ({ type }) => {
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
};

export default HeaderBrace;
