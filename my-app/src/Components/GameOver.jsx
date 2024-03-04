import React from "react";
import styles from "../styles/gameOver.module.css";
import { motion } from "framer-motion";
import ppvImage from "../images/upsell.jpeg";

function GameOver() {
  // Replace the following URLs with your actual navigation paths or functions
  const handleChallengeFriendClick = () => {
    /* ... */
  };
  const handlePlayAgainClick = () => {
    /* ... */
  };
  const handlePpvInfoClick = () => {
    /* ... */
  };

  return (
    <motion.div
      className={styles.gameOver}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.scoreSection}>
        <label className={styles.scoreLabel}>Score</label>
        <div className={styles.scoreValue}>500</div>
      </div>
      <div className={styles.ppvSection}>
        <img src={ppvImage} alt="PPV Event" className={styles.ppvImage} />
      </div>
      <div className={styles.ctaSection}>
        <button
          className={styles.ctaButton}
          onClick={handleChallengeFriendClick}
        >
          Challenge a friend
        </button>
        <div className={styles.ctaButtonContainer}>
          <button className={styles.ctaButton} onClick={handlePlayAgainClick}>
            Play Again
          </button>
          <button className={styles.ctaButton} onClick={handlePpvInfoClick}>
            PPV Info
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default GameOver;
