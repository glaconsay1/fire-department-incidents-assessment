import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ latitude, longitude, incidentData }) => {
  const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <div>
            <h3>{incidentData.description.type}</h3>
            <p>{incidentData.description.comments}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;