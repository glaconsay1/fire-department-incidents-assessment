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
  const position = [latitude, longitude]; //getting this from incident details. Both were props passed into this component from incident details

  //The Popup inside the marker component shows some data about the incident. 
  //The data displayed inside the popup is dependent on the incidentData (specifically incidentData.description and incidentData.description), and any of the following attributes inside them.
  //This can be adjusted to have more or less data. Showing some basic relevant data rght now.
  
  return ( //height can be adjusted to display more data. Kept it at default size for now.
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <div>
            <h2>Incident Type: {incidentData.description.type}</h2> 
            <h3>Address of Incident: {incidentData.address.address_line1}, {incidentData.address.city}, {incidentData.address.state} </h3>
            <h3>Coordinates: Latitude {incidentData.address.latitude}, Longitude {incidentData.address.longitude} </h3>
            <h3>Day of the Week Incident Occured: {incidentData.description.day_of_week}</h3>
            <h3>Hour of the Day: {incidentData.description.hour_of_day}</h3>
            <h3>Incident Number: {incidentData.description.incident_number}</h3>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;