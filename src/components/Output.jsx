import React, { useEffect } from "react";
import Navbar from "./subcomponents/Navbar";
import { Box, Typography, LinearProgress } from "@material-ui/core";
import { jsPDF } from "jspdf";

function Output({ user_id, project_id, visit_id }) {
  useEffect(() => {
    console.log("firing on mount");
    const doc = new jsPDF();
    doc.text("Hot garbage", 10, 10);
    doc.save("test.pdf");
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
