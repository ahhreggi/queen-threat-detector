// Queen Threat Detector (Stretch: Prep Katas Revisited)

// Return an 8x8 nested array of zeroes representing a chessboard, with 1s in place of queens
const generateBoard = function(white, black) {
  // Generate empty 8x8 board
  const board = [];
  for (let i = 0; i < 8; i++) {
    board.push(Array(8).fill(0));
  }
  // Add queens
  board[white[0]][white[1]] = 1;
  board[black[0]][black[1]] = 1;
  return board;
};

// Return true if the queens on the board can attack each other
const queenThreat = function(board) {
  // Find locations of queens
  let white;
  let black;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (board[row][col]) {
        if (!white) {
          white = [row, col];
        } else {
          black = [row, col];
        }
      }
    }
  }
  // Queens can attack if they are on the same row, column, or have an equal sum of row + col
  return white[0] === black[0] || white[1] === black[1] || white[0] + white[1] === black[0] + black[1] ||
  white[0] - white[1] === black[0] - black[1];
};

const printBoard = function(board) {
  let str = "";
  for (const row of board) {
    str += row.join(" ") + "\n";
  }
  console.log(str.split("0").join("-").trim());
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
printBoard(generatedBoard);
console.log(queenThreat(generatedBoard));

let whiteQueen2 = [0, 0];
let blackQueen2 = [5, 7];
let generatedBoard2 = generateBoard(whiteQueen2, blackQueen2);
printBoard(generatedBoard2);
console.log(queenThreat(generatedBoard2));

let whiteQueen3 = [2, 2];
let blackQueen3 = [3, 3];
let generatedBoard3 = generateBoard(whiteQueen3, blackQueen3);
printBoard(generatedBoard3);
console.log(queenThreat(generatedBoard3));