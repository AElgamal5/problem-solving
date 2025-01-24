/**
 * 18. 4Sum
 * ---------------------------
 * link: https://leetcode.com/problems/4sum/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1- same as 3Sum but instead of zero use target parameter and add second loop
 * 2- use set to get rid of duplicates
 *
 * time : (n^3)
 * space : O(n)
 */
function fourSum(nums: number[], target: number): number[][] {
  let result: number[][] = [];
  nums = nums.sort((a, b) => a - b);
  const usedBefore: Set<string> = new Set<string>();

  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      let l = j + 1,
        r = nums.length - 1;

      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];

        if (sum < target) l++;
        else if (sum > target) r--;
        else {
          if (!usedBefore.has(`${nums[i]}${nums[j]}${nums[l]}${nums[r]}`))
            result.push([nums[i], nums[j], nums[l], nums[r]]);

          usedBefore.add(`${nums[i]}${nums[j]}${nums[l]}${nums[r]}`);

          l++;
          while (nums[l] === nums[l - 1] && l < r) {
            l++;
          }
        }
      }
    }
  }

  return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
console.log(fourSum([-1, 0, 1, 2, -1, -4], -1));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------
/**
 * description: without using set
 *
 * time : (n^3)
 * space : O(n)
 */

function fourSum2(nums: number[], target: number): number[][] {
  let result: number[][] = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let l = j + 1,
        r = nums.length - 1;

      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];

        if (sum < target) l++;
        else if (sum > target) r--;
        else {
          result.push([nums[i], nums[j], nums[l], nums[r]]);
          l++;
          while (nums[l] === nums[l - 1] && l < r) {
            l++;
          }
        }
      }
    }
  }

  return result;
}
