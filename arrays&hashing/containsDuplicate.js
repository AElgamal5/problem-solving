/**
 * 217. Contains Duplicate
 * -----------------------
 * link: https://leetcode.com/problems/contains-duplicate/description/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
//space: O(n)
//time: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], 1);
  }
  return false;
};

console.log(containsDuplicate([[1, 2, 3, 1]]));
console.log(containsDuplicate([[[1, 2, 3, 4]]]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log("================================");

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------
//space: O(n)
//time: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate2 = function (nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
};

console.log(containsDuplicate2([[1, 2, 3, 1]]));
console.log(containsDuplicate2([[[1, 2, 3, 4]]]));
console.log(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log("================================");

//---------------------------------------------------------------
//------------------------3rd trial------------------------------
//---------------------------------------------------------------
//Sort - HeapSort Space O(1) || QuickSort Space O(log(N))
//space: Space O(1)
//time: O(n * log(n))

var containsDuplicate3 = function (nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate3([[1, 2, 3, 1]]));
console.log(containsDuplicate3([[[1, 2, 3, 4]]]));
console.log(containsDuplicate3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log("================================");
