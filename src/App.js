import React, { useState } from 'react'
import './App.css';

import Grid from './components/Grid';
function App() {
  const [isMouseUp, setIsMouseUp] = useState(false)
  function changeMouseStatus(e) {
    switch (e.type) {
      case "mouseup":
        setIsMouseUp(true)
        break;
      case "mousedown":
        setIsMouseUp(false);
        break;
    }
  }
  
  return (
    <div className="App" onMouseUp={changeMouseStatus} onMouseDown={changeMouseStatus}>
      <Grid isMouseUp={isMouseUp}/>
    </div>
  );
}

export default App;
