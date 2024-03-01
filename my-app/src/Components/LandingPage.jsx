import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/landingPage.module.css";
import { motion } from "framer-motion";

function LandingPage() {
  const [showIframe, setShowIframe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.action === "gameOver") {
          navigate("/game-over", { state: { score: data.score } });
        }
      } catch (e) {
        console.error("Error parsing message from iframe:", e);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);

  return (
    <motion.div
      className={styles.landingPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.mainContent}>
        {!showIframe && (
          <button onClick={() => setShowIframe(true)}>Play Game</button>
        )}
      </div>
      {showIframe && (
        <div className={styles.iframeContainer}>
          <iframe src="/Catcher/index.html" title="Game"></iframe>
          <button
            className={styles.closeButton}
            onClick={() => setShowIframe(false)}
          >
            X
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default LandingPage;
