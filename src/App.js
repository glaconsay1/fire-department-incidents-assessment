import React, { useState, useEffect } from "react"
import logo from './logo.svg';
import incidentData from "./data/F01705150090.json"
import IncidentDetail from "./components/IncidentDetail"
import './App.css';

function App() {

  const [incident, setIncident] = useState(null) 

  useEffect(() => {
    setIncident(incidentData)
  }, [])

  if (!incident) return <div>Loading incident data...</div>;

  return (
    <div className="App">
      <IncidentDetail incidentData={incident} />
    </div>
  );
}

export default App;
