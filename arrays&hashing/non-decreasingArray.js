/**
 * 665. Non-decreasing Array
 * -----------------------
 * link: https://leetcode.com/problems/non-decreasing-array/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/*
 * description: check pair by pair
 *
 * time: O(n)
 * space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let checkPossibility = function (nums) {
  let changeTimes = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    console.log(nums);
    if (nums[i] <= nums[i + 1]) continue;

    if (changeTimes === 0) return false;

    if (i == 0 || nums[i + 1] >= nums[i - 1]) {
      nums[i] = nums[i + 1];
    } else {
      nums[i + 1] = nums[i];
    }
    changeTimes--;
  }

  return true;
};

console.log(checkPossibility([-1, 4, 2, 3])); //true
console.log(checkPossibility([4, 2, 3])); //true
console.log(checkPossibility([5, 7, 1, 8])); //true
console.log(checkPossibility([4, 2, 1])); //false
console.log(checkPossibility([3, 4, 2, 3])); //false
console.log(checkPossibility([3, 3, 2, 2])); //false
