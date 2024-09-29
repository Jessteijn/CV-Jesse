import Group from "@/Components/SkillItemGroup";
import Title from "@/Components/Title";
import React from "react";

const skillImgs = [
  {
    name: "Front-ends",
    list: [
      { name: "html5", color: "#f16529", percentage: 75 },
      { name: "css3", color: "#29a9df", percentage: 70 },
      { name: "sass", color: "#cb6699", percentage: 50 },
      { name: "bootstrap", color: "#8b57d9", percentage: 30 },
      { name: "javascript", color: "#f7df1e", percentage: 30 },
      { name: "reactjs", color: "#61d9fa", percentage: 50 },
    ],
  },
  {
    name: "Back-ends",
    list: [
      { name: "php", color: "#8993be", percentage: 80 },
      { name: "nodejs", color: "#81ca2a", percentage: 75 },
    ],
  },
  {
    name: "Databases",
    list: [{ name: "mysql", color: "#0784af", percentage: 65 }],
  },
  {
    name: "Tools",
    list: [
      { name: "git", color: "#F05032", percentage: 60 },
      { name: "npm", color: "#cb3736", percentage: 55 },
    ],
  },
];

function Skills() {
  return (
    <section className="bg-[#2f353f] py-12 text-center text-xl">
      <Title color="#ffffff">Skills</Title>
      {skillImgs.map((item, key) => (
        <Group key={key} name={item.name} items={item.list} />
      ))}
    </section>
  );
}

export default Skills;
