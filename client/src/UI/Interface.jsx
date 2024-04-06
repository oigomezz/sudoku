import { useState } from "react";
import { REST } from "../services/API";

function copy2DArray(from, to) {
  for (let i = 0; i < from.length; i++) to[i] = [...from[i]];
}

function Interface({ grid, getGrid, setGrid, initialGrid }) {
  const [puzzleStatus, setPuzzleStatus] = useState("** UNSOLVED **");

  async function handleCreate() {
    try {
      const response = await REST.getBoard();
      const data = await response.json();
      return data.game;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleValidate() {
    try {
      const response = await REST.validateBoard(grid);
      const data = await response.json();
      return data.status;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSolve() {
    try {
      const response = await REST.solveBoard(grid);
      const data = await response.json();
      if (data.status) {
        setPuzzleStatus("** SOLVED **");
        return data.solution;
      } else {
        setPuzzleStatus("** UNSOLVABLE **");
        return grid;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleInterface(action) {
    let newGrid;
    switch (action) {
      case "create": {
        newGrid = await handleCreate();
        copy2DArray(newGrid, initialGrid.current);
        setPuzzleStatus("");
        setGrid(newGrid);
        break;
      }

      case "solve": {
        newGrid = await handleSolve();
        setGrid(newGrid);
        break;
      }

      case "clear": {
        newGrid = getGrid();
        copy2DArray(newGrid, initialGrid.current);
        setGrid(newGrid);
        setPuzzleStatus("");
        break;
      }

      case "validate": {
        const status = await handleValidate();
        const puzzStats = status ? "** SOLVED **" : "** UNSOLVED **";
        setPuzzleStatus(puzzStats);
        break;
      }

      default: {
        throw new Error("Invalid action");
      }
    }
  }

  return (
    <div className="interface">
      <div className="action-interface">
        <button
          className="generator-btn btn"
          onClick={() => {
            handleInterface("create");
          }}
        >
          Create
        </button>
        <button
          className="validate-btn btn"
          onClick={() => {
            handleInterface("validate");
          }}
        >
          Validate
        </button>
        <button
          className="solve-btn btn"
          onClick={() => {
            handleInterface("solve");
          }}
        >
          Solve
        </button>
        <button
          className="clear-btn btn"
          onClick={() => {
            handleInterface("clear");
          }}
        >
          Clear
        </button>
      </div>
      <div className="info-interface">
        <input readOnly value={puzzleStatus}></input>
      </div>
    </div>
  );
}

export default Interface;
