import Timeline from "@/Components/ExperiencesTimelineItem";
import Title from "@/Components/Title";

export default function Experiences() {
  return (
    <section className="bg-stone-300 py-12 text-center text-xl text-zinc-800">
      <Title color="#2c3e50">Experiences</Title>

      <div className="container mx-auto">
        <Timeline side="left" time="May 2022 - Now" color="#e67e22">
          <a href="https://hedon.nl" target="_blank" rel="noopener noreferrer">
            <h4
              className="text-2xl font-bold group-hover:underline"
              style={{ color: "#e67e22" }}
            >
              HedoN Electronic Developments B.V.
            </h4>
          </a>
          <p className="text-base">
            <i className="text-red-900">Flexwerker</i>
            <br />
            Werkzaamheden als assembleren, testen, solderen en repareren van
            producten.
          </p>
        </Timeline>

        <Timeline side="right" time="Jul 2020 - May 2022" color="#3498db">
          <a
            href="https://vanderendegroup.nl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4
              className="text-2xl font-bold group-hover:underline"
              style={{ color: "#3498db" }}
            >
              Van der Ende Groep
            </h4>
          </a>
          <p className="text-base">
            <i className="text-red-900">Assembly worker</i>
            <br />
            Het assembleren van producten en het testen van de werking.
          </p>
        </Timeline>

        <Timeline side="left" time="Apr 2015 - Dec 2020" color="#2ecc71">
          <a
            href="https://jvanvliet.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4
              className="text-2xl font-bold group-hover:underline"
              style={{ color: "#2ecc71" }}
            >
              Van VLIET Flower Group
            </h4>
          </a>
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
