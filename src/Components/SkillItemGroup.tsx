import Item from "@/Components/SkillItem";
import React from "react";

interface SkillGroupProps {
  name: string;
  items: { name: string; color: string; percentage: number }[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ name, items }) => {
  return (
    <div className="flex justify-center">
      <div className="sm:m-2/12 m-1/12 w-10/12 text-left sm:w-7/12">
        <h4 className="mx-5 my-3 font-bold">{name}</h4>
        <div className="grid grid-cols-3 flex-wrap md:grid-cols-4 lg:grid-cols-6">
          {items.map((item, key) => (
            <Item
              key={key}
              img={"/images/skills/" + item.name + ".png"}
              color={item.color}
              percentage={item.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillGroup;
