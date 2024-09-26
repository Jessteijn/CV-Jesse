import Image from "next/image";
import React from "react";
import styles from "./AboutInterest.module.scss";

export default class AboutInterest extends React.Component {
  render() {
    let items = ["Coding", "Reading"];
    return (
      <div>
        <div className={`columns ${styles.topic}`}>
          <div className="column has-text-left is-6 is-offset-3 is-10-mobile is-offset-1-mobile">
            My Interests
          </div>
        </div>
        <div className={`columns ${styles.item}`}>
          <div className="column is-6 is-offset-3 is-8-mobile is-offset-2-mobile">
            {items.map((item, index) => (
              <Image
                key={index}
                src={"/images/interest-" + item + ".svg"}
                title={item}
                alt={item}
                height="80"
                width="80"
                className={styles.img}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
