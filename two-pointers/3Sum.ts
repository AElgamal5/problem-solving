/**
 * 15. 3Sum
 * ---------------------------
 * link: https://leetcode.com/problems/3sum/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1- sort nums array
 * 2- loop over it and for each element in array, solve it as 2Sum sorted input
 * 3- we take 3 values if we grantee that 2 of the is unique so the total will be unique
 *
 * time : O(n log n) + O(n^2) =  O(n^2)
 * space : O(n)
 */

function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;

    let l = i + 1,
      r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum < 0) l++;
      else if (sum > 0) r--;
      else {
        result.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-2, 0, 0, 2, 2]));
