import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";

function LoginButton() {
  return (
    <Link to="/ceri">
      <Button variant="contained" color="primary">
        Login
      </Button>
    </Link>
  );
}

export default LoginButton;
