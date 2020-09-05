import React, { useState } from "react";
import "./App.css";
import { Box } from "@material-ui/core";
import { Router } from "@reach/router";
import Login from "./components/Login";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";

function App() {
  const [user, setUser] = useState({ username: "ceriturner", user_id: "0001" });

  return (
    <Box className="App">
      <Router>
        <Login path="/" user={user} />
        <Projects path="/:user_id/projects" user={user} />
        <AddProject path="/:user_id/projects/addProject" user={user} />
      </Router>
    </Box>
  );
}

export default App;
