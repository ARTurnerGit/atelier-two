import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";

function CancelButton({ user_id, project_id }) {
  return (
    <Link
      to={
        project_id
          ? `/${user_id}/projects/${project_id}`
          : `/${user_id}/projects`
      }
    >
      <Button variant="contained" color="primary">
        Cancel
      </Button>
    </Link>
  );
}

export default CancelButton;
