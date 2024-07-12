/**
 * 55. Jump Game
 * ---------------------------
 * link: https://leetcode.com/problems/jump-game/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: i'm trying to simulate it to find max step each time avoiding zero element
 *
 * time : O(n^2)
 * space : O(1)
 */

function canJumpOld(nums: number[]): boolean {
  let i = 0;

  while (i < nums.length - 1) {
    let nextIndex = nextStep(nums, i);
    if (nextIndex === 0) return false;
    i = nextIndex;
  }

  return true;
}

function nextStep(nums: number[], index: number): number {
  if (index + nums[index] >= nums.length - 1) return Number.POSITIVE_INFINITY;

  let i = index + 1;
  let max = -1;
  let maxIndex = i;

  while (i < index + nums[index] + 1) {
    if (max <= nums[i]) {
      max = nums[i];
      maxIndex = i;
    }
    i++;
  }

  if (max < nums[index] && nums[index + nums[index]] !== 0)
    return index + nums[index];

  return max < 0 ? 0 : maxIndex;
}

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description: greedy
 *
 * time : O(n)
 * space : O(1)
 */

function canJump(nums: number[]): boolean {
  let target = nums.length - 1;

  for (let i = target; i > -1; i--) {
    if (i + nums[i] >= target) target = i;
  }

  return target === 0;
}

console.log(canJump([2, 3, 1, 1, 4]));
console.log("=".repeat(20));
console.log(canJump([3, 2, 1, 0, 4]));
console.log("=".repeat(20));
console.log(canJump([2, 0]));
console.log("=".repeat(20));
console.log(canJump([1, 2, 3]));
console.log("=".repeat(20));
console.log(canJump([1, 2, 0, 1]));
console.log("=".repeat(20));
console.log(canJump([3, 0, 8, 2, 0, 0, 1]));
