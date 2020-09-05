import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
} from "@material-ui/core";
import { navigate } from "@reach/router";

function Visit({
  visit_num,
  visit_id,
  entry_counter,
  visit_date,
  user_id,
  project_id,
}) {
  return (
    <Card
      style={{ width: "80%", margin: "8px 0px" }}
      onClick={() => {
        navigate(`/${user_id}/projects/${project_id}/${visit_id}`);
      }}
    >
      <CardActionArea>
        <CardContent>
          <Box
            style={{
              height: "64px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "30px",
            }}
          >
            {visit_num}
          </Box>
          <Typography>{`${visit_date.getDate()}-${visit_date.getMonth()}-${visit_date.getUTCFullYear()}`}</Typography>
          <Typography>{`${entry_counter} entries`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Visit;
