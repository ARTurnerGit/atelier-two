import React, { useState } from "react";
import Navbar from "./subcomponents/Navbar";
import ImagePreview from "./subcomponents/ImagePreview";
import { Box } from "@material-ui/core";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function AddEntry({ user_id, project_id, visit_id }) {
  // currently hardcoded for 320 x 568 screen
  const [width, setWidth] = useState(320 * 0.95);
  const [height, setHeight] = useState(320 * 0.95);
  const [cameraError, setCameraError] = useState(false);
  const [imgData, setImgData] = useState(null);

  const handleCameraError = (error) => {
    setCameraError(true);
  };

  const handleTakePhoto = (dataUri) => {
    setImgData(dataUri);
  };

  const handleRejectPhoto = () => {
    setImgData(null);
  };

  return (
    <>
      <Navbar text={project_id} />
      <Box className="AddEntry-container">
        <Box
          style={{
            width: `${width}px`,
            height: `${height}px`,
            border: "2px solid black",
            margin: "1vh 0",
          }}
        >
          <Camera
            idealResolution={{ width, height }}
            idealFacingMode={FACING_MODES.ENIRONMENT}
            onCameraError={handleCameraError}
            onTakePhoto={handleTakePhoto}
            isDisplayStartCameraError={cameraError}
          />
        </Box>
        {imgData && (
          <ImagePreview
            imgData={imgData}
            handleRejectPhoto={handleRejectPhoto}
            user_id={user_id}
            project_id={project_id}
            visit_id={visit_id}
          />
        )}
      </Box>
    </>
  );
}

export default AddEntry;
