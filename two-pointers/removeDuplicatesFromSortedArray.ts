/**
 * 26. Remove Duplicates from Sorted Array
 * ---------------------------
 * link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: 2 pointer l to overwrite the array the l to loop over it
 *
 * time : O(n)
 * space : O(1)
 */

function removeDuplicates(nums: number[]): number {
  let l = 1;

  for (let r = 1; r < nums.length; r++) {
    if (nums[r] !== nums[r - 1]) {
      nums[l] = nums[r];
      l++;
    }
  }

  return l;
}
removeDuplicates([1, 1, 2]);
console.log("=".repeat(20));
removeDuplicates([1, 2]);
console.log("=".repeat(20));
removeDuplicates([1, 2, 3, 4]);
console.log("=".repeat(20));
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log("=".repeat(20));
removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4]);
console.log("=".repeat(20));
removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5]);

/**
 * description: using last value to make it easy to get unique elements
 *
 * time : O(n)
 * space : O(1)
 */

function removeDuplicates2(nums: number[]): number {
  let l = 1;
  let lastVal = nums[0];
  for (let r = 1; r < nums.length; r++) {
    if (nums[r] !== lastVal) {
      nums[l] = nums[r];
      lastVal = nums[r];
      l++;
    }
  }

  return l;
}

removeDuplicates2([1, 1, 2]);
console.log("=".repeat(20));
removeDuplicates2([1, 2]);
console.log("=".repeat(20));
removeDuplicates2([1, 2, 3, 4]);
console.log("=".repeat(20));
removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log("=".repeat(20));
removeDuplicates2([0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4]);
console.log("=".repeat(20));
removeDuplicates2([0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5]);
