import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landingPage.css";

function LandingPage() {
  const [showIframe, setShowIframe] = useState(false); // State to manage iframe display
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
        {/* Button to toggle the iframe's display */}
        <button onClick={() => setShowIframe(!showIframe)}>
          {showIframe ? "Hide Game" : "Play Game"}
        </button>
      </div>

      {/* Conditionally render the iframe based on showIframe state */}
      {showIframe && (
        <iframe
          src="/Catcher/index.html" // Adjust the src to your game's URL
          title="Game"
        ></iframe>
      )}
    </div>
  );
}

export default LandingPage;
