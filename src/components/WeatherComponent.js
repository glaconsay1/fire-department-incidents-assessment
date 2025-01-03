import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherComponent = ({latitude, longitude, timestamp}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeather = async() => {
            const date = new Date(timestamp).toISOString().split("T")[0] // getting this date from the timestamp, and just splitting it to get the data
            //using Axios, we are taking this get request straight from RapidAPI to get the data that we need. This is juts given to us in the documentation
            const options = {
                method: 'GET',
                url: 'https://meteostat.p.rapidapi.com/point/monthly',
                params: { //this is the data inside the json files given, and we assign them to the params needed by the endpoint
                  lat: latitude, 
                  lon: longitude,
                  start: date,
                  end: date
                },
                headers: {
                  'x-rapidapi-key': 'b50104f8cbmsh519fe4bb61f3219p168e26jsn28091c9c5203', //given to us by Rapid API
                  'x-rapidapi-host': 'meteostat.p.rapidapi.com'
                }
              };

              try { //Once we build out the data, use axious to make a get request and then set the response data for weather in the useState
                  const response = await axios.request(options);
                  console.log(response.data);
                  setWeather(response.data.data[0]);
              } catch (error) {
                  console.error(error);
              }
        }
        fetchWeather() 
    }, [latitude, longitude, timestamp]) //any time any of these dependencies change, rerun useEffect to grab the most recent data needed

    if (!weather) return <div>Loading weather data...</div>;
  return (
    <div> 
      <h3>Weather at the time of the incident:</h3>
      <p>Temperature: {weather.tavg}°C</p>
      <p>Precipitation: {weather.prcp}mm</p>
      <p>Wind Speed: {weather.wspd}km/h</p>
    </div>
  );
}

export default WeatherComponent