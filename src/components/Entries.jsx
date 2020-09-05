import React from "react";
import Navbar from "./subcomponents/Navbar";
import { Box } from "@material-ui/core";
import Buttonbar from "./subcomponents/Buttonbar";
import ExportButton from "./subcomponents/ExportButton";
import AddEntryButton from "./subcomponents/AddEntryButton";
function Entries({ user_id, project_id, visit_id }) {
  return (
    <>
      <Navbar text={project_id} />
      <Box></Box>
      <Buttonbar>
        <ExportButton
          user_id={user_id}
          project_id={project_id}
          visit_id={visit_id}
        />
        <AddEntryButton
          user_id={user_id}
          project_id={project_id}
          visit_id={visit_id}
        />
      </Buttonbar>
    </>
  );
}

export default Entries;
