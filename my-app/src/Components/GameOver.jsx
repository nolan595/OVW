import React, { useState } from "react";
import styles from "../styles/gameOver.module.css";
import { motion } from "framer-motion";
// import ppvImage from "../images/upsell.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import Kal from "../videos/Kal.mp4";
import Freya from "../videos/Freya.mp4";
import CashFlo from "../videos/CashFlo.mp4";
import Haley from "../videos/Haley.mp4";

function GameOver() {
  const ppvLink = "https://ovwwrestling.ticketspice.com/ovw-march-mayhem-";
  let navigate = useNavigate();
  const gameUrl = "https://ovw-3pigs.netlify.app/";
  const location = useLocation();
  const score = location.state?.score || "0";
  const currentCharIndex = location.state?.current_char_index || "0";
  console.log(currentCharIndex, score);
  const videos = [Kal, Freya, CashFlo, Haley];
  const ppvVideo = videos[currentCharIndex];

  const handleShare = () => {
    ReactGA.event({
      category: "Social",
      action: "Challenge a Friend Clicked",
      label: `Score: ${score}`,
    });
    console.log("navigator.share:", navigator.share); // For debugging
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
      // Updated fallback for desktop browsers to use Clipboard API
      navigator.clipboard
        .writeText(
          `I scored ${score} in the game! Can you beat me? Check out this cool game: ${gameUrl}`
        )
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((error) => {
          console.error("Error copying text: ", error);
          alert("Failed to copy link to clipboard");
        });
    }
  };
  const handlePlayAgainClick = () => {
    ReactGA.event({
      category: "Navigation",
      action: "Play Again Clicked",
      label: "Game Over Page",
    });
    navigate("/");
  };
  const handlePpvInfoClick = () => {
    ReactGA.event({
      category: "External Link",
      action: "PPV Info Clicked",
      label: "Game Over Page",
    });
    window.location.href = ppvLink;
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
        <div className={styles.scoreValue}>{score}</div>
      </div>
      <div className={styles.ppvSection}>
        <video
          src={ppvVideo}
          alt="PPV Event"
          className={styles.ppvImage}
          controls
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.ctaSection}>
        <button className={styles.ctaButton} onClick={handleShare}>
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
