import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet';
import './App.css';

export default function App() {

  const positionA = [33.498458, -117.6632];
  const positionB = [39.55268, -107.340168];


  return (
    <MapContainer className="map" center={positionA} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positionA} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
        <Popup>
          Name of a daycare.
        </Popup>
      </Marker>
      <Marker position={positionB}>
        <Popup>
          Name of a daycare.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
