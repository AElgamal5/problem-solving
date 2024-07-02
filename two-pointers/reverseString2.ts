/**
 * 541. Reverse String II
 * ---------------------------
 * link: https://leetcode.com/problems/reverse-string-ii/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1- make reverse 'reverse' flag toggle every k
 * 2- ensure r pointer not exceed the boundaries
 * 3- using one of the two pointers according to the 'reverse' flag
 *
 * time : O(n)
 * space : O(n)
 */

function reverseStr(s: string, k: number): string {
  let result: string[] = [];
  let reverse = false;
  let r = k - 1;

  for (let l = 0; l < s.length; l++) {
    if (l % k === 0) {
      reverse = !reverse;
      r = Math.min(l + k - 1, s.length - 1);
    }

    if (reverse) {
      result[l] = s[r];
      r--;
    } else result[l] = s[l];
  }

  return result.join("");
}

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
console.log(
  reverseStr(
    "hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl",
    39
  )
);
