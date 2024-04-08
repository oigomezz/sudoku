function Cell({ grid, handleChange }) {
  return grid.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      return (
        <div key={`${rowIndex} ${colIndex}`} className="sudoku-board-cell">
          <input
            key={rowIndex + " " + colIndex}
            type="text"
            pattern="\\d*"
            value={col === 0 ? "" : col}
            onChange={(e) => handleChange(rowIndex, colIndex, e)}
          />
        </div>
      );
    });
  });
}

export default Cell;
