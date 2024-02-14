/**
 * 27. Remove Element
 * -----------------------
 * link: https://leetcode.com/problems/remove-element/description/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
//space: O(1)
//time: O(n)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[p] = nums[i];
      p++;
    }
  }
  return p;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([3, 2, 2, 3], 2));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
