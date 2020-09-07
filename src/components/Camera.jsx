import React, { useState, useEffect, useRef } from "react";
import Navbar from "./subcomponents/Navbar";
import { Box, Button, Typography } from "@material-ui/core";
import Buttonbar from "./subcomponents/Buttonbar";

function Camera({ user_id, project_id, visit_id }) {
  // currently hardcoded for 320 x 568 screen
  let width = 320 * 0.95;
  let height = width;

  const [error, setError] = useState(null);
  // const [viewport, setViewport] = useState(null);
  const userFeed = useRef(null);

  useEffect(() => {
    function hasGetUserMedia() {
      return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    }
    if (hasGetUserMedia) {
      // setViewport("Here is your video feed");
    } else {
      setError("Not possible to use a camera on this device");
    }
  }, []);
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
          {error ? (
            <Typography>{error}</Typography>
          ) : (
            <video ref={userFeed} autoPlay></video>
          )}
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
