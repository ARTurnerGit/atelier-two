import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";

function ExportButton({ user_id, project_id, visit_id }) {
  return (
    <Link to={`/${user_id}/projects/${project_id}/${visit_id}/output`}>
      <Button variant="contained" color="primary">
        Export
      </Button>
    </Link>
  );
}

export default ExportButton;
