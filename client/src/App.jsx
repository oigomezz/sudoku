import { useState, useRef } from "react";
import Interface from "./UI/Interface"
import Sudoku from "./components/Sudoku"

function getGrid() {
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid[i] = Array(9).fill(0);
  }
  return grid;
}

function App() {
  const [grid, setGrid] = useState(getGrid);
  const initialGrid = useRef(getGrid());
  return (
    <div className="wrap">
      <header>
        <h1> Sudoku Simple Demo</h1>
      </header>
      <main>
        <Sudoku
          grid={grid}
          getGrid={getGrid}
          setGrid={setGrid}
          initialGrid={initialGrid}
        />
      </main>
      <footer>
        <Interface
          grid={grid}
          getGrid={getGrid}
          setGrid={setGrid}
          initialGrid={initialGrid}
        />
      </footer>
    </div>
  )
}

export default App
