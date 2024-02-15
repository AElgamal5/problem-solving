/**
 * 205. Isomorphic Strings
 * -----------------------
 * link: https://leetcode.com/problems/isomorphic-strings/description/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//solution description:

//space: O(2n)
//time: O(n^2)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {}
};

// console.log(isIsomorphic("egg", "add"));
// console.log(isIsomorphic("foo", "bar"));
// console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("abab", "baba"));
