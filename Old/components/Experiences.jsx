import React from "react";
import styles from "./Experiences.module.scss";
import Timeline from "./ExperiencesTimelineItem";
import Title from "./Title";

export default class Experiences extends React.Component {
  render() {
    return (
      <section className={`hero ${styles.wrapper} has-text-centered`}>
        <Title title="Experiences" color="#2c3e50" />

        <div className={`container ${styles.container}`}>
          <Timeline side="left" time="May 2022 - Now" color="#e67e22">
            <h4 style={{ color: "#e67e22" }}>
              HedoN Electronic Developments B.V.
            </h4>
            <p>
              <i className="position">Flexwerker</i>
              <br />
            </p>
          </Timeline>

          <Timeline side="right" time="Jul 2020 - May 2022" color="#3498db">
            <h4 style={{ color: "#3498db" }}>Van der Ende Groep</h4>
            <p>
              <i className="position">Assembly worker</i>
              <br />
            </p>
          </Timeline>

          <Timeline side="left" time="Apr 2015 - Dec 2020" color="#2ecc71">
            <h4 style={{ color: "#2ecc71" }}>Van VLIET Flower Group</h4>
            <p>
              <i className="position">Logistic Worker</i>
              <br />
            </p>
          </Timeline>
        </div>
      </section>
    );
  }
}
