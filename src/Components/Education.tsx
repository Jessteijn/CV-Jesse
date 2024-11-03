import Item from "@/Components/EducationItem";
import Title from "@/Components/Title";

export default function Education() {
  return (
    <section className="bg-slate-500 py-12 text-xl text-zinc-800">
      <div className="text-center">
        <Title color="#ffffff">Education</Title>
        <Item
          time="2020 - Now (B.Sc.)"
          name="TU Delft"
          major="Electrical Engineering"
          gpa="7.8"
          color="#2ecc71"
        />
        <Item
          time="2014 - 2020 (High School)"
          name="ISW Gasthuislaan"
          gpa="7"
          color="#3498db"
        />
      </div>
    </section>
  );
}
