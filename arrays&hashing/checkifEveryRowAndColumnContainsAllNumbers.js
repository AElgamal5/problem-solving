/**
 * 238. Check if Every Row and Column Contains All Numbers
 * -----------------------
 * link: https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description:create memory array to count occurrence and check row by row then column by column

//time: O(2 * n^2) => O(n^2)
//space: O(n)

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const memo = new Array(matrix.length + 1).fill(0);

  //check rows
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (memo[matrix[i][j]] !== 0) {
        return false;
      }
      memo[matrix[i][j]]++;
    }
    memo.fill(0);
  }

  //check cols
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (memo[matrix[j][i]] !== 0) {
        return false;
      }
      memo[matrix[j][i]]++;
    }
    memo.fill(0);
  }

  return true;
};

console.log(
  checkValid([
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1],
  ])
);

console.log(
  checkValid([
    [1, 1, 1],
    [1, 2, 3],
    [1, 2, 3],
  ])
);

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description:create memory array for row and col and check them together

//time: O(n^2)
//space: O(2n) => O(n)

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const row = new Array(matrix.length + 1).fill(0);
  const col = new Array(matrix.length + 1).fill(0);

  //check rows
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (row[matrix[i][j]] !== 0) {
        return false;
      }

      if (col[matrix[j][i]] !== 0) {
        return false;
      }
      row[matrix[i][j]]++;
      col[matrix[j][i]]++;
    }
    row.fill(0);
    col.fill(0);
  }

  return true;
};
