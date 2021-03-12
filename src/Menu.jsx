import React from 'react';
import daycaresData from './data/daycaresData';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
          </Typography>
      </AccordionDetails>
    </Accordion>
  ));

  return (
    <div>
      {daycareElements}
    </div>
  )
}
