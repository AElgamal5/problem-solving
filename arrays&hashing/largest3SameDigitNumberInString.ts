/**
 * 2264. Largest 3-Same-Digit Number in String
 * ---------------------------
 * link: https://leetcode.com/problems/largest-3-same-digit-number-in-string/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: use sliding window with length 3
 *
 * time : O(n)
 * space : O(1)
 */

function largestGoodInteger(num: string): string {
  let result = "";

  for (let i = 0; i < num.length - 2; i++) {
    if (!(num[i] === num[i + 1] && num[i] === num[i + 2])) continue;
    if (+result <= +(num[i] + num[i + 1] + num[i + 2]))
      result = num[i] + num[i + 1] + num[i + 2];
  }

  return result;
}

console.log(largestGoodInteger("123334445"));
console.log(largestGoodInteger("00012345"));
