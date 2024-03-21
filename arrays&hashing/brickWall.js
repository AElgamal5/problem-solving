/**
 * 554. Brick Wall
 * -----------------------
 * link: https://leetcode.com/problems/brick-wall/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description:
//1- make map for counting the gaps [key => position, value => no. gaps in this pos]
//2- find the pos where maximum no. gaps
//3- return no. rows of wall - max no. gaps

//time: O(n^2)
//space: O(n)

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const gapsMap = new Map();

  for (let i = 0; i < wall.length; i++) {
    let pos = 0;
    for (let j = 0; j < wall[i].length - 1; j++) {
      pos += wall[i][j];
      gapsMap.set(pos, (gapsMap.get(pos) || 0) + 1);
    }
  }

  let max = 0;
  gapsMap.forEach((value, key) => {
    if (value > max) {
      max = value;
    }
  });

  return wall.length - max;
};

console.log(
  leastBricks([
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1],
  ])
);

console.log(leastBricks([[1], [1], [1]]));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description: same but more efficient

//time: O(n^2)
//space: O(n)

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const gapsMap = new Map();
  let max = 0;

  for (let i = 0; i < wall.length; i++) {
    let pos = 0;
    for (let j = 0; j < wall[i].length - 1; j++) {
      pos += wall[i][j];
      let gaps = (gapsMap.get(pos) || 0) + 1;
      gapsMap.set(pos, gaps);

      if (gaps > max) {
        max = gaps;
      }
    }
  }

  return wall.length - max;
};
