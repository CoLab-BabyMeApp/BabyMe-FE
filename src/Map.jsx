import React, { useState, useRef, useCallback, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import IconMarker from './IconMarker';
import * as daycaresData from './data/geoJson.json';
import { getDaycares } from '../src/services/daycaresApi';
import Header from './Header';
import './App.css';
import { fetchDaycares } from './actions/daycareAction';
import { useDispatch, useSelector } from 'react-redux';

const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map() {

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
  const [selectedDaycare, setSelectedDaycare] = useState(null);

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

  const daycares = useSelector(state => state.daycares.daycares);
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchDaycares = async () => {
    //   const data = await getDaycares();
    //   setData(data);
    // }

    // fetchDaycares();
    dispatchEvent(fetchDaycares());
  }, []);

  const daycareElements = daycares.map(daycare => {
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
  })

  return (
    <div style={{ height: '100vh', marginTop: '65px' }}>
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
        {/* {daycaresData.features.map(daycare => (
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
        ))} */}
        {daycareElements}
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
      </MapGL>
    </div>
  );
}
