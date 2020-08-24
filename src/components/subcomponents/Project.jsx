import React from "react";
import {
  Card,
  Typography,
  CardActionArea,
  CardContent,
} from "@material-ui/core";

function Project({ name, number, img }) {
  return (
    <Card style={{ width: "80%", margin: "8px 0px" }}>
      <CardActionArea>
        <CardContent>
          <img src={img} alt="a building" style={{ height: "64px" }} />
          <Typography>{number}</Typography>
          <Typography>{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Project;
