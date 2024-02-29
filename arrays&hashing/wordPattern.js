/**
 * 290. Word Pattern
 * -----------------------
 * link: https://leetcode.com/problems/word-pattern/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description:save each char of the pattern with the equivalent string and vice versa

//space: O(3n) => O(n)
//time: O(2n) => O(n)

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let strings = s.split(" ");
  if (pattern.length !== strings.length) return false;

  const pMap = new Map();
  const sMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (pMap.has(strings[i]) && pMap.get(strings[i]) !== pattern[i])
      return false;
    if (sMap.has(pattern[i]) && sMap.get(pattern[i]) !== strings[i])
      return false;

    pMap.set(strings[i], pattern[i]);
    sMap.set(pattern[i], strings[i]);
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("aa", "dog cat cat dog"));
