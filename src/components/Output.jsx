import React, { useEffect } from "react";
import Navbar from "./subcomponents/Navbar";
import { Box, Typography, LinearProgress } from "@material-ui/core";

function Output({ user_id, project_id, visit_id }) {
  useEffect(() => {
    console.log("firing on mount");
  }, []);

  return (
    <Box className="Output-container">
      <Navbar text="Report"></Navbar>
      <Typography variant="body1">
        Generating report for:
        <br />
        {project_id}
        <br />
        {visit_id}
      </Typography>
      <LinearProgress style={{ width: "100%" }} />
    </Box>
  );
}

export default Output;
