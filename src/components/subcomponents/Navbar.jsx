import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { navigate } from "@reach/router";

function Navbar({ text }) {
  return (
    <AppBar position="relative" className="Navbar">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography>{text}</Typography>
        <Button
          color="secondary"
          onClick={() => {
            navigate("/");
          }}
        >
          LOGO HERE
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
