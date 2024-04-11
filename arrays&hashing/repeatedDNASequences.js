/**
 * 187. Repeated DNA Sequences
 * -----------------------
 * link: https://leetcode.com/problems/repeated-dna-sequences/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using hash set
 *
 * time: O(n)
 * space: O(n)
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const result = new Set();
  const repeated = new Set();

  let fast = 9;
  let slow = 0;

  while (fast < s.length) {
    let subString = s.substring(slow, fast + 1);

    if (repeated.has(subString)) {
      result.add(subString);
    } else {
      repeated.add(subString);
    }

    fast++;
    slow++;
  }

  return [...result];
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")); //["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA")); //["AAAAAAAAAA"]
