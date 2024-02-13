/**
 * 118. Pascal's Triangle
 * -----------------------
 * link: https://leetcode.com/problems/pascals-triangle/description/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//space: O(n^2)
//time: O(n^2)

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ans = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    ans[i] = new Array(i + 1);
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        ans[i][j] = 1;
      } else {
        ans[i][j] = ans[i - 1][j] + ans[i - 1][j - 1];
      }
    }
  }

  return ans;
};

console.log(generate(1));
console.log(generate(5));
console.log(generate(30));
