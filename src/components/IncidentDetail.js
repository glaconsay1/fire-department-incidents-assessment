import React from "react";
import MapComponent from "./MapComponent"
import WeatherComponent from "./WeatherComponent";

const IncidentDetail = ({incidentData}) => {
    const {latitude, longitude} = incidentData.address
    const {event_opened} = incidentData.description

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
          <MapComponent
            latitude={latitude}
            longitude={longitude}
            incidentData={incidentData}
          />
          <WeatherComponent
            latitude={latitude}
            longitude={longitude}
            timestamp={event_opened}
          />
        </div>
      );
} 