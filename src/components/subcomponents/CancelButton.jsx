import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";

function CancelButton({ user_id }) {
  return (
    <Link to={`/${user_id}/projects`}>
      <Button variant="contained" color="primary">
        Cancel
      </Button>
    </Link>
  );
}

export default CancelButton;
