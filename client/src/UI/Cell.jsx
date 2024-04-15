function Cell({ puzzle, grid, handleChange }) {
  const keyUp = (rowIndex, colIndex, event) => {
    switch (event.key) {
      case "ArrowDown":
        if (rowIndex + 1 < 9 && rowIndex + 1 >= 0)
          document.getElementById(`input-${rowIndex + 1}-${colIndex}`).focus();
        break;
      case "ArrowUp":
        if (rowIndex - 1 < 9 && rowIndex - 1 >= 0)
          document.getElementById(`input-${rowIndex - 1}-${colIndex}`).focus();
        break;
      case "ArrowLeft":
        if (colIndex - 1 < 9 && colIndex - 1 >= 0)
          document.getElementById(`input-${rowIndex}-${colIndex - 1}`).focus();
        break;
      case "ArrowRight":
        if (colIndex + 1 < 9 && colIndex + 1 >= 0)
          document.getElementById(`input-${rowIndex}-${colIndex + 1}`).focus();
        break;
      default:
        console.log(`No deberia moverse porque ${event.key} fue oprimido`);
    }
  };

  return grid.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      const cellClass = puzzle[rowIndex][colIndex] === 0 ? "highlight-val" : "";
      return (
        <div key={`${rowIndex} ${colIndex}`} className="sudoku-board-cell">
          <input
            id={`input-${rowIndex}-${colIndex}`}
            key={`${rowIndex} ${colIndex}`}
            className={cellClass}
            type="text"
            value={col === 0 ? "" : col}
            onChange={(e) => handleChange(rowIndex, colIndex, e)}
            onKeyDown={(e) => keyUp(rowIndex, colIndex, e)}
          />
        </div>
      );
    });
  });
}

export default Cell;
