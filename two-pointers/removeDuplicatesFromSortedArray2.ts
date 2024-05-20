/**
 * 80. Remove Duplicates from Sorted Array II
 * ---------------------------
 * link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using last value to make it easy to get unique elements
 *
 * time : O(n)
 * space : O(1)
 */

function removeDuplicates(nums: number[]): number {
  let l = 1;
  let lastVal = nums[0];
  let taken = false;

  for (let r = 1; r < nums.length; r++) {
    if (nums[r] === lastVal && !taken) {
      taken = true;
      nums[l] = lastVal;
      l++;
    } else if (nums[r] !== lastVal) {
      nums[l] = nums[r];
      lastVal = nums[r];
      l++;
      taken = false;
    }
  }
  console.log(l, nums.toString());

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
