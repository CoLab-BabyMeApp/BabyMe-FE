import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import LocationMarker from './LocationMarker';
import Form from './Form';
import daycaresData from './data/daycaresData';
import './App.css';

export default function App() {

  const daycareElements = daycaresData.map(daycare => (
    <Marker key={daycare.id} position={[daycare.lat, daycare.lng]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
      <Popup>
        <h4>{daycare.name}</h4>
        {daycare.streetAddress}
        <br />
        {daycare.city}, {daycare.state}
      </Popup>
    </Marker>
  ));

  return (
    <>
      <Form />
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
