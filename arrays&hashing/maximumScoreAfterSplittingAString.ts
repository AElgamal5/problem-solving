/**
 * 1422. Maximum Score After Splitting a String
 * ---------------------------
 * link: https://leetcode.com/problems/maximum-score-after-splitting-a-string/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1- get the count of all ones in the right 'from index = 1 to the end'
 * 2- check the first char in the string if zero
 * 3- loop over the array from i to length -1
 *
 * time : O(n)
 * space : O(1)
 */

function maxScore(s: string): number {
  let ones = 0,
    zeros = 0,
    result: number;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === "1") ones++;
  }

  if (s.startsWith("0")) zeros++;

  result = ones + zeros;

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === "0") zeros++;
    else ones--;

    if (zeros + ones > result) result = zeros + ones;
  }

  return result;
}

console.log(maxScore("011101"));
console.log("=".repeat(30));
console.log(maxScore("00111"));
console.log("=".repeat(30));
console.log(maxScore("1111"));
console.log("=".repeat(30));
console.log(maxScore("0000"));
console.log("=".repeat(30));
console.log(maxScore("1011011"));
