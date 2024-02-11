/**
 * 1. Two Sum
 * -----------------------
 * link: https://leetcode.com/problems/two-sum/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
//space: O(1)
//time: O(n^2)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); //[1,2]
console.log(twoSum([3, 3], 6)); //[0,1]
console.log("=".repeat(30));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------
//space: O(n)
//time: O()

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  let temp = [...nums];
  nums.sort((a, b) => a - b);
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    if (nums[low] + nums[high] === target) {
      break;
    } else if (nums[low] + nums[high] < target) {
      low++;
    } else {
      high--;
    }
  }

  let result = [];
  let taken;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === nums[low]) {
      taken = i;
      result.push(i);
      break;
    }
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === nums[high] && taken !== i) {
      result.push(i);
      break;
    }
  }

  return result;
};

console.log(twoSum2([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum2([3, 2, 4], 6)); //[1,2]
console.log(twoSum2([3, 3], 6)); //[0,1]
console.log(twoSum2([5, 75, 25], 100)); //[1,2]
// console.log("=".repeat(30));

//---------------------------------------------------------------
//------------------------3rd trial------------------------------
//---------------------------------------------------------------
//space: O()
//time: O()
//use map and for loop to get diff
