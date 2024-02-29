import React from "react";
import "../styles/gameOver.css";
import copy from "copy-to-clipboard";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
function GameOver() {
  const gameUrl = "https://ovw-3pigs.netlify.app/";
  const location = useLocation();
  const score = location.state?.score || "500"; // default score to 500

  const handleShareClick = () => {
    copy(gameUrl);
    alert("URL copied to clipboard!");
  };

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
