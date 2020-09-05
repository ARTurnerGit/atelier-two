import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";

function AddEntryButton({ user_id, project_id, visit_id }) {
  return (
    <Link to={`/${user_id}/projects/${project_id}/${visit_id}/entry`}>
      <Button variant="contained" color="primary">
        Add Entry
      </Button>
    </Link>
  );
}

export default AddEntryButton;
