import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Navbar({ text }) {
  return (
    <AppBar position="relative" className="Navbar">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography>{text}</Typography>
        <Typography>LOGO HERE</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
