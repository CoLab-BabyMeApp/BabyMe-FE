import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import LocationMarker from './LocationMarker';
import daycaresData from './data/daycaresData';
import './App.css';

export default function App() {

  const daycareElements = daycaresData.map(daycare => (
    <Marker key={daycare.id} position={[daycare.lat, daycare.lng]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
      <Popup>Daycare here</Popup>
    </Marker>
  ));

  return (
    <>
      <h3>Click the map to find your location.</h3>
      <MapContainer className="map" center={{ lat: 47.608013, lng: -122.335167 }} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        {daycareElements}
      </MapContainer>
    </>
  )
}
