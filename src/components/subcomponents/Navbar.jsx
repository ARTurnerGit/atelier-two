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
          <img
            src={`${process.env.PUBLIC_URL}/images/atelier-two-logo-2090x509.png`}
            alt="company logo"
            style={{ width: "100px", background: "white" }}
          />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
