import React from "react";
import styles from "../../styles/components/playAgainCTA.module.css";
function PPVInfo() {
  const ppvLink = "https://ovwwrestling.ticketspice.com/ovw-march-mayhem-";

  const handlePPVClick = () => {
    window.location.href = ppvLink;
  };
  return (
    <div>
      <button onClick={handlePPVClick} className={styles.playButton}>
        Play Again
      </button>
    </div>
  );
}

export default PPVInfo;
