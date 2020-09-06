import React, { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  TextField,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Visit({ entry_id, entry_img, entry_heading, entry_text }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newEntryText, setNewEntryText] = useState(entry_text);

  const handleCancel = () => {
    setNewEntryText(entry_text);
    setIsEditing(false);
  };
  const handleSave = () => {
    setIsEditing(false);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleEntry = (e) => {
    setNewEntryText(e.target.value);
  };

  return (
    <Accordion
      defaultExpanded={false}
      style={{ width: "80%", margin: "8px 0px" }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <img src={entry_img} alt="a building" style={{ height: "64px" }} />
        <Typography>{entry_heading}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {isEditing ? (
          <TextField
            multiline
            variant="outlined"
            label="Editing"
            rows={4}
            value={newEntryText}
            onChange={handleEntry}
          />
        ) : (
          <Typography>{newEntryText}</Typography>
        )}
      </AccordionDetails>
      <AccordionActions>
        {isEditing ? (
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </>
        ) : (
          <Button variant="contained" color="primary" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </AccordionActions>
    </Accordion>
  );
}

export default Visit;
