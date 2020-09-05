import React from "react";
import Navbar from "./subcomponents/Navbar";
import Buttonbar from "./subcomponents/Buttonbar";
import CancelButton from "./subcomponents/CancelButton";
import SaveButton from "./subcomponents/SaveButton";

import { Box, TextField } from "@material-ui/core";

function AddProject({ user_id }) {
  return (
    <>
      <Navbar text="Add Project" />
      <Box className="AddProject-container">
        <TextField
          variant="outlined"
          label="Project Name"
          autoFocus={true}
          margin="normal"
        />
        <TextField variant="outlined" label="Job Number" margin="normal" />
      </Box>
      <Buttonbar>
        <CancelButton user_id={user_id} />
        <SaveButton user_id={user_id} />
      </Buttonbar>
    </>
  );
}

export default AddProject;
