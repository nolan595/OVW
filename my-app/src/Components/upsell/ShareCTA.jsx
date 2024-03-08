import React from "react";
import styles from "../../styles/components/shareCTA.module.css";

function ShareCTA() {
  const score = 500;
  const gameUrl = "https://ovw-3pigs.netlify.app/";
  const handleShare = () => {
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
  return (
    <div>
      <button className={styles.shareButton} onClick={handleShare}>
        CHALLENGE A FRIEND
      </button>
    </div>
  );
}

export default ShareCTA;
