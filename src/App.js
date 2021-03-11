import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import './App.css';

export default function App() {

  return (
    <>
      <h3>Click the map to find your location.</h3>
      <MapContainer className="map" center={{ lat: 47.608013, lng: -122.335167 }} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </>
  )
}
