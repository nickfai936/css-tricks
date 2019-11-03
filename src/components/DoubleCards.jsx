import React from "react";
import styles from "../styles/DoubleCards.scss";

const DoubleCards = props => {
  return (
    <div className={styles.root}>
      <div className={styles.frame1}>frame 1</div>
      <div className={styles.frame2}>frame 2</div>
    </div>
  );
};

export default DoubleCards;
