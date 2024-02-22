import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // assuming you're using react-router for navigation

function LandingPage() {
  const [showGame, setShowGame] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMessage = (event) => {
      // Check for the 'gameOver' message
      if (event.data === "gameOver") {
        // Redirect to the game-over page
        navigate("/game-over"); // Adjust the route as needed
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);

  return (
    <div>
      {/* Button to toggle the game's display */}
      <button onClick={() => setShowGame(true)}>Play Game</button>

      {/* Conditionally render the iframe based on showGame state */}
      {showGame && (
        <iframe
          src="/Catcher/index.html"
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            border: "none",
          }}
          title="OVW"
        ></iframe>
      )}
    </div>
  );
}

export default LandingPage;
