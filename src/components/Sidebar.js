import React, { useState, useEffect } from 'react'

import "../component_styles/Sidebar.css"

const Sidebar = (props) => {
  useEffect(() => {
    activateGrid();
    manageGridSizeDisplay();
    changeGridSize();
  })
  const [mode, setMode] = useState("color black");
  
  function activateGrid() {
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener("mouseover", initiateMode);
    })
  }

  function initiateMode(e) {
    const colors = ["black", "blue", "green", "magenta", "red", "yellow", "cyan"]
    switch (true) {
      case colors.includes(mode):
        addColor(e, mode);
        break;
      case mode === "eraser":
        erase(e);
        break;
      case mode === "rainbow":
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

  function changeMode(e) {
    document.querySelector(".selected").classList.remove("selected")
    e.target.classList.add("selected");
    setMode(e.target.id)
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
      {/* <button onClick={clearGrid}>Clear</button>
      <button onClick={() => setMode("eraser")} id="eraser">Eraser</button>
      <button onClick={() => setMode("color black")} id="black">Black</button>
      <button onClick={() => setMode("color blue")} id="blue">Blue</button>
      <button onClick={() => setMode("color green")} id="green">Green</button>
      <button onClick={() => setMode("color magenta")} id="magenta">Magenta</button>
      <button onClick={() => setMode("rainbow")} id="rainbow">Rainbow</button>
      <button onClick={() => setMode("color red")}>Red</button>
      <button onClick={() => setMode("color yellow")} id="yellow">Yellow</button>
      <button onClick={() => setMode("color cyan")} id="cyan">Cyan</button> */}
      <button onClick={clearGrid}>Clear</button>
      <button onClick={changeMode} id="eraser">Eraser</button>
      <button onClick={changeMode} id="black" className="selected">Black</button>
      <button onClick={changeMode} id="blue">Blue</button>
      <button onClick={changeMode} id="green">Green</button>
      <button onClick={changeMode} id="magenta">Magenta</button>
      <button onClick={changeMode} id="rainbow">Rainbow</button>
      <button onClick={changeMode}>Red</button>
      <button onClick={changeMode} id="yellow">Yellow</button>
      <button onClick={changeMode} id="cyan">Cyan</button>
      
    </div>
  )
}

export default Sidebar
