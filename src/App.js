import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '5-17-2023'}, {weight: 176, date: '5-18-2023'}]);

  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>
      <AddEntryForm />
      
    </div>
  );
}

export default App;
