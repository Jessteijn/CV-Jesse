import Item from "@/Components/ExtraItems";
import Title from "@/Components/Title";

export default function Extra() {
  return (
    <section className="bg-slate-300 py-12 text-lg text-zinc-800">
      <div className="text-center">
        <Title color="#ffffff">Extra</Title>
        <Item
          time="2020 - Now (B.Sc.)"
          name="Welpenleiding"
          project="Scouting Rambonnetgroep Naaldwijk"
          link="https://rambonnetgroep.nl"
          color="#08824c"
        >
          <ul className="ml-4 list-disc">
            <li>Leiding geven aan kinderen van 7-11 jaar</li>
            <li>Teamleider van ons leidingteam</li>
            <li>Google Workspace Admin</li>
            <li>De nieuwe websites bouwen en onderhouden</li>
          </ul>
        </Item>
        <Item
          time="VWO4, 2018"
          name="5x5x5 LED Cube"
          project="Natuurkunde Project"
          link="https://www.instructables.com/5x5x5-LED-Cube/"
          color="#0096ff"
        >
          <p>
            Een arduino project voor natuurkunde dat een heel jaar mocht duren.
            Instructable schrijven was hierbij onderdeel van de opdracht.
          </p>
        </Item>
      </div>
    </section>
  );
}
