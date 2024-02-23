import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landingPage.css";

function LandingPage() {
  const [showIframe, setShowIframe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === "gameOver") {
        navigate("/game-over");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);

  return (
    <div className="landingPage">
      <div className="mainContent">
        <button onClick={() => setShowIframe(!showIframe)}>
          {showIframe ? "Hide Game" : "Play Game"}
        </button>
      </div>
      {showIframe && (
        <div className="iframeContainer">
          <iframe src="/Catcher/index.html" title="Game"></iframe>
          <button className="closeButton" onClick={() => setShowIframe(false)}>
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
