import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherComponent = ({latitude, longitude, timestamp}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeather = async() => {
            const date = new Date(timestamp).toISOString().split("T")[0]
            const response = await axios.get(
                `https://meteostat.p.rapidapi.com/point/monthly?lat=${latitude}&lon=${longitude}&start=${date}&end=${date}&key=b50104f8cbmsh519fe4bb61f3219p168e26jsn28091c9c5203` //Need to find where to build this API
              );
              setWeather(response.data.data[0]);
        }
        fetchWeather() 
    }, [latitude, longitude, timestamp])

    if (!weather) return <div>Loading weather data...</div>;
  return (
    <div>
      <h3>Weather at the time of the incident:</h3>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Precipitation: {weather.precipitation}mm</p>
      <p>Wind Speed: {weather.windspeed}km/h</p>
    </div>
  );
}

export default WeatherComponent