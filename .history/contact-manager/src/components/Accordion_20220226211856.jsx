import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function SimpleAccordion({ user }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardDoubleArrowDownIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{user.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Email: {user.email}</Typography>

          <Typography>Phone: {user.phone}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
