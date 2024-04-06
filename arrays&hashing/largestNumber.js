/**
 * 179. Largest Number
 * -----------------------
 * link: https://leetcode.com/problems/largest-number/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1- sort the nums as strings desc
 * 2- remove duplicate zeros form the beginning
 */

//time: O(n * log n)
//space: O(n)

/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function (nums) {
  let result = "";
  nums.sort((a, b) => {
    return `${b}${a}` - `${a}${b}`;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && result.length === 0) continue;
    result += nums[i];
  }

  return result.length === 0 ? "0" : result;
};

console.log(largestNumber([10])); //"10"
console.log(largestNumber([10, 2])); //"210"
console.log(largestNumber([3, 30, 34, 5, 9])); //"9534330"
console.log(largestNumber([10, 2, 9, 39, 17])); //"93921710"
console.log(largestNumber([0, 0])); //"0"
console.log(largestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "9876543210"
