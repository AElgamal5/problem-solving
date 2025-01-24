/**
 * 283. Move Zeroes
 * ---------------------------
 * link: https://leetcode.com/problems/move-zeroes/
 */

/**
 * description: using 2 pointer one for scanning and another for replacing
 *
 * time : O(n)
 * space : O(1)
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
}

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([5, 0, 1, 0, 3, 12]);
moveZeroes([0]);
moveZeroes([1]);
