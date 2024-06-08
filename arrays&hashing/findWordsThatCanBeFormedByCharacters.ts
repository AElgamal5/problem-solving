/**
 * 1160. Find Words That Can Be Formed by Characters
 * ---------------------------
 * link: https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 *
 * time : O(n*m+k) where n is the number of words, m is the average length of the word, and m is the length of chars
 * space : O(n+k)
 */
function countCharacters(words: string[], chars: string): number {
  let result = 0;
  const charsMap: Map<string, number> = new Map();
  for (const char of chars) {
    charsMap.set(char, (charsMap.get(char) || 0) + 1);
  }

  for (const word of words) {
    const tempChar: Map<string, number> = new Map();
    let skip = false;

    for (const char of word) {
      if (charsMap.has(char)) tempChar.set(char, (tempChar.get(char) || 0) + 1);
      else {
        skip = true;
        break;
      }
    }
    if (skip) continue;

    let good = true;
    tempChar.forEach((value, key) => {
      if ((tempChar.get(key) || 0) > (charsMap.get(key) || 0)) good = false;
    });

    if (good) result += word.length;
  }

  return result;
}

console.log(countCharacters(["cat", "bt", "hat", "tree", "tcc"], "atach"));
