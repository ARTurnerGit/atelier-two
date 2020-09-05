import React from "react";
import {
  Card,
  Typography,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import { navigate } from "@reach/router";

function Project({ project_name, project_id, number, img, user_id }) {
  return (
    <Card
      style={{ width: "80%", margin: "8px 0px" }}
      onClick={() => {
        navigate(`/${user_id}/projects/${project_id}`);
      }}
    >
      <CardActionArea>
        <CardContent>
          <img src={img} alt="a building" style={{ height: "64px" }} />
          <Typography>{number}</Typography>
          <Typography>{project_name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Project;
