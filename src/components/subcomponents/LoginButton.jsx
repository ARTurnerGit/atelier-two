import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";

function LoginButton({ user }) {
  return (
    <Link to={`/${user.user_id}/projects`}>
      <Button variant="contained" color="primary">
        Login
      </Button>
    </Link>
  );
}

export default LoginButton;
