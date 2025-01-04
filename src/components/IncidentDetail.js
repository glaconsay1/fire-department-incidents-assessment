import React from "react";
import MapComponent from "./MapComponent"
import WeatherComponent from "./WeatherComponent";

const IncidentDetail = ({incidentData}) => {
    const {latitude, longitude} = incidentData.address //destructuring latitude and longitude from the incidenData.address and will be passed into MapComponent and WeatherComponent
    const {event_opened} = incidentData.description //getting this from event description, which is actually a timestamp. This will be passed into the WeatherComponent.

    return (
        //shows the details of the incident. Can be adjusted to show more info if needed.
        //MapComponent shows the incident on the map
        //WeatherComponent shows the weather at the time of the incident
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
          <MapComponent //props passed in from destructuring above
            latitude={latitude}
            longitude={longitude}
            incidentData={incidentData}
          />
          <WeatherComponent //props passed in from destructuring above
            latitude={latitude}
            longitude={longitude}
            timestamp={event_opened}
          />
        </div>
      );
} 

export default IncidentDetail