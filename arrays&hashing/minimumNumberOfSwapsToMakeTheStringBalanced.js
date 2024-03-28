/**
 * 1963. Minimum Number of Swaps to Make the String Balanced
 * -----------------------
 * link: https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description:

//time: O(n)
//space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let close = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") close++;
    else close--;

    max = Math.max(max, close);
  }

  return Math.ceil(max / 2);
};

console.log(minSwaps("][][")); // 1
console.log(minSwaps("]]][[[")); // 2
console.log(minSwaps("[]")); // 0
console.log(minSwaps("[[[]]]")); // 0
console.log(minSwaps("[][][][[]]")); // 0
console.log(minSwaps("[[[]]]][][]][[]]][[[")); // 2
