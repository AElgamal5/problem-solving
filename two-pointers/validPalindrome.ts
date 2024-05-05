/**
 * 125. Valid Palindrome
 * -----------------------
 * link: https://leetcode.com/problems/valid-palindrome/
 */
//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
/**
 * description:
 * 1.remove all chars that not alphabet or a number
 * 2.make 2 pointers to check the string one from left and anther from right
 *
 * time : O(n)
 * space : O(n)
 */

function isPalindrome(s: string): boolean {
  let sanitized: string = stringSanitize(s);
  let left: number = 0,
    right: number = sanitized.length - 1;

  console.log(s, sanitized);

  while (left < right) {
    console.log(left, sanitized[left], right, sanitized[right]);

    if (sanitized[left] !== sanitized[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function stringSanitize(s: string): string {
  return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false
console.log(isPalindrome(" ")); //true
console.log(isPalindrome("0P")); //false
