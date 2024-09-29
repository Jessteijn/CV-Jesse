import React from "react";

interface TitleProps {
  children: React.ReactNode;
  color: string;
}

const Title: React.FC<TitleProps> = ({ color, children }) => {
  return (
    <h1 style={{ color: color }} className="mb-8 text-5xl font-bold uppercase">
      {children}
    </h1>
  );
};

export default Title;
