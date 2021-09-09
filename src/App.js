import React, { useState } from 'react'
import './App.css';

import Grid from './components/Grid';
import Sidebar from './components/Sidebar';
function App() {
  const [mode, setMode] = useState("black")
  function changeMode(mode) {
    setMode(mode)
  }
  return (
    <div className="App">
      <Sidebar changeMode={changeMode}/>
      <Grid />
    </div>
  );
}

export default App;
