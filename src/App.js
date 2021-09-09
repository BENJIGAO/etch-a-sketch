import React, { useState } from 'react'
import "./Reset.css";
import './App.css';

import Background from './components/Background';
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
      <Background />
      <div id="main-container">
        <div>
          <Sidebar changeGrid={changeGrid}/>
        </div>
        <div>
          <Title />
          <Grid sideLength={sideLength}/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
