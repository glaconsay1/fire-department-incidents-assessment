import React, { useState, useEffect } from "react"
import incidentData from "./data/F01705150090.json" //as per instructions, this is only taking in one incident file at a time
import IncidentDetail from "./components/IncidentDetail"
import './App.css';

// Front page of the application. This displays the incident details component, which incorporates the other components I made.

function App() {

  const [incident, setIncident] = useState(null) 

  useEffect(() => {
    setIncident(incidentData)
  }, []) //only runs once on first render, since the data is not changing and we are taking it from a single file

  if (!incident) return <div>Loading incident data...</div>; //Could use Lazy or Suspense

  return (
    <div className="App">
      <h1>Incident Report</h1>
      <IncidentDetail incidentData={incident} />
    </div>
  );
}

export default App;
