/**
 * 523. Continuous Subarray Sum
 * -----------------------
 * link: https://leetcode.com/problems/continuous-subarray-sum/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: 92 / 99 test cases passed (NOT SOLVED)
 */

//time: O(3n)
//space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (nums.length < 2) return false;

  let leftSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    leftSum += nums[i];
    if (leftSum % k === 0) return true;
  }
  let total_sum = leftSum;

  let rightSum = nums[nums.length - 1];
  for (let i = nums.length - 2; i > -1; i--) {
    rightSum += nums[i];
    if (rightSum % k === 0) return true;
  }

  let l = 1;
  let r = nums.length - 2;
  let leftNum = nums[0];
  let rightNum = nums[nums.length - 2];

  while (r - l > 2) {
    if ((total_sum - leftNum) % k === 0) return true;

    if ((total_sum - rightNum) % k === 0) return true;

    if ((total_sum - rightNum - leftNum) % k === 0) return true;

    total_sum -= leftNum + rightNum;

    l++;
    r--;
    leftNum = nums[l];
    rightNum = nums[r];
  }

  return false;
};

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1- using hashmap to store remainder as key and index as value
 * 2- remainder of the hashmap is: prefix-sum mod k
 * 3- if the remainder is repeated it means we have added value that multiple by k
 * 4- using index to check if the subarray is at least with length 2
 * 5- adding [0,-1] to the hashmap to handle if the first num is multiple by k
 */

//time: O(n)
//space: O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const map = new Map([[0, -1]]);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let remainder = sum % k;
    let remainderExist = map.has(remainder);

    if (remainderExist && i - map.get(remainder) > 1) {
      return true;
    } else if (!remainderExist) {
      map.set(remainder, i);
    }
  }

  return false;
};

console.log(checkSubarraySum([1, 2, 3], 5)); //true
console.log(
  checkSubarraySum(
    [
      18, 373, 97, 499, 525, 170, 133, 376, 77, 279, 257, 168, 319, 335, 237,
      36, 236, 41, 360, 131, 172, 279, 405, 236, 296, 377, 348, 411, 135, 411,
      273, 230, 103, 274, 211, 427, 101, 243, 31, 485, 282, 40, 28, 81, 6, 318,
      502, 521, 140, 110, 467, 248, 404, 107, 108, 129, 113, 113, 333, 83, 242,
      194, 112, 446, 463, 102, 145, 107, 73, 47, 53, 455, 301, 150, 314, 13,
      180, 119, 234, 509, 199, 503, 69, 224, 228, 427, 309, 497, 342, 329, 518,
      35, 425, 343, 417, 509, 85, 234, 426, 334,
    ],
    250
  )
); //true
console.log(checkSubarraySum([0, 0], 1)); //true
console.log(checkSubarraySum([2, 4, 3], 6)); //true
console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)); //true
console.log(checkSubarraySum([23, 2, 4, 6, 6], 7)); //true
console.log(checkSubarraySum([5, 0, 0, 0], 3)); //true
console.log(checkSubarraySum([1, 3, 6, 0, 9, 6, 9], 7)); //true
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6)); //true
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13)); //false
console.log(checkSubarraySum([1, 0], 2)); //false
console.log(checkSubarraySum([1, 2, 12], 12)); //false
console.log(checkSubarraySum([23, 2, 6, 2, 5], 6)); //false
