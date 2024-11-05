import Item from "@/Components/SkillItem";
import { SkillImgsGroupProps } from "@/types/skills-image-types";

export default function SkillGroup({ name, items }: SkillImgsGroupProps) {
  return (
    <section className="flex justify-center">
      <div className="w-10/12 text-left md:w-9/12 lg:w-8/12 xl:w-7/12">
        <h4 className="mx-5 my-3 text-2xl font-bold">{name}</h4>
        <div className="grid grid-cols-2 flex-wrap sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
