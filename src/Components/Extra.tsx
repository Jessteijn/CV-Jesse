import Item from "@/Components/ExtraItems";
import Title from "@/Components/Title";
import { pageProps } from "@/types/page-type";

export default function Extra({ className }: pageProps) {
  return (
    <section className={`${className} py-12 text-center text-lg`}>
      <Title>Extra</Title>
      <div className="text-zinc-800">
        <Item
          time="2020 - Heden"
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
