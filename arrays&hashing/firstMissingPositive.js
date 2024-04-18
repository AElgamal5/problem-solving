/**
 * 41. First Missing Positive
 * -----------------------
 * link: https://leetcode.com/problems/first-missing-positive/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using 2 loops and without extra space
 * 1- first loop to swap each number to its position
 * 2- check the first unmatched number with the position that hold it
 *
 * time : O(n)
 * space : O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  let length = nums.length;

  let i = 0;

  while (i < length) {
    if (
      nums[i] === i + 1 ||
      nums[i] > length ||
      nums[i] < 1 ||
      nums[nums[i] - 1] === nums[i]
    ) {
      i++;
      continue;
    }

    let temp = nums[nums[i] - 1];
    nums[nums[i] - 1] = nums[i];
    nums[i] = temp;
  }

  for (i = 0; i < length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return length + 1;
};

console.log(firstMissingPositive([1, 1])); // 2
console.log(firstMissingPositive([1, 2])); // 3
console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
