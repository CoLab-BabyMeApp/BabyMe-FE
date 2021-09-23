import React, { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import IconMarker from './IconMarker';
import * as daycaresData from '../src/data/geoJson.json';

export default function DaycareMarker() {

  const [selectedDaycare, setSelectedDaycare] = useState(null);

  return (
    <>
      {daycaresData.features.map(daycare => (
        <Marker
          key={daycare.properties.id}
          latitude={daycare.geometry.coordinates[1]}
          longitude={daycare.geometry.coordinates[0]}
          onClick={(e) => {
            e.preventDefault();
            setSelectedDaycare(daycare);
          }}
        >
          <IconMarker />
        </Marker>
      ))}
      {selectedDaycare ? (
        <Popup
          latitude={selectedDaycare.geometry.coordinates[1]}
          longitude={selectedDaycare.geometry.coordinates[0]}
          onClose={() => {
            setSelectedDaycare(null);
          }}
        >
          <div style={{ textAlign: 'center', width: '200px' }}>
            <h2>{selectedDaycare.properties.name}</h2>
            <p>{selectedDaycare.properties.streetAddress}</p>
            <span>{selectedDaycare.properties.city}</span>, <span></span>
            <span>{selectedDaycare.properties.state}</span>
            <p>{selectedDaycare.properties.zipCode}</p>
          </div>
        </Popup>
      ) : null}
    </>
  )
}
