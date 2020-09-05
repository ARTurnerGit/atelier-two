import React from "react";
import Navbar from "./subcomponents/Navbar";
import Buttonbar from "./subcomponents/Buttonbar";
import AddProjectButton from "./subcomponents/AddProjectButton";
import Project from "./subcomponents/Project";

import { Box } from "@material-ui/core";
import projectArray from "../data/projectdata";

function Projects({ user }) {
  return (
    <>
      <Navbar text="Projects" />
      <Box className="Projects-container">
        {projectArray.map((project) => {
          return <Project key={project.number} {...project} />;
        })}
      </Box>
      <Buttonbar>
        <AddProjectButton user={user} />
      </Buttonbar>
    </>
  );
}

export default Projects;
