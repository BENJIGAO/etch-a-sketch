import React, { useState } from 'react'
import './App.css';

import Grid from './components/Grid';
import Sidebar from './components/Sidebar';
function App() {
  const [sideLength, setSideLength] = useState(10)
  return (
    <div className="App">
      <Sidebar />
      <Grid sideLength={sideLength}/>
    </div>
  );
}

export default App;
