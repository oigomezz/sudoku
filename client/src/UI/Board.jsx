import Cell from "./Cell";

function Board({ grid, setGrid, initialGrid }) {
  function handleChange(row, col, e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      if (Number(e.target.value) < 10 && initialGrid.current[row][col] === 0) {
        const newGrid = [...grid];
        newGrid[row][col] = Number(e.target.value);
        setGrid(newGrid);
      }
    }
  }

  return (
    <div className="sudoku-board">
      <Cell grid={grid} handleChange={handleChange} />
    </div>
  );
}

export default Board;
