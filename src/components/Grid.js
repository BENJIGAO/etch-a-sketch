import React, { useState } from 'react'
import "../component_styles/Grid.css"

function Grid(props) {
  console.log(props.isMouseUp)
  const [isMouseDown, setIsMouseDown] = useState(false)
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
  function currentModeOnMouseDown(e) {
    setIsMouseDown(true)
    if (mode === "color") {
      color(e.target)
    }
    if (mode === "eraser") {
      erase(e.target)
    }
  }
  function currentModeOnMouseOver(e) {
    if (!isMouseDown) return
  }
  
  
  return (
    <div id="grid-container" style={{gridTemplateColumns: sideMeasure, gridTemplateRows: sideMeasure,}}>
      {arr.map(tmp => (
      <div className="grid-square" onMouseDown={currentModeOnMouseDown} onMouseEnter={currentModeOnMouseOver}></div>
      ))}
      
    </div>
  )
}

export default Grid
