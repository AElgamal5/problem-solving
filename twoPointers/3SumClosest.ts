/**
 * 16. 3Sum Closest
 * ---------------------------
 * link: https://leetcode.com/problems/3sum-closest/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: same as '3 Sum' but compare to target instead of zero
 *
 * time : O(n^2)
 * space : O(n)
 */

function threeSumClosest(nums: number[], target: number): number {
  let length: number = nums.length;
  nums = nums.sort((a, b) => a - b);
  let result: number = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < length; i++) {
    let l = i + 1,
      r = length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }

      if (sum < target) l++;
      else if (sum > target) r--;
      else {
        return target;
      }
    }
  }

  return result;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1)); //-2
console.log("=".repeat(20));
console.log(threeSumClosest([0, 0, 0], 1)); //0
console.log("=".repeat(20));
console.log(threeSumClosest([1, 1, 1, 1], 0)); //3
console.log("=".repeat(20));
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)); //-2
