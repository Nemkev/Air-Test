import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "./Router";

function App() {
  return (
    <Router>
      <Routers />
    </Router>
  );
}

export default App;
