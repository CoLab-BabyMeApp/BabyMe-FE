import React from 'react';
import daycaresData from './data/daycaresData';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIcon from '@material-ui/icons/Phone';
import { FaHeart } from "react-icons/fa";

export default function Menu() {

  const daycareElements = daycaresData.map(daycare => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ borderRadius: '5px' }}
      >
        <Typography style={{ fontFamily: 'Average Sans, sans-serif', lineHeight: '26px', fontSize: '20px' }}>
          {daycare.name}
        </Typography>
      </AccordionSummary>
      <div style={{ backgroundColor: '#0F90D1', borderRadius: '5px', color: 'white' }}>
        <AccordionDetails>
          <Typography>
            <img
              src={daycare.image}
              alt="kids at daycare"
              style={{ height: '150px', margin: '2px', marginTop: '10px', borderRadius: '5px' }}
            />
            <br />
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '16px', display: 'flex', flexWrap: 'wrap' }}>
              <PhoneIcon /> {daycare.phoneNumber}
              <br />
              <span style={{ marginLeft: '90px' }}>
                <FaHeart />
              </span>
              <br />
              <div style={{ marginLeft: '30px', fontWeight: 'bold' }}>
                {daycare.price}
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </div>
    </Accordion >
  ));

  return (
    <div>
      {daycareElements}
    </div>
  )
}
