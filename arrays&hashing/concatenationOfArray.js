/**
 * 1929. Concatenation of Array
 * -----------------------
 * link: https://leetcode.com/problems/concatenation-of-array/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
//space: O(n)
//time: O(2n) => O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

console.log(getConcatenation([1, 2, 1])); //[1,2,1,1,2,1]
console.log(getConcatenation([1, 3, 2, 1])); //[1,3,2,1,1,3,2,1]
console.log("=".repeat(30));
