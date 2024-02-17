/**
 * 169. Majority Element
 * -----------------------
 * link: https://leetcode.com/problems/majority-element
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//solution description:
//1- use a map to save each number and its repetitive
//2- loop over the map to get the most repetitive number

//space: O(n)
//time: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let max = -1;
  let result = -1;

  map.forEach((value, key) => {
    if (value > max) {
      max = value;
      result = key;
    }
  });

  return result;
};

// console.log(majorityElement([3, 2, 3])); //3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//solution description: using Boyar-moore algorithm

//space: O(1)
//time: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let result = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === result) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      result = nums[i];
      count = 1;
    }
  }

  return result;
};

console.log(majorityElement([3, 2, 3])); //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2
