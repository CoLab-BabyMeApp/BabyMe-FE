import React, { useState, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapGL, { GeolocateControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import DaycareMarker from '../DaycareMarker';
import Header from '../Header';
import '../app/App.css';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '100vh',
    marginTop: '65px',
  }
}))

const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map() {
  const classes = useStyles();

  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10
  });

  const geolocateControlStyle = {
    right: 10,
    top: 10
  };

  const mapRef = useRef();

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );

  return (
    <div className={classes.mainContainer}>
      <Header />
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={token}
          position="top-left"
          className="geocoder"
        />
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          //auto
          style={{ bottom: '80px', right: '30px' }}
        />

        <DaycareMarker />

      </MapGL>
    </div>
  );
}
