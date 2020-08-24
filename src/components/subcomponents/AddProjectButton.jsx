import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";

function AddProjectButton() {
  return (
    <Link to="/ceri/projects/addProject">
      <Button variant="contained" color="primary">
        Add Project
      </Button>
    </Link>
  );
}

export default AddProjectButton;
