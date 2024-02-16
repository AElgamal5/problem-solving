/**
 * 205. Isomorphic Strings
 * -----------------------
 * link: https://leetcode.com/problems/isomorphic-strings/description/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//solution description:
//saving each unique char of s and its equivalent  char  of 't'
//same for t

//space: O(2n)
//time: O(n)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (
      (sMap.has(sChar) && sMap.get(sChar) != tChar) ||
      (tMap.has(tChar) && tMap.get(tChar) != sChar)
    ) {
      return false;
    }

    sMap.set(sChar, tChar);
    tMap.set(tChar, sChar);
  }

  return true;
};

// console.log(isIsomorphic("egg", "add")); //true
// console.log(isIsomorphic("foo", "bar")); //false
// console.log(isIsomorphic("paper", "title")); //true
// console.log(isIsomorphic("abab", "baba")); //true
// console.log(isIsomorphic("bbbaaaba", "aaabbbba")); //false
