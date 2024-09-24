import React from "react";
import Typist from "react-typist-component";
import styles from "./HeaderTitle.module.scss";

const HeaderTitle = ({ color }) => (
  <div>
    <div className={`${styles.title}`} style={{ color }}>
      <Typist cursor={<span>_</span>} hideCursorWhenDone>
        <span className={styles.im}>I&apos;m</span>
        <span className={styles.name}> Jesse</span>
      </Typist>
    </div>
  </div>
);

HeaderTitle.displayName = "HeaderTitle";

export default HeaderTitle;
