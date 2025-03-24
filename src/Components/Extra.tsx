import Item from "@/Components/ExtraItems";
import Title from "@/Components/Title";
import { pageProps } from "@/lib/types/page-type";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Extra({ className }: pageProps) {
  return (
    <section
      className={cn("py-12 text-center text-lg", className)}
      id="extra"
      aria-label="Extra"
    >
      <Title>Extra</Title>
      <div className="text-zinc-800">
        <Item
          time="2024 - Heden"
          name="Webteam Scouting"
          project="Scouting Rambonnetgroep Naaldwijk"
          link="https://rambonnetgroep.nl"
          color="#FFA21F"
        >
          <ul className="group ml-4 w-full list-disc">
            <li>Beheer en bouw van de nieuwe website</li>
            <li>
              Beheer en bouw van onze{" "}
              <Link
                href="https://paasbrood.rambonnetgroep.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2px inline-block group-hover:underline hover:cursor-pointer"
                title="paasbrood.rambonnetgroep.nl"
              >
                actie websites
              </Link>
            </li>
            <li>Google Workspace Admin</li>
          </ul>
        </Item>

        <Item
          time="2020 - Heden"
          name="Welpenleiding"
          project="Scouting Rambonnetgroep Naaldwijk"
          link="https://rambonnetgroep.nl"
          color="#859424"
        >
          <ul className="ml-4 list-disc">
            <li>Leiding geven aan kinderen van 7-11 jaar</li>
            <li>Teamleider van ons leidingteam</li>
            <li>Organisatie van activiteiten</li>
          </ul>
        </Item>
        <Item
          time="VWO4, 2018"
          name="5x5x5 LED Cube"
          project="Natuurkunde Project"
          link="https://www.instructables.com/5x5x5-LED-Cube/"
          color="#0FA3B1"
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
