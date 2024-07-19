/**
 * 1498. Number of Subsequences That Satisfy the Given Sum Condition
 * ---------------------------
 * link: https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
 */

//---------------------------------------------------------------//
//------------------------1st trial------------------------------//
//---------------------------------------------------------------//

/**
 * time : O(n * log n)
 * space : O(n)
 */

function numSubseq(nums: number[], target: number): number {
  nums = nums.sort((a: number, b: number) => a - b);

  let l = 0,
    r = nums.length - 1,
    result = 0;

  const MOD = 1000000007;

  const power = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    power[i] = (power[i - 1] * 2) % MOD;
  }

  while (l <= r) {
    if (nums[l] + nums[r] <= target) {
      result = (result + power[r - l]) % MOD;
      l++;
    } else r--;
  }

  return result;
}

console.log(numSubseq([3, 5, 6, 7], 9));
console.log("=".repeat(30));
console.log(numSubseq([3, 3, 6, 8], 10));
console.log("=".repeat(30));
console.log(numSubseq([2, 3, 3, 4, 6, 7], 12));
