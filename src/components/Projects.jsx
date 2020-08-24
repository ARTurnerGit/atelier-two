import React from "react";
import Navbar from "./subcomponents/Navbar";
import Buttonbar from "./subcomponents/Buttonbar";
import AddProjectButton from "./subcomponents/AddProjectButton";
import Project from "./subcomponents/Project";
import { Box } from "@material-ui/core";

function Projects() {
  const projectArray = [];
  const proj1 = {
    name: "Castleford Drive",
    number: 2412,
    img:
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  };
  const proj2 = {
    name: "The Hawthorns",
    number: 2413,
    img:
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  };
  const proj3 = {
    name: "Buchan Drive",
    number: 2414,
    img:
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  };
  projectArray.push(proj1, proj2, proj3);

  return (
    <>
      <Navbar text="Projects" />
      <Box className="Projects-container">
        {projectArray.map((project) => {
          return <Project key={project.number} {...project} />;
        })}
      </Box>
      <Buttonbar>
        <AddProjectButton />
      </Buttonbar>
    </>
  );
}

export default Projects;
