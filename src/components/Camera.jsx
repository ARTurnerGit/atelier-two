import React, { useState, useEffect, useRef } from "react";
import Navbar from "./subcomponents/Navbar";
import { Box, Button, Typography } from "@material-ui/core";
import Buttonbar from "./subcomponents/Buttonbar";

function Camera({ user_id, project_id, visit_id }) {
  // currently hardcoded for 320 x 568 screen
  const [width, setWidth] = useState(320 * 0.95);
  const [height, setHeight] = useState(320 * 0.95);
  const [error, setError] = useState(null);
  const userFeed = useRef(null);

  useEffect(() => {
    function hasGetUserMedia() {
      return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    }
    const constraints = {
      video: true,
    };
    const USERFEED = userFeed.current;

    if (hasGetUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        USERFEED.srcObject = stream;
        console.dir(USERFEED.srcObject);
      });
    } else {
      setError("Not possible to use a camera on this device");
    }

    return () => {
      USERFEED.srcObject.getTracks().forEach((track) => {
        track.stop();
      });
    };
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
            <video
              ref={userFeed}
              autoPlay
              style={{ width: "100%", height: "100%" }}
            ></video>
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
  );
}

export default Camera;
