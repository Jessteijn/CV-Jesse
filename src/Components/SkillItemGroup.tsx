import Item from "@/Components/SkillItem";
import { SkillImgsGroupProps } from "@/types/skills-image-types";
import React from "react";

const SkillGroup: React.FC<SkillImgsGroupProps> = ({ name, items }) => {
  return (
    <div className="flex justify-center">
      <div className="sm:m-2/12 m-1/12 w-10/12 text-left sm:w-7/12">
        <h4 className="mx-5 my-3 font-bold">{name}</h4>
        <div className="grid grid-cols-2 flex-wrap sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {items &&
            items.map(
              (item, key) => (
                console.log(item),
                (
                  <Item
                    key={key}
                    name={item.name}
                    img={item.img}
                    color={item.color}
                    percentage={item.percentage}
                  />
                )
              ),
            )}
        </div>
      </div>
    </div>
  );
};

export default SkillGroup;
