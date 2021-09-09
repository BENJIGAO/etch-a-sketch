import React from 'react'
import "../component_styles/Grid.css"

function Grid() {
  const sideLength = 10;
  const sideMeasure = '1fr '.repeat(sideLength);
  return (
    <div id="grid-container" style={{gridTemplateColumns: sideMeasure, gridTemplateRows: sideMeasure,}}>
      
    </div>
  )
}

export default Grid
