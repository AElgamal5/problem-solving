/**
 * 557. Reverse Words in a String III
 * ---------------------------
 * link: https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1- split strings into array of strings
 * 2- reverse each word
 * 3- join reversed words together and adding space between them ' '
 *
 * time : O(n)
 * space : O(n)
 */

function reverseWords(s: string): string {
  let result: string = "";

  let words = s.split(" ");

  for (const word of words) {
    for (let i = word.length - 1; i > -1; i--) {
      result += word[i];
    }
    result += " ";
  }

  return result.trimEnd();
}

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: use built-in functions
 *
 * time : O(n)
 * space : O(n)
 */

function reverseWords2(s: string): string {
  return s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords2("Let's take LeetCode contest"));
console.log("=".repeat(30));
console.log(reverseWords2("Mr Ding"));
