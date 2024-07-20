/**
 * 189. Rotate Array
 * ---------------------------
 * link: https://leetcode.com/problems/rotate-array/
 */

//---------------------------------------------------------------//
//------------------------1st trial------------------------------//
//---------------------------------------------------------------//

/**
 * description: Time Limit Exceeded
 *
 * time : O(n * k) where n is the length of nums and k is the rotation times
 * space : O(1)
 */

function rotateOld(nums: number[], k: number): void {
  let length = nums.length;

  k %= length;
  if (k === 0) return;

  for (let i = 0; i < k; i++) {
    nums = rotateOneStep(nums);
  }
}

function rotateOneStep(nums: number[]): number[] {
  let length = nums.length;
  if (length <= 1) return nums;

  let temp = nums[length - 1];

  for (let i = length - 1; i > 0; i--) {
    nums[i] = nums[i - 1];
  }

  nums[0] = temp;

  return nums;
}

//---------------------------------------------------------------//
//------------------------1st trial------------------------------//
//---------------------------------------------------------------//

/**
 * description:
 * 1- original array: [1, 2, 3, 4, 5, 6, 7]
 * 2- revers the entire array =>  [7, 6, 5, 4, 3, 2, 1]
 * 3- reverse first part => [5, 6, 7, 4, 3, 2, 1]
 * 4- reverse the second part => [5, 6, 7, 1, 2, 3, 4]
 *
 * time : O(n)
 * space : O(1)
 */

function rotate(nums: number[], k: number): void {
  const length = nums.length;
  k %= length;
  if (k === 0) return;

  reverse(nums, 0, length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); //[5,6,7,1,2,3,4]
console.log("=".repeat(30));
console.log(rotate([-1, -100, 3, 99], 2)); //[3,99,-1,-100]
