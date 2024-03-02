import React from "react";
import styles from "../../styles/components/playAgainCTA.module.css";
import { useNavigate } from "react-router-dom";
function PlayAginCTA() {
  let navigate = useNavigate();
  const handlePlayAgain = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={handlePlayAgain} className={styles.playButton}>
        Play Again
      </button>
    </div>
  );
}

export default PlayAginCTA;
