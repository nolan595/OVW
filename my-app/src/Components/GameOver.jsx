import React from "react";
import "../styles/gameOver.css";
import copy from "copy-to-clipboard";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiShare2 } from "react-icons/fi"; // Importing a share icon

function GameOver() {
  const gameUrl = "https://ovw-3pigs.netlify.app/";
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score || "0";
  const shareText = `I scored ${score} in the game! Can you beat me? Check out this awesome game: ${gameUrl}`;

  const handleShare = () => {
    console.log("navigator.share:", navigator.share); // Add this line for debugging
    if (navigator.share) {
      navigator
        .share({
          title: "OVW Game",
          text: `I scored ${score} in the game! Can you beat me? Check out this awesome game: ${gameUrl}`,
          url: gameUrl,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback for desktop browsers
      copy(
        `I scored ${score} in the game! Can you beat me? Check out this awesome game: ${gameUrl}`
      );
      alert("Link copied to clipboard!");
    }
  };

  const goToMainMenu = () => {
    navigate("/");
  };

  return (
    <motion.div
      className="main_content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="game-over-container">
        {/* Other game over content */}
        <button onClick={handleShare} className="share-button">
          <FiShare2 /> Share Your Score
        </button>
        {/* Possibly other buttons like goToMainMenu */}
      </div>
    </motion.div>
  );
}

export default GameOver;
