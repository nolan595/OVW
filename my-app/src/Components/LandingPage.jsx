import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landingPage.css";
import { motion } from "framer-motion";

function LandingPage() {
  const [showIframe, setShowIframe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.action === "gameOver") {
          // Navigate to the game-over page with score data
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
      className="landingPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mainContent">
        {/* Button now only shows "Play Game" and sets showIframe to true */}
        {!showIframe && (
          <button onClick={() => setShowIframe(true)}>Play Game</button>
        )}
      </div>
      {showIframe && (
        <div className="iframeContainer">
          <iframe src="/Catcher/index.html" title="Game"></iframe>
          {/* Removed the toggle button functionality, so no need for a close button here */}
        </div>
      )}
    </motion.div>
  );
}

export default LandingPage;
