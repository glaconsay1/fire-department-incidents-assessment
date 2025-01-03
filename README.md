# fire-department-incidents-assessment

This project enriches 911 emergency incident data with weather information using the Meteostat API and displays the incident location on a map using React and Leaflet.

---

## Features

- **Incident Details**: Displays incident type, subtype, and comments.
- **Map Integration**: Shows the incident location on an interactive map using Leaflet.
- **Weather Data**: Fetches and displays weather conditions at the time of the incident using the Meteostat API.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A Meteostat API key (sign up at [Meteostat](https://dev.meteostat.net/))

---

## Installation 

Type "npm i" in the cmd terminal.
After successful installation of the packages, type "npm start".


## Project Structure
fire-department-incidents-assessment/
├── public/
├── src/
│   ├── components/
│   │   ├── MapComponent.js
│   │   ├── WeatherComponent.js
│   │   └── IncidentDetail.js
│   ├── data/
│   │   └── F01705150050.json
|   |   └── F01705150090.json
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md

## Components 

1. MapComponent.js
Displays the incident location on an interactive map using Leaflet.
Includes a marker with a popup showing incident details.

2. WeatherComponent.js
Fetches weather data for the incident location and time using the Meteostat API.
Displays temperature, precipitation, and wind speed.

3. IncidentDetail.js
Combines the MapComponent and WeatherComponent to display all incident details.