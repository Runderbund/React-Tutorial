import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '2023-05-17'}, {weight: 176, date: '2023-05-18'}]);

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];
    // Use temp object to modify JS arrays, then setObjects to modify
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>
      <AddEntryForm addNewEntryProperty = {addNewEntry}/>
      {/* Function reference, not call. No (). Call addNewEntryProperty on the function, and execute on it
      Typically same name as function (addNewEntry) but does not have to be.
      Just has to match "props.addNewEntryProperty(newEntry);" in AddEntryForm.jsx */}
      
    </div>
  );
}

export default App;
