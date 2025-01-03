import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

//We are using Leaflet. This is a npm package to show data on a map. using Leaflet's documentation, I used an example code listed on there and adjusted it to display our data.
//The marker icon inside the mapbox was showing a broken image. Needed to fix it, and used this code from this link to have the marker icon appear: https://github.com/PaulLeCam/react-leaflet/issues/453
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapComponent = ({ latitude, longitude, incidentData }) => {
  const position = [latitude, longitude]; //getting this from incident details

  //The Popup inside the marker component shows some data about the incident. This can be adjust to have more or less data. Just showing the type and the comments.

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