import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl } from "react-map-gl";


const geolocateControlStyle = {
  right: 10,
  top: 10
};

export default function LocationMarker() {

  const [viewport, setViewport] = React.useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14
  });

  return (
    <>
      <ReactMapGL {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}>
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
      </ReactMapGL>
    </>
  )
}
