import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Accordion,
} from "@material-ui/core";
import { navigate } from "@reach/router";

function Visit({ entry_id, entry_img, entry_heading, entry_text }) {
  return (
    <>
      <Accordion></Accordion>
      <Card
        style={{ width: "80%", margin: "8px 0px" }}
        onClick={() => {
          navigate();
        }}
      >
        <CardActionArea>
          <CardContent>
            <img src={entry_img} alt="a building" style={{ height: "64px" }} />
            <Typography>{entry_heading}</Typography>
            <Typography>{entry_text}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Visit;
