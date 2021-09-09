import React, { useState } from 'react'
import "./Reset.css";
import './App.css';

import Sidebar from './components/Sidebar';
import Title from './components/Title';
import Grid from './components/Grid';

function App() {
  const [sideLength, setSideLength] = useState(10)
  function changeGrid(sideLength) {
    setSideLength(sideLength)
  }
  return (
    <div className="App">
      <Sidebar changeGrid={changeGrid}/>
      <Title />
      <Grid sideLength={sideLength}/>
    </div>
  );
}

export default App;
