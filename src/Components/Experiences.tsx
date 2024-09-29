import Timeline from "@/Components/ExperiencesTimelineItem";
import Title from "@/Components/Title";

function Experiences() {
  return (
    <section className="bg-stone-300 py-12 text-center text-xl text-zinc-800">
      <Title color="#2c3e50">Experiences</Title>

      <div className="mx-auto">
        <Timeline side="left" time="May 2022 - Now" color="#e67e22">
          <h4 className="text-2xl font-bold" style={{ color: "#e67e22" }}>
            HedoN Electronic Developments B.V.
          </h4>
          <p className="text-base">
            <i className="text-red-900">Flexwerker</i>
            <br />
          </p>
        </Timeline>

        <Timeline side="right" time="Jul 2020 - May 2022" color="#3498db">
          <h4 className="text-2xl font-bold" style={{ color: "#3498db" }}>
            Van der Ende Groep
          </h4>
          <p className="text-base">
            <i className="text-red-900">Assembly worker</i>
            <br />
          </p>
        </Timeline>

        <Timeline side="left" time="Apr 2015 - Dec 2020" color="#2ecc71">
          <h4 className="text-2xl font-bold" style={{ color: "#2ecc71" }}>
            Van VLIET Flower Group
          </h4>
          <p className="text-base">
            <i className="text-red-900">Logistic Worker</i>
            <br />
          </p>
        </Timeline>
      </div>
    </section>
  );
}

export default Experiences;