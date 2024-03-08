import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage, GameOver } from "./"; // Import your GameOverPage component
import { AnimatePresence } from "framer-motion";
import ReactGA from "react-ga4";
function AnimtedRoutes() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimtedRoutes;
