/**
 * 303. Range Sum Query - Immutable
 * -----------------------
 * link: https://leetcode.com/problems/range-sum-query-immutable/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: sum form left index to right index

/**
 * @param {number[]} nums
 */
class NumArray {
  constructor(nums) {
    this.nums = nums;
  }

  //space: O(1)
  //time: O(n)
  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange = function (left, right) {
    let result = 0;
    for (let i = left; i <= right; i++) {
      result += this.nums[i];
    }
    return result;
  };
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

let obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(2, 5));
console.log(obj.sumRange(0, 5));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description: saving the prefix sum when init

/**
 * @param {number[]} nums
 */
class NumArray {
  //space: O(n)
  //time: O(n)
  constructor(nums) {
    for (let i = 1; i < nums.length; i++) nums[i] += nums[i - 1];
    this.nums = nums;
  }

  //space: O(1)
  //time: O(1)
  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange = function (left, right) {
    if (left === 0) return this.nums[right];
    return this.nums[right] - this.nums[left - 1];
  };
}
