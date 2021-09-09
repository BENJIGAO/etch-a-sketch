import React, { useState } from 'react'
import "../component_styles/Grid.css"

function Grid(props) {
  const arr = Array(99).fill(0)
  const sideLength = 10;
  const sideMeasure = '1fr '.repeat(sideLength);
  const mode = "color"
  function color(square) {
    square.className = 'grid-square black';
  }
  function erase(square) {
    square.className = 'grid-square';
  }
  function currentMode(e) {
    if (mode === "color") {
      color(e.target)
    }
    if (mode === "eraser") {
      erase(e.target)
    }
  }
  
  
  return (
    <div id="grid-container" style={{gridTemplateColumns: sideMeasure, gridTemplateRows: sideMeasure,}}>
      {arr.map(tmp => (
      <div key={Math.random() * 1000} className="grid-square" onMouseEnter={currentMode}></div>
      ))}
      
    </div>
  )
}

export default Grid
