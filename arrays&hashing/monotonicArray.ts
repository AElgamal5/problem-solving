/**
 * 896. Monotonic Array
 * ---------------------------
 * link: https://leetcode.com/problems/monotonic-array/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: loop over the array with two flags to determine the increasing or the decreasing
 *
 * time : O(n)
 * space : O(1)
 */

function isMonotonic(nums: number[]): boolean {
  let increase = false,
    decrease = false;

  for (let i = 1; i < nums.length; i++) {
    if (!increase && !decrease && nums[i] > nums[i - 1]) increase = true;
    else if (!increase && !decrease && nums[i] < nums[i - 1]) decrease = true;

    if (increase && nums[i] < nums[i - 1]) return false;
    if (decrease && nums[i] > nums[i - 1]) return false;
  }

  return true;
}

console.log(isMonotonic([1, 2, 2, 3])); // true
console.log(isMonotonic([6, 5, 4, 4])); // true
console.log(isMonotonic([1, 2, 1, 3])); // false
console.log(isMonotonic([1, 2, 2, 1])); // false
console.log(isMonotonic([1, 3, 2])); // false
