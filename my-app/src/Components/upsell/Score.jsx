import React from "react";
import styles from "../../styles/components/score.module.css";
function Score() {
  return (
    <div className={styles.scoreContainer}>
      <h1 className={styles.scorelabel}>Score</h1>
      <h1 className={styles.scoreAmount}>500</h1>
    </div>
  );
}

export default Score;
