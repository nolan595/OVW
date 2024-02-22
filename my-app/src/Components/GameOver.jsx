import React from "react";
import { WhatsappShareButton, FacebookIcon } from "react-share";
function GameOver() {
  return (
    <div>
      <h1>Game Over</h1>
      <WhatsappShareButton url="https://ovw-3pigs.netlify.app/">
        <FacebookIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}

export default GameOver;
