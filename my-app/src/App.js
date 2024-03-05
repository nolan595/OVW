import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimtedRoutes } from "./Components"; // Import your GameOverPage component
import ReactGA from "react-ga";

ReactGA.initialize("G-E52JG68JHK");

function App() {
  return (
    <Router>
      <AnimtedRoutes />
    </Router>
  );
}

export default App;
