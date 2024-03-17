/**
 * 128. Longest Consecutive Sequence
 * -----------------------
 * link: https://leetcode.com/problems/longest-consecutive-sequence/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: use set to
//1- get start of the all sequences
//2- get length of all sequences and return max

//time: O(n)
//space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let result = 0;
  let set = new Set(nums);

  set.forEach((num) => {
    if (!set.has(num - 1)) {
      let currentSequence = 1;
      let i = 1;
      while (set.has(num + i)) {
        set.delete(num + i);
        currentSequence++;
        i++;
      }
      set.delete(num);
      result = Math.max(result, currentSequence);
    }
  });

  return result;
};

console.log(longestConsecutive([]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
