/**
 * 49. Group Anagrams
 * -----------------------
 * link: https://leetcode.com/problems/group-anagrams/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
//space: O(n)
//time: O(n^2 * k) => O(n^3)

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let ans = [];
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === -1) {
      continue;
    }
    let current = [strs[i]];

    for (let j = i + 1; j < strs.length; j++) {
      if (isAnagram(strs[i], strs[j])) {
        current.push(strs[j]);
        strs[j] = -1;
      }
    }

    ans.push(current);
  }
  return ans;
};

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

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));
// console.log("=".repeat(30));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------
//space: O(n * m)
//time: O(n * m)

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let key = getKeyFromCharsCount(strs[i]);
    if (!map.has(key)) {
      map.set(key, [strs[i]]);
    } else {
      let value = map.get(key);
      value.push(strs[i]);
      map.set(key, value);
    }
  }
  return [...map.values()];
};

let getKeyFromCharsCount = function (s) {
  let arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt(0) - 97]++;
  }
  return arr.join(",");
};

console.log(
  groupAnagrams([
    "cab",
    "tin",
    "pew",
    "duh",
    "may",
    "ill",
    "buy",
    "bar",
    "max",
    "doc",
  ])
);

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(
  groupAnagrams([
    "ddddddddddg",
    "dggggggggggssssssssssssssssssssssssssssssssssss",
  ])
);
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));
