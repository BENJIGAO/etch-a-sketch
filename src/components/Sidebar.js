import React, { useState, useEffect } from 'react'

import "../component_styles/Sidebar.css"

const Sidebar = (props) => {
  useEffect(() => {
    activateGrid();
    manageGridSizeDisplay();
    changeGridSize();
  })
  const [mode, setMode] = useState("");
  

  function activateGrid() {
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener("mouseover", initiateMode);
    })
  }

  function initiateMode(e) {
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
  /* Third Major Function */
  function manageGridSizeDisplay() {
    const display = document.getElementById('grid-size-display');
    const slider = document.getElementById('grid-size-slider');
    display.textContent = `${slider.value}`;
    slider.addEventListener('input', updateDisplay);
  }

  function updateDisplay(e) {
    const display = document.getElementById('grid-size-display');
    display.textContent = `${e.target.value}`;
  }

  /* Fourth Major Function */
  function changeGridSize() {
    const slider = document.getElementById('grid-size-slider');
    slider.addEventListener('change', updateGrid);
  }

  function updateGrid(e) {
    props.changeGrid(e.target.value)
  }

  return (
    <div>
      <div id="grid-size-changer">
        <label id="grid-size-container" htmlFor="grid-size-slider">
            Grid Size:
            <p id="grid-size-display"></p>
        </label>
        <input id="grid-size-slider" type="range" min="10" max="99" defaultValue="10" step="1"/>
      </div>
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
