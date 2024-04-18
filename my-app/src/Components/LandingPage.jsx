/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/landingPage.module.css";
import { motion } from "framer-motion";
import prologue from "../images/compressed.jpg";
import ReactGA from "react-ga4";

function LandingPage() {
  const [showIframe, setShowIframe] = useState(false);
  const navigate = useNavigate();
  const [currentCharIndex, setCurrentCharIndex] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.action === "playButtonPressed") {
          // Save the current_char_index when the play button is pressed
          setCurrentCharIndex(data.current_char_index);
        } else if (data.action === "gameOver") {
          // Pass both score and current_char_index to the game-over page
          navigate("/game-over", {
            state: {
              score: data.score,
              // Use the saved currentCharIndex or default to "0" if it's null
              current_char_index:
                currentCharIndex !== null ? currentCharIndex : "0",
            },
          });
        }
      } catch (e) {
        console.error("Error parsing message from iframe:", e);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate, currentCharIndex]);

  return (
    <motion.div
      className={styles.landingPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.mainContent}>
        <img className={styles.proglogueImg} src={prologue} alt="" />
        {!showIframe && (
          <button
            onClick={() => {
              setShowIframe(true);
              ReactGA.event({
                category: "User Interaction",
                action: "Play Button Click",
                label: "Landing Page",
              });
            }}
          >
            PLAY GAME
          </button>
        )}
      </div>
      {showIframe && (
        <div className={styles.iframeContainer}>
          <iframe src="/Catcher/index.html" title="Game"></iframe>
          <button
            className={styles.closeButton}
            onClick={() =>
              navigate("/game-over", {
                state: {
                  // Use the saved currentCharIndex or default to "0" if it's null
                  current_char_index:
                    currentCharIndex !== null ? currentCharIndex : "0",
                },
              })
            }
          >
            X
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default LandingPage;
