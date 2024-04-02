/**
 * 2017. Grid Game
 * -----------------------
 * link: https://leetcode.com/problems/grid-game/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: (not correct)
 * 1- find postfix sum for each row
 * 2- make taken slots = 0
 * 3- recalculate the prefix to get result
 */

//time: O(4n)
//space: O(n)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  let postfixGrid = grid.map((row) => row.slice());
  let postfixRow0 = 0;
  let postfixRow1 = 0;

  //   console.log(grid);

  for (let i = grid[0].length - 1; i > -1; i--) {
    postfixRow0 += grid[0][i];
    postfixGrid[0][i] = postfixRow0;

    postfixRow1 += grid[1][i];
    postfixGrid[1][i] = postfixRow1;
  }

  console.log(postfixGrid);

  //first robot
  grid[0][0] = 0;
  for (let i = 0; i < postfixGrid[0].length; i++) {
    let right = postfixGrid[0][i + 1] || 0;
    let down = postfixGrid[1][i] || 0;

    if (right > down) {
      grid[0][i + 1] = 0;
    } else {
      grid[1][i] = 0;
    }
  }

  //   console.log(grid);

  //recalculate prefix gird
  postfixRow0 = 0;
  postfixRow1 = 0;
  for (let i = grid[0].length - 1; i > -1; i--) {
    postfixRow0 += grid[0][i];
    postfixGrid[0][i] = postfixRow0;

    postfixRow1 += grid[1][i];
    postfixGrid[1][i] = postfixRow1;
  }

  //   console.log(postfixGrid);

  return Math.max(postfixGrid[0][0], postfixGrid[1][0]);
};

// console.log(
//   gridGame([
//     [2, 5, 4],
//     [1, 5, 1],
//   ])
// ); // 4

// console.log(
//   gridGame([
//     [3, 3, 1],
//     [8, 5, 2],
//   ])
// ); // 4

// console.log(
//   gridGame([
//     [1, 3, 1, 15],
//     [1, 3, 3, 1],
//   ])
// ); // 7

// console.log(
//   gridGame([
//     [20, 3, 20, 17, 2, 12, 15, 17, 4, 15],
//     [20, 10, 13, 14, 15, 5, 2, 3, 14, 3],
//   ])
// ); // 63

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description: https://youtu.be/64va5rHmwn8
 */

//time: O(n)
//space: O(1)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  let top = grid[0].reduce((acc, curr) => acc + curr, 0);
  let bottom = 0;
  let res = Infinity;
  for (let i = 0; i < grid[0].length; i++) {
    top -= grid[0][i];
    res = Math.min(res, Math.max(top, bottom));
    bottom += grid[1][i];
  }
  return res;
};
console.log(
  gridGame([
    [20, 3, 20, 17, 2, 12, 15, 17, 4, 15],
    [20, 10, 13, 14, 15, 5, 2, 3, 14, 3],
  ])
); // 63
