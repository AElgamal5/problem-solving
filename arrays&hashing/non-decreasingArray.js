/**
 * 665. Non-decreasing Array
 * -----------------------
 * link: https://leetcode.com/problems/non-decreasing-array/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/*
 * description
 *
 *
 * time: O(n)
 * space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let checkPossibility = function (nums) {
  let decreasingNums = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      decreasingNums.push(i);
    }
  }

  return decreasingNums.length <= 1;
};

console.log(checkPossibility([4, 2, 3])); //true
console.log(checkPossibility([4, 2, 1])); //false
console.log(checkPossibility([3, 4, 2, 3])); //false
