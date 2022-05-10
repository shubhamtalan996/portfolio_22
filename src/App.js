import React, { useEffect } from "react";
import { createAndRenderBackground } from "./utils/threejs-utils/render-background";
// import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  useEffect(() => {
    createAndRenderBackground();
  }, []);
  return <HomePage />;
}

export default App;
