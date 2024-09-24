import React from "react";
import styles from "./Header.module.scss";

export default class HeaderButton extends React.Component {
  render() {
    let { title, icon, url } = this.props;
    return (
      <a
        className={`${styles.button} button is-link`}
        href={url}
        target="_blank"
      >
        {title}
      </a>
    );
  }
}
