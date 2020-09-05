import React from "react";
import Navbar from "./subcomponents/Navbar";
import { Box } from "@material-ui/core";
import Buttonbar from "./subcomponents/Buttonbar";
import AddVisitButton from "./subcomponents/AddVisitButton";
import Visit from "./subcomponents/Visit";

import visitsArray from "../data/visitsdata";

function Visits({ user_id, project_id }) {
  return (
    <>
      <Navbar text={project_id} />
      <Box className="Visits-container">
        {visitsArray.map((visit) => {
          return (
            <Visit
              key={visit.visit_id}
              {...visit}
              user_id={user_id}
              project_id={project_id}
            />
          );
        })}
      </Box>
      <Buttonbar>
        <AddVisitButton user_id={user_id} project_id={project_id} />
      </Buttonbar>
    </>
  );
}

export default Visits;
