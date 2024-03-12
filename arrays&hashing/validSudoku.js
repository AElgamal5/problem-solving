/**
 * 36. Valid Sudoku
 * -----------------------
 * link: https://leetcode.com/problems/valid-sudoku/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: brute force

//time: O(2*n^2) => O(n)
//space: O(3*n) => O(n)

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const row = new Array(10).fill(0);
  const col = new Array(10).fill(0);
  const box = new Array(10).fill(0);

  //check rows and cols
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== "." && row[+board[i][j]] > 0) {
        return false;
      } else if (board[i][j] !== ".") {
        row[+board[i][j]]++;
      }

      if (board[j][i] !== "." && col[+board[j][i]] > 0) {
        return false;
      } else if (board[j][i] !== ".") {
        col[+board[j][i]]++;
      }
    }
    row.fill(0);
    col.fill(0);
  }

  //box 1
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== "." && box[+board[i][j]] > 0) {
        return false;
      } else if (board[i][j] !== ".") {
        box[+board[i][j]]++;
      }
    }
  }
  box.fill(0);

  //box 2
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      if (board[i][j] !== "." && box[+board[i][j]] > 0) {
        return false;
      } else if (board[i][j] !== ".") {
        box[+board[i][j]]++;
      }
    }
  }
  box.fill(0);

  //box 3
  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      if (board[i][j] !== "." && box[+board[i][j]] > 0) {
        return false;
      } else if (board[i][j] !== ".") {
        box[+board[i][j]]++;
      }
    }
  }
  box.fill(0);

  //box 4
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== "." && box[+board[i][j]] > 0) {
        return false;
      } else if (board[i][j] !== ".") {
        box[+board[i][j]]++;
      }
    }
  }
  box.fill(0);

  //box 5
  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      if (board[i][j] !== "." && box[+board[i][j]] > 0) {
        return false;
      } else if (board[i][j] !== ".") {
        box[+board[i][j]]++;
      }
    }
  }
  box.fill(0);

  //box 6
  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      if (board[i][j] !== "." && box[+board[i][j]] > 0) {
        return false;
      } else if (board[i][j] !== ".") {
        box[+board[i][j]]++;
      }
    }
  }
  box.fill(0);

  //box 7
  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== "." && box[+board[i][j]] > 0) {
        return false;
      } else if (board[i][j] !== ".") {
        box[+board[i][j]]++;
      }
    }
  }
  box.fill(0);

  //box 8
  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      if (board[i][j] !== "." && box[+board[i][j]] > 0) {
        return false;
      } else if (board[i][j] !== ".") {
        box[+board[i][j]]++;
      }
    }
  }
  box.fill(0);

  //box 9
  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      if (board[i][j] !== "." && box[+board[i][j]] > 0) {
        return false;
      } else if (board[i][j] !== ".") {
        box[+board[i][j]]++;
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    [".", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

// let temp = [
//   ["00", "01", "02", "03", "04", "04", "06", "07", "08"],
//   ["10", "11", "12", "13", "14", "14", "16", "17", "18"],
//   ["20", "21", "22", "23", "24", "24", "26", "27", "28"],
//   ["30", "31", "32", "33", "34", "34", "36", "37", "38"],
//   ["40", "41", "42", "43", "44", "44", "46", "47", "48"],
//   ["50", "51", "52", "53", "54", "54", "56", "57", "58"],
//   ["60", "61", "62", "63", "64", "64", "66", "67", "68"],
//   ["70", "71", "72", "73", "74", "74", "76", "77", "78"],
//   ["80", "81", "82", "83", "84", "84", "86", "87", "88"],
// ];

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description: array of sets

//time: O(n^2)
//space: O(3*n^2) => O(n^2)
// where n is 9 the length of one row or one col

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9);
  const cols = new Array(9);
  const square = new Array(9);

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set();
    cols[i] = new Set();
    square[i] = new Set();
  }

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];
      if (value !== ".") {
        if (
          rows[row]?.has(value) ||
          cols[col]?.has(value) ||
          square[Math.floor(row / 3) * 3 + Math.floor(col / 3)].has(value)
        ) {
          return false;
        }

        rows[row].add(value);
        cols[col].add(value);
        square[Math.floor(row / 3) * 3 + Math.floor(col / 3)].add(value);
      }
    }
  }

  return true;
};
