import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimtedRoutes } from "./Components"; // Import your GameOverPage component

function App() {
  return (
    <Router>
      <AnimtedRoutes />
    </Router>
  );
}

export default App;
