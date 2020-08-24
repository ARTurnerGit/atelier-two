import React from "react";
import "./App.css";
import { Box } from "@material-ui/core";
import { Router } from "@reach/router";
import Login from "./components/Login";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <Box className="App">
      <Router>
        <Login path="/" />
        <Home path="/ceri" />
        <Projects path="/ceri/projects" />
      </Router>
    </Box>
  );
}

export default App;
