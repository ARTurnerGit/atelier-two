import React from "react";
import Navbar from "./subcomponents/Navbar";
import Buttonbar from "./subcomponents/Buttonbar";
import CancelButton from "./subcomponents/CancelButton";
import SaveButton from "./subcomponents/SaveButton";

import { Box, TextField } from "@material-ui/core";

function AddProject({ user }) {
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
        <CancelButton user={user} />
        <SaveButton user={user} />
      </Buttonbar>
    </>
  );
}

export default AddProject;
