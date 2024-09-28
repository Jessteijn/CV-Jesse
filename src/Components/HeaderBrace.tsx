import React from "react";

interface HeaderBraceProps {
  type: "left" | "right";
}

const HeaderBrace: React.FC<HeaderBraceProps> = ({ type }) => {
  const distance = 200;
  const item = {
    left: {
      text: "{",
      startPosition: distance,
      textAlign: "right",
    },
    right: {
      text: "}",
      startPosition: -distance,
      textAlign: "left",
    },
  };

  return (
    <div
      className={`text-15em animate-move hidden md:block text-${item[type].textAlign}`}
    >
      {item[type].text}
    </div>
  );
};

export default HeaderBrace;
