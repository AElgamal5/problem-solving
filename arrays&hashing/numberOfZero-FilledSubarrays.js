/**
 * 2348. Number of Zero-Filled Subarrays
 * -----------------------
 * link: https://leetcode.com/problems/number-of-zero-filled-subarrays/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * length => no of sub arrays
 * '0' => 1
 * '00' => 3
 * '000' => 6
 * '0000' => 10
 * for each zero we found count++ and adding count to result
 * if the element not zero => count = 0
 *
 * time : O(n)
 * space : O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let zeroFilledSubarray = function (nums) {
  let result = 0;
  let count = 0;

  for (const num of nums) {
    if (num === 0) count++;
    else count = 0;
    result += count;
  }

  return result;
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4])); // 6
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0])); // 9
console.log(zeroFilledSubarray([2, 10, 2019])); // 0
