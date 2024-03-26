const express = require("express");
const cors = require("cors");
const Utils = require("./Utils.js");
const Sudoku = require("./Sudoku.js");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/puzzle", (req, res) => {
  let sudoku = new Sudoku();
  let puzzle = sudoku.puzzle;
  res.status(200).send({ game: puzzle });
});

app.post("/solve", (req, res) => {
  let puzzle = [];
  Util.copyGrid(req.body.board, puzzle);
  let sudoku = new Sudoku(puzzle);
  let solution = sudoku.isSolvable();
  let solvedSudoku;
  let status;
  if (solution) {
    solvedSudoku = sudoku.solvedPuzzle;
    status = true;
  } else {
    solvedSudoku = req.body.board;
    status = false;
  }
  res.status(200).send({ solution: solvedSudoku, status: status });
});

app.post("/validate", (req, res) => {
  let puzzle = [];
  Util.copyGrid(req.body.board, puzzle);
  let sudoku = new Sudoku(puzzle);
  let status = sudoku.validate();
  res.status(200).send({ status: status });
});
