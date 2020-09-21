import React, { useEffect, useState } from "react";
import Navbar from "./subcomponents/Navbar";
import { Box, Typography, LinearProgress, Button } from "@material-ui/core";
import { jsPDF } from "jspdf";
import { navigate } from "@reach/router";

import projectArray from "../data/projectdata";
import visitsArray from "../data/visitsdata";
import entriesArray from "../data/entriesdata";

function Output({ user_id, project_id, visit_id }) {
  useEffect(() => {
    const doc = new jsPDF({ unit: "mm" });
    const project = projectArray.find(
      (proj) => proj.project_id === Number(project_id)
    );
    const visit = visitsArray.find((vis) => vis.visit_id === Number(visit_id));

    const drawFirstLogo = () => {
      doc.addImage(
        `${process.env.PUBLIC_URL}/images/atelier-two-header-601x531.png`,
        "PNG",
        145,
        15,
        50,
        45
      );
    };

    const drawIntro = () => {
      doc.text(
        `SITE REPORT ${visit.visit_num
          .toString()
          .padStart(2, 0)}\nDATE ${visit.visit_date.toDateString()}`,
        15,
        30
      );
      doc.text("Project\nJob No.\n\nTime\nAttending\nWeather\nStage", 15, 50);
      doc.text(
        `${project.project_name}\n${
          project.number
        }\n\n${visit.visit_date.toTimeString()}\nunknown\nunknown\nunknown`,
        40,
        50
      );
    };

    const drawBodyItems = () => {
      entriesArray.forEach((entry, index) => {
        doc.text(`${entry.entry_heading}`, 15, 110 + 95 * index);
        doc.text(`${entry.entry_text}`, 15, 115 + 95 * index, { maxWidth: 90 });
        doc.addImage(entry.entry_img, "JPG", 105, 110 + 95 * index, 90, 90);
      });
    };

    drawFirstLogo();
    drawIntro();
    drawBodyItems();

    // doc.text(
    //   `Project ID: ${project.project_id}  Project name: ${project.project_name}`,
    //   10,
    //   10
    // );
    // doc.text(`Visit number: ${visit.visit_num}`, 10, 20);
    // entriesArray.forEach((entry, index) => {
    //   doc.text(`Heading: ${entry.entry_heading}`, 10, 30 + 10 * index);
    // });
    // doc.text("Hey Ceri, check out this hot garbage", 10, 70);

    doc.save(`${project.project_name}Visit${visit.visit_num}.pdf`);
    setTimeout(() => {
      setIsWorking(false);
    }, 3000);
  }, []);

  const [isWorking, setIsWorking] = useState(true);

  return (
    <Box className="Output-container">
      <Navbar text="Report"></Navbar>
      <Typography variant="body1">
        Generating report for:
        <br />
        {project_id}
        <br />
        {visit_id}
      </Typography>
      {isWorking ? (
        <LinearProgress style={{ width: "100%" }} />
      ) : (
        <Button
          variant="outlined"
          onClick={() => {
            navigate(`/${user_id}/projects/${project_id}/${visit_id}`);
          }}
        >
          Back
        </Button>
      )}
    </Box>
  );
}

export default Output;
