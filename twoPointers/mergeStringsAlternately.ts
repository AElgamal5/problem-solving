/**
 * 1768. Merge Strings Alternately
 * ---------------------------
 * link: https://leetcode.com/problems/merge-strings-alternately/
 */

/**
 * description: using 2 pointers, one foreach word
 *
 * time : O(max(n, m))
 * space : O(n + m)
 * where n is length of word1 and m is the length of word2
 */

function mergeAlternately(word1: string, word2: string): string {
  let result: string = "";
  let i: number = 0,
    j: number = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      result += word1[i];
      i++;
    }

    if (j < word2.length) {
      result += word2[j];
      j++;
    }
  }

  return result;
}

console.log(
  mergeAlternately("abc", "pqr"),
  mergeAlternately("abc", "pqr") === "apbqcr"
);
console.log(
  mergeAlternately("ab", "pqrs"),
  mergeAlternately("ab", "pqrs") === "apbqrs"
);
