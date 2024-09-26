import Image from "next/image";
import React from "react";
import styles from "./HeaderProfile.module.scss";

export default class HeaderBrace extends React.Component {
  render() {
    return (
      <div className={`column ${styles.profile}`}>
        <figure className={styles.image} onClick={() => this.props.toggle()}>
          <Image
            src="/images/profile.png"
            width="300"
            height="300"
            alt="Profile picture"
            className={styles.img}
          />
        </figure>
      </div>
    );
  }
}
