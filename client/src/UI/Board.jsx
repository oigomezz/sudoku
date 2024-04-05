import Cell from "./Cell";

function Board({ puzzle, grid, handleChange }) {
    return (
        <div className="board">
            <Cell puzzle={puzzle} grid={grid} handleChange={handleChange} />
        </div>
    );
}

export default Board;