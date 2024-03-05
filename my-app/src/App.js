import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimtedRoutes } from "./Components"; // Import your GameOverPage component
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-E52JG68JHK");
  }, []);
  return (
    <Router>
      <AnimtedRoutes />
    </Router>
  );
}

export default App;
