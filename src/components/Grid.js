import React from 'react'
import "../component_styles/Grid.css"

function Grid() {
  const arr = Array(99).fill(0)
  const sideLength = 10;
  const sideMeasure = '1fr '.repeat(sideLength);
  const mode = "eraser"
  function color(square) {
    square.className = 'grid-square black';
  }
  function eraser(square) {
    square.className = 'grid-square';
  }
  function currentMode(e) {
    console.log(e.target)
    if (mode === "color") {
      color(e.target)
    }
    if (mode === "eraser") {
      eraser(e.target)
    }
  }
  
  
  return (
    <div id="grid-container" style={{gridTemplateColumns: sideMeasure, gridTemplateRows: sideMeasure,}}>
      {arr.map(tmp => (
      <div className="grid-square" onMouseDown={currentMode}></div>
      ))}
      
    </div>
  )
}

export default Grid
