/**
 * 392. Is Subsequence
 * -----------------------
 * link: https://leetcode.com/problems/is-subsequence/description/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
//space: O(1)
//time: O(n)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  //optional
  if (s === t) return true;
  if (s.length > t.length) return false;
  //--------

  let p = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[p] === t[i]) {
      p++;
    }
  }
  if (p === s.length) {
    return true;
  }
  return false;
};

console.log(isSubsequence("ace", "abcdef")); //true
console.log(isSubsequence("abc", "ahbgdc")); //true
console.log(isSubsequence("axc", "ahbgdc")); //false
console.log("=".repeat(30));
