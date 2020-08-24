import React from "react";
import Navbar from "./subcomponents/Navbar";
import Buttonbar from "./subcomponents/Buttonbar";
import AddProjectButton from "./subcomponents/AddProjectButton";

function Projects() {
  return (
    <>
      <Navbar text="Projects" />
      <Buttonbar>
        <AddProjectButton />
      </Buttonbar>
    </>
  );
}

export default Projects;
