import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";

function AddProjectButton({ user_id }) {
  return (
    <Link to={`/${user_id}/projects/addProject`}>
      <Button variant="contained" color="primary">
        Add Project
      </Button>
    </Link>
  );
}

export default AddProjectButton;
