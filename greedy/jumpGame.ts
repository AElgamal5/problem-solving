/**
 * 55. Jump Game
 * ---------------------------
 * link: https://leetcode.com/problems/jump-game/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: NOT SOLVED
 *
 * time : O(n)
 * space : O()
 */

function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true;

  let i = 0;

  while (i <= nums.length - 1) {
    let last = i;
    let step = Number.NEGATIVE_INFINITY;
    let p = i + 1;

    while (p <= nums[i] + i) {
      if (p === nums.length - 1) return true;
      if (nums[p] > step) step = nums[p];
      p++;
    }
    console.log(i, step);

    i += step;

    if (i === last) return false;
  }

  return true;
}

console.log(canJump([2, 3, 1, 1, 4]));
console.log("=".repeat(20));
console.log(canJump([3, 2, 1, 0, 4]));
console.log("=".repeat(20));
console.log(canJump([2, 0]));
console.log("=".repeat(20));
console.log(canJump([1, 2, 3]));
