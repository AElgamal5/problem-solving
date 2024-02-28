/**
 * 448. Find All Numbers Disappeared in an Array
 * -----------------------
 * link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description:create map to add existing number and loop over all number to get the not existing ones

//space: O(2n) => O(n)
//time: O(2n) => O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      result.push(i);
    }
  }

  return result;
};

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(findDisappearedNumbers([1, 1]));
// console.log(findDisappearedNumbers([1]));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description: save all nums to map and delete exited to get not exited

//space: O(n)
//time: O(2n) => O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const map = new Map();

  for (let i = 1; i <= nums.length; i++) {
    map.set(i, 1);
  }

  for (let i = 0; i < nums.length; i++) {
    map.delete(nums[i]);
  }

  return [...map.keys()];
};

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(findDisappearedNumbers([1, 1]));
// console.log(findDisappearedNumbers([1]));

//---------------------------------------------------------------
//------------------------3rd trial------------------------------
//---------------------------------------------------------------

//description: make existing positions negative and return positions with positive sign

//space: O(n)
//time: O(2n) => O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let pos = Math.abs(nums[i]) - 1;
    nums[pos] = Math.abs(nums[pos]) * -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([1]));
