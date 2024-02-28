/**
 * 724. Find Pivot Index
 * 1991. Find the Middle Index in Array
 * -----------------------
 * link: https://leetcode.com/problems/find-pivot-index
 * https://leetcode.com/problems/find-the-middle-index-in-array/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: prefix sum

//space: O(1)
//time: O()

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (rightSum - nums[i] === leftSum) {
      return i;
    }
    rightSum -= nums[i];
    leftSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
