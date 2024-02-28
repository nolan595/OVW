import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage, GameOver } from "./"; // Import your GameOverPage component

import { AnimatePresence } from "framer-motion";
function AnimtedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimtedRoutes;
