import React from "react";
import "./App.css";
import { Box } from "@material-ui/core";
import { Router } from "@reach/router";
import Login from "./components/Login";
import Projects from "./components/Projects";

function App() {
  return (
    <Box className="App">
      <Router>
        <Login path="/" />
        <Projects path="/ceri/projects" />
      </Router>
    </Box>
  );
}

export default App;
