import { StaticImageData } from "next/image";

type SkillImgsGroupProps = {
  name: string;
  items: SkillImgsProps[];
};

type SkillImgsProps = {
  name: string;
  img: StaticImageData;
  color: string;
  percentage: number;
};

export type { SkillImgsGroupProps, SkillImgsProps };
