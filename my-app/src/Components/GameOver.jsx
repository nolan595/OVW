import React from "react";
import "../styles/gameOver.css";
import { motion } from "framer-motion";
function GameOver() {
  // const gameUrl = "https://ovw-3pigs.netlify.app/";

  return (
    <motion.div
      className="main_content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    ></motion.div>
  );
}

export default GameOver;
