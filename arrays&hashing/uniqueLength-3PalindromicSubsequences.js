/**
 * 1930. Unique Length-3 Palindromic Subsequences
 * -----------------------
 * link: https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: brute force

//time: O(n^3)
//space: O(n)

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  let subsequences = new Set();
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      for (let k = j + 1; k < s.length; k++) {
        let sequence = s[i] + s[j] + s[k];
        if (s[i] === s[k]) subsequences.add(sequence);
      }
    }
  }

  return subsequences.size;
};

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description:
//1- remove duplicate chars form givin s using set
//2- loop over set and get first and last index of every char
//3- get unique no. chars between first and last using set.size

//time: O(n^2)
//space: O(n)

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  let result = 0;
  let chars = new Set(s);

  for (const char of chars) {
    let first = s.indexOf(char);
    if (first === -1) continue;
    let last = s.lastIndexOf(char);
    if (last === -1) continue;

    if (first == last) continue;

    result += new Set(s.slice(first + 1, last)).size;
  }

  return result;
};

console.log(countPalindromicSubsequence("adc"));
console.log(countPalindromicSubsequence("aba"));
console.log(countPalindromicSubsequence("aabca"));
console.log(countPalindromicSubsequence("bbcbaba"));
console.log(countPalindromicSubsequence("ckafnafqo"));
