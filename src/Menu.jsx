import React from 'react';
import daycaresData from './data/daycaresData';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIcon from '@material-ui/icons/Phone';

export default function Menu() {

  const daycareElements = daycaresData.map(daycare => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{daycare.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <PhoneIcon /> {daycare.phoneNumber}
          <br />

        </Typography>
      </AccordionDetails>
    </Accordion>
  ));

  return (
    <>
      {daycareElements}
    </>
  )
}
