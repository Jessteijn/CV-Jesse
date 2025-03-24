import Timeline from "@/Components/ExperiencesTimelineItem";
import Title from "@/Components/Title";
import { pageProps } from "@/types/page-type";

export default function Experiences({ className }: pageProps) {
  return (
    <section
      className={`${className} py-12 text-center text-xl`}
      id="experience"
      aria-label="Experiences"
    >
      <Title>Ervaringen</Title>

      <div className="container mx-auto text-zinc-800">
        <Timeline
          title="Elixir Engineering"
          side="right"
          link="https://elixir-engineers.com/"
          time="Maart 2025 - Heden"
          color="#0e3749"
        >
          <p className="text-base">
            <i className="text-red-900">Flexwerker</i>
            <br />
            Werkzaamheden als assembleren, testen, solderen en repareren van
            producten.
          </p>
        </Timeline>

        <Timeline
          title="HedoN Electronic Developments B.V."
          side="left"
          link="https://www.hedon.nl"
          time="Mei 2022 - Maart 2025"
          color="#e17819"
        >
          <p className="text-base">
            <i className="text-red-900">Flexwerker</i>
            <br />
            Werkzaamheden als assembleren, testen, solderen en repareren van
            producten.
          </p>
        </Timeline>

        <Timeline
          title="Van der Ende Groep"
          side="right"
          link="https://vanderendegroup.nl"
          time="Jul 2020 - May 2022"
          color="#2792d8"
        >
          <p className="text-base">
            <i className="text-red-900">Assembly worker</i>
            <br />
            Het assembleren van producten en het testen van de werking.
          </p>
        </Timeline>

        <Timeline
          title="Van VLIET Flower Group"
          side="left"
          link="https://www.vanvliet.com"
          time="Apr 2015 - Dec 2020"
          color="#25a75d"
        >
          <p className="text-base">
            <i className="text-red-900">Logistic Worker</i>
            <br />
            Planten sorteren op klant en het verwerken van planten op denen.
          </p>
        </Timeline>
      </div>
    </section>
  );
}
