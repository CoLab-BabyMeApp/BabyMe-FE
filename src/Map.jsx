import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as daycaresData from './data/geoJson.json'
import { FaMapMarkerAlt } from 'react-icons/fa';
import IconMarker from './IconMarker';
import './App.css';

export default function Map() {

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
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {daycaresData.features.map(daycare => (
          <Marker
            key={daycare.properties.name}
            latitude={daycare.geometry.coordinates[1]}
            longitude={daycare.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedDaycare(daycare);
              }}
            >
              <IconMarker />
            </button>
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
            <div>
              <h2>{selectedDaycare.properties.name}</h2>
              <p>{selectedDaycare.properties.streetAddress}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
