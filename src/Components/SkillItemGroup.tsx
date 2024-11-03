import Item from "@/Components/SkillItem";
import { SkillImgsGroupProps } from "@/types/skills-image-types";
import React from "react";

export default function SkillGroup({ name, items }: SkillImgsGroupProps) {
  return (
    <section className="flex justify-center">
      <div className="sm:m-2/12 m-1/12 w-10/12 text-left sm:w-7/12">
        <h4 className="mx-5 my-3 text-2xl font-bold">{name}</h4>
        <div className="grid grid-cols-2 flex-wrap sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {items.map((item, key) => (
            <Item
              key={key}
              name={item.name}
              img={item.img}
              color={item.color}
              percentage={item.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
