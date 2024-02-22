import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, GameOver } from "./Components"; // Import your GameOverPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </Router>
  );
}

export default App;
