/**
 * 75. Sort Colors
 * aka: Dutch National Flag problem
 * -----------------------
 * link: https://leetcode.com/problems/sort-colors/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: using buckets
//count the numbers of red, white, and blue and set the nums based on them

//time: O(2n) => O(n)
//space: O(1)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  /**
   * red => 0
   * white => 1
   * blue => 2
   */
  let red = 0;
  let white = 0;
  let blue = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) red++;
    if (nums[i] === 1) white++;
    if (nums[i] === 2) blue++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (red > 0) {
      nums[i] = 0;
      red--;
    } else if (white > 0) {
      nums[i] = 1;
      white--;
    } else if (blue > 0) {
      nums[i] = 2;
      blue--;
    }
  }
};

// console.log(sortColors([2, 0, 2, 1, 1, 0]));
// console.log(sortColors([2, 0, 1]));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description: one pass using partition in quick-sort

//time: O(n)
//space: O(1)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let i = 0;

  while (i <= r) {
    if (nums[i] === 0) {
      [nums[i], nums[l]] = [nums[l], nums[i]];
      l++;
      i++;
    } else if (nums[i] === 2) {
      [nums[i], nums[r]] = [nums[r], nums[i]];
      r--;
    } else {
      i++;
    }
  }
  //   console.log(nums);
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([1, 2, 0]));
