import { skillImgs } from "@/assets/skills";
import Group from "@/Components/SkillItemGroup";
import Title from "@/Components/Title";
import { pageProps } from "@/types/page-type";

export default function Skills({ className }: pageProps) {
  return (
    <section className={`${className} py-12 text-center text-xl`}>
      <Title color="#ffffff">Skills</Title>
      {skillImgs.map((item, key) => (
        <Group key={key} name={item.name} items={item.items} />
      ))}
    </section>
  );
}
