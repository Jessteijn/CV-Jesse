import arduino from "./arduino.svg";
import cplus from "./c++.svg";
import c from "./c.svg";
import csharp from "./csharp.svg";
import css3 from "./css3.svg";
import docker from "./docker.svg";
import git from "./git.svg";
import html5 from "./html5.svg";
import javascript from "./javascript.svg";
import latex from "./latex.svg";
import matlab from "./matlab.svg";
import mysql from "./mysql.svg";
import nextjs from "./nextjs.svg";
import nodejs from "./nodejs.svg";
import php from "./php.svg";
import python from "./python.svg";
import reactjs from "./reactjs.svg";
import taiwindcss from "./tailwindcss.svg";
import terminal from "./terminal.svg";
import typescript from "./typescript.svg";
import vhdl from "./vhdl.svg";

import type { SkillImgsGroupProps } from "@/types/skills-image-types";

export const skillImgs: SkillImgsGroupProps[] = [
  {
    name: "Hardware",
    items: [
      { name: "Arduino", img: arduino, color: "#00979d", percentage: 90 },
      { name: "VHDL", img: vhdl, color: "#4e2a8e", percentage: 75 },
      { name: "C", img: c, color: "#03599C", percentage: 90 },
      { name: "C++", img: cplus, color: "#03599C", percentage: 80 },
      { name: "Csharp", img: csharp, color: "#68217a", percentage: 50 },
    ],
  },
  {
    name: "Programming Languages",
    items: [
      { name: "Python", img: python, color: "#306998", percentage: 95 },
      { name: "MATLAB", img: matlab, color: "#e16737", percentage: 75 },
    ],
  },
  {
    name: "Front-ends",
    items: [
      { name: "HTML5", img: html5, color: "#f16529", percentage: 75 },
      { name: "CSS3", img: css3, color: "#29a9df", percentage: 70 },
      {
        name: "TailwindCSS",
        img: taiwindcss,
        color: "#06b6d4",
        percentage: 80,
      },
      {
        name: "Javascript",
        img: javascript,
        color: "#f7df1e",
        percentage: 60,
      },
      { name: "Typescript", img: typescript, color: "#007acc", percentage: 60 },

      { name: "ReactJS", img: reactjs, color: "#61d9fa", percentage: 60 },
    ],
  },
  {
    name: "Back-ends",
    items: [
      { name: "PHP", img: php, color: "#8993be", percentage: 80 },
      { name: "NodeJS", img: nodejs, color: "#81ca2a", percentage: 75 },
      { name: "NextJS", img: nextjs, color: "#000000", percentage: 55 },
    ],
  },
  {
    name: "Databases",
    items: [{ name: "MySQL", img: mysql, color: "#0784af", percentage: 65 }],
  },
  {
    name: "Tools",
    items: [
      { name: "git", img: git, color: "#F05032", percentage: 80 },
      { name: "Docker", img: docker, color: "#066da5", percentage: 50 },
      { name: "Terminal", img: terminal, color: "#000000", percentage: 70 },
      { name: "Latex", img: latex, color: "#008080", percentage: 60 },
    ],
  },
];
