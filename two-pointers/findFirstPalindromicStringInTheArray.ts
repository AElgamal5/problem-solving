/**
 * 2108. Find First Palindromic String in the Array
 * ---------------------------
 * link: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1- loop over words
 * 2- check if the word is palindrome and return it
 *
 * time : O(n*m) where n is words number and m is the avg length of words
 * space : O(1)
 */

function firstPalindrome(words: string[]): string {
  for (const word of words) {
    if (isPalindrome(word)) return word;
  }
  return "";
}

function isPalindrome(word: string): boolean {
  let l = 0,
    r = word.length - 1;

  while (l < r) {
    if (word[l] !== word[r]) return false;
    l++;
    r--;
  }

  return true;
}

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])); // ada;
console.log(firstPalindrome(["notapalindrome", "racecar"])); // racecar;
console.log(firstPalindrome(["def", "ghi"])); // "";
