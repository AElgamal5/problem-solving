/**
 * 268. Missing Number
 * ---------------------------
 * link: https://leetcode.com/problems/missing-number/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: Using different in the sum
 *
 * time : O(n)
 * space : O(1)
 */

function missingNumberOld(nums: number[]): number {
  let length = nums.length;
  let totalSum = (length * (length + 1)) / 2;
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  return totalSum - sum;
}

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1- 5 XOR 5 = 0
 * 2- 0 XOR num = num
 * 3- so XOR each number of the givin array and all indices in the range to get the missing one
 *
 * time : O(n)
 * space : O(1)
 */

function missingNumber(nums: number[]): number {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  for (let i = 1; i <= nums.length; i++) {
    result ^= i;
  }

  return result;
}

console.log(missingNumber([3, 0, 1]));
console.log("=".repeat(20));
console.log(missingNumber([0, 1]));
console.log("=".repeat(20));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
