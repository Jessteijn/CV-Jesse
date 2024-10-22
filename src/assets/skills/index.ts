import bootstrap from "./bootstrap.png";
import css3 from "./css3.png";
import git from "./git.png";
import html5 from "./html5.png";
import javascript from "./javascript.png";
import mysql from "./mysql.png";
import nodejs from "./nodejs.png";
import npm from "./npm.png";
import php from "./php.png";
import reactjs from "./reactjs.png";
import sass from "./sass.png";

import type { SkillImgsGroupProps } from "@/types/skills-image-types";

export const skillImgs: SkillImgsGroupProps[] = [
  {
    name: "Front-ends",
    list: [
      { name: "HTML5", file: html5, color: "#f16529", percentage: 75 },
      { name: "CSS3", file: css3, color: "#29a9df", percentage: 70 },
      { name: "SASS", file: sass, color: "#cb6699", percentage: 50 },
      { name: "Bootstrap", file: bootstrap, color: "#8b57d9", percentage: 30 },
      {
        name: "Javascript",
        file: javascript,
        color: "#f7df1e",
        percentage: 30,
      },
      { name: "ReactJS", file: reactjs, color: "#61d9fa", percentage: 50 },
    ],
  },
  {
    name: "Back-ends",
    list: [
      { name: "php", file: php, color: "#8993be", percentage: 80 },
      { name: "NodeJS", file: nodejs, color: "#81ca2a", percentage: 75 },
    ],
  },
  {
    name: "Databases",
    list: [{ name: "MySQL", file: mysql, color: "#0784af", percentage: 65 }],
  },
  {
    name: "Tools",
    list: [
      { name: "git", file: git, color: "#F05032", percentage: 60 },
      { name: "npm", file: npm, color: "#cb3736", percentage: 55 },
    ],
  },
];
