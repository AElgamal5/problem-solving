/**
 * 680. Valid Palindrome II
 * -----------------------
 * link: https://leetcode.com/problems/valid-palindrome-ii/
 */
//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
/**
 * description:
 *
 * time : O(n)
 * space : O(n)
 */

function validPalindrome(s: string, skip: boolean = true): boolean {
  let left: number = 0,
    right: number = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      right--;
      left++;
      continue;
    }

    if (!skip) return false;
    skip = false;

    return (
      validPalindrome(s.substring(left, right), skip) ||
      validPalindrome(s.substring(left + 1, right + 1), skip)
    );
  }

  return true;
}

console.log(validPalindrome("aba")); //true
console.log(validPalindrome("abca")); //true
console.log(validPalindrome("abc")); //false
console.log(validPalindrome("deeee")); //true
console.log(validPalindrome("ebcbbececabbacecbbcbe")); //true
