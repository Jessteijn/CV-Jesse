import React from "react";
import Group from "./SkillItemGroup";
import styles from "./Skills.module.scss";
import Title from "./Title";

export default class Skills extends React.Component {
  render() {
    const skillImgs = [
      {
        name: "Front-ends",
        list: [
          { name: "html5", color: "#f16529", value: "75" },
          { name: "css3", color: "#29a9df", value: "70" },
          { name: "sass", color: "#cb6699", value: "50" },
          { name: "bootstrap", color: "#8b57d9", value: "30" },
          { name: "javascript", color: "#f7df1e", value: "30" },
          { name: "reactjs", color: "#61d9fa", value: "50" },
        ],
      },
      {
        name: "Back-ends",
        list: [
          { name: "php", color: "#8993be", value: "80" },
          { name: "nodejs", color: "#81ca2a", value: "75" },
        ],
      },
      {
        name: "Databases",
        list: [{ name: "mysql", color: "#0784af", value: "65" }],
      },
      {
        name: "Tools",
        list: [
          { name: "git", color: "#F05032", value: "60" },
          { name: "npm", color: "#cb3736", value: "55" },
        ],
      },
    ];

    return (
      <section className={`hero ${styles.wrapper} has-text-centered`}>
        <Title title="Skills" color="#ffffff" />
        <div className="container">
          {skillImgs.map((item, key) => (
            <Group key={key} name={item.name} items={item.list} />
          ))}
        </div>
      </section>
    );
  }
}
