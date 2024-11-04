import Item from "@/Components/EducationItem";
import Title from "@/Components/Title";

export default function Education() {
  return (
    <section className="bg-slate-500 py-12 text-xl text-zinc-800">
      <div className="text-center">
        <Title color="#ffffff">Education</Title>
        <Item
          time="2020 - Now"
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
