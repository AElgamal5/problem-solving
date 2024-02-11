/**
 * 392. Length of Last String
 * -----------------------
 * link: https://leetcode.com/problems/length-of-last-word/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
//space: O(n)
//time: O(n)

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").slice(-1)[0].length;
};

// console.log(lengthOfLastWord("Hello World")); //5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4
// console.log(lengthOfLastWord("luffy is still joyboy")); //6
// console.log(lengthOfLastWord("test 123456")); //6
// console.log(lengthOfLastWord("=".repeat(30))); //6

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------
//space: O(1)
//time: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord2 = function (s) {
  let ans = 0;
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] === " " && ans > 0) {
      break;
    }
    if (s[i] !== " ") {
      ans++;
    }
  }
  return ans;
};

console.log(lengthOfLastWord2(" 123456  ")); //6
