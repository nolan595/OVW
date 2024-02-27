import React from "react";
import "../styles/gameOver.css";
import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { FiCopy } from "react-icons/fi";
import copy from "copy-to-clipboard";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate

function GameOver() {
  const gameUrl = "https://ovw-3pigs.netlify.app/";
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score || "0";
  const title = "Can you help the OVW Roster fight off the aliens?";

  const handleCopyLink = () => {
    copy(`Check out this awesome game I played! ${gameUrl}`);
    alert("Link copied to clipboard!");
  };
  const goToMainMenu = () => {
    navigate("/");
  };

  return (
    <div className="main_content">
      <div className="card">
        <div className="score_container">
          <h1>Score</h1>
          <div className="score_amount">
            <h2>{score}</h2>
          </div>
        </div>
        <div className="upsell_image">
          <a href="https://ovwwrestling.ticketspice.com/ovw-march-mayhem-">
            <img src="/upsell.jpeg" alt="March Mayhem" />
          </a>
        </div>
        <div className="share-buttons">
          <WhatsappShareButton url={gameUrl} title={title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <TwitterShareButton url={gameUrl} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <button onClick={handleCopyLink}>
            <FiCopy size={32} />
          </button>
        </div>
        <button className="button menu" onClick={goToMainMenu}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}

export default GameOver;
