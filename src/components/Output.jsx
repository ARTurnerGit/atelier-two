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
    doc.setFont("NunitoSans-Light", "normal");
    doc.setFontSize(11);
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
        285,
        210,
        10
      );
    };

    const drawMidPageLogoAndFooter = () => {
      doc.addImage(
        `${process.env.PUBLIC_URL}/images/atelier-two-logo-2090x509.png`,
        "PNG",
        145,
        0,
        50,
        10
      );
      doc.addImage(
        `${process.env.PUBLIC_URL}/images/atelier-two-footer-2480x160.png`,
        "PNG",
        15,
        285,
        210,
        10
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
        doc.text(
          `${entry.entry_heading}`,
          15,
          bodyItemYOffset + 95 * bodyItemCounter
        );
        doc.text(
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
      doc.text(
        `Agreed Variations\n\nSomething will be written here\n\nArchitectural Actions\n\nLiase with somebody\nIncorporate something\nUpdate something or other\n\nNext Visit - TBC\n\nReport undertaken by\n\n\n\nSIGNATURE BLOCK HERE`,
        15,
        bodyItemYOffset + 95 * bodyItemCounter
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
