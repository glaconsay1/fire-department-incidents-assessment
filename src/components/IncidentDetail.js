import React from "react";
import MapComponent from "./MapComponent"
import WeatherComponent from "./WeatherComponent";

const IncidentDetail = ({incidentData}) => {
    const {latitude, longitude} = incidentData.address //destructuring lat and longitude from the incidenData.address
    const {event_opened} = incidentData.description //getting the event description

    return (
        <div>
          <h2>Incident Details</h2>
          <p>
            <strong>Type:</strong> {incidentData.description.type}
          </p>
          <p>
            <strong>Subtype:</strong> {incidentData.description.subtype}
          </p>
          <p>
            <strong>Comments:</strong> {incidentData.description.comments}
          </p>
          <MapComponent //These are the props we need to pass to the map component
            latitude={latitude}
            longitude={longitude}
            incidentData={incidentData}
          />
          <WeatherComponent //props needed to pass in the weather component
            latitude={latitude}
            longitude={longitude}
            timestamp={event_opened}
          />
        </div>
      );
} 

export default IncidentDetail