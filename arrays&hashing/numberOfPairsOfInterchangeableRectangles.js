/**
 * 2001. Number of Pairs of Interchangeable Rectangles
 * -----------------------
 * link: https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: using maps instead of nested loops

//time: O(n)
//space: O(n)

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  let result = 0;
  const map = new Map();

  for (let i = 0; i < rectangles.length; i++) {
    let ratio = rectangles[i][0] / rectangles[i][1];
    if (map.has(ratio)) {
      result += map.get(ratio);
      map.set(ratio, map.get(ratio) + 1);
    } else {
      map.set(ratio, 1);
    }
  }

  return result;
};

console.log(
  interchangeableRectangles([
    [4, 8],
    [3, 6],
    [10, 20],
    [15, 30],
  ])
); // 6

console.log(
  interchangeableRectangles([
    [1, 2],
    [4, 8],
    [3, 6],
    [10, 20],
    [15, 30],
  ])
); // 10

console.log(
  interchangeableRectangles([
    [4, 8],
    [3, 6],
    [3, 9],
    [1, 3],
  ])
); // 2

console.log(
  interchangeableRectangles([
    [4, 5],
    [7, 8],
  ])
); // 0
