/**
 * 242. Valid Anagram
 * -----------------------
 * link: https://leetcode.com/problems/valid-anagram/description/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
//space: O(n)
//time: O(2n) => O(n)

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

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); //false
console.log(isAnagram("listen", "silent")); //true
console.log(isAnagram("🍎🍊🍋", "🍋🍊🍎")); //true
console.log("=".repeat(30));
