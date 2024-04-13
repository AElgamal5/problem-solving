/**
 * 1461. Check If a String Contains All Binary Codes of Size K
 * -----------------------
 * link: https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using hash set
 *
 * time : O(n^2)
 * space : O(2^k)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  let total = Math.pow(2, k);
  const set = new Set();

  let slow = 0;
  for (let fast = k - 1; fast < s.length; fast++) {
    set.add(s.substring(slow, fast + 1));
    slow++;
  }

  return total === set.size;
};

console.log(hasAllCodes("00110110", 2));
console.log(hasAllCodes("0110", 2));
console.log(hasAllCodes("0110", 1));
console.log(
  hasAllCodes("01010001001110101101010010110001010101111100110110111101010", 3)
);
