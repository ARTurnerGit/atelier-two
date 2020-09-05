import React from "react";
import Navbar from "./subcomponents/Navbar";
import Buttonbar from "./subcomponents/Buttonbar";
import AddProjectButton from "./subcomponents/AddProjectButton";
import Project from "./subcomponents/Project";

import { Box } from "@material-ui/core";
import projectArray from "../data/projectdata";

function Projects({ user_id }) {
  return (
    <>
      <Navbar text="Projects" />
      <Box className="Projects-container">
        {projectArray.map((project) => {
          return (
            <Project key={project.project_id} {...project} user_id={user_id} />
          );
        })}
      </Box>
      <Buttonbar>
        <AddProjectButton user_id={user_id} />
      </Buttonbar>
    </>
  );
}

export default Projects;
