/**
 * 14. Longest Common Prefix
 * -----------------------
 * link: https://leetcode.com/problems/longest-common-prefix/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
//space: O(1)
//time: O(n * m) => O(n^2)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ans = "";
  for (let i = 0; i < strs[0].length; i++) {
    let temp = "";

    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] === strs[j][i]) {
        temp += strs[j][i];
      } else {
        return ans;
      }
    }

    if (temp.length === strs.length) {
      ans += temp[0];
    }
  }

  return ans;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["cir", "car"]));
console.log(longestCommonPrefix([""]));
console.log("=".repeat(30));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------
//space: O(1)
//time: O(n * m) => O(n^2)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ans = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return ans;
      }
    }
    ans += strs[0][i];
  }
  return ans;
};

//---------------------------------------------------------------
//------------------------3rd trial------------------------------
//---------------------------------------------------------------

//space: O(1)
//time: O(n*m) => O(n^2)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix2 = function (strs) {
  if (!strs.length) return "";

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(strs[0])) {
      strs[0] = strs[0].slice(0, -1);
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
console.log(longestCommonPrefix2(["dog", "racecar", "car"]));
console.log(longestCommonPrefix2(["cir", "car"]));
console.log(longestCommonPrefix2([""]));
console.log(longestCommonPrefix2([]));
