/**
 * 905. Sort Array By Parity
 * ---------------------------
 * link: https://leetcode.com/problems/sort-array-by-parity/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using fast and slow pointers technique and swap if the fast is even
 *
 * time : O(n)
 * space : O(1)
 */
function sortArrayByParity(nums: number[]): number[] {
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] % 2 !== 0) continue;
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
  }

  return nums;
}

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([9, 6, 3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
