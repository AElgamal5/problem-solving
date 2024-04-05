/**
 * 28. Find the Index of the First Occurrence in a String
 * -----------------------
 * link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: use nested loops
 */

//time: O(h * n) where h is length of haystack & n is length needle
//space: O(1)

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== needle[0]) {
      continue;
    } else if (needle.length === 1) {
      return i;
    }

    for (let j = 1; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
      if (j === needle.length - 1) {
        return i;
      }
    }
  }

  return -1;
};

// console.log(strStr("l", "l")); // 0
// console.log(strStr("sadbutsad", "sad")); // 0
// console.log(strStr("sadbutsad", "but")); // 3
// console.log(strStr("leetcode", "leeto")); // -1
// console.log(strStr("l", "e")); // -1
// console.log(strStr("mississippi", "issip")); // 4

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description: use build-in functions
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
console.log(strStr("l", "l")); // 0
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("sadbutsad", "but")); // 3
console.log(strStr("leetcode", "leeto")); // -1
console.log(strStr("l", "e")); // -1
console.log(strStr("mississippi", "issip")); // 4

//---------------------------------------------------------------
//------------------------3rd trial------------------------------
//---------------------------------------------------------------

/**
 * description: using KMP: https://youtu.be/JoF0Z7nVSrA
 */
