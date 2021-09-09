import React, { useState } from 'react'

import "../component_styles/Sidebar.css"

const Sidebar = () => {
  const [mode, setMode] = useState("")
  const gridSquares = document.querySelectorAll(".grid-square");
  gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener("mouseover", initiateMode)
  })

  function initiateMode(e) {
    console.log(e) 
    switch (mode.split(" ")[0]) {
      case "color":
        addColor(e, mode.split(" ")[1]);
        break;
      case "eraser":
        erase(e);
        break;
      case "rainbow": 
        addRainbow(e);
        break;
    }
  }

  function addColor(e, color) {
    e.target.className = `grid-square ${color}`;
    e.target.style.backgroundColor = '';
  }
  
  function addRainbow(e) {
    e.target.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
  }

  function erase(e) {
    e.target.className = 'grid-square';
    e.target.style.backgroundColor = '';
  }

  function clearGrid() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((gridSquare) => {
        gridSquare.className = 'grid-square';
        gridSquare.style.backgroundColor = '';
    })
  }

  return (
    <div>
      <button onClick={clearGrid}>Clear</button>
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
