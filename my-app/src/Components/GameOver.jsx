import React from "react";
import styles from "../styles/gameOver.module.css";
import { motion } from "framer-motion";
import { ShareCTA } from "./";
function GameOver() {
  // const gameUrl = "https://ovw-3pigs.netlify.app/";

  return (
    <motion.div
      className={styles.gameOver}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.mainContent}>
        <div className="score"></div>
        <div className="ppv"></div>
        <div className="bottom_buttons">
          <ShareCTA />
        </div>
      </div>
    </motion.div>
  );
}

export default GameOver;
