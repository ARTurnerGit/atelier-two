import React from "react";
import Navbar from "./subcomponents/Navbar";
import { Box, Button } from "@material-ui/core";
import Buttonbar from "./subcomponents/Buttonbar";

function Camera({ user_id, project_id, visit_id }) {
  // currently hardcoded for 320 x 568 screen
  let width = 320 * 0.95;
  let height = width;
  console.log();
  return (
    <>
      <Navbar text={project_id} />
      <Box className="Camera-container">
        <Box
          style={{
            width: `${width}px`,
            height: `${height}px`,
            border: "2px solid black",
            margin: "1vh 0",
          }}
        >
          This will be the actual viewport
        </Box>
        <Button variant="outlined">Take the photo</Button>
      </Box>
      <Buttonbar>
        <Button variant="contained" color="primary">
          Reject
        </Button>
        <Button variant="contained" color="primary">
          Accept
        </Button>
      </Buttonbar>
    </>
    // <div
    //   style={{
    //     fontSize: "40px",
    //     width: "100%",
    //     height: "100%",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   Camera functionality here
    // </div>
  );
}

export default Camera;
