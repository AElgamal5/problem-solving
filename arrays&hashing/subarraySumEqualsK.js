/**
 * 560. Subarray Sum Equals K
 * -----------------------
 * link: https://leetcode.com/problems/subarray-sum-equals-k/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: using brute force

//time: O(n^2)
//space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        result++;
      }
    }
  }

  return result;
};

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description: using prefixSum and map [key: prefixSum => value: count]

//time: O(n)
//space: O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let result = 0;
  let prefixSum = new Map();
  let sum = 0;
  prefixSum.set(0, 1); //edge case

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let sub = sum - k;

    if (prefixSum.has(sub)) {
      result += prefixSum.get(sub);
    }

    prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
  }

  return result;
};

// console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([1, 2, 3], 3));
// console.log(subarraySum([1, 2, 3], 2));
console.log(subarraySum([1, -1, 0], 0));
// console.log(subarraySum([1, -1, 1, 1, 1, 1], 3));
