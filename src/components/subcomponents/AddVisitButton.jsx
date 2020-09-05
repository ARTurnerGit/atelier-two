import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";

function AddVisitButton({ user_id, project_id }) {
  return (
    <Link to={`/${user_id}/projects/${project_id}/addVisit`}>
      <Button variant="contained" color="primary">
        Add Visit
      </Button>
    </Link>
  );
}

export default AddVisitButton;
