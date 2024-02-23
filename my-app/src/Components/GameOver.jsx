import React from "react";
import "../styles/gameOver.css";
import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import { FiCopy } from "react-icons/fi";
import copy from "copy-to-clipboard";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function GameOver() {
  const gameUrl = "https://ovw-3pigs.netlify.app/";
  const navigate = useNavigate();
  const title = "Can you help the OVW Roster fight off the aliens?";

  const handleCopyLink = () => {
    copy(`Check out this awesome game I played! ${gameUrl}`);
    alert("Link copied to clipboard!");
  };
  const goToMainMenu = () => {
    navigate("/");
  };

  return (
    <div className="gameOver">
      <h1>Game Over</h1>
      <div className="buttonContainer">
        <WhatsappShareButton url={gameUrl} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <TwitterShareButton url={gameUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <FacebookShareButton url={gameUrl} title={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        {/* Copy Link Button */}
        <button onClick={handleCopyLink} className="copyLinkButton">
          <FiCopy size={32} />
        </button>
      </div>
      <button onClick={goToMainMenu} className="mainPageButton">
        Play Again
      </button>
    </div>
  );
}

export default GameOver;
