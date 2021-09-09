import React, { useState } from 'react'

const Sidebar = () => {
  console.log("Does this work?")
  console.log("Does this work?")
  const [mode, setMode] = useState("black")
  const gridSquares = document.querySelectorAll(".grid-square");
  gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener("mouseover", initiateMode)
  })
  function initiateMode(e) {
    console.log("test")
    switch (mode) {
      case "black":
        addBlack(e);
        break;
      case "eraser":
        erase(e);
        break;
    }
  }
  function addBlack(e) {
    e.target.className = 'grid-square black';
  }
  function erase(e) {
    e.target.className = 'grid-square';
  }
  return (
    <div>
      <button onClick={() => setMode("eraser")}>Eraser</button>
      <button onClick={() => setMode("black")}>Black</button>
      
    </div>
  )
}

export default Sidebar
