import React from "react";
import { Box } from "@material-ui/core";

function Buttonbar(props) {
  return <Box className="Buttonbar">{props.children}</Box>;
}

export default Buttonbar;
