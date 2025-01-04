import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherComponent = ({latitude, longitude, timestamp}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeather = async() => {
            //Timestamp data from IncidentDetails component. Converting to an ISOstring format (if not already in that format) then extracting the Date part from the ISO String
            const date = new Date(timestamp).toISOString().split("T")[0] 

            //using Axios, we are taking this get request straight from RapidAPI to get the data that we need. This is just given to us in the documentation
            const options = {
                method: 'GET',
                url: 'https://meteostat.p.rapidapi.com/point/monthly',
                params: { //props passed from IncidentDetails Component, and we assign them to the params needed by the endpoint
                  lat: latitude, 
                  lon: longitude,
                  start: date, //This is the date we got from the time stamp
                  end: date
                },
                headers: {
                  'x-rapidapi-key': 'b50104f8cbmsh519fe4bb61f3219p168e26jsn28091c9c5203', //in production we would use process.env.REACT_METEOSTAT_API_KEY 
                  'x-rapidapi-host': 'meteostat.p.rapidapi.com'
                }
              };

              try { //Once we build out the data, use axios to make a get request and then set the response data for weather in the useState
                  const response = await axios.request(options);
                  console.log(response.data); //need to see what the data is that is being returned in the console
                  setWeather(response.data.data[0]);
              } catch (error) {
                  console.error(error);
              }
        }
        fetchWeather() 
    }, [latitude, longitude, timestamp]) //any time any of these dependencies change, rerun useEffect to grab the most recent data needed

    if (!weather) return <div>Loading weather data...</div>; //Could use Lazy or suspense

  return (
    //Shows information of the weather during the date of the incident at the given location. Units of measurement used are assumptions.
    <div> 
      <h2>Weather at the time of the incident:</h2>
      <p>Max Temperature: {weather.tmax}°C</p>
      <p>Min Temperature: {weather.tmin}°C</p>
      <p>Average Temperature: {weather.tavg}°C</p>
      <p>Precipitation: {weather.prcp}mm</p>
      <p>Wind Speed: {weather.wspd}km/h</p>
    </div>
  );
}

export default WeatherComponent