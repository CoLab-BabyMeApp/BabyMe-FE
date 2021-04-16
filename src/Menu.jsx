import React from 'react';
import * as daycaresData from './data/geoJson.json';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIcon from '@material-ui/icons/Phone';
import { FaHeart } from "react-icons/fa";

export default function Menu() {

  const daycareElements = daycaresData.features.map(daycare => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ borderRadius: '5px' }}
      >
        <Typography style={{ fontFamily: 'Average Sans, sans-serif', lineHeight: '26px', fontSize: '20px' }}>
          {daycare.properties.name}
        </Typography>
      </AccordionSummary>
      <div style={{ backgroundColor: '#0F90D1', borderRadius: '5px', color: 'white' }}>
        <AccordionDetails>
          <Typography>
            <img
              src={daycare.properties.img}
              alt="kids at daycare"
              style={{ height: '150px', margin: '2px', marginTop: '10px', borderRadius: '5px', maxWidth: '270px' }}
            />
            <br />
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '16px', display: '', flexWrap: 'wrap', lineHeight: '25px' }}>
              <span style={{ marginLeft: '250px' }}>
                <FaHeart />
              </span>
              <h4 style={{ marginTop: '0px' }} >
                {daycare.properties.streetAddress}
                < br />
                {daycare.properties.city}, {daycare.properties.state} {daycare.properties.zipCode}
              </h4>
              <PhoneIcon /> {daycare.properties.phoneNumber}
              <br />
              <div style={{ marginTop: '15px', fontWeight: 'bold' }}>
                {daycare.properties.price}
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
