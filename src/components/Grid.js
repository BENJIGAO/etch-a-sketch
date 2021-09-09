import React, { useState, memo } from 'react'
import "../component_styles/Grid.css"

const Grid = ({ sideLength }) => {
  const arr = Array(sideLength**2).fill(0)
  const sideMeasure = '1fr '.repeat(sideLength);
  return (
    <div id="grid-container" style={{gridTemplateColumns: sideMeasure, gridTemplateRows: sideMeasure,}}>
      {arr.map(tmp => (
      <div key={Math.random() * 1000} className="grid-square"></div>
      ))}
    </div>
  )
}

export default Grid
