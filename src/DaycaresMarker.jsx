import React, { useState, useRef, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as daycaresData from './data/geoJson.json';
import IconMarker from './IconMarker';

export default function DaycaresMarker() {

  const [viewport, setViewport] = useState({
    latitude: 47.608013,
    longitude: -122.335167,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  const [selectedDaycare, setSelectedDaycare] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedDaycare(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

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
          <div style={{ textAlign: 'center' }}>
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
