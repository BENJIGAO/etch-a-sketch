import React from 'react'
import "../component_styles/Grid.css"

function Grid() {
  const arr = Array(99).fill(0)
  const sideLength = 10;
  const sideMeasure = '1fr '.repeat(sideLength);
  return (
    <div id="grid-container" style={{gridTemplateColumns: sideMeasure, gridTemplateRows: sideMeasure,}}>
      {arr.map(friend => <div className="grid-square"></div>)}
      
    </div>
  )
}

export default Grid
