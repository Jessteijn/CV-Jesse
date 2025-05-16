import Item from "@/Components/EducationItem";
import Title from "@/Components/Title";
import { pageProps } from "@/lib/types/page-type";
import { cn } from "@/lib/utils";

export default function Education({ className }: pageProps) {
  return (
    <section
      className={cn("py-12 text-center text-xl", className)}
      id="education"
      aria-label="Education"
    >
      <Title>Opleidingen</Title>
      <div className="text-zinc-800">
        <Item
          time="2020 - 2025"
          name="TU Delft (B.Sc.)"
          major="Major: Electrical Engineering"
          minor="Minor: Computer Science"
          gpa="7.8"
          color="#00a6d6"
        />
        <Item
          time="2014 - 2020 (High School)"
          name="ISW Gasthuislaan"
          major="VWO Natuur & Techniek en Natuur & Gezondheid"
          gpa="7"
          color="#F1B51C"
        />
      </div>
    </section>
  );
}
