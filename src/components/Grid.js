import React from 'react'
import "../component_styles/Grid.css"

function Grid() {
  function createGrid(sideLength) {
    const gridContainer = document.getElementById('grid-container');
    let sideMeasure = '1fr '.repeat(sideLength);
    gridContainer.style.cssText = `grid-template-columns: ${sideMeasure}; grid-template-rows: ${sideMeasure};`;
    /* grid is square (square by 2) */
    for (let i = 0; i < sideLength**2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);
    }
  }
  const sideLength = 10;
  const sideMeasure = '1fr '.repeat(sideLength);
  return (
    <div id="grid-container" style={{gridTemplateColumns: sideMeasure, gridTemplateRows: sideMeasure,}}>
      {}
    </div>
  )
}

export default Grid
