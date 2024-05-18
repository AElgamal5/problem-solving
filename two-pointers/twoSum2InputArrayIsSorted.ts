/**
 * 167. Two Sum II - Input Array Is Sorted
 * ---------------------------
 * link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

/**
 * description: use 2 pointers left and right
 * decrease right if sum > target
 * increase right if sum < target
 * return left and right if = target
 *
 * time : O(n)
 * space : O(1)
 */

function twoSum(numbers: number[], target: number): number[] {
  let l = 0,
    r = numbers.length - 1;

  while (l < r) {
    if (numbers[l] + numbers[r] === target) return [l + 1, r + 1];
    else if (numbers[l] + numbers[r] < target) l++;
    else r--;
  }

  return [-1, -1];
}
