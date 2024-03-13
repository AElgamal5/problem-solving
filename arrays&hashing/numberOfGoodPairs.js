/**
 * 1512. Number of Good Pairs
 * -----------------------
 * link: https://leetcode.com/problems/number-of-good-pairs/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: Using map

//space: O(n)
//time: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = new Map();
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let old = map.get(nums[i]) || 0;
    result += old;
    map.set(nums[i], old + 1);
  }

  return result;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
