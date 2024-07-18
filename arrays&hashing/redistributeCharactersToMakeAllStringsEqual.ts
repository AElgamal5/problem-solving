/**
 * 1897. Redistribute Characters to Make All Strings Equal
 * ---------------------------
 * link: https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
 */

//---------------------------------------------------------------//
//------------------------1st trial------------------------------//
//---------------------------------------------------------------//

/**
 * description: count each char in each word to check if it is multiples of the length of the words length
 *
 * time : O(n*m) where n is the length of words and m is the length of the longest word
 * space : O(26) = O(1)
 */
function makeEqual(words: string[]): boolean {
  let length = words.length;
  let map = new Map<string, number>();

  for (const word of words) {
    for (const char of word) {
      map.set(char, (map.get(char) ?? 0) + 1);
    }
  }

  for (const value of map.values()) {
    if (value % length !== 0) return false;
  }

  return true;
}

console.log(makeEqual(["abc", "aabc", "bc"]));
console.log("=".repeat(30));
console.log(makeEqual(["ab", "b"]));
