import React, { useEffect, useState } from "react";
import Navbar from "./subcomponents/Navbar";
import { Box, Typography, LinearProgress, Button } from "@material-ui/core";
import { jsPDF } from "jspdf";
import { navigate } from "@reach/router";

// mock data
import projectArray from "../data/projectdata";
import visitsArray from "../data/visitsdata";
import entriesArray from "../data/entriesdata";

// pdf fonts
require("../resources/NunitoSans-Light-normal");
require("../resources/NunitoSans-ExtraLight-normal");
require("../resources/NunitoSans-Regular-normal");
require("../resources/NunitoSans-SemiBold-normal");

function Output({ user_id, project_id, visit_id }) {
  useEffect(() => {
    const doc = new jsPDF({ unit: "mm" });
    const project = projectArray.find(
      (proj) => proj.project_id === Number(project_id)
    );
    const visit = visitsArray.find((vis) => vis.visit_id === Number(visit_id));

    const generateNewPage = () => {
      doc.addPage();
    };

    const drawFirstPageLogoAndFooter = () => {
      doc.addImage(
        `${process.env.PUBLIC_URL}/images/atelier-two-header-601x531.png`,
        "PNG",
        145,
        15,
        50,
        45
      );
      doc.addImage(
        `${process.env.PUBLIC_URL}/images/atelier-two-footer-2480x160.png`,
        "PNG",
        0,
        280,
        210,
        10
      );
    };

    const drawMidPageLogoAndFooter = () => {
      doc.addImage(
        `${process.env.PUBLIC_URL}/images/atelier-two-logo-2090x509.png`,
        "PNG",
        145,
        15,
        50,
        12
      );
      doc.addImage(
        `${process.env.PUBLIC_URL}/images/atelier-two-footer-2480x160.png`,
        "PNG",
        0,
        280,
        210,
        10
      );
    };

    const drawIntro = () => {
      doc
        .setFont("NunitoSans-SemiBold", "normal")
        .setFontSize(15)
        .text(
          `SITE REPORT ${visit.visit_num.toString().padStart(2, 0)}`,
          15,
          30
        );
      doc
        .setFont("NunitoSans-ExtraLight", "normal")
        .text(`DATE ${visit.visit_date.toDateString()}`, 15, 35);
      doc
        .setFontSize(14)
        .text(
          `Project      ${project.project_name}\nJob No.      ${project.number}`,
          15,
          50
        );
      doc
        .setFont("NunitoSans-Light", "normal")
        .setFontSize(10)
        .text("Time\nAttending\nWeather\nStage", 15, 70);
      doc.text(
        `${visit.visit_date.toTimeString()}\nunknown\nunknown\nunknown`,
        40,
        70
      );
    };

    const drawBodyItemsAndFinalBlock = () => {
      let bodyItemYOffset = 110;
      let bodyItemCounter = 0;
      entriesArray.forEach((entry) => {
        if (bodyItemYOffset + (bodyItemCounter + 1) * 95 > 285) {
          generateNewPage();
          drawMidPageLogoAndFooter();
          bodyItemYOffset = 30;
          bodyItemCounter = 0;
        }
        doc
          .setFont("NunitoSans-Regular", "normal")
          .text(
            `${entry.entry_heading}`,
            15,
            bodyItemYOffset + 95 * bodyItemCounter
          );
        doc
          .setFont("NunitoSans-Light", "normal")
          .text(
            `${entry.entry_text}`,
            15,
            bodyItemYOffset + 5 + 95 * bodyItemCounter,
            { maxWidth: 90 }
          );
        doc.addImage(
          entry.entry_img,
          "JPG",
          105,
          bodyItemYOffset + 95 * bodyItemCounter,
          90,
          90
        );
        bodyItemCounter++;
      });
      doc
        .setFont("NunitoSans-SemiBold", "normal")
        .text("Agreed Variations", 15, bodyItemYOffset + 95 * bodyItemCounter);
      doc
        .setFont("NunitoSans-Regular", "normal")
        .text("", 15, bodyItemYOffset + 95 * bodyItemCounter + 5);
      doc
        .setFont("NunitoSans-Light", "normal")
        .text(
          "Impact: Something here\nActions: Something here",
          15,
          bodyItemYOffset + 95 * bodyItemCounter + 10
        );
      doc
        .setFont("NunitoSans-Regular", "normal")
        .text("", 15, bodyItemYOffset + 95 * bodyItemCounter + 20);
      doc
        .setFont("NunitoSans-Light", "normal")
        .text(
          "Impact: Something here\nActions: Something here",
          15,
          bodyItemYOffset + 95 * bodyItemCounter + 25
        );
      doc.addImage(
        `${process.env.PUBLIC_URL}/images/atelier-two-signature-634x589.png`,
        130,
        bodyItemYOffset + 95 * bodyItemCounter + 5,
        50,
        50
      );
    };

    drawFirstPageLogoAndFooter();
    drawIntro();
    drawBodyItemsAndFinalBlock();

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
