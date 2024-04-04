/**
 * 438. Find All Anagrams in a String
 * -----------------------
 * link: https://leetcode.com/problems/find-all-anagrams-in-a-string/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: (Time Limit Exceeded)
 * 1- using sliding window with length of p
 * 2- for each substring of s check if is anagram or not
 */

//time: O(n^2)
//space: O(n)

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let result = [];
  let low = 0;
  for (let high = p.length - 1; high < s.length; high++) {
    if (isAnagram(s.substring(low, high + 1), p)) {
      result.push(low);
    }
    low++;
  }

  return result;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i]) && map.get(t[i]) > 0) {
      map.set(t[i], map.get(t[i]) - 1);
    } else {
      return false;
    }
  }
  return true;
};

// console.log(findAnagrams("cbaebabacd", "abc"));
// console.log(findAnagrams("abab", "ab"));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description: sliding window  but more efficient
 * 
 * "cbaebabacd", "abc" example
a b c d e f g h i j k l m n o p q r s t u v w x y z
0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 =>check
1 1 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
1 1 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
 */

//time: O(n)
//space: O(n)
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let result = [];
  let low = 0;
  let alphabet = new Array(26).fill(0);
  let base = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    let pos = p.charCodeAt(i) - 97;
    base[pos]++;
  }

  for (let high = 0; high < s.length; high++) {
    let pos = s.charCodeAt(high) - 97;
    alphabet[pos]++;
    if (high >= p.length - 1) {
      if (checkAlphabet(base, alphabet)) result.push(low);
      pos = s.charCodeAt(low) - 97;
      alphabet[pos]--;
      low++;
    }
  }
  return result;
};

/**
 * @param {number[]} base
 * @param {number[]} alphabet
 * @return {boolean}
 */
var checkAlphabet = function (base, alphabet) {
  for (let i = 0; i < 27; i++) {
    if (base[i] !== alphabet[i]) return false;
  }
  return true;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
console.log(findAnagrams("aa", "bb"));
