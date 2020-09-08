import React, { useState } from "react";
import Navbar from "./subcomponents/Navbar";
import { Box, Button } from "@material-ui/core";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import Buttonbar from "./subcomponents/Buttonbar";

function AddEntry({ user_id, project_id, visit_id }) {
  // currently hardcoded for 320 x 568 screen
  const [width, setWidth] = useState(320 * 0.95);
  const [height, setHeight] = useState(320 * 0.95);
  const [cameraError, setCameraError] = useState(false);
  const [imgData, setImgData] = useState(null);

  const handleCameraError = (error) => {
    setCameraError(true);
  };

  const handleTakePhoto = () => {
    // do something here
  };

  return (
    <>
      <Navbar text={project_id} />
      <Box className="Camera-container">
        <Box
          style={{ position: "fixed", top: "0px", left: "0px" }}
          // style={{
          //   width: `${width}px`,
          //   height: `${height}px`,
          //   border: "2px solid black",
          //   margin: "1vh 0",
          // }}
        >
          <Camera
            isFullscreen={true}
            // idealResolution={{ width, height }}
            idealFacingMode={FACING_MODES.ENIRONMENT}
            onCameraError={handleCameraError}
            isDisplayStartCameraError={cameraError}
          />
        </Box>
        <Button variant="outlined" onClick={handleTakePhoto}>
          Take the photo
        </Button>
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

export default AddEntry;
