/**
 * 2405. Optimal Partition of String
 * -----------------------
 * link: https://leetcode.com/problems/optimal-partition-of-string/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1. using set to make sure that all substrings has unique chars
 * 2. size of set is the indicator of make new substring or not
 *
 *
 * time : O(n)
 * space : O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
let partitionString = function (s) {
  let result = 0;
  const set = new Set();

  for (const char of s) {
    let oldSize = set.size;
    set.add(char);
    if (oldSize !== set.size) {
      continue;
    }
    result++;
    set.clear();
    set.add(char);
  }

  return result + 1;
};

console.log(partitionString("abacaba")); // 4
console.log(partitionString("ssssss")); // 6
