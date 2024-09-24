import React from "react";
import styles from "./ExperiencesTimelineItem.module.scss";

export default class ExperiencesTimelineItem extends React.Component {
  render() {
    let { time, side, color, children } = this.props;

    return (
      <div>
        {side === "left" ? (
          <div className={`columns ${styles.timeline}`}>
            <div
              className={`${styles.circle} is-hidden-mobile`}
              style={{ backgroundColor: color }}
            ></div>
            <div className={`column ${styles.left} is-6 has-text-right`}>
              <div
                className={`${styles.arrow} ${styles["arrow-right"]}`}
                style={{ borderLeftColor: color }}
              ></div>
              <div
                className={`${styles.detail} ${styles["detail-left"]}`}
                style={{ borderRightColor: color }}
              >
                <p className="is-hidden-tablet">{time}</p>
                {children}
              </div>
            </div>
            <div className="column is-6 has-text-left is-hidden-mobile">
              <div className={styles.time}>{time}</div>
            </div>
          </div>
        ) : (
          <div className={`columns ${styles.timeline}`}>
            <div
              className={`${styles.circle} is-hidden-mobile`}
              style={{ backgroundColor: color }}
            ></div>
            <div className="column is-6 has-text-right is-hidden-mobile">
              <div className={styles.time}>{time}</div>
            </div>
            <div className={`column ${styles.right} is-6 has-text-left`}>
              <div
                className={`${styles.arrow} ${styles["arrow-left"]}`}
                style={{ borderRightColor: color }}
              ></div>
              <div
                className={`${styles.detail} ${styles["detail-right"]}`}
                style={{ borderLeftColor: color }}
              >
                <p className="is-hidden-tablet">{time}</p>
                {children}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
