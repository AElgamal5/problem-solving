/**
 * 1984. Minimum Difference Between Highest and Lowest of K Scores
 * ---------------------------
 * link: https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 */

/**
 * description: sort && using 2 pointers to get diff
 *
 * time : O(n log n)
 * space : O(1)
 */

function minimumDifference(nums: number[], k: number): number {
  let result: number = Number.POSITIVE_INFINITY;

  nums = nums.sort((a, b) => a - b);

  for (let i = k - 1; i < nums.length; i++) {
    result = Math.min(nums[i] - nums[i - k + 1], result);
  }

  return result;
}

console.log(minimumDifference([90], 1)); // 0
console.log(minimumDifference([9, 4, 1, 7], 2)); // 0
