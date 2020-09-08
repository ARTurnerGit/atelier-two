import React from "react";
import Buttonbar from "./Buttonbar";
import { Card, Button, TextField } from "@material-ui/core";
import { Link } from "@reach/router";

function ImagePreview({
  imgData,
  handleRejectPhoto,
  user_id,
  project_id,
  visit_id,
}) {
  return (
    <Card className="ImagePreview-container">
      <Button variant="contained" color="secondary" onClick={handleRejectPhoto}>
        Reject
      </Button>
      <img
        src={imgData}
        alt="screen grab"
        style={{ transform: "scale(0.5)" }}
      />
      <TextField variant="outlined" label="Heading" margin="normal" />
      <TextField variant="outlined" label="Description" margin="normal" />
      <Buttonbar>
        <Link to={`/${user_id}/projects/${project_id}/${visit_id}`}>
          <Button variant="contained" color="primary">
            Save and Finish
          </Button>
        </Link>
        <Button onClick={handleRejectPhoto} variant="contained" color="primary">
          Save And Continue
        </Button>
      </Buttonbar>
    </Card>
  );
}

export default ImagePreview;
