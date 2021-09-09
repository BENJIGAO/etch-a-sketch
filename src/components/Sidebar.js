import React, { useState } from 'react'

import "../component_styles/Sidebar.css"

const Sidebar = () => {
  const [mode, setMode] = useState("color black")
  const gridSquares = document.querySelectorAll(".grid-square");
  gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener("mouseover", initiateMode)
  })
  function initiateMode(e) {
    
    switch (mode.split(" ")[0]) {
      case "color":
        addColor(e, mode.split(" ")[1]);
        break;
      case "eraser":
        erase(e);
        break;
    }
  }
  function addColor(e, color) {
    e.target.className = `grid-square ${color}`;
  }
  function erase(e) {
    e.target.className = 'grid-square';
  }
  return (
    <div>
      <button onClick={() => setMode("eraser")}>Eraser</button>
      <button onClick={() => setMode("color black")}>Black</button>
      <button onClick={() => setMode("color blue")}>Blue</button>
      <button onClick={() => setMode("color green")}>Green</button>
      <button onClick={() => setMode("color magenta")}>Magenta</button>
      <button onClick={() => setMode("rainbow")}>Rainbow</button>
      <button onClick={() => setMode("color red")}>Red</button>
      <button onClick={() => setMode("color yellow")}>Yellow</button>
      <button onClick={() => setMode("color cyan")}>Cyan</button>
      
    </div>
  )
}

export default Sidebar
