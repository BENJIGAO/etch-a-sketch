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
      default:
        return
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
    <div id="toolbar-container">
      <button onClick={clearGrid} id="clear" className="btn">Clear</button>
      <button onClick={changeMode} id="eraser" className="btn">Eraser</button>
      <p>Colors</p>
      <div id="colors-container">
        <div className="colors-container-col">
          <button onClick={changeMode} id="black" className="selected btn">Black</button>
          <button onClick={changeMode} id="blue" className="btn">Blue</button>
          <button onClick={changeMode} id="green" className="btn">Green</button>
          <button onClick={changeMode} id="magenta" className="btn">Magenta</button>
        </div>
        <div className="colors-container-col">
          <button onClick={changeMode} id="rainbow" className="btn">Rainbow</button>
          <button onClick={changeMode} id="red" className="btn">Red</button>
          <button onClick={changeMode} id="yellow" className="btn">Yellow</button>
          <button onClick={changeMode} id="cyan" className="btn">Cyan</button>
        </div>
      </div>
      <div id="grid-size-changer">
        <label id="grid-size-container" htmlFor="grid-size-slider">
            Grid Size:
            <p id="grid-size-display"></p>
        </label>
        <input id="grid-size-slider" type="range" min="10" max="99" defaultValue="10" step="1"/>
      </div>
    </div>
  )
}

export default Sidebar
