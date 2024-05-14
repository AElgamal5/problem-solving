/**
 * 344. Reverse String
 * -----------------------
 * link: https://leetcode.com/problems/reverse-string/
 */
//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
/**
 * description: using 2 pointer one from left and the other form right
 *
 * time : O(n)
 * space : O(1)
 */

/**
 Do not return anything, modify s in-place instead.
 */
function reverseStringOld(s: string[]): void {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
}
let arr = ["h", "e", "l", "l", "o"];
reverseString(arr);
console.log(arr);

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------
/**
 * description: using built-in function
 *
 * time : O(n)
 * space : O(1)
 */

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  s.reverse();
}
