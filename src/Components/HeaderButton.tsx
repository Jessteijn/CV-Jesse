import React from "react";

interface HeaderButtonProps {
  title: string;
  url: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ title, url }) => {
  return (
    <a
      className="mx-2 my-0 rounded-full bg-blue-600 px-6 py-0 text-xl text-white hover:bg-blue-700"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

export default HeaderButton;
