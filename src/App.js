import React, { useState } from "react";
import "./App.css";
import { Box } from "@material-ui/core";
import { Router } from "@reach/router";
import Login from "./components/Login";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";
import Visits from "./components/Visits";
import AddVisit from "./components/AddVisit";

function App() {
  const [user, setUser] = useState({ username: "ceriturner", user_id: "0001" });

  return (
    <Box className="App">
      <Router>
        <Login path="/" user={user} />
        <Projects path="/:user_id/projects" />
        <AddProject path="/:user_id/projects/addProject" />
        <Visits path="/:user_id/projects/:project_id" />
        <AddVisit path="/:user_id/projects/:project_id/addVisit" />
      </Router>
    </Box>
  );
}

export default App;
