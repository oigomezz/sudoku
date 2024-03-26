import React from "react";

function Tile({ puzzle, grid, handleChange }) {
  return grid.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      const tile = col !== 0 ? "tile taken" : "tile";
      return (
        <input
          className={puzzle[rowIndex][colIndex] !== 0 ? "initial" : tile}
          value={col === 0 ? "" : col}
          key={rowIndex + " " + colIndex}
          type="text"
          onChange={(e) => handleChange(rowIndex, colIndex, e)}
        />
      );
    });
  });
}

export default Tile;
