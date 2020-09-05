import React from "react";
import Navbar from "./subcomponents/Navbar";
import Buttonbar from "./subcomponents/Buttonbar";
import CancelButton from "./subcomponents/CancelButton";
import SaveButton from "./subcomponents/SaveButton";

import { Box, TextField } from "@material-ui/core";

function AddVisit({ user_id, project_id }) {
  return (
    <>
      <Navbar text="Add Visit" />
      <Box className="AddVisit-container">
        <TextField
          variant="outlined"
          label="Visit Date"
          autoFocus={true}
          margin="normal"
        />
        <TextField variant="outlined" label="Visit Time" margin="normal" />
        <TextField variant="outlined" label="Attending" margin="normal" />
        <TextField variant="outlined" label="Weather" margin="normal" />
        <TextField variant="outlined" label="Stage" margin="normal" />
      </Box>
      <Buttonbar>
        <CancelButton user_id={user_id} project_id={project_id} />
        <SaveButton user_id={user_id} project_id={project_id} />
      </Buttonbar>
    </>
  );
}

export default AddVisit;
