import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Components/AddEntry/AddEntryForm";
import EntriesChartTracker from "./Components/EntriesChartTracker/EntriesChartTracker";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([
    { weight: 175, date: "2023-05-17" },
    { weight: 176, date: "2023-05-18" },
  ]);

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];
    // Use temp object to modify JS arrays, then setObjects to modify
    setEntries(tempEntries);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <h3 style ={{margin:'1em'}}>Weight
        <small className="text-muted">Tracker</small></h3>
        <div className="col-md-6">
          {/* Page is divided into 12 columns in React Bootstrap grid */}
          <div className="border-box">
            <DisplayEntries parentEntries={entries} />
          </div>
          <div className="border-box">
            <AddEntryForm addNewEntryProperty={addNewEntry} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="border-box">
            <EntriesChartTracker parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


{/* <AddEntryForm addNewEntryProperty={addNewEntry} /> */}
{/* Function reference, not call. No (). Call addNewEntryProperty on the function, and execute on it
Typically same name as function (addNewEntry) but does not have to be.
Just has to match "props.addNewEntryProperty(newEntry);" in AddEntryForm.jsx */}