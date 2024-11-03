import { skillImgs } from "@/assets/skills";
import Group from "@/Components/SkillItemGroup";
import Title from "@/Components/Title";
import React from "react";

export default function Skills() {
  return (
    <section className="bg-[#2f353f] py-12 text-center text-xl">
      <Title color="#ffffff">Skills</Title>
      {skillImgs.map((item, key) => (
        <Group key={key} name={item.name} items={item.items} />
      ))}
    </section>
  );
}
